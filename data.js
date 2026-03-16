// ===================== BUILT-IN TEMPLATES =====================
const BUILTIN_TEMPLATES = [
  {
    id: 'bt-001',
    builtin: true,
    name: 'Lamaran Kerja Umum',
    category: 'email',
    desc: 'Template serbaguna untuk berbagai posisi dan industri',
    body: `Kepada Yth.
HRD / Tim Rekrutmen
[PERUSAHAAN]

Dengan hormat,

Saya yang bertanda tangan di bawah ini:
  Nama     : [NAMA]
  Posisi   : [POSISI]

Dengan ini mengajukan diri untuk bergabung sebagai [POSISI] di [PERUSAHAAN]. Saya tertarik dengan posisi ini karena sesuai dengan latar belakang pendidikan dan pengalaman saya di bidang [BIDANG].

Saya memiliki kemampuan [SKILL UTAMA] dan berpengalaman dalam [PENGALAMAN SINGKAT]. Saya yakin dapat memberikan kontribusi yang berarti bagi tim dan perusahaan Bapak/Ibu.

Terlampir CV dan dokumen pendukung untuk pertimbangan lebih lanjut. Saya sangat berharap dapat mendapatkan kesempatan untuk berdiskusi lebih lanjut mengenai posisi ini.

Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.

Hormat saya,
[NAMA]
[NO. HP] | [EMAIL]`
  },
  {
    id: 'bt-002',
    builtin: true,
    name: 'Lamaran Fresh Graduate',
    category: 'email',
    desc: 'Khusus untuk fresh graduate yang belum memiliki pengalaman kerja formal',
    body: `Kepada Yth.
Tim Rekrutmen
[PERUSAHAAN]

Dengan hormat,

Perkenalkan, nama saya [NAMA], fresh graduate [JURUSAN] dari [UNIVERSITAS] tahun [TAHUN LULUS]. Saya mengajukan lamaran untuk posisi [POSISI] yang dibuka di [PERUSAHAAN].

Meskipun saya belum memiliki pengalaman kerja formal, selama masa kuliah saya aktif terlibat dalam [KEGIATAN: organisasi/proyek/magang] yang membekali saya dengan kemampuan [SKILL YANG RELEVAN]. Saya juga menyelesaikan [PROYEK/SKRIPSI] yang berkaitan dengan [TOPIK RELEVAN].

Saya adalah individu yang cepat belajar, adaptif, dan memiliki semangat tinggi untuk berkembang. Bergabung dengan [PERUSAHAAN] merupakan kesempatan yang sangat saya nantikan untuk mengaplikasikan ilmu sekaligus terus belajar dari tim yang berpengalaman.

Saya lampirkan CV dan transkrip nilai untuk pertimbangan Bapak/Ibu. Dengan senang hati saya bersedia mengikuti proses seleksi lebih lanjut.

Terima kasih atas perhatian dan kesempatannya.

Hormat saya,
[NAMA]
[NO. HP] | [EMAIL]`
  },
  {
    id: 'bt-003',
    builtin: true,
    name: 'Lamaran Posisi Senior/Berpengalaman',
    category: 'email',
    desc: 'Untuk kandidat dengan pengalaman kerja yang relevan',
    body: `Kepada Yth.
[NAMA HRD / Hiring Manager]
[PERUSAHAAN]

Dengan hormat,

Saya [NAMA], seorang profesional di bidang [BIDANG] dengan pengalaman [X TAHUN] tahun. Saya tertarik untuk bergabung sebagai [POSISI] di [PERUSAHAAN] dan yakin bahwa pengalaman saya sangat relevan dengan kebutuhan tim Bapak/Ibu.

Dalam perjalanan karir saya, saya telah:
• [PENCAPAIAN 1 — contoh: Memimpin tim 5 orang untuk menyelesaikan proyek X]
• [PENCAPAIAN 2 — contoh: Meningkatkan efisiensi proses sebesar X%]
• [PENCAPAIAN 3 — contoh: Mengembangkan sistem/produk/fitur Y]

Saya memiliki keahlian dalam [SKILL 1], [SKILL 2], dan [SKILL 3], serta terbiasa bekerja di lingkungan [fast-paced/kolaboratif/startup/korporat].

Saya sangat tertarik dengan visi [PERUSAHAAN] dalam [SEBUTKAN VISI/MISI PERUSAHAAN], dan percaya dapat memberikan dampak nyata sejak hari pertama bergabung.

Detail lengkap pengalaman dan portofolio terlampir dalam CV. Saya terbuka untuk berdiskusi kapan pun sesuai kenyamanan Bapak/Ibu.

Terima kasih atas waktu dan perhatiannya.

Salam,
[NAMA]
[NO. HP] | [EMAIL] | [LINKEDIN/PORTFOLIO]`
  },
  {
    id: 'bt-004',
    builtin: true,
    name: 'Follow Up Lamaran',
    category: 'followup',
    desc: 'Kirim setelah 1–2 minggu tidak ada respons dari HRD',
    body: `Kepada Yth.
Tim Rekrutmen
[PERUSAHAAN]

Dengan hormat,

Saya [NAMA], sebelumnya telah mengirimkan lamaran untuk posisi [POSISI] pada tanggal [TANGGAL KIRIM].

Saya ingin menindaklanjuti lamaran tersebut dan memastikan apakah dokumen saya telah diterima dengan baik. Saya masih sangat tertarik dengan posisi ini dan antusias untuk berkontribusi di [PERUSAHAAN].

Apabila ada informasi tambahan atau dokumen lain yang dibutuhkan, saya siap menyediakan dengan segera.

Terima kasih atas perhatiannya. Saya berharap dapat mendengar kabar baik dari Bapak/Ibu.

Hormat saya,
[NAMA]
[NO. HP] | [EMAIL]`
  },
  {
    id: 'bt-005',
    builtin: true,
    name: 'Follow Up Setelah Interview',
    category: 'followup',
    desc: 'Ucapan terima kasih dan follow up setelah wawancara',
    body: `Kepada Yth.
[NAMA INTERVIEWER / Tim Rekrutmen]
[PERUSAHAAN]

Dengan hormat,

Terima kasih atas waktu dan kesempatan yang diberikan untuk wawancara pada [TANGGAL INTERVIEW]. Saya sangat menikmati diskusi mengenai [TOPIK YANG DIBAHAS] dan semakin yakin bahwa posisi [POSISI] sangat sesuai dengan keahlian dan aspirasi karir saya.

Saya juga ingin menegaskan kembali ketertarikan saya yang kuat untuk bergabung dengan tim [PERUSAHAAN]. Berdasarkan diskusi kita, saya percaya dapat berkontribusi secara signifikan, khususnya dalam hal [SEBUTKAN KONTRIBUSI SPESIFIK].

Apabila ada pertanyaan tambahan atau informasi yang dibutuhkan, jangan ragu untuk menghubungi saya. Saya menantikan kabar selanjutnya dari Bapak/Ibu.

Terima kasih sekali lagi atas waktunya.

Hormat saya,
[NAMA]
[NO. HP] | [EMAIL]`
  },
  {
    id: 'bt-006',
    builtin: true,
    name: 'Merespons Penolakan dengan Sopan',
    category: 'penolakan',
    desc: 'Tetap menjaga hubungan baik meskipun lamaran ditolak',
    body: `Kepada Yth.
Tim Rekrutmen
[PERUSAHAAN]

Dengan hormat,

Terima kasih atas informasi mengenai keputusan seleksi untuk posisi [POSISI]. Meskipun hasilnya tidak sesuai harapan saya, saya sangat menghargai waktu dan pertimbangan yang telah diberikan selama proses seleksi berlangsung.

Saya memahami bahwa keputusan ini tentu didasarkan pada berbagai pertimbangan matang dari pihak [PERUSAHAAN]. Pengalaman selama proses ini telah memberikan saya wawasan berharga yang akan saya jadikan bahan evaluasi diri ke depannya.

Apabila di masa mendatang terdapat posisi yang sesuai dengan profil saya, saya dengan senang hati akan kembali melamar. Saya juga berharap dapat tetap terhubung secara profesional.

Sekali lagi, terima kasih atas kesempatan dan perhatiannya.

Hormat saya,
[NAMA]
[EMAIL] | [LINKEDIN]`
  }
];

