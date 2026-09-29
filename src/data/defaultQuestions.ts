import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA (25 SOAL)
  // ==========================================

  // --- SOAL 1 ---
  {
    id: 1,
    type: 'pg',
    topic: 'Apa Itu Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan alur kerja komputer pada gambar di atas!\nDalam dunia koding dan ilmu komputer, apa yang dimaksud dengan "urutan instruksi logis" (algoritma)?',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(15, 20)">
        <!-- Box Input -->
        <rect x="0" y="20" width="85" height="50" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="42" y="42" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">MASUKAN</text>
        <text x="42" y="58" fill="#3B82F6" font-size="10" text-anchor="middle">(Input Data)</text>
        <!-- Arrow 1 -->
        <path d="M 90 45 L 115 45 M 110 40 L 117 45 L 110 50" stroke="#64748B" stroke-width="2" fill="none"/>
        <!-- Box Instruksi Logis -->
        <rect x="122" y="10" width="145" height="70" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
        <text x="194" y="32" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">INSTRUKSI LOGIS</text>
        <rect x="132" y="40" width="125" height="16" rx="4" fill="#FDE68A"/>
        <text x="194" y="52" fill="#78350F" font-size="9" font-weight="semibold" text-anchor="middle">Langkah 1 -> 2 -> 3</text>
        <text x="194" y="72" fill="#92400E" font-size="9" text-anchor="middle">Runtut &amp; Terstruktur</text>
        <!-- Arrow 2 -->
        <path d="M 272 45 L 297 45 M 292 40 L 299 45 L 292 50" stroke="#64748B" stroke-width="2" fill="none"/>
        <!-- Box Output -->
        <rect x="304" y="20" width="85" height="50" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <text x="346" y="42" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">KELUARAN</text>
        <text x="346" y="58" fill="#059669" font-size="10" text-anchor="middle">(Hasil Tepat)</text>
      </g>
      <text x="210" y="115" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Komputer mengeksekusi instruksi berurutan dari awal sampai akhir</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kumpulan perintah acak yang boleh dikerjakan dari mana saja sesuka hati' },
      { id: 'B', text: 'Serangkaian langkah teratur, jelas, dan berurutan dari awal sampai akhir untuk menyelesaikan suatu masalah' },
      { id: 'C', text: 'Perintah rahasia komputer yang hanya boleh dibaca oleh teknisi perangkat keras' },
      { id: 'D', text: 'Tulisan kode yang panjang tanpa perlu memiliki tujuan penyelesaian yang jelas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Urutan instruksi logis (algoritma) adalah rangkaian langkah-langkah yang terencana, runtut, jelas, dan tidak ambigu dari awal hingga selesai untuk memecahkan masalah atau mencapai tujuan tertentu pada komputer.',
  },

  // --- SOAL 2 ---
  {
    id: 2,
    type: 'pg',
    topic: 'Apa Itu Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Komputer adalah mesin pemroses data elektronik. Komputer tidak dapat berpikir sendiri layaknya manusia. Agar komputer dapat menyelesaikan tugas sesuai keinginan kita, maka instruksi yang diberikan harus bersifat...',
    options: [
      { id: 'A', text: 'Ambigu dan memiliki banyak arti' },
      { id: 'B', text: 'Sangat rumit dan melompat-lompat tanpa aturan' },
      { id: 'C', text: 'Runtut, teratur, dan jelas langkah demi langkah' },
      { id: 'D', text: 'Berubah-ubah secara mendadak setiap saat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Komputer bekerja secara kaku mengikuti instruksi yang diberikan oleh pembuat program (programmer). Oleh sebab itu, perintah harus disusun secara runtut, logis, teratur, dan tidak bermakna ganda.',
  },

  // --- SOAL 3 ---
  {
    id: 3,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan kartu instruksi membuat segelas teh manis pada gambar di atas!\nJika langkah (B) "Minum teh" dijalankan sebelum langkah (C) "Masukkan kantong teh celup & gula", akibat logis yang terjadi adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(20, 15)">
        <!-- Card A -->
        <rect x="0" y="10" width="115" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="10" y="28" fill="#1D4ED8" font-size="11" font-weight="bold">Langkah [A]</text>
        <text x="10" y="46" fill="#1E293B" font-size="9.5">Tuangkan air panas</text>
        <text x="10" y="60" fill="#1E293B" font-size="9.5">ke dalam cangkir</text>
        <!-- Arrow 1 -->
        <text x="122" y="48" fill="#94A3B8" font-size="16" font-weight="bold">-></text>
        <!-- Card B (Tertukar) -->
        <rect x="135" y="10" width="115" height="65" rx="8" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.5"/>
        <text x="145" y="28" fill="#DC2626" font-size="11" font-weight="bold">Langkah [B] ⚠️</text>
        <text x="145" y="46" fill="#1E293B" font-size="9.5">Minum air teh</text>
        <text x="145" y="60" fill="#1E293B" font-size="9.5">dari cangkir</text>
        <!-- Arrow 2 -->
        <text x="257" y="48" fill="#94A3B8" font-size="16" font-weight="bold">-></text>
        <!-- Card C -->
        <rect x="270" y="10" width="115" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="280" y="28" fill="#1D4ED8" font-size="11" font-weight="bold">Langkah [C]</text>
        <text x="280" y="46" fill="#1E293B" font-size="9.5">Celupkan teh &amp;</text>
        <text x="280" y="60" fill="#1E293B" font-size="9.5">masukkan gula</text>
      </g>
      <text x="210" y="112" fill="#DC2626" font-size="10.5" font-weight="bold" text-anchor="middle">Peringatan: Urutan langkah yang tertukar menyebabkan kegagalan prosedur!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Rasa teh menjadi terlalu manis dan kental' },
      { id: 'B', text: 'Air yang diminum masih berupa air tawar biasa karena teh dan gula belum dimasukkan' },
      { id: 'C', text: 'Teh manis akan langsung tersaji sempurna secara otomatis' },
      { id: 'D', text: 'Cangkir teh akan retak dan meledak secara mendadak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Urutan instruksi sangat menentukan keberhasilan hasil akhir. Jika langkah minum dilakukan sebelum teh dan gula dimasukkan ke dalam cangkir, maka yang diminum hanyalah air putih panas biasa tanpa rasa teh ataupun manis.',
  },

  // --- SOAL 4 ---
  {
    id: 4,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan langkah-langkah membuat segelas teh manis hangat berikut:\n(1) Masukkan kantong teh celup dan satu sendok gula ke dalam cangkir.\n(2) Tuangkan air panas secukupnya ke dalam cangkir.\n(3) Siapkan cangkir, kantong teh celup, gula pasir, air panas, dan sendok.\n(4) Aduk air teh perlahan hingga gula larut sempurna dan teh siap disajikan.\n\nUrutan instruksi logis yang paling tepat dan benar adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="80" height="60" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="40" y="24" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Tahap 1</text>
        <text x="40" y="44" fill="#475569" font-size="9" text-anchor="middle">Siapkan Alat</text>
        
        <path d="M 85 30 L 105 30" stroke="#3B82F6" stroke-width="2"/>
        
        <rect x="110" y="0" width="80" height="60" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="150" y="24" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Tahap 2</text>
        <text x="150" y="44" fill="#475569" font-size="9" text-anchor="middle">Bahan Masuk</text>
        
        <path d="M 195 30 L 215 30" stroke="#3B82F6" stroke-width="2"/>
        
        <rect x="220" y="0" width="80" height="60" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="260" y="24" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Tahap 3</text>
        <text x="260" y="44" fill="#475569" font-size="9" text-anchor="middle">Tuang Air</text>
        
        <path d="M 305 30 L 325 30" stroke="#3B82F6" stroke-width="2"/>
        
        <rect x="330" y="0" width="80" height="60" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="370" y="24" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Tahap 4</text>
        <text x="370" y="44" fill="#059669" font-size="9" text-anchor="middle">Aduk &amp; Sajikan</text>
      </g>
      <text x="210" y="112" fill="#334155" font-size="10" font-weight="semibold" text-anchor="middle">Algoritma Aktivitas Sehari-hari: Menyiapkan -> Mengisi -> Menyeduh -> Mengaduk</text>
    </svg>`,
    options: [
      { id: 'A', text: '(3) -> (1) -> (2) -> (4)' },
      { id: 'B', text: '(1) -> (2) -> (3) -> (4)' },
      { id: 'C', text: '(4) -> (3) -> (2) -> (1)' },
      { id: 'D', text: '(2) -> (4) -> (1) -> (3)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan yang tepat: (3) Menyiapkan alat dan bahan terlebih dahulu, (1) Memasukkan teh dan gula ke cangkir, (2) Menuangkan air panas ke dalam cangkir, dan (4) Mengaduk hingga gula larut sempurna sehingga teh siap disajikan.',
  },

  // --- SOAL 5 ---
  {
    id: 5,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Ketika kita menuliskan urutan instruksi logis untuk sebuah program koding, setiap baris kalimat perintah sebaiknya diawali dengan...',
    options: [
      { id: 'A', text: 'Kata tanya seperti "Mengapa" atau "Bagaimanakah"' },
      { id: 'B', text: 'Kata kerja perintah (aksi) yang spesifik dan jelas, seperti "Maju", "Ambil", atau "Putar"' },
      { id: 'C', text: 'Kalimat cerita dongeng yang panjang' },
      { id: 'D', text: 'Tanda tanya sebanyak-banyaknya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Instruksi logis ditulis dalam bentuk kalimat perintah (imperatif) yang diawali dengan kata kerja aksi yang tegas, jelas, dan dapat dikerjakan mesin (misal: "Maju 2 petak", "Belok kanan 90 derajat", "Simpan angka").',
  },

  // --- SOAL 6 ---
  {
    id: 6,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan papan petak (grid) pada gambar di atas!\nRobot berada di petak (Baris 4, Kolom 1) menghadap ke arah ATAS. Terdapat batu rintangan di petak (Baris 3, Kolom 1). Agar robot dapat sampai ke petak BINTANG tanpa menabrak batu, urutan instruksi yang tepat adalah...',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="140" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <!-- Grid 4 cols x 4 rows -->
      <g transform="translate(145, 12)">
        <!-- Grid cells 26x26 -->
        <!-- Row 1 -->
        <rect x="0" y="0" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="28" y="0" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="56" y="0" width="28" height="28" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="70" y="19" font-size="14" text-anchor="middle">⭐</text>
        <rect x="84" y="0" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>

        <!-- Row 2 -->
        <rect x="0" y="28" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="28" y="28" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="56" y="28" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="84" y="28" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>

        <!-- Row 3 -->
        <rect x="0" y="56" width="28" height="28" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="14" y="75" font-size="14" text-anchor="middle">🪨</text>
        <rect x="28" y="56" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="56" y="56" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="84" y="56" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>

        <!-- Row 4 -->
        <rect x="0" y="84" width="28" height="28" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="14" y="103" font-size="14" text-anchor="middle">🤖</text>
        <rect x="28" y="84" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="56" y="84" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
        <rect x="84" y="84" width="28" height="28" fill="#FFFFFF" stroke="#CBD5E1"/>
      </g>
      <!-- Legends -->
      <g transform="translate(15, 30)">
        <text x="0" y="15" fill="#1E293B" font-size="10" font-weight="bold">Keterangan:</text>
        <text x="0" y="32" fill="#1D4ED8" font-size="9.5">🤖 Posisi Robot (Awal)</text>
        <text x="0" y="48" fill="#DC2626" font-size="9.5">🪨 Batu (Rintangan)</text>
        <text x="0" y="64" fill="#D97706" font-size="9.5">⭐ Target Bintang</text>
        <text x="0" y="80" fill="#64748B" font-size="8.5">Hadap Awal: ATAS ⬆️</text>
      </g>
      <!-- Green path line suggestion -->
      <g transform="translate(300, 35)">
        <rect x="0" y="0" width="105" height="65" rx="6" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="52" y="20" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">Tujuan Robot:</text>
        <text x="52" y="36" fill="#15803D" font-size="9" text-anchor="middle">Hindari Batu 🪨</text>
        <text x="52" y="52" fill="#15803D" font-size="9" text-anchor="middle">Capai Bintang ⭐</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Maju 1 petak -> Maju 1 petak -> Belok Kanan' },
      { id: 'B', text: 'Belok Kanan -> Maju 2 petak -> Belok Kiri -> Maju 3 petak' },
      { id: 'C', text: 'Belok Kiri -> Maju 1 petak -> Putar Balik -> Mundur 2 petak' },
      { id: 'D', text: 'Maju 3 petak -> Belok Kiri -> Maju 1 petak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Karena tepat di depan robot ada rintangan batu, robot tidak boleh maju ke atas. Robot harus: Belok Kanan (menghadap kanan) -> Maju 2 petak (sampai di kolom bintang) -> Belok Kiri (menghadap atas kembali) -> Maju 3 petak lurus ke atas hingga mencapai bintang.',
  },

  // --- SOAL 7 ---
  {
    id: 7,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Perhatikan simbol bagan alir (flowchart) pada gambar di atas!\nBentuk elips atau lonjong (oval/terminator) dalam perancangan urutan instruksi logis digunakan untuk...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(150, 20)">
        <rect x="0" y="0" width="120" height="46" rx="23" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
        <text x="60" y="28" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">MULAI</text>
      </g>
      <text x="210" y="90" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Simbol Oval / Terminator Flowchart</text>
      <text x="210" y="110" fill="#64748B" font-size="10" text-anchor="middle">Menandakan batas awal dan batas akhir dari rangkaian instruksi</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Menandai titik Mulai (Start) dan titik Selesai (End) dari program' },
      { id: 'B', text: 'Menghitung perkalian angka dalam jumlah banyak' },
      { id: 'C', text: 'Memilih keputusan antara benar atau salah' },
      { id: 'D', text: 'Menyimpan berkas dokumen ke dalam flashdisk' },
    ],
    correctAnswer: 'A',
    explanation:
      'Simbol oval (disebut simbol Terminator) pada diagram alir (flowchart) selalu digunakan untuk menandai permulaan (Mulai/Start) dan penutupan (Selesai/End) dari suatu alur instruksi logis.',
  },

  // --- SOAL 8 ---
  {
    id: 8,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Pada diagram alir (flowchart), simbol berbentuk persegi panjang (rectangle) memiliki fungsi untuk menuliskan...',
    options: [
      { id: 'A', text: 'Titik mulai dan selesai program' },
      { id: 'B', text: 'Langkah proses kegiatan, aksi kerja, atau perhitungan matematika' },
      { id: 'C', text: 'Pilihan percabangan kondisi Ya atau Tidak' },
      { id: 'D', text: 'Mencetak dokumen ke mesin cetak fisik' },
    ],
    correctAnswer: 'B',
    explanation:
      'Simbol persegi panjang (Process) berfungsi merepresentasikan aktivitas pemrosesan, perhitungan, atau tindakan yang harus dikerjakan oleh sistem.',
  },

  // --- SOAL 9 ---
  {
    id: 9,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan panduan 6 langkah mencuci tangan bersih dengan sabun pada gambar di atas!\nMengapa membilas tangan dengan air mengalir dilakukan SETELAH kita menggosok tangan dengan sabun?',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(10, 20)">
        <rect x="0" y="0" width="90" height="55" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="45" y="22" fill="#1D4ED8" font-size="9.5" font-weight="bold" text-anchor="middle">Langkah 1</text>
        <text x="45" y="38" fill="#1E293B" font-size="8.5" text-anchor="middle">Basahi tangan</text>
        
        <rect x="100" y="0" width="90" height="55" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="145" y="22" fill="#1D4ED8" font-size="9.5" font-weight="bold" text-anchor="middle">Langkah 2</text>
        <text x="145" y="38" fill="#1E293B" font-size="8.5" text-anchor="middle">Tuang sabun</text>

        <rect x="200" y="0" width="95" height="55" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="247" y="22" fill="#1D4ED8" font-size="9.5" font-weight="bold" text-anchor="middle">Langkah 3</text>
        <text x="247" y="38" fill="#1E293B" font-size="8.5" text-anchor="middle">Gosok sela jari</text>

        <rect x="305" y="0" width="95" height="55" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
        <text x="352" y="22" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">Langkah 4 ⭐</text>
        <text x="352" y="38" fill="#065F46" font-size="8.5" text-anchor="middle">Bilas air bersih</text>
      </g>
      <text x="210" y="105" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Urutan Instruksi Kebersihan: Sabun membersihkan kuman -> Air mengalir membilasnya</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Supaya busa sabun dan kotoran yang terangkat dapat hanyut terbuang bersama air' },
      { id: 'B', text: 'Agar tangan menjadi licin dan sulit memegang buku' },
      { id: 'C', text: 'Supaya sabun menempel selamanya di kulit tangan' },
      { id: 'D', text: 'Hanya sebagai hiasan kegiatan tanpa manfaat kesehatan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Secara logika kebersihan, sabun berfungsi melepaskan kotoran dan kuman dari permukaan kulit, kemudian air mengalir membilas busa serta kotoran tersebut agar terbuang tuntas.',
  },

  // --- SOAL 10 ---
  {
    id: 10,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan urutan instruksi mengirim pesan singkat (chatting) berikut ini:\n1. Buka aplikasi perpesanan di gawai.\n2. Pilih nama kontak teman yang ingin dihubungi.\n3. [ . . . . . . . . . . . . . . . . . . . . ]\n4. Tekan tombol Kirim (Send).\n\nInstruksi logis yang tepat untuk melengkapi langkah nomor 3 yang hilang adalah...',
    options: [
      { id: 'A', text: 'Matikan daya ponsel sampai layar padam' },
      { id: 'B', text: 'Ketik pesan teks yang ingin disampaikan pada kolom pesan' },
      { id: 'C', text: 'Hapus seluruh nomor telepon teman di kontak' },
      { id: 'D', text: 'Nyalakan lampu senter pada ponsel' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah logis setelah memilih kontak penerima dan sebelum menekan tombol kirim adalah mengetik teks pesan yang ingin disampaikan. Tanpa mengetik pesan, tidak ada informasi yang dapat dikirimkan.',
  },

  // --- SOAL 11 ---
  {
    id: 11,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan susunan blok kode visual pada gambar di atas!\nJika mula-mula karakter kucing menghadap ke arah KANAN, maka setelah menjalankan blok instruksi tersebut, karakter kucing akan...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(60, 15)">
        <!-- Block 1: Event -->
        <rect x="0" y="0" width="160" height="24" rx="6" fill="#F59E0B"/>
        <text x="80" y="16" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">ketika 🟢 diklik</text>
        <!-- Block 2: Move -->
        <rect x="10" y="27" width="150" height="24" rx="6" fill="#3B82F6"/>
        <text x="85" y="43" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">gerak 50 langkah</text>
        <!-- Block 3: Turn -->
        <rect x="10" y="54" width="150" height="24" rx="6" fill="#3B82F6"/>
        <text x="85" y="70" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">putar ↷ 90 derajat</text>
        <!-- Block 4: Move again -->
        <rect x="10" y="81" width="150" height="24" rx="6" fill="#3B82F6"/>
        <text x="85" y="97" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">gerak 50 langkah</text>
      </g>
      <!-- Simulation Arrow -->
      <g transform="translate(260, 25)">
        <rect x="0" y="0" width="130" height="85" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="65" y="22" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Jejak Gerakan:</text>
        <!-- Path: Right 40px, Down 40px -->
        <path d="M 30 40 L 75 40 L 75 75" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="3,3"/>
        <circle cx="30" cy="40" r="4" fill="#10B981"/>
        <circle cx="75" cy="75" r="4" fill="#EF4444"/>
        <text x="30" y="32" font-size="7" fill="#10B981" font-weight="bold">Start</text>
        <text x="75" y="85" font-size="7" fill="#EF4444" font-weight="bold">Finish</text>
      </g>
      <text x="210" y="125" fill="#475569" font-size="9" text-anchor="middle">Blok pemrograman visual berurutan dari atas ke bawah</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Berjalan mundur ke kiri lalu berhenti' },
      { id: 'B', text: 'Maju ke kanan 50 langkah, berputar menghadap ke BAWAH, lalu bergerak ke bawah 50 langkah' },
      { id: 'C', text: 'Hanya berputar-putar di tempat tanpa berpindah posisi' },
      { id: 'D', text: 'Melompat langsung ke luar area layar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mula-mula hadap kanan: Gerak 50 langkah ke kanan -> Putar kanan 90° (menghadap ke arah bawah) -> Gerak 50 langkah ke arah hadapnya yang baru (ke bawah).',
  },

  // --- SOAL 12 ---
  {
    id: 12,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    text: 'Perhatikan algoritma menyeberang jalan raya di depan gerbang SD Negeri 3 Loloan Timur berikut:\n(1) Menengok ke kanan dan ke kiri untuk memastikan jalanan aman dan kendaraan berhenti.\n(2) Mulai melangkah menyeberang dengan tertib di atas marka garis zebra cross.\n(3) Berhenti dan berdiri di tepi trotoar jalan.\n(4) Menunggu lampu isyarat penyeberang jalan menyala hijau.\n\nUrutan instruksi keselamatan yang paling aman dan logis adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <!-- Zebra Cross Pattern -->
        <rect x="0" y="20" width="130" height="55" fill="#334155" rx="4"/>
        <rect x="15" y="25" width="15" height="45" fill="#FFFFFF"/>
        <rect x="45" y="25" width="15" height="45" fill="#FFFFFF"/>
        <rect x="75" y="25" width="15" height="45" fill="#FFFFFF"/>
        <rect x="105" y="25" width="15" height="45" fill="#FFFFFF"/>
        <text x="65" y="14" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Zebra Cross</text>
      </g>
      <g transform="translate(190, 20)">
        <rect x="0" y="0" width="200" height="75" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="100" y="20" fill="#1E40AF" font-size="10.5" font-weight="bold" text-anchor="middle">Aturan Menyeberang Aman</text>
        <text x="12" y="38" fill="#1E293B" font-size="9">1. Berhenti di trotoar</text>
        <text x="12" y="52" fill="#1E293B" font-size="9">2. Tunggu lampu hijau pejalan kaki</text>
        <text x="12" y="66" fill="#1E293B" font-size="9">3. Tengok kanan-kiri -> Menyeberang</text>
      </g>
      <text x="210" y="112" fill="#475569" font-size="10" font-weight="semibold" text-anchor="middle">Instruksi keselamatan wajib memprioritaskan pengecekan kondisi sebelum melangkah</text>
    </svg>`,
    options: [
      { id: 'A', text: '(3) -> (4) -> (1) -> (2)' },
      { id: 'B', text: '(2) -> (1) -> (3) -> (4)' },
      { id: 'C', text: '(1) -> (2) -> (4) -> (3)' },
      { id: 'D', text: '(4) -> (2) -> (1) -> (3)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan yang tepat: (3) Berdiri aman di trotoar, (4) Menunggu lampu hijau pejalan kaki, (1) Menengok kanan dan kiri untuk memastikan keselamatan, baru (2) Melangkah menyeberang dengan tertib di atas zebra cross.',
  },

  // --- SOAL 13 ---
  {
    id: 13,
    type: 'pg',
    topic: 'Apa Itu Urutan Instruksi Logis',
    difficulty: 'Mudah',
    text: 'Mengapa dalam menyusun instruksi untuk program koding kita tidak boleh menggunakan kalimat yang membingungkan atau bermakna ganda (ambigu)?',
    options: [
      { id: 'A', text: 'Supaya komputer tidak salah menafsirkan perintah dan menghasilkan kekeliruan (error)' },
      { id: 'B', text: 'Agar komputer cepat kehabisan daya baterai' },
      { id: 'C', text: 'Supaya tulisan kode terlihat lebih keren' },
      { id: 'D', text: 'Agar hasil program tidak dapat dibuka oleh guru' },
    ],
    correctAnswer: 'A',
    explanation:
      'Komputer membutuhkan kepastian logis. Jika instruksi ambigu atau memiliki dua arti berbeda, komputer tidak dapat memilih dengan benar dan program berisiko berhenti karena mengalami error.',
  },

  // --- SOAL 14 ---
  {
    id: 14,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan blok instruksi perulangan (loop) pada gambar di atas!\nInstruksi di dalam blok perulangan tersebut akan membuat kursor pena menggambar bentuk bangun datar...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(40, 15)">
        <!-- Loop Block Header -->
        <path d="M 0 0 L 170 0 L 170 24 L 25 24 L 25 76 L 170 76 L 170 94 L 0 94 Z" fill="#10B981"/>
        <text x="85" y="16" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">ulangi 4 kali</text>
        <!-- Inner Blocks -->
        <rect x="30" y="27" width="135" height="20" rx="4" fill="#3B82F6"/>
        <text x="97" y="41" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">maju 100 langkah</text>
        <rect x="30" y="51" width="135" height="20" rx="4" fill="#3B82F6"/>
        <text x="97" y="65" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">putar kanan 90 derajat</text>
      </g>
      <!-- Result Shape Simulation -->
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="110" height="90" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <rect x="25" y="15" width="60" height="60" fill="none" stroke="#2563EB" stroke-width="3"/>
        <text x="55" y="85" fill="#1E3A8A" font-size="9" font-weight="bold" text-anchor="middle">4 Sisi Sama Panjang</text>
      </g>
      <text x="210" y="124" fill="#475569" font-size="9.5" text-anchor="middle">Perulangan (Loop) menyederhanakan instruksi yang berulang menjadi ringkas</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Segitiga sama sisi' },
      { id: 'B', text: 'Lingkaran bundar' },
      { id: 'C', text: 'Persegi (bujur sangkar)' },
      { id: 'D', text: 'Bintang bersudut lima' },
    ],
    correctAnswer: 'C',
    explanation:
      'Maju 100 langkah lalu belok kanan 90° yang diulang sebanyak 4 kali akan membentuk bangun tertutup dengan 4 sisi sama panjang dan 4 sudut siku-siku, yaitu Persegi (bujur sangkar). Total putaran = 4 × 90° = 360°.',
  },

  // --- SOAL 15 ---
  {
    id: 15,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan urutan memakai kelengkapan seragam sekolah di pagi hari:\n1. Memakai kemeja putih dan bawahan merah seragam SD.\n2. [ . . . . . . . . . . . . . . . . . . . . ]\n3. Memakai sepatu sekolah dan mengikat talinya dengan kencang.\n\nInstruksi logis yang tepat untuk mengisi langkah nomor 2 adalah...',
    options: [
      { id: 'A', text: 'Memakai kaus kaki bersih pada kedua kaki' },
      { id: 'B', text: 'Membasahi sepatu dengan air sabun' },
      { id: 'C', text: 'Melepas kembali seragam sekolah' },
      { id: 'D', text: 'Mengunci pintu rumah dari luar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Secara logis dan runtut, kaus kaki harus dipakai terlebih dahulu ke kaki sebelum kaki dimasukkan ke dalam sepatu sekolah.',
  },

  // --- SOAL 16 ---
  {
    id: 16,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram alir percabangan (decision) pada gambar di atas!\nJika kondisi "Apakah Hari Ini Hujan?" bernilai TIDAK, maka instruksi aksi yang akan dijalankan oleh sistem adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(140, 10)">
        <!-- Diamond Shape: Decision -->
        <path d="M 70 0 L 135 30 L 70 60 L 5 30 Z" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
        <text x="70" y="28" fill="#92400E" font-size="9" font-weight="bold" text-anchor="middle">Apakah</text>
        <text x="70" y="40" fill="#92400E" font-size="9" font-weight="bold" text-anchor="middle">Hujan?</text>
      </g>
      <!-- Branch YA -> Left -->
      <g transform="translate(20, 45)">
        <path d="M 125 -5 L 50 -5 L 50 20" fill="none" stroke="#DC2626" stroke-width="2"/>
        <text x="85" y="-10" fill="#DC2626" font-size="9" font-weight="bold">YA</text>
        <rect x="0" y="20" width="100" height="36" rx="6" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="50" y="42" fill="#991B1B" font-size="9" font-weight="bold" text-anchor="middle">Bawa Payung ☂️</text>
      </g>
      <!-- Branch TIDAK -> Right -->
      <g transform="translate(275, 45)">
        <path d="M 0 -5 L 75 -5 L 75 20" fill="none" stroke="#16A34A" stroke-width="2"/>
        <text x="35" y="-10" fill="#16A34A" font-size="9" font-weight="bold">TIDAK</text>
        <rect x="25" y="20" width="100" height="36" rx="6" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="75" y="42" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">Pakai Topi 🧢</text>
      </g>
      <text x="210" y="122" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Simbol Belah Ketupat (Decision): Memilih jalur aksi berdasarkan kondisi</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Bawa Payung' },
      { id: 'B', text: 'Pakai Topi' },
      { id: 'C', text: 'Kembali tidur di kasur' },
      { id: 'D', text: 'Bawa jas hujan dan payung sekaligus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada diagram alir percabangan, jika kondisi "Apakah Hujan?" bernilai TIDAK, maka alur panah mengarah ke kanan menuju proses "Pakai Topi".',
  },

  // --- SOAL 17 ---
  {
    id: 17,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Sebuah robot mini diletakkan pada garis bilangan mula-mula tepat di angka 1. Diberikan rangkaian instruksi berikut:\n- Langkah 1: Maju 3 langkah ke arah kanan\n- Langkah 2: Mundur 1 langkah ke arah kiri\n- Langkah 3: Maju 2 langkah ke arah kanan\n\nPada angka berapakah posisi akhir robot mini tersebut berada?',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 45)">
        <!-- Line -->
        <line x1="0" y1="20" x2="360" y2="20" stroke="#334155" stroke-width="3"/>
        <!-- Numbers 0 to 6 -->
        <!-- 0 -->
        <circle cx="20" cy="20" r="4" fill="#334155"/>
        <text x="20" y="42" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">0</text>
        <!-- 1 (Start) -->
        <circle cx="70" cy="20" r="6" fill="#3B82F6"/>
        <text x="70" y="42" fill="#1D4ED8" font-size="12" font-weight="bold" text-anchor="middle">1</text>
        <text x="70" y="2" fill="#1D4ED8" font-size="9" font-weight="bold" text-anchor="middle">🤖 Start</text>
        <!-- 2 -->
        <circle cx="120" cy="20" r="4" fill="#334155"/>
        <text x="120" y="42" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">2</text>
        <!-- 3 -->
        <circle cx="170" cy="20" r="4" fill="#334155"/>
        <text x="170" y="42" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">3</text>
        <!-- 4 -->
        <circle cx="220" cy="20" r="4" fill="#334155"/>
        <text x="220" y="42" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">4</text>
        <!-- 5 -->
        <circle cx="270" cy="20" r="6" fill="#10B981"/>
        <text x="270" y="42" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">5</text>
        <!-- 6 -->
        <circle cx="320" cy="20" r="4" fill="#334155"/>
        <text x="320" y="42" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">6</text>
      </g>
      <text x="210" y="105" fill="#64748B" font-size="9.5" text-anchor="middle">Perhitungan posisi: Posisi Awal + Gerak Maju - Gerak Mundur</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Angka 3' },
      { id: 'B', text: 'Angka 4' },
      { id: 'C', text: 'Angka 5' },
      { id: 'D', text: 'Angka 6' },
    ],
    correctAnswer: 'C',
    explanation:
      'Posisi awal = 1.\nLangkah 1 (Maju 3 ke kanan) = 1 + 3 = 4.\nLangkah 2 (Mundur 1 ke kiri) = 4 - 1 = 3.\nLangkah 3 (Maju 2 ke kanan) = 3 + 2 = 5.\nJadi posisi akhir robot berada tepat di angka 5.',
  },

  // --- SOAL 18 ---
  {
    id: 18,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Dalam bidang pemrograman komputer (koding), kegiatan menelusuri, menemukan, dan memperbaiki kesalahan pada baris instruksi program dinamakan...',
    options: [
      { id: 'A', text: 'Downloading' },
      { id: 'B', text: 'Debugging' },
      { id: 'C', text: 'Browsing' },
      { id: 'D', text: 'Gaming' },
    ],
    correctAnswer: 'B',
    explanation:
      'Debugging adalah istilah resmi dalam koding yang berarti proses mendeteksi kesalahan (bug) pada urutan instruksi program, lalu memperbaikinya agar program dapat berjalan dengan semestinya.',
  },

  // --- SOAL 19 ---
  {
    id: 19,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Penulisan urutan instruksi logis yang menyerupai bahasa manusia sehari-hari namun sudah terstruktur rapi menyerupai kode komputer disebut...',
    options: [
      { id: 'A', text: 'Sandi Morse' },
      { id: 'B', text: 'Pseudocode (Kode Semu)' },
      { id: 'C', text: 'Hieroglif Kuno' },
      { id: 'D', text: 'Puisi Pantun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pseudocode (kode semu) adalah representasi teks terstruktur dari sebuah algoritma yang menggunakan kalimat bahasa manusia yang sederhana dan mirip dengan bahasa pemrograman sebelum diketik ke kode program nyata.',
  },

  // --- SOAL 20 ---
  {
    id: 20,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan urutan langkah menyalakan laptop di laboratorium komputer SD Negeri 3 Loloan Timur:\n(1) Tekan tombol Power pada laptop satu kali.\n(2) Buka penutup layar laptop ke atas dengan perlahan.\n(3) Tunggu proses booting sistem operasi hingga layar desktop siap digunakan.\n(4) Pastikan daya baterai terisi atau kabel adaptor telah tersambung.\n\nUrutan instruksi logis yang benar saat hendak menggunakan laptop adalah...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="85" height="55" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="42" y="22" fill="#1E293B" font-size="9" font-weight="bold" text-anchor="middle">1. Cek Daya</text>
        <text x="42" y="38" fill="#475569" font-size="8.5" text-anchor="middle">🔌 Adaptor</text>

        <rect x="100" y="0" width="85" height="55" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="142" y="22" fill="#1E293B" font-size="9" font-weight="bold" text-anchor="middle">2. Buka Layar</text>
        <text x="142" y="38" fill="#475569" font-size="8.5" text-anchor="middle">💻 Buka Laptop</text>

        <rect x="200" y="0" width="85" height="55" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="242" y="22" fill="#1E293B" font-size="9" font-weight="bold" text-anchor="middle">3. Tombol Power</text>
        <text x="242" y="38" fill="#475569" font-size="8.5" text-anchor="middle">🔘 Tekan Sekali</text>

        <rect x="300" y="0" width="85" height="55" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="342" y="22" fill="#065F46" font-size="9" font-weight="bold" text-anchor="middle">4. Siap Pakai</text>
        <text x="342" y="38" fill="#047857" font-size="8.5" text-anchor="middle">🖥️ Tampil Desktop</text>
      </g>
      <text x="210" y="102" fill="#475569" font-size="9.5" font-weight="semibold" text-anchor="middle">Prosedur Operasi Baku: Memastikan Daya -> Menyalakan -> Menunggu Sistem Siap</text>
    </svg>`,
    options: [
      { id: 'A', text: '(4) -> (2) -> (1) -> (3)' },
      { id: 'B', text: '(1) -> (3) -> (2) -> (4)' },
      { id: 'C', text: '(3) -> (1) -> (4) -> (2)' },
      { id: 'D', text: '(2) -> (1) -> (3) -> (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan yang tepat: (4) Memastikan daya listrik aman, (2) Membuka penutup laptop ke atas, (1) Menekan tombol Power, dan (3) Menunggu proses booting hingga layar desktop muncul dan siap digunakan.',
  },

  // --- SOAL 21 ---
  {
    id: 21,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sukar',
    text: 'Perhatikan dua alternatif lintasan robot pada gambar di atas!\nJalur A membutuhkan 8 langkah instruksi, sedangkan Jalur B membutuhkan 5 langkah instruksi untuk mencapai titik tujuan yang sama tanpa rintangan.\nDalam koding, memilih Jalur B lebih diutamakan karena...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="70" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="80" y="22" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">Jalur A (Berliku)</text>
        <path d="M 20 45 L 50 45 L 50 35 L 90 35 L 90 55 L 140 55" fill="none" stroke="#EF4444" stroke-width="2.5"/>
        <text x="80" y="62" fill="#DC2626" font-size="9" font-weight="bold" text-anchor="middle">Total: 8 Langkah</text>
      </g>
      <g transform="translate(230, 20)">
        <rect x="0" y="0" width="160" height="70" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
        <text x="80" y="22" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Jalur B (Lurus Efisien)</text>
        <path d="M 20 45 L 140 45" fill="none" stroke="#10B981" stroke-width="3"/>
        <text x="80" y="62" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">Total: 5 Langkah ⭐</text>
      </g>
      <text x="210" y="112" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Algoritma Efisien: Menyelesaikan tugas dengan jumlah langkah terkecil dan tercepat</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Jalur B lebih boros energi baterai' },
      { id: 'B', text: 'Algoritma Jalur B lebih efisien, lebih singkat langkahnya, dan menghemat waktu eksekusi' },
      { id: 'C', text: 'Jalur B membuat program berjalan dua kali lebih lama' },
      { id: 'D', text: 'Jalur B membuat robot berjalan mundur terus-menerus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dalam berpikir komputasional, algoritma yang baik adalah algoritma yang efisien (optimal). Jika dua instruksi sama-sama mencapai tujuan, urutan dengan langkah lebih sedikit lebih dipilih karena lebih cepat dan hemat sumber daya.',
  },

  // --- SOAL 22 ---
  {
    id: 22,
    type: 'pg',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan empat langkah menyikat gigi berikut:\n(1) Oleskan pasta gigi secukupnya di atas bulu sikat gigi.\n(2) Basahi sikat gigi dengan sedikit air bersih.\n(3) Berkumur dengan air bersih untuk membilas busa dan sisa pasta gigi.\n(4) Gosok seluruh bagian permukaan gigi secara merata selama 2 menit.\n\nUrutan instruksi logis yang tepat dari awal sampai selesai adalah...',
    options: [
      { id: 'A', text: '(1) -> (2) -> (4) -> (3)' },
      { id: 'B', text: '(3) -> (4) -> (2) -> (1)' },
      { id: 'C', text: '(2) -> (1) -> (4) -> (3)' },
      { id: 'D', text: '(4) -> (1) -> (3) -> (2)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Urutan logis yang benar: (2) Membasahi sikat gigi, (1) Mengoleskan pasta gigi, (4) Menggosok seluruh permukaan gigi selama 2 menit, lalu (3) Berkumur dengan air bersih untuk membilas busa.',
  },

  // --- SOAL 23 ---
  {
    id: 23,
    type: 'pg',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Diberikan instruksi logika kondisi percabangan sederhana:\n"JIKA nilai_ujian >= 60 MAKA cetak(\'LULUS\') JIKA TIDAK MAKA cetak(\'REMEDIAL\')"\n\nJika seorang siswa SD Negeri 3 Loloan Timur memperoleh nilai ujian sebesar 75, maka teks yang akan dicetak oleh komputer adalah...',
    options: [
      { id: 'A', text: 'REMEDIAL' },
      { id: 'B', text: 'LULUS' },
      { id: 'C', text: 'ERROR' },
      { id: 'D', text: 'BELUM SELESAI' },
    ],
    correctAnswer: 'B',
    explanation:
      'Karena nilai siswa adalah 75, dan 75 >= 60 bernilai BENAR (True), maka komputer akan mengeksekusi instruksi pada cabang MAKA, yaitu mencetak teks "LULUS".',
  },

  // --- SOAL 24 ---
  {
    id: 24,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sukar',
    text: 'Sebuah drone pengantar buku koding berada di titik koordinat (0, 0). Drone tersebut menerima urutan instruksi pergerakan sebagai berikut:\n1. Terbang Maju 2 petak ke arah Timur (kanan)\n2. Terbang Maju 1 petak ke arah Utara (atas)\n3. Turunkan buku paket di titik tersebut\n\nKoordinat posisi tempat mendaratnya paket buku koding tersebut adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(130, 20)">
        <!-- Grid axes -->
        <line x1="20" y1="75" x2="160" y2="75" stroke="#334155" stroke-width="2"/>
        <line x1="20" y1="75" x2="20" y2="10" stroke="#334155" stroke-width="2"/>
        <!-- Axis labels -->
        <text x="165" y="80" fill="#475569" font-size="10" font-weight="bold">X (Timur)</text>
        <text x="20" y="5" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Y (Utara)</text>
        <!-- Ticks -->
        <text x="20" y="90" fill="#64748B" font-size="10" text-anchor="middle">0</text>
        <text x="65" y="90" fill="#64748B" font-size="10" text-anchor="middle">1</text>
        <text x="110" y="90" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">2</text>
        
        <text x="10" y="45" fill="#1D4ED8" font-size="11" font-weight="bold">1</text>
        <!-- Flight path -->
        <path d="M 20 75 L 110 75 L 110 40" fill="none" stroke="#2563EB" stroke-width="2" stroke-dasharray="3,3"/>
        <circle cx="20" cy="75" r="4" fill="#3B82F6"/>
        <circle cx="110" cy="40" r="5" fill="#10B981"/>
        <text x="110" y="32" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">🎯 (2, 1)</text>
      </g>
      <text x="210" y="118" fill="#475569" font-size="9.5" text-anchor="middle">Pergerakan koordinat: Maju ke kanan (+X), Maju ke atas (+Y)</text>
    </svg>`,
    options: [
      { id: 'A', text: '(1, 2)' },
      { id: 'B', text: '(2, 1)' },
      { id: 'C', text: '(0, 3)' },
      { id: 'D', text: '(2, 2)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Posisi awal = (0, 0).\nLangkah 1 (Timur/kanan 2 petak) mengubah sumbu X menjadi 0 + 2 = 2.\nLangkah 2 (Utara/atas 1 petak) mengubah sumbu Y menjadi 0 + 1 = 1.\nSehingga titik koordinat akhir adalah (X=2, Y=1) atau (2, 1).',
  },

  // --- SOAL 25 ---
  {
    id: 25,
    type: 'pg',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sukar',
    text: 'Perhatikan diagram alur perubahan nilai variabel kotak X pada gambar di atas!\n1. Mula-mula variabel X bernilai 5.\n2. Jalankan instruksi: Tambahkan X dengan 3 (X = X + 3).\n3. Jalankan instruksi: Kalikan nilai X yang baru dengan 2 (X = X × 2).\n\nBerapakah nilai akhir dari variabel X setelah seluruh instruksi selesai dieksekusi?',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(20, 20)">
        <!-- Box 1 -->
        <rect x="0" y="10" width="80" height="50" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="40" y="30" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">Awal</text>
        <text x="40" y="50" fill="#1E3A8A" font-size="14" font-weight="extrabold" text-anchor="middle">X = 5</text>
        <!-- Arrow 1 -->
        <path d="M 85 35 L 115 35 M 110 30 L 117 35 L 110 40" stroke="#64748B" stroke-width="2" fill="none"/>
        <!-- Box 2 -->
        <rect x="122" y="10" width="95" height="50" rx="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="169" y="30" fill="#92400E" font-size="10" font-weight="bold" text-anchor="middle">Instruksi 1</text>
        <text x="169" y="50" fill="#B45309" font-size="13" font-weight="extrabold" text-anchor="middle">+ 3 -> (8)</text>
        <!-- Arrow 2 -->
        <path d="M 222 35 L 252 35 M 247 30 L 254 35 L 247 40" stroke="#64748B" stroke-width="2" fill="none"/>
        <!-- Box 3 -->
        <rect x="259" y="10" width="105" height="50" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
        <text x="311" y="30" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Instruksi 2</text>
        <text x="311" y="50" fill="#047857" font-size="13" font-weight="extrabold" text-anchor="middle">× 2 -> X Akhir?</text>
      </g>
      <text x="210" y="112" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Eksekusi bertahap: Setiap langkah memperbarui nilai variabel sebelumnya</text>
    </svg>`,
    options: [
      { id: 'A', text: '11' },
      { id: 'B', text: '13' },
      { id: 'C', text: '16' },
      { id: 'D', text: '25' },
    ],
    correctAnswer: 'C',
    explanation:
      'Nilai awal X = 5.\nSetelah instruksi pertama (X = X + 3): X bernilai 5 + 3 = 8.\nSetelah instruksi kedua (X = X × 2): X bernilai 8 × 2 = 16.\nJadi nilai akhir variabel X adalah 16.',
  },

  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS KATEGORI (5 SOAL)
  // Setiap butir memiliki 3 deskripsi / pernyataan yang harus direspons Benar atau Salah
  // ==========================================

  // --- SOAL 26 ---
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Apa Itu Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan konsep dasar mengenai "Urutan Instruksi Logis" dalam koding dan komputer pada bagan di atas!\nTentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH berdasarkan pemahaman koding Anda.',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="105" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="52" y="24" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">Instruksi Runtut</text>
        <text x="52" y="44" fill="#1E40AF" font-size="9" text-anchor="middle">Langkah 1, 2, 3</text>
        <text x="52" y="58" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">-> Output Tepat ✅</text>
      </g>
      <g transform="translate(155, 20)">
        <text x="45" y="38" fill="#64748B" font-size="14" font-weight="bold" text-anchor="middle">VS</text>
      </g>
      <g transform="translate(265, 20)">
        <rect x="0" y="0" width="125" height="65" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="62" y="24" fill="#DC2626" font-size="10" font-weight="bold" text-anchor="middle">Instruksi Acak / Ambigu</text>
        <text x="62" y="44" fill="#B91C1C" font-size="9" text-anchor="middle">Urutan tertukar</text>
        <text x="62" y="58" fill="#B91C1C" font-size="9" font-weight="bold" text-anchor="middle">-> Terjadi Error ❌</text>
      </g>
      <text x="210" y="112" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Evaluasi Pernyataan: Prinsip Alur Logika Eksekusi Komputer</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Instruksi logis harus disusun teratur langkah demi langkah dari awal hingga selesai agar program komputer menghasilkan keluaran (output) yang tepat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Komputer dapat secara otomatis membetulkan urutan instruksi yang tertukar tanpa perlu campur tangan atau perbaikan dari pembuat program.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Instruksi yang ambigu (memiliki makna ganda) dapat membingungkan sistem komputer dan berpotensi menimbulkan kesalahan (error) pada program.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Urutan instruksi yang runtut menjamin komputer menghasilkan keluaran yang diharapkan.\nPernyataan 2 SALAH: Komputer bekerja secara kaku mengeksekusi apa yang ditulis; jika urutan tertukar, komputer tidak bisa menebak sendiri tanpa perbaikan manusia.\nPernyataan 3 BENAR: Kejelasan instruksi adalah syarat mutlak dalam pemrograman komputer.',
  },

  // --- SOAL 27 ---
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan aturan penulisan diagram alir (flowchart) untuk merancang urutan instruksi logis program koding.\nTentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(20, 20)">
        <!-- Oval -->
        <rect x="0" y="10" width="80" height="36" rx="18" fill="#3B82F6"/>
        <text x="40" y="32" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Mulai / Selesai</text>
      </g>
      <g transform="translate(130, 20)">
        <!-- Rectangle -->
        <rect x="0" y="10" width="80" height="36" rx="4" fill="#10B981"/>
        <text x="40" y="32" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Proses / Aksi</text>
      </g>
      <g transform="translate(240, 20)">
        <!-- Diamond -->
        <path d="M 45 0 L 85 28 L 45 56 L 5 28 Z" fill="#F59E0B"/>
        <text x="45" y="32" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Keputusan?</text>
      </g>
      <g transform="translate(345, 20)">
        <!-- Arrow -->
        <path d="M 0 28 L 45 28 M 35 20 L 45 28 L 35 36" stroke="#475569" stroke-width="3" fill="none"/>
        <text x="25" y="52" fill="#475569" font-size="9" font-weight="bold" text-anchor="middle">Alur</text>
      </g>
      <text x="210" y="112" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Simbol-Simbol Standar Diagram Alir Instruksi (Flowchart)</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Simbol oval (terminator) digunakan khusus untuk menandai titik Mulai (Start) dan titik Akhir (End) pada diagram alir.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Simbol belah ketupat (decision) digunakan untuk menentukan pilihan keputusan berdasarkan suatu kondisi (misalnya Ya atau Tidak).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Garis alir panah (flowline) boleh dibuat terputus tanpa menghubungkan satu langkah dengan langkah lainnya.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Simbol oval adalah terminator untuk awal dan akhir.\nPernyataan 2 BENAR: Simbol belah ketupat adalah penentu percabangan kondisi (Ya/Tidak).\nPernyataan 3 SALAH: Garis alir panah wajib menghubungkan langkah secara bersambung agar urutan program jelas dan tidak terputus.',
  },

  // --- SOAL 28 ---
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Urutan Instruksi Logis dalam Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    text: 'Banyak aktivitas sehari-hari yang membutuhkan urutan instruksi logis terencana agar berhasil dengan selamat dan sempurna.\nTentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="105" height="60" rx="8" fill="#FDF4FF" stroke="#C084FC"/>
        <text x="52" y="24" fill="#7E22CE" font-size="10" font-weight="bold" text-anchor="middle">📖 Resep Kue</text>
        <text x="52" y="44" fill="#6B21A8" font-size="8.5" text-anchor="middle">Urutan Bahan</text>
      </g>
      <g transform="translate(155, 20)">
        <rect x="0" y="0" width="110" height="60" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="55" y="24" fill="#92400E" font-size="10" font-weight="bold" text-anchor="middle">🧩 Merakit Balok</text>
        <text x="55" y="44" fill="#78350F" font-size="8.5" text-anchor="middle">Langkah per Langkah</text>
      </g>
      <g transform="translate(290, 20)">
        <rect x="0" y="0" width="105" height="60" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="52" y="24" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">🚶 Seberang Jalan</text>
        <text x="52" y="44" fill="#047857" font-size="8.5" text-anchor="middle">Prosedur Aman</text>
      </g>
      <text x="210" y="112" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Aplikasi Berpikir Komputasional dalam Aktivitas Nyata Siswa</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Resep memasak kue dan buku petunjuk merakit mainan balok lego merupakan contoh nyata penerapan urutan instruksi logis dalam kehidupan sehari-hari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada prosedur memakai sepatu bertali, mengikat tali sepatu dilakukan terlebih dahulu sebelum kaki dimasukkan ke dalam sepatu.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Melewatkan salah satu langkah penting dalam suatu prosedur kerja dapat membuat hasil akhir menjadi gagal atau tidak sempurna.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Resep dan petunjuk perakitan adalah bentuk algoritma dalam kehidupan sehari-hari.\nPernyataan 2 SALAH: Kaki harus dimasukkan ke dalam sepatu terlebih dahulu, baru kemudian tali sepatu diikat dengan rapi.\nPernyataan 3 BENAR: Melewatkan langkah penting (misalnya lupa memasukkan ragi pada adonan kue) akan menggagalkan hasil akhir.',
  },

  // --- SOAL 29 ---
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Cara Menulis Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Dalam menyusun urutan kode program, terdapat konsep pengulangan (loop) dan teknik perbaikan kesalahan (debugging).\nTentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(35, 18)">
        <rect x="0" y="0" width="150" height="65" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="75" y="24" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">🔁 Blok Pengulangan (Loop)</text>
        <text x="75" y="42" fill="#047857" font-size="8.5" text-anchor="middle">Efisien &amp; Tidak Berulang</text>
        <text x="75" y="56" fill="#059669" font-size="8.5" text-anchor="middle">Ulangi X Kali { ... }</text>
      </g>
      <g transform="translate(235, 18)">
        <rect x="0" y="0" width="150" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="75" y="24" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">🔍 Proses Debugging</text>
        <text x="75" y="42" fill="#1E40AF" font-size="8.5" text-anchor="middle">Lacak Bug / Eror</text>
        <text x="75" y="56" fill="#2563EB" font-size="8.5" text-anchor="middle">Perbaiki Instruksi</text>
      </g>
      <text x="210" y="112" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Teknik Koding: Loop untuk efisiensi penulisan &amp; Debugging untuk perbaikan kode</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Blok pengulangan (loop) berguna untuk menuliskan instruksi yang sama berulang kali tanpa harus mengetik ulang baris kode tersebut satu per satu.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kegiatan "Debugging" bertujuan untuk menambahkan sebanyak mungkin kesalahan baru ke dalam kode program agar semakin sulit dijalankan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Perintah "Ulangi 4 kali [Maju 1 langkah, Putar kanan 90 derajat]" akan menggerakkan objek hingga kembali menghadap ke arah semula.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Loop menghemat waktu penulisan kode dan membuat program lebih bersih.\nPernyataan 2 SALAH: Debugging adalah proses menemukan dan memperbaiki kesalahan (bug), bukan menambah kesalahan baru.\nPernyataan 3 BENAR: Berputar 90° sebanyak 4 kali berarti berputar total 360°, sehingga objek kembali menghadap ke arah awal.',
  },

  // --- SOAL 30 ---
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Urutan Instruksi Logis',
    difficulty: 'Sedang',
    text: 'Perhatikan bagaimana komputer mengeksekusi instruksi koding baris demi baris pada diagram di atas!\nTentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(60, 15)">
        <rect x="0" y="0" width="300" height="75" rx="8" fill="#1E293B"/>
        <text x="15" y="22" fill="#38BDF8" font-size="9" font-family="monospace">1. hidupkan_mesin()</text>
        <text x="15" y="38" fill="#4ADE80" font-size="9" font-family="monospace">2. jika baterai &gt; 20 maka</text>
        <text x="35" y="52" fill="#FCD34D" font-size="9" font-family="monospace">3.   jalan_maju(50)</text>
        <text x="15" y="67" fill="#F87171" font-size="9" font-family="monospace">4. selesai</text>
      </g>
      <text x="210" y="112" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">Komputer mengeksekusi instruksi berurutan baris demi baris (Sequential Execution)</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Secara normal, komputer akan membaca dan mengeksekusi instruksi baris demi baris mulai dari baris paling atas menuju baris di bawahnya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengubah urutan baris instruksi dapat menghasilkan keluaran (output) atau aksi akhir yang sama sekali berbeda dari yang direncanakan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Komputer memiliki perasaan sehingga dapat otomatis menebak kemauan pengguna meskipun perintah yang dituliskan salah.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Eksekusi berurutan (sequential) membaca baris kode dari baris awal ke baris berikutnya secara teratur.\nPernyataan 2 BENAR: Urutan baris sangat menentukan jalannya logika program; jika urutan diubah, output atau perilaku sistem bisa berubah drastis.\nPernyataan 3 SALAH: Komputer adalah mesin logika tanpa perasaan atau intuisi; komputer hanya menjalankan perintah persis seperti apa yang dikodekan.',
  },
];
