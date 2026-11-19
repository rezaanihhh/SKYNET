/* SKYNET - Landing page 1 halaman */
const PHONE = '6285712495146', WA = 'https://wa.me/' + PHONE, EMAIL = 'kefalex2@gmail.com';
const wa = t => WA + '?text=' + encodeURIComponent(t);
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rp = n => 'Rp ' + Math.round(n).toLocaleString('id-ID');
const NAV = [['beranda', 'Beranda'], ['tentang', 'Tentang Kami'], ['layanan', 'Layanan'], ['monitor', 'IT Monitor'], ['tools', 'IT Tools'], ['harga', 'Harga'], ['faq', 'FAQ'], ['kontak', 'Kontak']];

/* ILUSTRASI */
const GR = '<defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs>';
const S1 = 'stroke="url(#gg)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"', FL = 'fill="rgba(168,85,247,.12)"';
const ART = {
    computer: `<rect x="75" y="28" width="170" height="112" rx="10" ${FL} ${S1}/><path d="M135 140v26h50v-26M105 170h110" fill="none" ${S1}/><path d="M160 58v50M135 83h50" fill="none" stroke="url(#gg)" stroke-width="9" stroke-linecap="round"/><rect x="22" y="150" width="70" height="40" rx="6" ${FL} ${S1}/><path d="M14 196h86" ${S1}/>`,
    network: `<g ${S1} fill="none"><path d="M160 110L60 45M160 110L260 45M160 110L60 180M160 110L260 180"/></g><circle cx="160" cy="110" r="26" ${FL} ${S1}/><path d="M148 110a16 16 0 0 1 24 0M154 118a8 8 0 0 1 12 0" fill="none" ${S1}/><g ${FL} ${S1}><rect x="36" y="28" width="48" height="34" rx="6"/><rect x="236" y="28" width="48" height="34" rx="6"/><rect x="36" y="163" width="48" height="34" rx="6"/><rect x="236" y="163" width="48" height="34" rx="6"/></g>`,
    server: `<g ${FL} ${S1}><rect x="70" y="26" width="180" height="48" rx="10"/><rect x="70" y="86" width="180" height="48" rx="10"/><rect x="70" y="146" width="180" height="48" rx="10"/></g><g fill="#38bdf8"><circle cx="100" cy="50" r="6"/><circle cx="100" cy="110" r="6"/><circle cx="100" cy="170" r="6"/></g><path d="M140 50h80M140 110h80M140 170h80" ${S1} fill="none" opacity=".6"/>`,
    security: `<path d="M160 22l78 28v56c0 46-32 76-78 94-46-18-78-48-78-94V50z" ${FL} ${S1}/><rect x="132" y="98" width="56" height="44" rx="8" fill="rgba(56,189,248,.18)" ${S1}/><path d="M142 98V86a18 18 0 0 1 36 0v12" fill="none" ${S1}/><circle cx="160" cy="120" r="5" fill="#38bdf8"/>`
};
const artImg = (k, i) => { const svFallback = `<div class="art"><svg viewBox="0 0 320 220" role="img" aria-label="Ilustrasi ${k}">${GR}${ART[k]}</svg></div>`; const src = SV_PHOTOS[i]; return `<div class="art sv-art"><img class="sv-img" src="${src}" alt="Layanan ${k}" onerror="this.closest('.sv-art').classList.add('sv-fallback')"><div class="sv-svg">${svFallback}</div></div>` };
const art = k => `<div class="art"><svg viewBox="0 0 320 220" role="img" aria-label="Ilustrasi ${k}">${GR}${ART[k]}</svg></div>`;
const TEAM_PHOTOS = ['destu-pranawa.jpg', 'koriah.jpg', 'rizky-arrosyid.jpg'];
const SV_PHOTOS = ['layanan-computer.jpg', 'layanan-network.jpg', 'layanan-server.jpg', 'layanan-security.jpg'];
const avatar = (i, name) => {
    const src = TEAM_PHOTOS[i]; const c = ['#38bdf8', '#a855f7', '#818cf8'][i], h = ['M30 44a20 20 0 0 1 40 0v4H30z', 'M28 50a22 22 0 0 1 44 0v10H28z', 'M32 44c0-14 36-14 36 0v6H32z'][i];
    const fallback = `<svg viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" fill="#0d0f22"/><circle cx="50" cy="40" r="46" fill="${c}" opacity=".22"/><path d="M14 100c0-24 16-34 36-34s36 10 36 34z" fill="${c}"/><circle cx="50" cy="44" r="17" fill="#f3c9a8"/><path d="${h}" fill="#0d0f22" transform="translate(0 -6)"/></svg>`;
    return `<div class="av-wrap"><img class="av-img" src="${src}" alt="Foto ${name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">${fallback.replace('<svg', '<svg style="display:none"')}</div>`
};