// ===================== GENERATOR SCHEMAS =====================
const GENERATOR_SCHEMAS = {
  tentang: {
    label: 'Tentang Saya',
    fields: [
      { id: 'nama',       label: 'Nama Lengkap',         type: 'text',     placeholder: 'contoh: Budi Santoso',                    required: true },
      { id: 'profesi',    label: 'Profesi / Bidang',      type: 'text',     placeholder: 'contoh: Web Developer, Desainer Grafis',   required: true },
      { id: 'pengalaman', label: 'Lama Pengalaman',       type: 'text',     placeholder: 'contoh: 3 tahun, Fresh Graduate',          required: true },
      { id: 'skill',      label: 'Skill Utama',           type: 'text',     placeholder: 'contoh: React, Figma, Project Management', required: true },
      { id: 'pendidikan', label: 'Pendidikan Terakhir',   type: 'text',     placeholder: 'contoh: S1 Teknik Informatika, Universitas X', required: false, hint: 'Opsional — lewati jika tidak ingin dicantumkan' },
      { id: 'karakter',   label: 'Karakter / Sifat Diri', type: 'text',     placeholder: 'contoh: detail-oriented, komunikatif, suka kolaborasi', required: false, hint: 'Opsional — 2–3 kata sifat yang menggambarkan kamu' },
      { id: 'tujuan',     label: 'Tujuan Karir',          type: 'textarea', placeholder: 'contoh: Ingin berkontribusi di bidang teknologi dan terus berkembang secara profesional', required: false, hint: 'Opsional — singkat, 1 kalimat sudah cukup' }
    ],
    generate: (f) => {
      const exp = f.pengalaman.toLowerCase().includes('fresh') ? 'Meskipun baru memulai karir profesional' : `Dengan pengalaman ${f.pengalaman}`;
      const edu = f.pendidikan ? `Saya merupakan lulusan ${f.pendidikan}. ` : '';
      const karakter = f.karakter ? ` Saya dikenal sebagai pribadi yang ${f.karakter}, dan` : ' Saya';
      const tujuan = f.tujuan ? `\n\nTujuan saya adalah ${f.tujuan}.` : '';
      return `Saya ${f.nama}, seorang ${f.profesi}. ${edu}${exp}, saya memiliki keahlian yang solid di bidang ${f.skill}.${karakter} selalu berupaya memberikan hasil terbaik dalam setiap pekerjaan yang saya jalani.${tujuan}

⚠️ Catatan: Teks di atas adalah titik awal. Silahkan ubah kalimat yang terasa tidak alami, tambahkan detail spesifik tentang diri kamu, dan pastikan setiap pernyataan mencerminkan kondisi dan pengalamanmu yang sebenarnya.`;
    }
  },

  pembuka: {
    label: 'Pembuka Email',
    fields: [
      { id: 'nama',      label: 'Nama Kamu',         type: 'text',     placeholder: 'contoh: Rina Fitriani',                     required: true },
      { id: 'posisi',    label: 'Posisi yang Dilamar', type: 'text',    placeholder: 'contoh: UI/UX Designer',                    required: true },
      { id: 'perusahaan',label: 'Nama Perusahaan',    type: 'text',     placeholder: 'contoh: PT Maju Bersama',                   required: true },
      { id: 'sumber',    label: 'Sumber Info Lowongan', type: 'text',  placeholder: 'contoh: LinkedIn, Jobstreet, referensi rekan', required: false, hint: 'Opsional — darimana kamu tahu lowongan ini?' },
      { id: 'alasan',    label: 'Alasan Tertarik',    type: 'textarea', placeholder: 'contoh: Saya mengikuti perkembangan perusahaan ini dan tertarik dengan produk yang dikembangkan', required: false, hint: 'Opsional tapi sangat disarankan — semakin spesifik semakin kuat' }
    ],
    generate: (f) => {
      const sumber = f.sumber ? ` melalui ${f.sumber}` : '';
      const alasan = f.alasan ? `\n\nSaya tertarik melamar karena ${f.alasan}.` : '';
      return `Dengan hormat,

Saya ${f.nama}, bermaksud mengajukan lamaran untuk posisi ${f.posisi} di ${f.perusahaan}${sumber}.${alasan}

Saya percaya bahwa latar belakang dan pengalaman yang saya miliki sesuai dengan kualifikasi yang dibutuhkan untuk posisi ini.

⚠️ Catatan: Ini adalah kalimat pembuka umum. Personalikasikan dengan menyebut detail spesifik tentang perusahaan atau mengapa kamu benar-benar tertarik — rekruter menghargai ketulusan dan riset yang kamu lakukan.`;
    }
  },

  skill: {
    label: 'Skill & Pengalaman',
    fields: [
      { id: 'posisi',      label: 'Posisi / Peran Kamu',    type: 'text',     placeholder: 'contoh: Frontend Developer',                required: true },
      { id: 'skill_teknis',label: 'Skill Teknis Utama',     type: 'text',     placeholder: 'contoh: JavaScript, React, Node.js, Git',    required: true },
      { id: 'skill_soft',  label: 'Soft Skills',            type: 'text',     placeholder: 'contoh: komunikasi, kepemimpinan, manajemen waktu', required: false, hint: 'Opsional — 2–3 soft skill paling relevan' },
      { id: 'pengalaman',  label: 'Pengalaman Singkat',     type: 'textarea', placeholder: 'contoh: 2 tahun bekerja di startup e-commerce, mengembangkan fitur checkout', required: true },
      { id: 'pencapaian',  label: 'Pencapaian Terbaik',     type: 'textarea', placeholder: 'contoh: Berhasil mengurangi load time halaman sebesar 40%', required: false, hint: 'Opsional tapi sangat kuat — angka dan fakta konkret lebih meyakinkan' }
    ],
    generate: (f) => {
      const soft = f.skill_soft ? ` Di sisi lain, kemampuan soft skill saya dalam ${f.skill_soft} mendukung kolaborasi yang efektif dalam tim.` : '';
      const pencapaian = f.pencapaian ? `\n\nSalah satu pencapaian yang saya banggakan adalah ${f.pencapaian}.` : '';
      return `Sebagai ${f.posisi}, saya memiliki kemampuan teknis yang mencakup ${f.skill_teknis}.${soft}

Dalam perjalanan karir saya, ${f.pengalaman}.${pencapaian}

⚠️ Catatan: Tulis ulang bagian ini dengan kata-kata kamu sendiri. Ganti contoh pengalaman dengan fakta nyata dari karir kamu. Semakin spesifik dan berbasis data (angka, hasil nyata), semakin kuat kesan yang ditinggalkan.`;
    }
  },

  penutup: {
    label: 'Penutup Email',
    fields: [
      { id: 'nama',      label: 'Nama Kamu',            type: 'text', placeholder: 'contoh: Dito Prasetyo',               required: true },
      { id: 'posisi',    label: 'Posisi yang Dilamar',  type: 'text', placeholder: 'contoh: Data Analyst',                required: true },
      { id: 'kontak',    label: 'Nomor HP / Email',     type: 'text', placeholder: 'contoh: 0812-xxxx-xxxx / nama@email.com', required: true },
      { id: 'nada',      label: 'Nada Penutup',         type: 'select', options: ['Profesional & Formal', 'Hangat & Antusias', 'Singkat & Padat'], required: true }
    ],
    generate: (f) => {
      const templates = {
        'Profesional & Formal': `Demikian surat lamaran ini saya sampaikan. Saya sangat mengharapkan kesempatan untuk dapat berdiskusi lebih lanjut mengenai bagaimana saya dapat berkontribusi pada tim di posisi ${f.posisi}.\n\nAtas perhatian dan pertimbangannya, saya ucapkan terima kasih.\n\nHormat saya,\n${f.nama}\n${f.kontak}`,
        'Hangat & Antusias': `Saya sangat antusias dengan kemungkinan bergabung bersama tim Bapak/Ibu sebagai ${f.posisi}. Saya percaya ini akan menjadi awal dari kolaborasi yang luar biasa. Dengan senang hati saya menunggu kesempatan untuk berkenalan lebih lanjut.\n\nTerima kasih banyak atas waktu dan perhatiannya!\n\nSalam hangat,\n${f.nama}\n${f.kontak}`,
        'Singkat & Padat': `Terima kasih atas waktunya. Saya terbuka untuk diskusi lebih lanjut kapan pun sesuai kenyamanan Bapak/Ibu.\n\nSalam,\n${f.nama}\n${f.kontak}`
      };
      return `${templates[f.nada] || templates['Profesional & Formal']}

⚠️ Catatan: Pilih nada yang paling sesuai dengan budaya perusahaan yang kamu lamar. Startup cenderung lebih santai, sementara instansi formal memerlukan nada yang lebih resmi.`;
    }
  },

  objective: {
    label: 'Career Objective',
    fields: [
      { id: 'nama',       label: 'Nama Kamu',              type: 'text',     placeholder: 'contoh: Sarah Amelia',                    required: true },
      { id: 'profesi',    label: 'Target Profesi',          type: 'text',     placeholder: 'contoh: Digital Marketing Specialist',    required: true },
      { id: 'pengalaman', label: 'Status Pengalaman',       type: 'select',   options: ['Fresh Graduate', '1–2 Tahun', '3–5 Tahun', '5+ Tahun'], required: true },
      { id: 'skill',      label: 'Skill yang Ingin Ditawarkan', type: 'text', placeholder: 'contoh: SEO, content strategy, data analysis', required: true },
      { id: 'tujuan',     label: 'Tujuan Bergabung',        type: 'textarea', placeholder: 'contoh: Ingin berkontribusi di perusahaan yang inovatif sambil terus mengembangkan keahlian', required: true }
    ],
    generate: (f) => {
      const expMap = {
        'Fresh Graduate': 'Sebagai fresh graduate yang bersemangat',
        '1–2 Tahun': 'Profesional muda dengan pengalaman 1–2 tahun',
        '3–5 Tahun': 'Profesional berpengalaman 3–5 tahun',
        '5+ Tahun': 'Profesional senior dengan pengalaman lebih dari 5 tahun'
      };
      const exp = expMap[f.pengalaman] || 'Seorang profesional';
      return `${exp} di bidang ${f.profesi}. Memiliki keahlian dalam ${f.skill}. ${f.tujuan}.

⚠️ Catatan: Career objective di CV idealnya 2–3 kalimat singkat dan langsung ke poin. Sesuaikan dengan posisi yang dilamar — jangan gunakan satu objective yang sama untuk semua lamaran.`;
    }
  },

  motivasi: {
    label: 'Motivasi Melamar',
    fields: [
      { id: 'perusahaan',  label: 'Nama Perusahaan',        type: 'text',     placeholder: 'contoh: Tokopedia',                         required: true },
      { id: 'posisi',      label: 'Posisi yang Dilamar',    type: 'text',     placeholder: 'contoh: Product Manager',                   required: true },
      { id: 'alasan1',     label: 'Apa yang Kamu Ketahui tentang Perusahaan Ini?', type: 'textarea', placeholder: 'contoh: Saya tahu perusahaan ini fokus pada inklusi keuangan dan memiliki budaya kerja yang inovatif', required: true, hint: 'Tunjukkan bahwa kamu sudah melakukan riset — ini sangat membedakan kamu dari kandidat lain' },
      { id: 'alasan2',     label: 'Mengapa Posisi Ini Menarik Bagimu?', type: 'textarea', placeholder: 'contoh: Posisi ini sesuai dengan passion saya dalam pengembangan produk digital', required: true },
      { id: 'kontribusi',  label: 'Apa yang Akan Kamu Bawa ke Tim?',    type: 'textarea', placeholder: 'contoh: Pengalaman saya di bidang X dan kemampuan Y', required: false, hint: 'Opsional — tapi menjawab pertanyaan ini membuat lamaran jauh lebih kuat' }
    ],
    generate: (f) => {
      const kontribusi = f.kontribusi ? `\n\nSaya juga yakin dapat membawa nilai tambah bagi tim melalui ${f.kontribusi}.` : '';
      return `Saya tertarik untuk bergabung dengan ${f.perusahaan} karena ${f.alasan1}.

Posisi ${f.posisi} menarik bagi saya karena ${f.alasan2}.${kontribusi}

⚠️ Catatan: Bagian motivasi adalah kesempatan emas untuk menunjukkan bahwa kamu benar-benar tertarik, bukan sekadar melamar ke semua tempat. Semakin spesifik dan personal alasanmu, semakin besar kemungkinan lamaran kamu diingat oleh rekruter.`;
    }
  }
};

// ===================== CATEGORY LABELS =====================
const CAT_LABELS = {
  email: 'Email Lamaran',
  followup: 'Follow Up',
  penolakan: 'Tanggapi Penolakan',
  custom: 'Custom',
  tentang: 'Tentang Saya',
  pembuka: 'Pembuka Email',
  skill: 'Skill & Pengalaman',
  penutup: 'Penutup Email',
  objective: 'Career Objective',
  motivasi: 'Motivasi Melamar'
};

const CAT_COLORS = {
  email: 'badge-email',
  followup: 'badge-followup',
  penolakan: 'badge-penolakan',
  custom: 'badge-custom',
  tentang: 'badge-email',
  pembuka: 'badge-followup',
  skill: 'badge-custom',
  penutup: 'badge-penolakan',
  objective: 'badge-email',
  motivasi: 'badge-followup'
};
