/* ═══════════════════════════════════════════════
   HAPPY BIRTHDAY MEICHA — main.js
   ═══════════════════════════════════════════════ */

const CONFIG = {
  name: 'Meicha Fazarina',
  birthdate: '31 Mei 2026',
  age: 17,

  /* ── SURAT ── */
  letterText: `Hei Meicha 🌸

Selamat ulang tahun yang ke-17!

Tidak terasa ya... sudah 9 tahun kita jalan bareng. Dari yang awalnya cuma kenalan biasa, sampai sekarang jadi teman yang beneran berarti buat aku.

Makasih ya udah mau ada selama ini. Makasih udah dengerin cerita-cerita aku yang panjang, udah mau ketawa bareng di hal-hal yang sebenernya nggak penting-penting amat, dan udah mau jadi bagian dari hari-hari aku.

Kamu itu teman yang jarang ada. Tulus, baik, dan selalu bisa bikin suasana jadi lebih hangat. Semoga di usia 17 ini kamu makin happy, makin sehat, dan semua hal baik terus dateng buat kamu.

Semoga impian-impianmu pelan-pelan jadi nyata. Dan apapun yang terjadi nanti, aku harap kamu tahu — aku selalu ada. 💕

Happy birthday, Meicha! 🎂`,

  /* ── FOTO OPENING (halaman 1) ── */
  openingPhoto: 'assets/foto/meicha.png',

  /* ── FOTO WALL halaman 3: 9 slot
     Slot 0-2 = 3 Polaroid | Slot 3-5 = Strip 1 | Slot 6-8 = Strip 2 ── */
  photoWall: [
    { src: 'assets/foto/foto01.jpg',  label: 'memory ✨' },
    { src: 'assets/foto/foto02.jpg',  label: 'our day 🌸' },
    { src: 'assets/foto/foto03.jpg',  label: 'together 💕' },
    { src: 'assets/foto/foto04.jpg',  label: 'bestie 🎀' },
    { src: 'assets/foto/foto05.jpg',  label: 'smile 😊' },
    { src: 'assets/foto/foto06.jpg',  label: 'sweet 🍰' },
    { src: 'assets/foto/foto07.jpg',  label: 'love 💖' },
    { src: 'assets/foto/foto08.jpg',  label: 'us 🌟' },
    { src: 'assets/foto/foto09.jpg',  label: 'forever 💫' },
  ],

  /* ── VIDEO halaman 4: YouTube embed ── */
  video: {
    type: 'youtube',
    youtubeId: 'M-_gZOe_YIA',
  },

  /* ── GALLERY halaman 6: 19 foto bento ── */
  gallery: [
    { src: 'assets/foto/foto10.jpg', label: '💕', type: 'big'    },
    { src: 'assets/foto/foto11.jpg', label: '🌸', type: 'normal' },
    { src: 'assets/foto/foto12.jpg', label: '⭐', type: 'tall'   },
    { src: 'assets/foto/foto13.jpg', label: '🎀', type: 'wide'   },
    { src: 'assets/foto/foto14.jpg', label: '💙', type: 'normal' },
    { src: 'assets/foto/foto15.jpg', label: '✨', type: 'normal' },
    { src: 'assets/foto/foto16.jpg', label: '💖', type: 'normal' },
    { src: 'assets/foto/foto17.jpg', label: '🌟', type: 'normal' },
    { src: 'assets/foto/foto18.png', label: '💫', type: 'normal' },
    { src: 'assets/foto/foto19.png', label: '🌸', type: 'normal' },
    { src: 'assets/foto/foto20.png', label: '💕', type: 'normal' },
    { src: 'assets/foto/foto21.png', label: '⭐', type: 'normal' },
    { src: 'assets/foto/foto22.jpg', label: '🎀', type: 'wide'   },
    { src: 'assets/foto/foto23.jpg', label: '💙', type: 'normal' },
    { src: 'assets/foto/foto24.jpg', label: '✨', type: 'normal' },
    { src: 'assets/foto/foto25.jpg', label: '💖', type: 'normal' },
    { src: 'assets/foto/foto26.jpg', label: '🌟', type: 'normal' },
    { src: 'assets/foto/foto27.jpg', label: '💫', type: 'normal' },
    { src: 'assets/foto/foto28.jpg', label: '🌸', type: 'normal' },
  ],

  /* ── MUSIK halaman 7
     spotifyTrackId : ID track dari link Spotify (bagian setelah track/)
     youtubeVideoId : ID video YouTube untuk ditampilkan dengan thumbnail
     Spotify autoplay saat masuk halaman 7 ── */
  music: {
    spotifyTrackId: '6VgyRGeR4cw6yNGazjGFhu',
    youtubeVideoId: 'M-_gZOe_YIA',
    songTitle:  'Lagu Spesial 🎵',
    songArtist: '— untuk Meicha tercinta —',
    youtubeTitle:  'Video Kenangan',
  },

  /* ── LAGU ULANG TAHUN — autoplay dari halaman pertama ──
     Taruh file MP3 di assets/audio/hbd.mp3 lalu set useLocal: true
     Atau biarkan useLocal: false untuk pakai file yang sudah ada di folder audio. ── */
  birthdaySong: {
    useLocal: true,
    localSrc: 'assets/audio/hbd.mp3',
    src: 'assets/audio/hbd.mp3',
  },
};

