// ===================== STATE =====================
let state = {
  templates: [],    // custom templates only
  library: [],      // saved generator results
  tplFilter: 'all',
  libFilter: 'all',
  genCat: null,
  currentViewId: null,
  currentLibViewId: null
};

// ===================== INIT =====================
function init() {
  loadFromStorage();
  renderTemplates();
  renderLibrary();
  updateLibCount();
  renderStats();
}

function loadFromStorage() {
  state.templates = JSON.parse(localStorage.getItem('ditz_templates') || '[]');
  state.library   = JSON.parse(localStorage.getItem('ditz_library') || '[]');
}

function saveTemplates() {
  localStorage.setItem('ditz_templates', JSON.stringify(state.templates));
}

function saveLibrary() {
  localStorage.setItem('ditz_library', JSON.stringify(state.library));
}

// ===================== NAVIGATION =====================
function navigateTo(page, sidebarEl) {
  // pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  // sidebar items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (sidebarEl) {
    sidebarEl.classList.add('active');
  } else {
    const match = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (match) match.classList.add('active');
  }

  // bottom nav
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('active'));
  const bnav = document.querySelector(`.bnav-item[data-page="${page}"]`);
  if (bnav) bnav.classList.add('active');

  // topbar title
  const titles = { templates: 'Templates', generator: 'Generator', library: 'Library', settings: 'Settings' };
  const tt = document.getElementById('topbar-title');
  if (tt) tt.textContent = titles[page] || page;

  closeSidebar();

  if (page === 'settings') renderStats();
}

// ===================== SIDEBAR (mobile) =====================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

// ===================== TEMPLATE PAGE =====================
let tplFilterActive = 'all';

