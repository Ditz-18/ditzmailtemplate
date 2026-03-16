// ===================== PWA — SERVICE WORKER REGISTER =====================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ===================== PWA INSTALL PROMPT =====================
let deferredPrompt = null;
const DISMISSED_KEY = 'ditz_pwa_banner_dismissed';

// Capture the install prompt before browser shows it
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Only show banner if user hasn't permanently dismissed it
  if (!localStorage.getItem(DISMISSED_KEY)) {
    showInstallBanner();
  }
  updatePwaSettingsCard();
});

// When PWA is successfully installed
window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  hideInstallBanner();
  updatePwaSettingsCard();
  showToast('fa-circle-check', 'Ditz berhasil diinstall!', 'green');
});

// ===================== BANNER =====================
function showInstallBanner() {
  const banner = document.getElementById('pwa-banner');
  if (banner) {
    banner.classList.remove('hidden');
    banner.classList.add('pwa-banner-show');
  }
}

function hideInstallBanner() {
  const banner = document.getElementById('pwa-banner');
  if (banner) {
    banner.classList.remove('pwa-banner-show');
    setTimeout(() => banner.classList.add('hidden'), 300);
  }
}

// Install from banner
const bannerInstallBtn = document.getElementById('pwa-banner-install-btn');
if (bannerInstallBtn) {
  bannerInstallBtn.addEventListener('click', () => triggerPwaInstall());
}

// Dismiss banner — simpan ke localStorage agar tidak muncul lagi
const dismissBtn = document.getElementById('pwa-banner-dismiss');
if (dismissBtn) {
  dismissBtn.addEventListener('click', () => {
    localStorage.setItem(DISMISSED_KEY, '1');
    hideInstallBanner();
  });
}

// ===================== TRIGGER INSTALL =====================
async function triggerPwaInstall() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    deferredPrompt = null;
    hideInstallBanner();
  }
  updatePwaSettingsCard();
}

// ===================== SETTINGS CARD STATUS =====================
function updatePwaSettingsCard() {
  const titleEl = document.getElementById('pwa-status-title');
  const descEl  = document.getElementById('pwa-status-desc');
  const btnEl   = document.getElementById('pwa-settings-btn');
  if (!titleEl) return;

  const isInstalled = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;

  if (isInstalled) {
    titleEl.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--accent-green);margin-right:6px"></i>Sudah Terinstall';
    descEl.textContent = 'Ditz sudah berjalan sebagai aplikasi di perangkat ini.';
    if (btnEl) btnEl.style.display = 'none';
  } else if (deferredPrompt) {
    titleEl.innerHTML = '<i class="fa-solid fa-circle-down" style="color:var(--accent-blue);margin-right:6px"></i>Siap Diinstall';
    descEl.textContent = 'Klik tombol untuk menambahkan Ditz ke home screen perangkat kamu.';
    if (btnEl) btnEl.style.display = 'inline-flex';
  } else {
    titleEl.innerHTML = '<i class="fa-solid fa-circle-info" style="color:var(--accent-amber);margin-right:6px"></i>Install Tidak Tersedia';
    descEl.textContent = 'Browser ini belum mendukung install PWA, atau Ditz sudah terinstall. Coba buka via Chrome/Edge di Android atau Safari di iOS.';
    if (btnEl) btnEl.style.display = 'none';
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePwaSettingsCard();

  // If already installed (standalone mode) — hide everything install-related
  const isInstalled = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;
  if (isInstalled) {
    hideInstallBanner();
  }
});