/* DATA */
const SV = [
    {
        t: 'Computer Support', ico: 'fa-laptop-medical', k: 'computer', sub: 'Perbaikan hardware dan software, instalasi OS berlisensi, upgrade SSD/RAM.',
        d: 'Laptop lemot, tidak mau menyala, atau layar bergaris? Teknisi kami memeriksa unit sampai ke penyebabnya, lalu memperbaikinya dengan sparepart yang jelas asalnya.',
        list: ['Install ulang Windows/Linux berlisensi', 'Upgrade SSD NVMe/SATA dan RAM', 'Ganti layar, keyboard, baterai, dan kipas', 'Pembersihan unit dan thermal paste', 'Backup serta pemulihan data', 'Pembersihan virus dan optimasi'],
        steps: ['Cek kondisi unit dan catat keluhan', 'Diagnosa penyebab, estimasi biaya dikirim sebelum dikerjakan', 'Perbaikan dan uji stabilitas minimal 24 jam', 'Serah terima unit beserta catatan perbaikan'], price: 'Mulai Rp 100.000'
    },
    {
        t: 'Network Setup', ico: 'fa-network-wired', k: 'network', sub: 'Instalasi kabel UTP/RJ45, topologi LAN, router MikroTik, switch, dan VLAN.',
        d: 'Dari kantor kecil sampai ruang kelas, kami merancang jaringan yang rapi, aman, dan mudah dirawat, lengkap dengan dokumentasi topologinya.',
        list: ['Instalasi dan crimping kabel UTP/RJ45', 'Pemetaan topologi dan dokumentasi LAN', 'Konfigurasi router MikroTik dan hotspot', 'Switch managed, VLAN, dan manajemen bandwidth', 'Access point dan perluasan Wi-Fi', 'Troubleshooting jaringan lambat atau putus'],
        steps: ['Survei lokasi dan kebutuhan pengguna', 'Rancang topologi dan daftar perangkat', 'Pemasangan kabel dan konfigurasi perangkat', 'Uji koneksi, dokumentasi, dan pelatihan singkat'], price: 'Mulai Rp 100.000'
    },
    {
        t: 'Server Administration', ico: 'fa-server', k: 'server', sub: 'Pengelolaan server Linux/Windows, DNS, DHCP, Active Directory, dan monitoring log.',
        d: 'Server yang sehat jarang terdengar masalahnya. Kami menyiapkan, memantau, dan merawat server agar layanan Anda tetap hidup tanpa kejutan.',
        list: ['Instalasi Linux Server dan Windows Server', 'Konfigurasi DNS, DHCP, web, dan file server', 'Active Directory dan manajemen akun', 'Backup terjadwal dan pemulihan bencana', 'Monitoring log dan peringatan dini', 'Virtualisasi dengan Proxmox atau Hyper-V'],
        steps: ['Analisis kebutuhan layanan', 'Instalasi dan hardening dasar', 'Migrasi data dan uji beban', 'Monitoring berkala dengan laporan bulanan'], price: 'Mulai Rp 300.000'
    },
    {
        t: 'Cyber Security', ico: 'fa-user-shield', k: 'security', sub: 'Pemeriksaan celah keamanan, firewall dasar, antivirus endpoint, dan edukasi phishing.',
        d: 'Ancaman paling sering datang lewat kelalaian kecil. Kami menutup celahnya dan melatih tim Anda mengenali serangan sebelum terlambat.',
        list: ['Audit dan scan celah keamanan', 'Konfigurasi firewall dan segmentasi jaringan', 'Antivirus dan proteksi endpoint', 'Kebijakan password dan autentikasi dua faktor', 'Simulasi serta edukasi phishing', 'Laporan hasil audit dan rekomendasi'],
        steps: ['Inventarisasi aset dan risiko', 'Scan dan uji celah', 'Penutupan celah dan penguatan konfigurasi', 'Laporan, edukasi tim, dan pemeriksaan ulang'], price: 'Mulai Rp 250.000'
    }];

const TEAM = [
    {
        n: 'Destu Pranawa', r: 'Lead Network Engineer', e: ['S3 Informatika, Institut Teknologi Sepuluh Nopember', 'S2 Teknik Elektro, Institut Teknologi Bandung', 'S1 Teknik Informatika, Universitas Gadjah Mada'],
        k: ['Merancang topologi LAN skala besar', 'Ahli MikroTik, routing, dan VLAN', 'Menemukan sumber gangguan jaringan dengan cepat'],
        x: ['Senior Network Engineer, Telkom Indonesia', 'Network Architect, Singtel, Singapura', 'Principal Consultant, Huawei Cloud Asia Pasifik'],
        q: 'Jaringan kantor kami yang sering putus jadi stabil dalam sehari. Penjelasannya juga mudah dipahami.', w: 'Bu Retno, pemilik Griya Batik Laweyan, Solo'
    },
    {
        n: 'Koriah', r: 'Hardware & Support Lead', e: ['S3 Informatika, Institut Teknologi Bandung', 'S2 Teknik Informatika, Universitas Islam Indonesia', 'S1 Teknik Informatika, Universitas Negeri Semarang'],
        k: ['Diagnosa kerusakan laptop sampai level komponen', 'Rapi, tepat janji, dan jujur soal biaya', 'Ramah menjelaskan ke pengguna awam'],
        x: ['Field Service Engineer, Lenovo Indonesia', 'Technical Account Manager, Dell Technologies, Singapura', 'Head of IT Support, Alila Solo'],
        q: 'Laptop saya dikira rusak total. Ternyata cukup ganti SSD, dan sekarang lebih cepat dari saat baru beli.', w: 'Mbak Ayu, pelanggan di Surakarta'
    },
    {
        n: 'Rizky Arrosyid', r: 'Server & Security Specialist', e: ['S3 Informatika, Universitas Airlangga', 'S2 Ilmu Komputer, Universitas Indonesia', 'S1 Sistem Informasi, Universitas Diponegoro'],
        k: ['Otomasi server dan backup terjadwal', 'Penetration testing dan audit celah', 'Tenang dan teliti saat menangani insiden'],
        x: ['Site Reliability Engineer, Grab, Singapura', 'Security Consultant, PwC Indonesia', 'SOC Analyst, Bank Central Asia'],
        q: 'Migrasi server selesai di akhir pekan dan hasil auditnya jelas, urut prioritas. Tim kami jadi lebih waspada.', w: 'Pak Dimas, pemilik toko online di Semarang'
    }];