/* ══════════════════════════════════════════════
   CORE — NAVIGATION
══════════════════════════════════════════════ */
let currentPage = 0;
const TOTAL_PAGES = 8;
const pages = document.querySelectorAll('.page');

function goToPage(idx) {
  if (idx < 0 || idx >= TOTAL_PAGES) return;
  pages[currentPage].classList.remove('active');
  pages[currentPage].classList.add('exit');
  setTimeout(() => pages[currentPage].classList.remove('exit'), 600);

  currentPage = idx;
  pages[currentPage].classList.add('active');
  updateDots();
  onPageEnter(currentPage);
}

function nextPage() { goToPage(currentPage + 1); }

function onPageEnter(idx) {
  if (idx === 4) startTyping();      // page 5 (idx 4) = letter
  if (idx === 6) autoPlaySpotify();  // page 7 (idx 6) = music
  if (idx === 7) launchConfetti();   // page 8 (idx 7) = ending
}

/* ══════════════════════════════════════════════
   DOTS
══════════════════════════════════════════════ */
function buildDots() {
  const wrap = document.getElementById('page-dots');
  for (let i = 0; i < TOTAL_PAGES; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goToPage(i);
    wrap.appendChild(d);
  }
}
function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === currentPage));
}

/* ══════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.addEventListener('mouseover', e => {
  if (e.target.closest('button, a, .photo-cell, .gal-item, .polaroid, .strip-frame, .bento')) {
    cursor.classList.add('hover');
  }
});
document.addEventListener('mouseout', () => cursor.classList.remove('hover'));

/* ══════════════════════════════════════════════
   SPARKLE ON CLICK
══════════════════════════════════════════════ */
const sparkles = ['✨','🌸','💕','⭐','🎀','💫','✦'];
document.addEventListener('click', e => {
  const s = document.createElement('span');
  s.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
  s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;
    font-size:1.2rem;pointer-events:none;z-index:9998;
    transform:translate(-50%,-50%);animation:sparkle-pop .7s ease forwards;`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 700);
});
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `@keyframes sparkle-pop {
  0%  { opacity:1; transform:translate(-50%,-50%) scale(0); }
  60% { opacity:1; transform:translate(-50%,-120%) scale(1.2); }
  100%{ opacity:0; transform:translate(-50%,-180%) scale(.8); }
}`;
document.head.appendChild(sparkleStyle);

/* ══════════════════════════════════════════════
   PAGE 1 — OPENING PHOTO
══════════════════════════════════════════════ */
function buildOpeningPhoto() {
  const frame = document.getElementById('opening-photo-frame');
  if (!frame) return;
  if (CONFIG.openingPhoto) {
    frame.innerHTML = `<img src="${CONFIG.openingPhoto}" alt="Meicha" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
  }
}

