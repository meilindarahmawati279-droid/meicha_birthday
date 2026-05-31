# 🎀 Happy Birthday Meicha — Panduan Lengkap

---

## 📂 Struktur Folder

```
meicha-birthday/
│
├── index.html              ← File utama (jangan dipindah)
├── css/
│   └── style.css           ← Semua styling & warna
├── js/
│   └── main.js             ← ✏️ FILE UTAMA KUSTOMISASI
│
└── assets/
    ├── foto/               ← Taruh SEMUA foto di sini
    │   ├── meicha.jpg          (foto utama opening — bulat)
    │   ├── foto1.jpg  – foto9.jpg   (photo wall 9 slot)
    │   └── gallery1.jpg – gallery8.jpg  (gallery 8 slot)
    │
    ├── video/
    │   └── ucapan.mp4          (1 slot video)
    │
    └── audio/
        └── lagu.mp3            (musik background)
```

---

## ✏️ CARA KUSTOMISASI — Cukup Edit `js/main.js`

Buka `js/main.js` dan edit bagian `CONFIG`:

---

### 🌸 1. Foto Opening (Halaman 1 — foto bulat utama)

Di `index.html`, cari `photo-placeholder` lalu ganti:

```html
<!-- SEBELUM -->
<div class="photo-placeholder">🌸</div>

<!-- SESUDAH -->
<img src="assets/foto/meicha.jpg" alt="Meicha">
```

---

### 📸 2. Photo Wall — 9 Foto (Halaman 3)

Edit di `js/main.js`, bagian `CONFIG.photoWall`:

```js
photoWall: [
  { src: 'assets/foto/foto1.jpg', label: 'memory ✨' },
  { src: 'assets/foto/foto2.jpg', label: 'our day 🌸' },
  { src: 'assets/foto/foto3.jpg', label: 'together 💕' },
  // ... sampai 9 foto
],
```

---

### 🖼️ 3. Gallery — 8 Foto (Halaman 6)

Edit di `js/main.js`, bagian `CONFIG.gallery`:

```js
gallery: [
  { src: 'assets/foto/gallery1.jpg', label: '💕', tall: true  },
  { src: 'assets/foto/gallery2.jpg', label: '🌸', tall: false },
  // ... sampai 8 foto
  // tall: true  → foto tinggi (ambil 2 baris)
  // tall: false → foto normal (1 baris)
],
```

---

### 🎬 4. Video (Halaman 4) — 1 Slot

Edit di `js/main.js`, bagian `CONFIG.video`:

**Opsi A — File lokal (MP4):**
```js
video: {
  type: 'local',
  localSrc: 'assets/video/ucapan.mp4',
  youtubeId: '',
},
```

**Opsi B — YouTube:**
```js
video: {
  type: 'youtube',
  localSrc: '',
  youtubeId: 'VIDEO_ID_KAMU', // ambil dari link youtube.com/watch?v=VIDEO_ID
},
```

---

### 💌 5. Isi Surat (Halaman 5)

Edit di `js/main.js`, bagian `CONFIG.letterText`:

```js
letterText: `Hei Meicha 🌸

Tulis suratmu di sini...
Bisa multi baris.`,
```

---

### 🎵 6. Musik (Halaman 7)

**Opsi A — File MP3 lokal:**
```js
music: {
  type: 'local',
  localSrc: 'assets/audio/lagu.mp3',
  spotifyTrackId: '',
},
```

**Opsi B — Spotify embed:**
```js
music: {
  type: 'spotify',
  localSrc: '',
  spotifyTrackId: 'TRACK_ID_KAMU',
  // Cara dapat ID: buka Spotify → klik kanan lagu → Share → Copy link
  // Ambil ID di belakang track/ sebelum ?
},
```

---

### 🎨 7. Ubah Warna

Di `css/style.css`, edit bagian `:root`:

```css
:root {
  --rose:       #e8a0b4;   /* pink utama */
  --rose-deep:  #c96d8e;   /* pink gelap */
  --sage:       #9bb5a0;   /* hijau sage */
  --gold:       #d4a96a;   /* gold aksen */
  --cream:      #fdf8f3;   /* background */
}
```

---

## 🖱️ Fitur Website

| Fitur | Keterangan |
|-------|------------|
| 8 halaman | Opening → Kalender → Photo Wall → Video → Surat → Gallery → Musik → Ending |
| Photo Wall | 9 slot foto (halaman 3), bisa diklik untuk diperbesar |
| Gallery | 8 slot foto mosaik (halaman 6), ada yang tall/wide |
| 1 Video | Halaman 4, support file lokal atau YouTube |
| Surat Ketik | Animasi mengetik otomatis |
| Music Player | Support MP3 lokal atau Spotify embed |
| Confetti | Muncul di halaman ending |
| Lightbox | Klik foto → tampil fullscreen |
| Swipe | Navigasi geser kanan/kiri di HP |
| Keyboard | Navigasi dengan tombol panah |
| Cursor | Custom cursor cantik |
| Sparkle | Klik di mana saja → muncul sparkle |

---

## 🚀 CARA DEPLOY

### ✅ Netlify (Paling Mudah — Gratis)
1. Buka [netlify.com](https://netlify.com) → Sign up
2. Klik **"Add new site"** → **"Deploy manually"**
3. **Drag & drop** folder `meicha-birthday/` ke area upload
4. Dapat link seperti: `https://random-name.netlify.app`
5. Ganti nama di Settings → Domain settings

### ✅ GitHub Pages (Gratis)
1. Buat repository baru di [github.com](https://github.com)
2. Upload semua file
3. Settings → Pages → Source: branch `main`
4. Live di: `https://username.github.io/nama-repo`

---

## 💡 Tips

- Format foto terbaik: **JPG/WEBP**, max 1-2 MB per foto
- Format video: **MP4 (H.264)**, resolusi max 1080p
- Format audio: **MP3**, bitrate 128-192 kbps
- Urutan foto di `CONFIG.photoWall` = urutan di grid (kiri atas ke kanan bawah)
- Untuk `CONFIG.gallery`, gunakan `tall: true` di posisi 1 & 4 untuk tampilan menarik

---

*Made with 💖 for **Meicha Fazarina's 17th Birthday** — 31 Mei 2026*
