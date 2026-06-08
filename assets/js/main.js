/**
 * WebMebelSaya — Main JavaScript
 * Premium Furniture Website
 */

'use strict';

/* ============================================
   PRODUCT DATA
   ============================================ */
const PRODUCTS = [
  {
    id: 1,
    name: 'Sofa Venezia Premium',
    desc: 'Sofa 3-seater berbahan fabric premium, nyaman dan elegan untuk ruang tamu modern.',
    price: 4800000,
    priceOld: 6200000,
    cat: 'sofa',
    img: 'assets/images/sofa1.png',
    imgAlt: 'Sofa Venezia Premium',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 342,
    emoji: null,
    phClass: null
  },
  {
    id: 2,
    name: 'Kursi Ergo Executive',
    desc: 'Kursi kerja ergonomis dengan sandaran lumbar support, ideal untuk WFH seharian.',
    price: 2150000,
    priceOld: 2800000,
    cat: 'kursi',
    img: 'assets/images/chair1.png',
    imgAlt: 'Kursi Ergo Executive',
    badge: 'Terlaris',
    rating: 4.8,
    reviews: 218,
    emoji: null,
    phClass: null
  },
  {
    id: 3,
    name: 'Meja Kopi Nordic',
    desc: 'Meja kopi kayu solid oak finish natural, desain Skandinavia minimalis dan tahan lama.',
    price: 1750000,
    priceOld: 2200000,
    cat: 'meja',
    img: 'assets/images/table1.png',
    imgAlt: 'Meja Kopi Nordic',
    badge: 'New',
    rating: 4.9,
    reviews: 156,
    emoji: null,
    phClass: null
  },
  {
    id: 4,
    name: 'Lemari Sliding Oslo',
    desc: 'Lemari pakaian pintu sliding door, panel kayu veneer natural, kapasitas besar.',
    price: 6500000,
    priceOld: 8000000,
    cat: 'lemari',
    img: 'assets/images/lemari1.png',
    imgAlt: 'Lemari Sliding Oslo',
    badge: 'Premium',
    rating: 4.7,
    reviews: 98,
    emoji: null,
    phClass: null
  },
  {
    id: 5,
    name: 'Rak Buku Elegance',
    desc: 'Rak buku open shelving dengan finishing walnut, cocok untuk ruang kerja dan ruang tamu.',
    price: 2400000,
    priceOld: 3100000,
    cat: 'rak',
    img: 'assets/images/rak1.png',
    imgAlt: 'Rak Buku Elegance',
    badge: 'Populer',
    rating: 4.8,
    reviews: 187,
    emoji: null,
    phClass: null
  },
  {
    id: 6,
    name: 'Sofa Santorini L-Shape',
    desc: 'Sofa sectional L-shape berbahan microfiber premium, cocok untuk keluarga besar.',
    price: 7200000,
    priceOld: 9500000,
    cat: 'sofa',
    img: null,
    imgAlt: 'Sofa Santorini L-Shape',
    badge: 'Hot Deal',
    rating: 4.9,
    reviews: 274,
    emoji: '🛋️',
    phClass: 'ph-sofa2'
  },
  {
    id: 7,
    name: 'Meja Makan Kyoto',
    desc: 'Meja makan 6-kursi kayu jati solid, finishing natural oil, kokoh dan tahan lama.',
    price: 5900000,
    priceOld: 7500000,
    cat: 'meja',
    img: null,
    imgAlt: 'Meja Makan Kyoto',
    badge: 'Favorit',
    rating: 4.9,
    reviews: 312,
    emoji: '🪵',
    phClass: 'ph-meja2'
  },
  {
    id: 8,
    name: 'Kursi Makan Walnut',
    desc: 'Kursi makan solid walnut dengan cushion seat beige, kombinasi estetik dan nyaman.',
    price: 1250000,
    priceOld: 1600000,
    cat: 'kursi',
    img: null,
    imgAlt: 'Kursi Makan Walnut',
    badge: 'Sale',
    rating: 4.7,
    reviews: 145,
    emoji: '🪑',
    phClass: 'ph-chair2'
  }
];

const WA_NUM  = '6281234567890';
const WA_BASE = `https://wa.me/${WA_NUM}?text=`;

/* ============================================
   UTILITIES
   ============================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K';
  return n.toString();
}

function showToast(msg, duration = 3000) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._tid);
  toast._tid = setTimeout(() => toast.classList.remove('show'), duration);
}

/* ============================================
   NAVBAR
   ============================================ */
(function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger-btn');
  const navMenu   = $('#nav-menu');
  const navLinks  = $$('.nav-link');
  const sections  = $$('section[id]');

  // Scroll: add class + active link
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
})();

/* ============================================
   COUNTER ANIMATION
   ============================================ */