/* ══════════════════════════════════════════════
   PAGE 2 — CALENDAR
══════════════════════════════════════════════ */
function buildCalendar() {
  const grid = document.getElementById('calendar-grid');
  const daysHeader = document.getElementById('cal-days-header');
  ['Min','Sen','Sel','Rab','Kam','Jum','Sab'].forEach(d => {
    const s = document.createElement('span'); s.textContent = d;
    daysHeader.appendChild(s);
  });
  const firstDay = 5; // Mei 2026 mulai Jumat (index 5)
  const daysInMonth = 31;
  for (let i = 0; i < firstDay; i++) {
    const d = document.createElement('div'); d.className = 'cal-day empty';
    grid.appendChild(d);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const d = document.createElement('div'); d.className = 'cal-day';
    d.textContent = day;
    if (day === 31) { d.classList.add('birthday'); d.title = '🎂 Happy Birthday Meicha!'; }
    grid.appendChild(d);
  }
}

/* ══════════════════════════════════════════════
   PAGE 3 — POLAROID + PHOTOSTRIP
══════════════════════════════════════════════ */
const PLACEHOLDER_EMOJIS = ['🌸','💕','⭐','🎀','💫','💖','🌟','✨','💙'];

function makeImgOrPh(src, phEmoji, cls) {
  if (src) {
    const img = document.createElement('img');
    img.src = src; img.alt = ''; img.loading = 'lazy';
    return img;
  }
  const ph = document.createElement('div');
  ph.className = cls || 'strip-placeholder';
  ph.textContent = phEmoji;
  return ph;
}

function buildPhotoWall() {
  const scene = document.getElementById('photo-wall-grid');
  const photos = CONFIG.photoWall;

  /* 3 Polaroid (index 0-2) */
  const polRow = document.createElement('div');
  polRow.className = 'polaroid-row';
  [0,1,2].forEach(i => {
    const p = photos[i] || {};
    const pol = document.createElement('div');
    pol.className = 'polaroid';
    if (p.src) pol.onclick = () => openLightbox(p.src);
    const tape = document.createElement('div'); tape.className = 'tape';
    const imgWrap = document.createElement('div'); imgWrap.className = 'polaroid-img';
    imgWrap.appendChild(makeImgOrPh(p.src, PLACEHOLDER_EMOJIS[i], 'polaroid-ph'));
    const cap = document.createElement('div'); cap.className = 'polaroid-caption';
    cap.textContent = p.label || '';
    pol.append(tape, imgWrap, cap);
    polRow.appendChild(pol);
  });
  scene.appendChild(polRow);

  /* Photostrip baris 1 (index 3-5) */
  scene.appendChild(buildStrip([3,4,5], photos));
  /* Photostrip baris 2 (index 6-8) */
  scene.appendChild(buildStrip([6,7,8], photos));
}

function buildStrip(indices, photos) {
  const strip = document.createElement('div');
  strip.className = 'strip-row';
  indices.forEach(i => {
    const p = photos[i] || {};
    const frame = document.createElement('div'); frame.className = 'strip-frame';
    if (p.src) frame.onclick = () => openLightbox(p.src);
    const wrap = document.createElement('div'); wrap.className = 'strip-img-wrap';
    wrap.appendChild(makeImgOrPh(p.src, PLACEHOLDER_EMOJIS[i], 'strip-placeholder'));
    const lbl = document.createElement('div'); lbl.className = 'strip-label';
    lbl.textContent = p.label || '';
    frame.append(wrap, lbl);
    strip.appendChild(frame);
  });
  return strip;
}