const CITY = [['Surakarta (Solo)', 'Basis kami, teknisi tiba sekitar 1 jam'], ['Karanganyar', 'Sekitar 1 jam'], ['Klaten', 'Sekitar 1,5 jam'], ['Boyolali', 'Sekitar 1,5 jam'], ['Salatiga', 'Sekitar 2 jam'], ['Semarang', 'Sekitar 2,5 jam'], ['Magelang', 'Sekitar 2,5 jam'], ['Purwokerto', 'Sekitar 4 jam, kunjungan terjadwal']];
const FAQ = [['Apakah konsultasi benar-benar gratis?', 'Ya. Ceritakan masalahnya lewat WhatsApp dan kami rekomendasikan solusi tanpa biaya. Anda baru membayar jika setuju memakai jasa kami.'],
['Berapa lama perbaikan laptop?', 'Kerusakan ringan selesai 1 sampai 2 hari. Jika perlu sparepart, kami kabari estimasinya sebelum mulai.'],
['Apakah bisa datang ke lokasi?', 'Bisa. Kami melayani panggilan ke rumah, sekolah, dan kantor di Jawa Tengah. Cek bagian Kontak untuk estimasi waktu tiba.'],
['Apakah ada garansi?', 'Ada. Garansi jasa 30 hari, dan sparepart mengikuti garansi dari pabrikan.'],
['Software yang dipakai berlisensi?', 'Kami memasang OS dan aplikasi berlisensi, atau alternatif open source yang legal, sesuai kebutuhan Anda.'],
['Bagaimana melacak status servis?', 'Pakai Pelacak Servis di bagian IT Tools. Masukkan nomor tiket yang kami berikan saat unit diterima, atau buka daftar servis yang sedang berjalan.']];

const STEPS = ['Diterima', 'Diagnosa', 'Pengerjaan', 'Uji', 'Siap diambil'];
const TK = [
    { id: 'SRV-2611-014', dev: 'Lenovo ThinkPad X280', issue: 'Upgrade SSD NVMe dan install Windows 11', s: 4, tech: 'Koriah', eta: 'Selesai hari ini', note: 'Driver sudah terpasang dan diuji stabil.' },
    { id: 'SRV-2611-015', dev: 'Asus Vivobook 14', issue: 'Ganti layar dan bersihkan kipas', s: 2, tech: 'Koriah', eta: 'Besok sore', note: 'Layar pengganti sudah terpasang, tinggal uji 24 jam.' },
    { id: 'SRV-2611-016', dev: 'HP Pavilion 14', issue: 'Baterai kembung dan ganti keyboard', s: 1, tech: 'Koriah', eta: '2 hari lagi', note: 'Menunggu konfirmasi biaya sparepart dari pemilik.' },
    { id: 'SRV-2611-017', dev: 'Acer Aspire 5', issue: 'Bootloop setelah update Windows', s: 3, tech: 'Rizky Arrosyid', eta: 'Hari ini', note: 'Sistem sudah dipulihkan, sedang uji stabilitas.' },
    { id: 'SRV-2611-018', dev: 'Dell Latitude 7490', issue: 'Bersihkan virus dan backup data', s: 0, tech: 'Rizky Arrosyid', eta: '3 hari lagi', note: 'Unit baru diterima dan menunggu antrean diagnosa.' }];

const GRP = [['Computer Support', 'fa-laptop-medical', [['Install ulang OS', 150000], ['Upgrade SSD/RAM (jasa)', 100000], ['Pembersihan dan thermal paste', 100000], ['Ganti layar/keyboard (jasa)', 200000]]],
['Network Setup', 'fa-network-wired', [['Instalasi kabel per titik', 100000], ['Konfigurasi MikroTik', 400000], ['Setup VLAN', 350000], ['Pemasangan access point', 250000]]],
['Server Administration', 'fa-server', [['Setup server Linux/Windows', 500000], ['Active Directory', 450000], ['Backup terjadwal', 300000]]],
['Cyber Security', 'fa-user-shield', [['Audit keamanan', 400000], ['Firewall dasar', 250000], ['Edukasi phishing', 350000]]]];
const PKG = [['Basic Support', 150000, 'per kunjungan', ['Diagnosa dan perbaikan ringan', 'Install ulang OS', 'Garansi jasa 30 hari']],
['Pro Network', 750000, 'per proyek', ['Survei dan desain topologi', 'Instalasi kabel dan perangkat', 'Dokumentasi dan pelatihan']],
['Business Care', 1500000, 'per bulan', ['Monitoring server dan jaringan', 'Kunjungan rutin', 'Prioritas penanganan']]];
const DG = [{ ico: 'fa-laptop-medical', q: 'Laptop lemot atau mati', s: 'Tidak mau menyala, lag, layar bermasalah', v: 0, c: ['SSD/HDD mulai rusak atau penuh', 'RAM kurang atau kipas tersumbat', 'Sistem operasi korup atau terkena malware'], a: ['Cek kesehatan SSD dan suhu', 'Upgrade SSD/RAM atau install ulang OS', 'Bersihkan unit dan ganti thermal paste'], e: 'Rp 100.000 sampai Rp 450.000' },
{ ico: 'fa-wifi', q: 'Wi-Fi putus atau lambat', s: 'Sinyal lemah, sering disconnect', v: 1, c: ['Penempatan access point kurang tepat', 'Bandwidth tidak dibagi per pengguna', 'Kabel atau konektor longgar'], a: ['Survei sinyal dan titik kabel', 'Atur bandwidth dan VLAN di MikroTik', 'Tambah access point bila perlu'], e: 'Rp 100.000 sampai Rp 750.000' },
{ ico: 'fa-server', q: 'Butuh server', s: 'Untuk kantor, toko, atau sekolah', v: 2, c: ['Data tersebar di banyak komputer', 'Belum ada backup terjadwal', 'Akun pengguna belum terpusat'], a: ['Setup file server atau Active Directory', 'Backup otomatis harian', 'Monitoring log dan laporan bulanan'], e: 'Rp 300.000 sampai Rp 1.500.000' },
{ ico: 'fa-user-shield', q: 'Takut virus atau diretas', s: 'Akun dibobol, email aneh, data bocor', v: 3, c: ['Password lemah tanpa 2FA', 'Tidak ada firewall atau endpoint protection', 'Staf belum paham email phishing'], a: ['Audit celah keamanan', 'Pasang firewall dan antivirus endpoint', 'Edukasi phishing untuk tim'], e: 'Rp 250.000 sampai Rp 1.000.000' }];

