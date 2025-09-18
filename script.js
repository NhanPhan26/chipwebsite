// Landing page gallery + lightbox + UX enhancements

const photos = [
  // { src: "images/em-1.jpg", caption: "Nụ cười của em" },
  // { src: "images/em-2.jpg", caption: "Chiều tháng sáu" },
  // { src: "images/em-3.jpg", caption: "Góc phố quen" },
];

const fallbackPhotos = [
  { src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&q=80&auto=format&fit=crop", caption: "Nụ cười dịu dàng" },
  { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop", caption: "Ánh nắng trên tóc" },
  { src: "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?w=1200&q=80&auto=format&fit=crop", caption: "Một chiều gió nhẹ" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80&auto=format&fit=crop", caption: "Ánh mắt biết nói" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop", caption: "Khoảnh khắc an yên" },
  { src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop", caption: "Bước chân dịu êm" }
];

function selectData() {
  return Array.isArray(photos) && photos.length > 0 ? photos : fallbackPhotos;
}

function createCard(item) {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.setAttribute('aria-label', item.caption || 'Xem ảnh');

  const img = document.createElement('img');
  img.loading = 'lazy';
  img.src = item.src;
  img.alt = item.caption || '';

  const caption = document.createElement('div');
  caption.className = 'caption';
  caption.textContent = item.caption || '';

  card.appendChild(img);
  card.appendChild(caption);
  card.addEventListener('click', () => openLightbox(item));
  return card;
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const data = selectData();
  grid.innerHTML = '';
  data.forEach(item => grid.appendChild(createCard(item)));
}

function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  const cap = document.getElementById('lightboxCaption');
  if (!lb || !img || !cap) return;
  img.src = item.src;
  img.alt = item.caption || '';
  cap.textContent = item.caption || '';
  lb.classList.add('open');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  if (!lb || !img) return;
  lb.classList.remove('open');
  img.src = '';
}

function enableLightboxInteractions() {
  const lb = document.getElementById('lightbox');
  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lb) {
    lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }
}

function enableSmoothScroll() {
  const header = document.querySelector('.site-header');
  const headerH = header ? header.offsetHeight : 0;
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  enableLightboxInteractions();
  enableSmoothScroll();
  setFooterYear();
  startSinceCounter();
  initCountdown();
  initRSVP();
  initRevealOnScroll();
});

// Realtime counter since 16/06/2023
function startSinceCounter() {
  const start = new Date(2023, 5, 16, 0, 0, 0); // month is 0-indexed (5 = June)
  const elDays = document.getElementById('sinceDays');
  const elHours = document.getElementById('sinceHours');
  const elMinutes = document.getElementById('sinceMinutes');
  const elSeconds = document.getElementById('sinceSeconds');
  if (!elDays || !elHours || !elMinutes || !elSeconds) return;

  const update = () => {
    const now = new Date();
    let diff = Math.max(0, Math.floor((now - start) / 1000)); // in seconds
    const days = Math.floor(diff / (24 * 60 * 60)); diff -= days * 24 * 60 * 60;
    const hours = Math.floor(diff / (60 * 60)); diff -= hours * 60 * 60;
    const minutes = Math.floor(diff / 60); diff -= minutes * 60;
    const seconds = diff;
    elDays.textContent = String(days);
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

// Countdown to wedding date (from data attribute on .countdown-grid)
function initCountdown() {
  const grid = document.querySelector('.countdown-grid');
  if (!grid) return;
  const dateStr = grid.getAttribute('data-date');
  if (!dateStr) return;
  const target = new Date(dateStr);
  const d = document.getElementById('cdDays');
  const h = document.getElementById('cdHours');
  const m = document.getElementById('cdMinutes');
  const s = document.getElementById('cdSeconds');
  if (!d || !h || !m || !s) return;

  const update = () => {
    const now = new Date();
    let diff = Math.max(0, Math.floor((target - now) / 1000));
    const days = Math.floor(diff / 86400); diff -= days * 86400;
    const hours = Math.floor(diff / 3600); diff -= hours * 3600;
    const minutes = Math.floor(diff / 60); diff -= minutes * 60;
    const seconds = diff;
    d.textContent = String(days);
    h.textContent = String(hours).padStart(2, '0');
    m.textContent = String(minutes).padStart(2, '0');
    s.textContent = String(seconds).padStart(2, '0');
  };
  update();
  setInterval(update, 1000);
}

// Simple RSVP handler (no backend): validate and show a friendly note
function initRSVP() {
  const form = document.getElementById('rsvpForm');
  const note = document.getElementById('rsvpNote');
  if (!form || !note) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const guests = Number(data.get('guests')) || 1;
    if (!name || !phone) {
      note.textContent = 'Vui lòng nhập đầy đủ họ tên và số điện thoại.';
      return;
    }
    note.textContent = `Cảm ơn ${name}! Đã ghi nhận RSVP cho ${guests} khách. Hẹn gặp bạn!`;
    form.reset();
  });
}

// Reveal-on-scroll using IntersectionObserver
function initRevealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersect, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  });
  elements.forEach(el => observer.observe(el));
}