(function initCounters() {
  const statNums = $$('.stat-num');
  let animated = false;

  function animateCounter(el) {
    const target  = parseFloat(el.dataset.target);
    const isDecimal = el.classList.contains('stat-num--decimal');
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      current += increment;
      if (current >= target || count >= steps) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = isDecimal
        ? current.toFixed(1)
        : target >= 1000
          ? formatCount(Math.round(current))
          : Math.round(current);
    }, step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNums.forEach(el => animateCounter(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const statsSection = $('#stats');
  if (statsSection) observer.observe(statsSection);
})();

/* ============================================
   PRODUCT CATALOG & FILTER
   ============================================ */
(function initCatalog() {
  const grid       = $('#product-grid');
  const filterBtns = $$('.filter-btn');
  let   activecat  = 'semua';

  function buildProductCard(p, delay = 0) {
    const waMsg = encodeURIComponent(
      `Halo, saya tertarik dengan produk *${p.name}* seharga ${formatRupiah(p.price)}. Apakah masih tersedia?`
    );

    const imgHtml = p.img
      ? `<img
          src="${p.img}"
          alt="${p.imgAlt}"
          class="product-card__img"
          loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder ${p.phClass || 'ph-meja1'}\\'>${p.emoji || '🪵'}</div>'"
        />`
      : `<div class="product-img-placeholder ${p.phClass}">${p.emoji}</div>`;

    const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));

    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = p.id;
    card.dataset.cat = p.cat;
    card.id = `product-card-${p.id}`;
    card.style.animationDelay = `${delay * 0.08}s`;
    card.innerHTML = `
      <div class="product-card__img-wrap">
        ${imgHtml}
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        <span class="product-card__cat">${catLabel(p.cat)}</span>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__rating">
          <span class="stars">${stars}</span>
          <span>${p.rating} (${p.reviews} ulasan)</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div class="product-card__price">
          ${p.priceOld ? `<span class="price-old">${formatRupiah(p.priceOld)}</span>` : ''}
          <span class="price-main">${formatRupiah(p.price)}</span>
        </div>
        <button
          class="product-card__btn"
          id="add-btn-${p.id}"
          data-id="${p.id}"
          aria-label="Pesan ${p.name} via WhatsApp"
          onclick="window.open('${WA_BASE}${waMsg}', '_blank')"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Pesan
        </button>
      </div>
    `;

    return card;
  }

  function catLabel(cat) {
    const labels = { sofa: '🛋️ Sofa', kursi: '🪑 Kursi', meja: '🪵 Meja', lemari: '🚪 Lemari', rak: '📚 Rak' };
    return labels[cat] || cat;
  }

  function renderProducts(cat) {
    const filtered = cat === 'semua' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);

    // Animate out
    $$('.product-card').forEach(c => {
      c.style.opacity = '0';
      c.style.transform = 'scale(0.95)';
    });

    setTimeout(() => {
      grid.innerHTML = '';
      filtered.forEach((p, i) => {
        grid.appendChild(buildProductCard(p, i));
      });
    }, 180);
  }

  // Filter click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activecat = btn.dataset.cat;
      renderProducts(activecat);
    });
  });

  // Initial render
  renderProducts('semua');
})();

/* ============================================
   SCROLL REVEAL
   ============================================ */
(function initReveal() {
  const revealEls = $$('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();

/* ============================================
   AUTO REVEAL ON LOAD (sections)
   ============================================ */
(function addRevealClasses() {
  const targets = [
    { sel: '.stat-card',     delay: true },
    { sel: '.product-card',  delay: true },
    { sel: '.review-card',   delay: true },
    { sel: '.about-feat',    delay: true },
    { sel: '.section-header',delay: false }
  ];

  targets.forEach(({ sel, delay }) => {
    $$(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (delay && i < 4) el.classList.add(`reveal-delay-${i + 1}`);
    });
  });

  // Re-init observer after adding classes
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  $$('.reveal').forEach(el => observer.observe(el));
})();

/* ============================================
   SMOOTH SCROLL for anchor links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================
   WA FLOAT — hide/show on scroll direction
   ============================================ */
(function initWaFloat() {
  const btn = $('#wa-float-btn');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 100) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
    } else if (y > lastY + 40) {
      btn.style.opacity = '0.6';
      btn.style.transform = 'scale(0.9)';
    } else if (lastY > y + 5) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
    }
    lastY = y;
  }, { passive: true });
})();

/* ============================================
   HERO IMAGE error fallback
   ============================================ */
(function heroFallback() {
  const heroImg = $('#hero-image');
  if (!heroImg) return;
  heroImg.addEventListener('error', () => {
    heroImg.style.display = 'none';
    heroImg.parentElement.style.background =
      'linear-gradient(135deg, #f0e6d6 0%, #d4b896 50%, #c8a07a 100%)';
    heroImg.parentElement.innerHTML +=
      '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:6rem;">🛋️</div>';
  });
})();

/* ============================================
   CONSOLE BRANDING
   ============================================ */
console.log('%c🪵 WebMebelSaya', 'color:#8b5e3c;font-size:2rem;font-weight:bold;');
console.log('%cPremium Furniture Website — Built with HTML, CSS & JS', 'color:#a0724a;font-size:0.9rem;');