/* KERANGKA */
function shell() {
    document.body.insertAdjacentHTML('afterbegin', `<canvas id="atom-bg"></canvas><i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i><div id="prog"></div>
<header class="nav"><div class="wrap nb"><a class="brand" href="#beranda"><img src="logo.png" alt="SKYNET">SKYNET<b>.</b></a>
<button id="ham" aria-label="Buka menu"><i class="fa-solid fa-bars"></i></button>
<nav id="menu">${NAV.map(([i, t]) => `<a href="#${i}" data-s="${i}">${t}</a>`).join('')}</nav>
<a class="btn" href="${wa('Halo SKYNET, saya mau konsultasi gratis')}" target="_blank" rel="noopener">Konsultasi Gratis</a></div></header>
<main>${sections()}</main>
<footer><div class="wrap fg"><div><b style="color:#fff">SKYNET.</b><br>IT Support profesional untuk Jawa Tengah.<br>&copy; 2026 SKYNET. Semua hak dilindungi.</div><nav>${NAV.map(([i, t]) => `<a href="#${i}">${t}</a>`).join('')}</nav></div></footer>
<button id="top" aria-label="Kembali ke atas"><i class="fa-solid fa-arrow-up"></i></button>
<div class="modal" id="modal"><div class="glass mbox" id="mbox"></div></div>`);
    $('#ham').onclick = () => { const o = $('#menu').classList.toggle('open'); $('#ham i').className = o ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' };
    $$('#menu a').forEach(a => a.addEventListener('click', () => { $('#menu').classList.remove('open'); $('#ham i').className = 'fa-solid fa-bars' }));
    const tp = $('#top'); tp.onclick = () => scrollTo({ top: 0 });
    addEventListener('scroll', () => { const h = document.documentElement, m = h.scrollHeight - innerHeight; $('#prog').style.width = (m > 0 ? Math.min(100, scrollY / m * 100) : 0) + '%'; tp.classList.toggle('show', scrollY > 500) });
    if ('IntersectionObserver' in window) { const ob = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('#menu a').forEach(a => a.classList.toggle('on', a.dataset.s === e.target.id)) }), { rootMargin: '-45% 0px -50% 0px' }); $$('main>section').forEach(s => ob.observe(s)) }
}
const head = (t, l) => `<div class="sech ctr"><h2>${t}</h2><p class="lead">${l}</p></div>`;