/* ══════════════════════════════════════════════
   PAGE 4 — VIDEO
══════════════════════════════════════════════ */
function buildVideo() {
  const container = document.getElementById('video-container');
  const { type, youtubeId, localSrc } = CONFIG.video;
  if (type === 'youtube' && youtubeId) {
    container.innerHTML = `<iframe width="100%" height="100%"
      src="https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`;
  } else if (type === 'local' && localSrc) {
    container.innerHTML = `<video controls style="width:100%;height:100%;">
      <source src="${localSrc}" type="video/mp4"></video>`;
  } else {
    container.innerHTML = `<div class="video-placeholder-wrap">
      <div class="vid-icon">🎬</div>
      <p>video ucapan spesial</p>
      <p class="upload-hint">isi CONFIG.video di main.js</p></div>`;
  }
}

/* ══════════════════════════════════════════════
   PAGE 5 — LETTER TYPING
══════════════════════════════════════════════ */
let typingDone = false;
function startTyping() {
  if (typingDone) return;
  typingDone = true;
  const el = document.getElementById('typed-text');
  const text = CONFIG.letterText;
  let i = 0;
  el.innerHTML = '<span class="cursor-blink"></span>';
  function type() {
    if (i < text.length) {
      const cursor = el.querySelector('.cursor-blink');
      el.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(type, text[i-1] === '\n' ? 55 : 22);
    } else {
      const btn = document.getElementById('btn-letter-next');
      btn.style.opacity = '1'; btn.style.pointerEvents = 'all';
      const sign = document.getElementById('letter-sign');
      if (sign) sign.style.opacity = '1';
      el.querySelector('.cursor-blink').style.display = 'none';
    }
  }
  setTimeout(type, 600);
}

/* ══════════════════════════════════════════════
   PAGE 6 — FULL INSTAGRAM GRID (3 kolom, rapi)
══════════════════════════════════════════════ */
function buildGallery() {
  const wrap = document.getElementById('gallery-grid');
  const items = CONFIG.gallery;
  const EMOJIS = ['💕','🌸','⭐','🎀','💙','✨','💖','🌟','💫','🌸','💕','⭐','🎀','💙','✨','💖','🌟','💫','🌸'];

  const grid = document.createElement('div');
  grid.className = 'photo-insta-grid';

  items.forEach((item, i) => {
    const cell = document.createElement('div');
    cell.className = 'insta-cell';

    if (item.src) {
      const img = document.createElement('img');
      img.src = item.src; img.alt = ''; img.loading = 'lazy';
      cell.appendChild(img);
      cell.onclick = () => openLightbox(item.src);
    } else {
      const ph = document.createElement('div');
      ph.className = 'insta-ph';
      ph.textContent = EMOJIS[i % EMOJIS.length];
      cell.appendChild(ph);
    }
    grid.appendChild(cell);
  });

  wrap.appendChild(grid);

  const count = document.createElement('div');
  count.className = 'wall-count';
  count.textContent = `${items.length} kenangan indah bersama 💕`;
  wrap.appendChild(count);
}

/* ══════════════════════════════════════════════
   PAGE 7 — MUSIK (Spotify + YouTube card)
══════════════════════════════════════════════ */
let spotifyIframeBuilt = false;

function buildMusic() {
  const { spotifyTrackId, youtubeVideoId, songTitle, songArtist, youtubeTitle } = CONFIG.music;

  /* Judul */
  const titleEl = document.getElementById('song-title');
  const artistEl = document.getElementById('song-artist');
  if (titleEl)  titleEl.textContent  = songTitle  || 'Lagu Spesial 🎵';
  if (artistEl) artistEl.textContent = songArtist || '— untuk Meicha —';

  /* YouTube thumbnail card */
  if (youtubeVideoId) {
    const ytWrap = document.getElementById('yt-card-wrap');
    if (ytWrap) {
      ytWrap.innerHTML = `
        <div class="yt-card" onclick="openYoutube('${youtubeVideoId}')">
          <div class="yt-thumb-wrap">
            <img src="https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg"
                 alt="YouTube" class="yt-thumb" loading="lazy">
            <div class="yt-play-btn">▶</div>
          </div>
          <div class="yt-info">
            <div class="yt-label">🎬 ${youtubeTitle || 'Tonton di YouTube'}</div>
            <div class="yt-sub">klik untuk buka</div>
          </div>
        </div>`;
    }
  }
}