function setTplFilter(cat, el) {
  tplFilterActive = cat;
  document.querySelectorAll('#tpl-filter-chips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderTemplates();
}

function filterTemplates() {
  renderTemplates();
}

function renderTemplates() {
  const search = (document.getElementById('tpl-search')?.value || '').toLowerCase();
  const all = [...BUILTIN_TEMPLATES, ...state.templates];
  const filtered = all.filter(t => {
    const catMatch = tplFilterActive === 'all' || t.category === tplFilterActive;
    const searchMatch = !search || t.name.toLowerCase().includes(search) || t.body.toLowerCase().includes(search) || (t.desc || '').toLowerCase().includes(search);
    return catMatch && searchMatch;
  });

  const grid = document.getElementById('tpl-grid');
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="tpl-empty"><i class="fa-solid fa-layer-group"></i><p>Tidak ada template yang ditemukan.</p></div>`;
    return;
  }

  filtered.forEach(t => {
    const card = document.createElement('div');
    card.className = 'tpl-card';
    const catLabel = CAT_LABELS[t.category] || t.category;
    const catClass = CAT_COLORS[t.category] || 'badge-custom';
    const isBuiltin = t.builtin;

    card.innerHTML = `
      <div class="tpl-card-top">
        <div class="tpl-card-header">
          <div class="tpl-card-name">${escHtml(t.name)}</div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
            <span class="tpl-badge ${catClass}">${catLabel}</span>
            ${isBuiltin ? '<span class="tpl-badge badge-builtin"><i class="fa-solid fa-lock" style="font-size:8px;margin-right:3px"></i>Bawaan</span>' : ''}
          </div>
        </div>
        ${t.desc ? `<div class="tpl-card-desc">${escHtml(t.desc)}</div>` : ''}
        <div class="tpl-card-preview">${escHtml(t.body)}</div>
      </div>
      <div class="tpl-card-actions">
        <button class="btn-sm view-btn" onclick="viewTemplate('${t.id}')"><i class="fa-solid fa-eye"></i> Lihat</button>
        <button class="btn-sm copy-btn" onclick="copyTemplate('${t.id}')"><i class="fa-solid fa-copy"></i> Salin</button>
        <button class="btn-sm edit-btn" onclick="openEditTemplate('${t.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
        ${!isBuiltin ? `<button class="btn-sm del-btn" onclick="deleteTemplate('${t.id}')"><i class="fa-solid fa-trash"></i></button>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===================== TEMPLATE CRUD =====================
function openAddTemplateModal() {
  document.getElementById('modal-tpl-id').value = '';
  document.getElementById('modal-tpl-builtin').value = '';
  document.getElementById('modal-tpl-title').textContent = 'Tambah Template';
  document.getElementById('modal-tpl-name').value = '';
  document.getElementById('modal-tpl-cat').value = 'email';
  document.getElementById('modal-tpl-body').value = '';
  document.getElementById('modal-tpl-desc').value = '';
  openModal('modal-template');
}

function openEditTemplate(id) {
  const all = [...BUILTIN_TEMPLATES, ...state.templates];
  const t = all.find(x => x.id === id);
  if (!t) return;

  document.getElementById('modal-tpl-id').value = t.id;
  document.getElementById('modal-tpl-builtin').value = t.builtin ? '1' : '';
  document.getElementById('modal-tpl-title').textContent = t.builtin ? 'Salin & Edit Template' : 'Edit Template';
  document.getElementById('modal-tpl-name').value = t.name + (t.builtin ? ' (Salinan)' : '');
  document.getElementById('modal-tpl-cat').value = t.category;
  document.getElementById('modal-tpl-body').value = t.body;
  document.getElementById('modal-tpl-desc').value = t.desc || '';
  openModal('modal-template');
}

function saveTemplate() {
  const name = document.getElementById('modal-tpl-name').value.trim();
  const cat  = document.getElementById('modal-tpl-cat').value;
  const body = document.getElementById('modal-tpl-body').value.trim();
  const desc = document.getElementById('modal-tpl-desc').value.trim();
  const editId  = document.getElementById('modal-tpl-id').value;
  const isBuiltin = document.getElementById('modal-tpl-builtin').value === '1';

  if (!name || !body) { showToast('fa-circle-exclamation', 'Nama dan isi template wajib diisi', 'coral'); return; }

  if (editId && !isBuiltin) {
    // edit custom template
    const idx = state.templates.findIndex(x => x.id === editId);
    if (idx >= 0) {
      state.templates[idx] = { ...state.templates[idx], name, category: cat, body, desc };
      showToast('fa-check', 'Template berhasil diperbarui');
    }
  } else {
    // new template (or copy of builtin)
    const newId = 'ct-' + Date.now();
    state.templates.push({ id: newId, builtin: false, name, category: cat, body, desc });
    showToast('fa-plus', 'Template baru ditambahkan');
  }

  saveTemplates();
  renderTemplates();
  closeModal('modal-template');
}

function deleteTemplate(id) {
  const t = state.templates.find(x => x.id === id);
  if (!t) return;
  if (!confirm(`Hapus template "${t.name}"?\nAksi ini tidak bisa dibatalkan.`)) return;
  state.templates = state.templates.filter(x => x.id !== id);
  saveTemplates();
  renderTemplates();
  showToast('fa-trash', 'Template dihapus');
}

function copyTemplate(id) {
  const all = [...BUILTIN_TEMPLATES, ...state.templates];
  const t = all.find(x => x.id === id);
  if (!t) return;
  navigator.clipboard.writeText(t.body).then(() => {
    showToast('fa-copy', 'Teks template disalin!');
  }).catch(() => {
    fallbackCopy(t.body);
    showToast('fa-copy', 'Teks template disalin!');
  });
}

// ===================== VIEW TEMPLATE MODAL =====================
let viewingId = null;

function viewTemplate(id) {
  const all = [...BUILTIN_TEMPLATES, ...state.templates];
  const t = all.find(x => x.id === id);
  if (!t) return;
  viewingId = id;

  document.getElementById('view-tpl-name').textContent = t.name;
  document.getElementById('view-tpl-body').textContent = t.body;

  const meta = document.getElementById('view-meta');
  const catLabel = CAT_LABELS[t.category] || t.category;
  const catClass = CAT_COLORS[t.category] || 'badge-custom';
  meta.innerHTML = `
    <span class="tpl-badge ${catClass}">${catLabel}</span>
    ${t.builtin ? '<span class="tpl-badge badge-builtin"><i class="fa-solid fa-lock" style="font-size:8px;margin-right:3px"></i>Template Bawaan</span>' : '<span class="tpl-badge badge-custom">Custom</span>'}
    ${t.desc ? `<span style="font-size:12px;color:var(--text-2)">${escHtml(t.desc)}</span>` : ''}
  `;

  const editBtn = document.getElementById('view-edit-btn');
  editBtn.textContent = t.builtin ? '📋 Salin & Edit' : '✏️ Edit';
  editBtn.innerHTML = t.builtin
    ? '<i class="fa-solid fa-copy"></i> Salin & Edit'
    : '<i class="fa-solid fa-pen"></i> Edit';

  openModal('modal-view');
}

function copyViewTemplate() {
  const body = document.getElementById('view-tpl-body').textContent;
  navigator.clipboard.writeText(body).then(() => {
    showToast('fa-copy', 'Teks template disalin!');
  }).catch(() => { fallbackCopy(body); showToast('fa-copy', 'Teks template disalin!'); });
}

function editFromView() {
  closeModal('modal-view');
  setTimeout(() => openEditTemplate(viewingId), 100);
}

// ===================== GENERATOR =====================
let genCatSelected = null;

function selectGenCat(cat, el) {
  genCatSelected = cat;
  document.querySelectorAll('.gen-cat-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');

  // show step 2
  document.getElementById('gen-step2').classList.remove('hidden');
  const schema = GENERATOR_SCHEMAS[cat];
  document.getElementById('gen-cat-label').textContent = schema.label;

  // build form
  const fieldsEl = document.getElementById('gen-form-fields');
  fieldsEl.innerHTML = '';

  schema.fields.forEach(f => {
    const div = document.createElement('div');
    div.className = 'form-group';

    const reqSpan = f.required ? '<span class="req">*</span>' : '<span class="opt">(opsional)</span>';
    let inputEl = '';

    if (f.type === 'textarea') {
      inputEl = `<textarea id="gf-${f.id}" placeholder="${f.placeholder || ''}" rows="3"></textarea>`;
    } else if (f.type === 'select') {
      const opts = f.options.map(o => `<option value="${o}">${o}</option>`).join('');
      inputEl = `<select id="gf-${f.id}">${opts}</select>`;
    } else {
      inputEl = `<input type="text" id="gf-${f.id}" placeholder="${f.placeholder || ''}">`;
    }

    const hintEl = f.hint ? `<div class="field-hint"><i class="fa-solid fa-lightbulb"></i> ${f.hint}</div>` : '';

    div.innerHTML = `<label>${escHtml(f.label)} ${reqSpan}</label>${inputEl}${hintEl}`;
    fieldsEl.appendChild(div);
  });

  // hide step 3 if visible
  document.getElementById('gen-step3').classList.add('hidden');

  // scroll into view
  document.getElementById('gen-step2').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function runGenerator() {
  const schema = GENERATOR_SCHEMAS[genCatSelected];
  if (!schema) return;

  // collect values
  const vals = {};
  let valid = true;
  schema.fields.forEach(f => {
    const el = document.getElementById('gf-' + f.id);
    if (!el) return;
    const v = el.value.trim();
    if (f.required && !v) {
      el.style.borderColor = 'var(--accent-coral)';
      valid = false;
    } else {
      el.style.borderColor = '';
      vals[f.id] = v;
    }
  });

  if (!valid) { showToast('fa-circle-exclamation', 'Isi semua field yang wajib diisi', 'coral'); return; }

  // show processing
  const step3 = document.getElementById('gen-step3');
  const processing = document.getElementById('gen-processing');
  const resultCard = document.getElementById('gen-result-card');

  step3.classList.remove('hidden');
  processing.classList.remove('hidden');
  resultCard.classList.add('hidden');
  step3.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // simulate processing delay for UX
  setTimeout(() => {
    const result = schema.generate(vals);
    document.getElementById('gen-result-text').value = result;
    processing.classList.add('hidden');
    resultCard.classList.remove('hidden');
  }, 1200);
}

function resetGenerator() {
  genCatSelected = null;
  document.querySelectorAll('.gen-cat-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('gen-step2').classList.add('hidden');
  document.getElementById('gen-step3').classList.add('hidden');
  document.getElementById('gen-step1').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyGenResult() {
  const text = document.getElementById('gen-result-text').value;
  navigator.clipboard.writeText(text).then(() => {
    showToast('fa-copy', 'Teks hasil disalin!');
  }).catch(() => { fallbackCopy(text); showToast('fa-copy', 'Teks hasil disalin!'); });
}

function saveToLibrary() {
  const text = document.getElementById('gen-result-text').value.trim();
  if (!text) return;
  const schema = GENERATOR_SCHEMAS[genCatSelected];
  const item = {
    id: 'lib-' + Date.now(),
    category: genCatSelected,
    categoryLabel: schema?.label || genCatSelected,
    body: text,
    date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
  };
  state.library.unshift(item);
  saveLibrary();
  updateLibCount();
  renderLibrary();
  showToast('fa-book-bookmark', 'Disimpan ke Library!', 'green');
}

function saveAsTemplate() {
  const text = document.getElementById('gen-result-text').value.trim();
  if (!text) return;
  const schema = GENERATOR_SCHEMAS[genCatSelected];

  // pre-fill template modal
  document.getElementById('modal-tpl-id').value = '';
  document.getElementById('modal-tpl-builtin').value = '';
  document.getElementById('modal-tpl-title').textContent = 'Simpan sebagai Template';
  document.getElementById('modal-tpl-name').value = `Template ${schema?.label || ''} (dari Generator)`;
  document.getElementById('modal-tpl-cat').value = 'custom';
  document.getElementById('modal-tpl-body').value = text;
  document.getElementById('modal-tpl-desc').value = `Dibuat via Generator — ${schema?.label}`;
  openModal('modal-template');
}

// ===================== LIBRARY =====================
let libFilterActive = 'all';

function setLibFilter(cat, el) {
  libFilterActive = cat;
  document.querySelectorAll('#page-library .filter-chips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderLibrary();
}

function filterLibrary() {
  renderLibrary();
}

function renderLibrary() {
  const search = (document.getElementById('lib-search')?.value || '').toLowerCase();
  const items = state.library.filter(item => {
    const catMatch = libFilterActive === 'all' || item.category === libFilterActive;
    const searchMatch = !search || item.body.toLowerCase().includes(search) || (item.categoryLabel || '').toLowerCase().includes(search);
    return catMatch && searchMatch;
  });

  const grid = document.getElementById('lib-grid');
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<div class="lib-empty"><i class="fa-solid fa-book-open"></i><p>${state.library.length === 0 ? 'Belum ada teks tersimpan. Gunakan Generator lalu klik "Simpan ke Library".' : 'Tidak ada hasil untuk filter ini.'}</p></div>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'lib-card';
    const catClass = CAT_COLORS[item.category] || 'badge-custom';
    const catLabel = item.categoryLabel || CAT_LABELS[item.category] || item.category;

    card.innerHTML = `
      <div class="lib-card-top">
        <div class="lib-card-header">
          <span class="lib-cat-badge ${catClass}">${catLabel}</span>
          <span class="lib-date"><i class="fa-regular fa-clock" style="margin-right:3px"></i>${item.date}</span>
        </div>
        <div class="lib-preview">${escHtml(item.body)}</div>
      </div>
      <div class="lib-card-actions">
        <button class="btn-sm view-btn" onclick="viewLibItem('${item.id}')"><i class="fa-solid fa-eye"></i> Lihat & Edit</button>
        <button class="btn-sm copy-btn" onclick="copyLibItem('${item.id}')"><i class="fa-solid fa-copy"></i> Salin</button>
        <button class="btn-sm del-btn" onclick="deleteLibItem('${item.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function updateLibCount() {
  const el = document.getElementById('lib-nav-count');
  if (el) el.textContent = state.library.length;
}

let currentLibViewId = null;

function viewLibItem(id) {
  const item = state.library.find(x => x.id === id);
  if (!item) return;
  currentLibViewId = id;
  const catLabel = item.categoryLabel || CAT_LABELS[item.category] || item.category;
  document.getElementById('lib-view-title').textContent = catLabel + ' — ' + item.date;
  document.getElementById('lib-view-body').value = item.body;
  openModal('modal-lib-view');
}

function copyLibItem(id) {
  let text;
  if (id) {
    const item = state.library.find(x => x.id === id);
    if (!item) return;
    text = item.body;
  } else {
    text = document.getElementById('lib-view-body').value;
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast('fa-copy', 'Teks disalin!');
  }).catch(() => { fallbackCopy(text); showToast('fa-copy', 'Teks disalin!'); });
}

function saveLibEdit() {
  if (!currentLibViewId) return;
  const idx = state.library.findIndex(x => x.id === currentLibViewId);
  if (idx < 0) return;
  state.library[idx].body = document.getElementById('lib-view-body').value;
  saveLibrary();
  renderLibrary();
  closeModal('modal-lib-view');
  showToast('fa-floppy-disk', 'Perubahan disimpan!', 'green');
}

function deleteLibItem(id) {
  if (!confirm('Hapus item ini dari Library?')) return;
  state.library = state.library.filter(x => x.id !== id);
  saveLibrary();
  updateLibCount();
  renderLibrary();
  showToast('fa-trash', 'Item dihapus');
}

// ===================== SETTINGS =====================
function renderStats() {
  const builtinCount = BUILTIN_TEMPLATES.length;
  const customCount = state.templates.length;
  const libCount = state.library.length;
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="stat-cell">
      <div class="stat-num" style="color:var(--accent-blue)">${builtinCount}</div>
      <div class="stat-label">Template Bawaan</div>
    </div>
    <div class="stat-cell">
      <div class="stat-num" style="color:var(--accent-purple)">${customCount}</div>
      <div class="stat-label">Template Custom</div>
    </div>
    <div class="stat-cell">
      <div class="stat-num" style="color:var(--accent-green)">${libCount}</div>
      <div class="stat-label">Tersimpan di Library</div>
    </div>
  `;
}

function exportData() {
  const data = {
    version: '1.0',
    exported: new Date().toISOString(),
    templates: state.templates,
    library: state.library
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ditz-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('fa-download', 'Data berhasil diexport!', 'green');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.templates && !data.library) throw new Error('Format tidak valid');
      if (data.templates) state.templates = data.templates;
      if (data.library) state.library = data.library;
      saveTemplates();
      saveLibrary();
      renderTemplates();
      renderLibrary();
      updateLibCount();
      renderStats();
      showToast('fa-upload', 'Data berhasil diimport!', 'green');
    } catch (err) {
      showToast('fa-triangle-exclamation', 'File JSON tidak valid', 'coral');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function clearLibrary() {
  if (!confirm('Hapus SEMUA teks di Library?\nAksi ini tidak bisa dibatalkan.')) return;
  state.library = [];
  saveLibrary();
  updateLibCount();
  renderLibrary();
  renderStats();
  showToast('fa-trash', 'Library dikosongkan');
}

function clearCustomTemplates() {
  if (!confirm('Hapus semua template custom?\nTemplate bawaan tetap ada.')) return;
  state.templates = [];
  saveTemplates();
  renderTemplates();
  renderStats();
  showToast('fa-rotate-left', 'Template custom direset');
}

// ===================== MODAL =====================
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) this.classList.add('hidden');
  });
});

// ===================== TOAST =====================
let toastTimer;
function showToast(icon, msg, type) {
  const t = document.getElementById('toast');
  const colors = { coral: 'var(--accent-coral)', green: 'var(--accent-green)', default: 'var(--accent-teal)' };
  const color = colors[type] || colors.default;
  t.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> ${msg}`;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2600);
}

// ===================== UTILS =====================
function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

// ===================== BOOT =====================
document.addEventListener('DOMContentLoaded', init);