function sections() {
    return `
<section id="beranda" class="wrap hero"><div><p class="lbl">IT Support profesional di Jawa Tengah</p><h1>IT beres, usaha Anda jalan terus.</h1>
<p class="lead">Perbaikan komputer, jaringan, server, sampai keamanan siber untuk rumah, sekolah, dan UMKM di seluruh Jawa Tengah.</p>
<div class="row"><a class="btn" href="#layanan">Lihat layanan</a><a class="btn ghost" href="#tools">Coba IT Tools</a></div></div>
<div class="win"><div class="wh"><i></i><i></i><i></i><span>skynet-status</span></div><div class="art status-art"><img src="logo.png" alt="SKYNET Logo" class="status-logo"></div><div class="met"><div><small>Teknisi</small><b>${TEAM.length}</b></div><div><small>Layanan</small><b>${SV.length}</b></div><div><small>Kota</small><b>${CITY.length}</b></div></div></div></section>

<section id="tentang" class="wrap">${head('Tim teknisi kami', 'Tiga teknisi dengan pendidikan tinggi dan pengalaman di perusahaan teknologi dan perbankan ternama.')}
<div class="g3">${TEAM.map((m, i) => `<article class="card tm">${avatar(i, m.n)}<h3>${m.n}</h3><p class="role" style="margin:0">${m.r}</p><span class="stars" role="img" aria-label="Bintang 5 dari 5">★★★★★</span>
<blockquote>“${m.q}”<small>${m.w}</small></blockquote><h4>Pendidikan</h4><ul>${m.e.map(x => `<li>${x}</li>`).join('')}</ul><h4>Kelebihan</h4><ul>${m.k.map(x => `<li>${x}</li>`).join('')}</ul><h4>Pengalaman kerja</h4><ul>${m.x.map(x => `<li>${x}</li>`).join('')}</ul></article>`).join('')}</div></section>

<section id="layanan" class="wrap">${head('Solusi IT yang lengkap', 'Klik layanan untuk melihat detail pekerjaan, alur, dan harganya.')}
<div class="g4">${SV.map((s, i) => `<a class="card" href="#layanan" data-sv="${i}">${artImg(s.k, i)}<h3><i class="fa-solid ${s.ico}" style="color:var(--coral)"></i> ${s.t}</h3><p>${s.sub}</p><span class="more">Lihat detail <i class="fa-solid fa-arrow-right"></i></span></a>`).join('')}</div>
<div class="sech ctr" style="margin-top:4rem"><h3 style="font-size:1.6rem">Diagnosa cepat</h3><p class="lead">Pilih keluhan Anda, kami analisis kemungkinan penyebab dan solusinya.</p></div>
<div class="tiles">${DG.map((d, i) => `<button class="tile" data-dg="${i}"><i class="fa-solid ${d.ico}"></i><b>${d.q}</b><small>${d.s}</small></button>`).join('')}</div><div class="dres" id="dres"></div></section>

<section id="monitor" class="wrap">${head('IT Monitor', 'Pindai perangkat yang Anda pakai sekarang dan lihat kondisinya.')}<div id="monw"></div></section>

<section id="tools" class="wrap">${head('Network Speed Test & Pelacak Servis', 'Ukur kecepatan internet Anda atau pantau progres perbaikan perangkat.')}
<div class="g2"><div class="win"><div class="wh"><i></i><i></i><i></i><span>speedtest</span></div>
<div class="dial" id="dial"><div><b id="spn">0.0</b><small>Mbps</small></div></div><p class="ph" id="sps">Siap mengukur koneksi Anda.</p>
<div class="met"><div id="mp"><small>Ping</small><b id="spp">-</b></div><div id="md"><small>Download</small><b id="spd">-</b></div><div id="mu"><small>Upload</small><b id="spu">-</b></div></div>
<button class="btn" id="spb" style="width:100%;justify-content:center"><i class="fa-solid fa-gauge-high"></i> Mulai tes</button></div>
<div class="win"><div class="wh"><i></i><i></i><i></i><span>pelacak-servis</span></div>
<p class="mut">Masukkan nomor tiket dari tanda terima, atau pilih dari daftar servis yang sedang berjalan.</p>
<div class="fr" style="margin-top:.8rem"><input id="tkI" placeholder="Contoh: SRV-2611-014" aria-label="Nomor tiket" autocomplete="off"><button class="btn" id="tkB"><i class="fa-solid fa-magnifying-glass"></i> Cek</button></div>
<div class="dd"><button class="btn ghost" id="tkL" aria-expanded="false"><span><i class="fa-solid fa-list"></i> Servis sedang berjalan (${TK.length})</span><i class="fa-solid fa-chevron-down"></i></button>
<div class="tl" id="tl">${TK.map(t => `<button data-id="${t.id}"><span><b>${t.dev}</b><small>${t.id}</small></span><span><i class="dot ${t.s == 4 ? 'd4' : ''}"></i>${STEPS[t.s]}</span></button>`).join('')}</div></div>
<div id="tkR" style="margin-top:1rem"></div></div></div></section>

<section id="harga" class="wrap">${head('Harga transparan', 'Pilih paket, tambahkan layanan yang Anda butuhkan, lalu kirim pesanan sekali jalan.')}
<div class="g3">${PKG.map((p, i) => `<div class="card pk" data-pk="${i}"><h3>${p[0]}</h3><div class="pr">${rp(p[1])} <small>${p[2]}</small></div><ul>${p[3].map(x => `<li>${x}</li>`).join('')}</ul><button class="btn ghost" data-pkb="${i}">Pilih paket</button></div>`).join('')}</div>
<div class="ord"><div>${GRP.map((g, gi) => `<div class="card grp" id="grp${gi}"><h3><i class="fa-solid ${g[1]}"></i>${g[0]}</h3><div class="opts">${g[2].map((o, oi) => `<div class="opt" data-k="${gi}-${oi}"><b>${o[0]}</b><small>${rp(o[1])}</small><div class="qty"><button data-m="${gi}-${oi}" aria-label="Kurangi">−</button><span>0</span><button data-p="${gi}-${oi}" aria-label="Tambah">+</button></div></div>`).join('')}</div></div>`).join('')}</div>
<aside class="glass sum"><h3>Ringkasan pesanan</h3><ul id="sl"></ul><div class="tot" id="ct">Rp 0</div><input id="on" placeholder="Nama Anda (opsional)" aria-label="Nama"><button class="btn" id="cw"><i class="fa-solid fa-paper-plane"></i> Kirim pesanan via WhatsApp</button></aside></div></section>

<section id="faq" class="wrap" style="max-width:820px">${head('Pertanyaan yang sering diajukan', 'Jawaban singkat sebelum Anda menghubungi kami.')}${FAQ.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}
<div class="ctr" style="margin-top:2rem"><a class="btn" href="${wa('Halo SKYNET, saya punya pertanyaan')}" target="_blank" rel="noopener"><i class="fa-solid fa-comments"></i> Tanya lewat WhatsApp</a></div></section>

<section class="wrap"><div class="glass cta"><div><h3>Punya masalah IT?</h3><p>Ceritakan masalahnya, kami bantu cari solusinya.</p></div><div class="row"><a class="btn" href="#harga">Hitung estimasi</a><a class="btn ghost" href="#kontak">Hubungi kami</a></div></div></section>

<section id="kontak" class="wrap">${head('Lokasi dan kontak', 'Basis kami di Surakarta, melayani seluruh Jawa Tengah.')}
<div class="kg"><div class="card"><iframe class="map" title="Peta Surakarta" loading="lazy" src="https://www.google.com/maps?q=Surakarta,+Jawa+Tengah&output=embed"></iframe>
<h4 style="margin-top:1.2rem">Pilih kota untuk melihat estimasi teknisi tiba</h4><p style="margin:.5rem 0">${CITY.map((c, i) => `<span class="chip${i ? '' : ' on'}" data-c="${i}" tabindex="0" role="button" style="margin:.2rem">${c[0]}</span>`).join('')}</p><p id="cb" style="color:var(--text)"><b>${CITY[0][0]}:</b> ${CITY[0][1]}</p></div>
<div class="glass" style="padding:1.6rem"><div style="position:relative;z-index:1"><h3>Kirim pesan</h3>
<ul class="ci"><li><i class="fa-brands fa-whatsapp"></i><a href="${WA}" target="_blank" rel="noopener">0857-1249-5146</a></li><li><i class="fa-solid fa-envelope"></i><a href="mailto:${EMAIL}">${EMAIL}</a></li><li><i class="fa-solid fa-location-dot"></i>Surakarta, Jawa Tengah</li><li><i class="fa-solid fa-clock"></i>Senin sampai Sabtu, 08.00 sampai 20.00 WIB</li></ul>
<form id="mf"><input id="mn" placeholder="Nama Anda" required><select id="ms" aria-label="Layanan">${SV.map(s => `<option>${s.t}</option>`).join('')}</select><textarea id="mm" rows="4" placeholder="Ceritakan masalah Anda" required></textarea><button class="btn" style="justify-content:center"><i class="fa-solid fa-paper-plane"></i> Kirim pesan</button></form></div></div></div></section>`
}