function autoPlaySpotify() {
  if (spotifyIframeBuilt) return;
  spotifyIframeBuilt = true;
  const { spotifyTrackId } = CONFIG.music;
  if (!spotifyTrackId) return;
  const wrap = document.getElementById('spotify-embed-wrap');
  if (wrap) {
    wrap.innerHTML = `<iframe
      src="https://open.spotify.com/embed/track/${spotifyTrackId}?autoplay=1&utm_source=oembed"
      width="100%" height="80" frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      style="border-radius:12px;"></iframe>`;
  }
}

function openYoutube(id) {
  window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
}

/* ══════════════════════════════════════════════
   GLOBAL — BIRTHDAY SONG AUTOPLAY (semua halaman)
══════════════════════════════════════════════ */
let bgAudio = null;
let bgMuted = false;

function initBirthdaySong() {
  const { useLocal, localSrc, src } = CONFIG.birthdaySong;
  const audioSrc = useLocal ? localSrc : src;

  bgAudio = new Audio(audioSrc);
  bgAudio.loop = true;
  bgAudio.volume = 0.35;

  // Autoplay saat ada interaksi pertama user (browser policy)
  const tryPlay = () => {
    bgAudio.play().catch(() => {});
    document.removeEventListener('click',     tryPlay);
    document.removeEventListener('touchstart', tryPlay);
    document.removeEventListener('keydown',    tryPlay);
  };
  document.addEventListener('click',      tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true });
  document.addEventListener('keydown',    tryPlay, { once: true });

  // Coba autoplay langsung (works di beberapa browser)
  bgAudio.play().catch(() => {});

  // Mini music toggle button
  const btn = document.getElementById('music-toggle');
  if (btn) {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      bgMuted = !bgMuted;
      bgAudio.muted = bgMuted;
      btn.textContent = bgMuted ? '🔇' : '🎵';
      btn.title = bgMuted ? 'Nyalakan musik' : 'Matikan musik';
    });
  }
}
const CONFETTI_COLORS = ['#f7aec7','#e8a0b4','#9bb5a0','#d4a96a','#f0dab8','#c9f0d4','#ffd6e7'];
function launchConfetti() {
  const wrap = document.getElementById('confetti-wrap');
  wrap.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div'); p.className = 'confetti-piece';
    p.style.cssText = `left:${Math.random()*100}%;
      background:${CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)]};
      width:${4+Math.random()*8}px;height:${4+Math.random()*8}px;
      border-radius:${Math.random()>.5?'50%':'2px'};
      animation-duration:${2+Math.random()*4}s;
      animation-delay:${Math.random()*2}s;`;
    wrap.appendChild(p);
  }
}

/* ══════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════ */
function openLightbox(src) {
  if (!src) return;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* ══════════════════════════════════════════════
   KEYBOARD + SWIPE
══════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goToPage(currentPage-1);
  if (e.key === 'Escape') closeLightbox();
});
let touchStartY = 0;
document.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
document.addEventListener('touchend', e => {
  const diff = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(diff) > 50) { diff > 0 ? nextPage() : goToPage(currentPage-1); }
});

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  buildDots();
  buildOpeningPhoto();
  buildCalendar();
  buildPhotoWall();
  buildVideo();
  buildGallery();
  buildMusic();
  initBirthdaySong();

  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    pages[0].classList.add('active');
    updateDots();
  }, 2000);
});