/* MODAL LAYANAN */
function openSv(i) {
    const s = SV[i]; $('#mbox').innerHTML = `<button class="mx" aria-label="Tutup" id="mclose">×</button><div class="mg"><div>${art(s.k)}<p class="pr">${s.price}</p></div><div><h2>${s.t}</h2><p class="mut" style="margin-top:.6rem">${s.d}</p><h4>Yang kami kerjakan</h4><ul>${s.list.map(x => `<li>${x}</li>`).join('')}</ul><h4>Alur pengerjaan</h4><ol style="padding-left:1.2rem">${s.steps.map(x => `<li>${x}</li>`).join('')}</ol><div class="row"><button class="btn" id="mgo">Hitung estimasi layanan ini</button></div></div></div>`;
    $('#modal').classList.add('open'); document.body.style.overflow = 'hidden';
    const close = () => { $('#modal').classList.remove('open'); document.body.style.overflow = '' };
    $('#mclose').onclick = close; $('#mgo').onclick = () => { close(); const g = $('#grp' + i); g.scrollIntoView({ behavior: 'smooth', block: 'center' }); g.classList.remove('flash'); void g.offsetWidth; g.classList.add('flash') }
}

/* DIAGNOSA */
function initDg() {
    $$('[data-sv]').forEach(a => a.onclick = e => { e.preventDefault(); openSv(+a.dataset.sv) });
    $('#modal').onclick = e => { if (e.target.id === 'modal') { $('#modal').classList.remove('open'); document.body.style.overflow = '' } };
    addEventListener('keydown', e => { if (e.key === 'Escape') { $('#modal').classList.remove('open'); document.body.style.overflow = '' } });
    $$('.tile').forEach(t => t.onclick = () => {
        $$('.tile').forEach(x => x.classList.toggle('on', x === t)); const d = DG[t.dataset.dg], r = $('#dres');
        r.innerHTML = `<div class="glass" style="padding:1.4rem"><p style="position:relative;z-index:1" class="mut">Menganalisis keluhan...</p><div class="scanln" style="position:relative;z-index:1;margin-top:.8rem"><i></i></div></div>`;
        clearTimeout(initDg.t); initDg.t = setTimeout(() => { r.innerHTML = `<div class="glass" style="padding:1.6rem"><div style="position:relative;z-index:1"><span class="pill">${SV[d.v].t}</span><h3 style="margin:.7rem 0">${d.q}</h3><div class="rk"><div><h4>Kemungkinan penyebab</h4><ul>${d.c.map(x => `<li>${x}</li>`).join('')}</ul></div><div><h4>Yang akan kami lakukan</h4><ul>${d.a.map(x => `<li>${x}</li>`).join('')}</ul></div></div><p style="margin-top:1rem">Estimasi biaya: <b style="color:var(--gold)">${d.e}</b></p><div class="row"><button class="btn" id="dgo">Lihat layanan ini</button><a class="btn ghost" href="#harga">Hitung estimasi</a></div></div></div>`; $('#dgo').onclick = () => openSv(d.v) }, 1300)
    })
}

/* IT MONITOR */
function initMon() {
    const w = $('#monw');
    const scan = () => {
        w.innerHTML = `<div class="win scanbox"><div class="wh"><i></i><i></i><i></i><span>device-scan</span></div><div class="term" id="term"></div><div class="pbar"><i id="pb"></i></div></div>`;
        const L = ['Membaca sistem operasi', 'Mendeteksi browser', 'Memeriksa prosesor', 'Memperkirakan memori', 'Mengukur layar dan tampilan', 'Memeriksa status jaringan', 'Membaca kondisi baterai', 'Menghitung skor perangkat'];
        L.forEach((l, i) => setTimeout(() => { const t = $('#term'); if (!t) return; t.insertAdjacentHTML('beforeend', `<div>&gt; ${l}... <b>selesai</b></div>`); $('#pb').style.width = ((i + 1) / L.length * 100) + '%'; if (i === L.length - 1) setTimeout(show, 500) }, 450 * (i + 1)))
    };
    const show = async () => {
        const n = navigator, c = n.connection || {}, ua = n.userAgent;
        const os = /Win/.test(ua) ? 'Windows' : /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Mac/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : 'Tidak diketahui';
        const oi = os === 'Windows' ? 'fa-brands fa-windows' : os === 'macOS' || os === 'iOS' ? 'fa-brands fa-apple' : os === 'Android' ? 'fa-brands fa-android' : os === 'Linux' ? 'fa-brands fa-linux' : 'fa-solid fa-desktop';
        const br = /Edg/.test(ua) ? 'Microsoft Edge' : /OPR/.test(ua) ? 'Opera' : /Chrome/.test(ua) ? 'Google Chrome' : /Firefox/.test(ua) ? 'Firefox' : /Safari/.test(ua) ? 'Safari' : 'Lainnya';
        const bi = br === 'Microsoft Edge' ? 'fa-brands fa-edge' : br === 'Google Chrome' ? 'fa-brands fa-chrome' : br === 'Firefox' ? 'fa-brands fa-firefox' : br === 'Safari' ? 'fa-brands fa-safari' : 'fa-solid fa-globe';
        const cores = n.hardwareConcurrency || 0, ram = n.deviceMemory || 0; let bat = null; try { if (n.getBattery) { const b = await n.getBattery(); bat = b } } catch (e) { }
        const heap = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null;
        let sc = 40 + Math.min(cores, 8) * 4 + Math.min(ram, 8) * 3 + (n.onLine ? 6 : 0) + (bat ? Math.round(bat.level * 4) : 4); sc = Math.max(30, Math.min(99, sc));
        const cd = [[oi, 'Sistem operasi', os], [bi, 'Browser', br], ['fa-solid fa-microchip', 'Inti CPU', cores ? cores + ' core' : 'Tidak tersedia', cores / 16], ['fa-solid fa-memory', 'Perkiraan RAM', ram ? ram + ' GB' : 'Tidak tersedia', ram / 8],
        ['fa-solid fa-display', 'Resolusi layar', screen.width + ' x ' + screen.height], ['fa-solid fa-wifi', 'Koneksi', c.effectiveType ? c.effectiveType.toUpperCase() + ', ' + c.downlink + ' Mbps' : 'Tidak tersedia'], ['fa-solid fa-clock', 'Zona waktu', Intl.DateTimeFormat().resolvedOptions().timeZone], ['fa-solid fa-signal', 'Status', n.onLine ? 'Online' : 'Offline'],
        ['fa-solid fa-battery-half', 'Baterai', bat ? Math.round(bat.level * 100) + '%' + (bat.charging ? ' (mengisi)' : '') : 'Tidak tersedia', bat ? bat.level : undefined], ['fa-solid fa-memory', 'Memori halaman', heap !== null ? heap + ' MB' : 'Tidak tersedia']];
        w.innerHTML = `<div class="mon"><div class="win" style="text-align:center"><div class="ring" id="rg"><b>0</b></div><h3>Skor perangkat</h3><p class="mut" style="font-size:.85rem">Perkiraan berdasarkan data yang bisa dibaca browser.</p><button class="btn ghost" id="rs" style="margin-top:1rem"><i class="fa-solid fa-rotate"></i> Pindai ulang</button></div>
<div class="mi">${cd.map((x, i) => `<div class="mc" style="animation-delay:${i * .08}s"><i class="${x[0]}"></i><small>${x[1]}</small><b>${x[2]}</b>${x[3] !== undefined ? `<div class="bar"><i style="width:${Math.min(100, Math.max(4, x[3] * 100))}%"></i></div>` : ''}</div>`).join('')}</div></div>`;
        let v = 0; const r = $('#rg'), t = setInterval(() => { v += 2; if (v >= sc) { v = sc; clearInterval(t) } r.style.setProperty('--p', v); $('b', r).textContent = v }, 20); $('#rs').onclick = scan
    };
    scan()
}

/* SPEED TEST NYATA (Cloudflare) */
const CF = 'https://speed.cloudflare.com/';
function initSpeed() {
    const b = $('#spb'), dial = $('#dial'), set = (v, max = 200) => { $('#spn').textContent = v.toFixed(1); dial.style.setProperty('--p', Math.min(100, v / max * 100)) }, act = id => ['mp', 'md', 'mu'].forEach(k => $('#' + k).classList.toggle('act', k === id));
    const ping = async () => { const t = []; for (let i = 0; i < 7; i++) { const s = performance.now(); await fetch(CF + '__down?bytes=0&r=' + Math.random(), { cache: 'no-store' }); t.push(performance.now() - s) } t.shift(); const p = Math.min(...t), j = t.slice(1).reduce((a, x, i) => a + Math.abs(x - t[i]), 0) / (t.length - 1); return [p, j] };
    const down = async () => { const st = performance.now(), D = 7000; let got = 0; const w = async () => { while (performance.now() - st < D) { const r = await fetch(CF + '__down?bytes=25000000&r=' + Math.random(), { cache: 'no-store' }), rd = r.body.getReader(); for (; ;) { const { done, value } = await rd.read(); if (done) break; got += value.length; const el = (performance.now() - st) / 1000; if (el > .4) set(got * 8 / el / 1e6); if (performance.now() - st >= D) { rd.cancel(); break } } } }; await Promise.all([w(), w(), w()]); return got * 8 / ((performance.now() - st) / 1000) / 1e6 };
    const up = () => new Promise(res => { const st = performance.now(), D = 6000, blob = new Blob([new Uint8Array(4e6)]); let sent = 0, live = 0; const w = () => new Promise(ok => { if (performance.now() - st >= D) return ok(); const x = new XMLHttpRequest(); let last = 0; x.open('POST', CF + '__up'); x.upload.onprogress = e => { sent += e.loaded - last; last = e.loaded; const el = (performance.now() - st) / 1000; if (el > .4) set(sent * 8 / el / 1e6) }; x.onload = x.onerror = () => ok(w()); x.send(blob) }); Promise.all([w(), w(), w()]).then(() => res(sent * 8 / ((performance.now() - st) / 1000) / 1e6)) });
    b.onclick = async () => {
        b.disabled = true; set(0);['spp', 'spd', 'spu'].forEach(k => $('#' + k).textContent = '-');
        try {
            act('mp'); $('#sps').textContent = 'Mengukur ping...'; const [p, j] = await ping(); $('#spp').textContent = Math.round(p) + ' ms';
            act('md'); $('#sps').textContent = 'Mengukur kecepatan download...'; const d = await down(); $('#spd').textContent = d.toFixed(1) + ' Mbps'; set(d);
            act('mu'); $('#sps').textContent = 'Mengukur kecepatan upload...'; set(0); const u = await up(); $('#spu').textContent = u.toFixed(1) + ' Mbps'; set(d);
            act(''); $('#sps').textContent = (d >= 50 ? 'Koneksi sangat baik.' : d >= 20 ? 'Koneksi baik.' : 'Koneksi lambat, hubungi kami untuk pengecekan.') + ' Jitter ' + j.toFixed(0) + ' ms.'; b.innerHTML = '<i class="fa-solid fa-rotate"></i> Tes ulang'
        }
        catch (e) { act(''); set(0); $('#sps').textContent = 'Tidak dapat terhubung ke server pengujian. Periksa koneksi internet Anda.' }
        b.disabled = false
    }
}

/* PELACAK SERVIS */
function initTrack() {
    const I = $('#tkI'), R = $('#tkR'), L = $('#tl'), LB = $('#tkL');
    const show = id => { const t = TK.find(x => x.id === id.trim().toUpperCase()); R.innerHTML = t ? `<div class="card" style="padding:1.2rem"><span class="chip">${t.id}</span><h3 style="margin:.7rem 0 .2rem;color:var(--gold)">${t.dev}</h3><p>Keluhan: ${t.issue}</p><div class="steps">${STEPS.map((s, i) => `<div class="${i < t.s ? 'done' : i == t.s ? 'cur' : ''}">${s}</div>`).join('')}</div><p>Catatan: ${t.note}</p><p style="font-size:.9rem">Teknisi: <b style="color:var(--text)">${t.tech}</b> &nbsp; Estimasi: <b style="color:var(--text)">${t.eta}</b></p></div>` : `<p style="color:#f87171">${id.trim() ? 'Tiket tidak ditemukan. Periksa nomor di tanda terima Anda.' : 'Masukkan nomor tiket terlebih dahulu.'}</p>` };
    $('#tkB').onclick = () => show(I.value); I.onkeydown = e => { if (e.key === 'Enter') show(I.value) };
    LB.onclick = () => { const o = L.classList.toggle('open'); LB.setAttribute('aria-expanded', o) };
    $$('button', L).forEach(b => b.onclick = () => { I.value = b.dataset.id; L.classList.remove('open'); show(b.dataset.id) })
}

/* HARGA */
function initPrice() {
    const Q = {}; let pk = null; const items = () => { const o = []; GRP.forEach((g, gi) => g[2].forEach((x, oi) => { const q = Q[gi + '-' + oi] || 0; if (q) o.push([x[0], x[1], q]) })); return o };
    let cur = 0; const render = () => {
        const it = items(), tot = it.reduce((a, x) => a + x[1] * x[2], 0) + (pk !== null ? PKG[pk][1] : 0);
        $('#sl').innerHTML = (pk !== null ? `<li><span>Paket ${PKG[pk][0]}</span><span>${rp(PKG[pk][1])}</span></li>` : '') + it.map(x => `<li><span>${x[0]} x${x[2]}</span><span>${rp(x[1] * x[2])}</span></li>`).join('') || '<li><span>Belum ada pilihan</span></li>';
        const a = cur, z = tot, st = performance.now(); const tick = n => { const k = Math.min(1, (n - st) / 350); cur = a + (z - a) * k; $('#ct').textContent = rp(cur); if (k < 1) requestAnimationFrame(tick) }; requestAnimationFrame(tick);
        $$('.opt').forEach(o => { const q = Q[o.dataset.k] || 0; o.classList.toggle('on', q > 0); $('span', o).textContent = q });
        $$('.pk').forEach(c => { const on = pk === +c.dataset.pk; c.classList.toggle('on', on); $('.btn', c).textContent = on ? 'Paket dipilih' : 'Pilih paket' });
        const lines = (pk !== null ? ['Paket ' + PKG[pk][0]] : []).concat(it.map(x => x[0] + ' x' + x[2]));
        $('#cw').href = wa(`Halo SKYNET, ${$('#on').value.trim() ? 'saya ' + $('#on').value.trim() + '. ' : ''}saya ingin memesan: ${lines.join(', ') || 'konsultasi layanan'}. Estimasi ${rp(tot)}.`)
    };
    $$('[data-p]').forEach(b => b.onclick = () => { const k = b.dataset.p; Q[k] = (Q[k] || 0) + 1; render() });
    $$('[data-m]').forEach(b => b.onclick = () => { const k = b.dataset.m; Q[k] = Math.max(0, (Q[k] || 0) - 1); render() });
    $$('[data-pkb]').forEach(b => b.onclick = e => { e.stopPropagation(); const i = +b.dataset.pkb; pk = pk === i ? null : i; render() });
    $('#on').oninput = render;
    $('#cw').onclick = e => { e.preventDefault(); window.open($('#cw').href, '_blank', 'noopener') }; render()
}

/* KONTAK */
function initContact() {
    $$('[data-c]').forEach(c => { const f = () => { $$('[data-c]').forEach(x => x.classList.toggle('on', x === c)); const k = CITY[c.dataset.c]; $('#cb').innerHTML = `<b>${k[0]}:</b> ${k[1]}` }; c.onclick = f; c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f() } } });
    $('#mf').onsubmit = e => { e.preventDefault(); window.open(wa(`Halo SKYNET, saya ${$('#mn').value}. Layanan: ${$('#ms').value}. ${$('#mm').value}`), '_blank', 'noopener') }
}

shell(); initAtomBg(); initScrollReveal(); initDg(); initMon(); initSpeed(); initTrack(); initPrice(); initContact();
