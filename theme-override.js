/**
 * Talven — CSS & UI Enhancements
 * Injected via Shopify Script Tags API → jsDelivr CDN
 *
 * Handles: brand mark + wordmark logo, mobile sticky ATC, polish, email popup,
 * standalone product mode. Meta Pixel + CAPI handled by Meta Sales Channel app.
 */

(function () {
  'use strict';

  /* ── Talven brand assets (PNG hosted via jsDelivr CDN, pinned commit) ──── */
  var CDN_PINNED = 'https://cdn.jsdelivr.net/gh/humanlaborunit-unit1/gdp-theme@eb1c56e';
  var CDN = 'https://cdn.jsdelivr.net/gh/humanlaborunit-unit1/gdp-theme@main';
  var LOGO_URL = CDN_PINNED + '/talven-logo.png?v=transparent';
  var FAVICON_URL = CDN + '/favicon.png';

  var CSS = `
    /* ══════════════════════════════════════════════════════
       TALVEN — POLISH OVERRIDES (rev 2026-04-27)
       Theme handles base colors. This supplements.
    ══════════════════════════════════════════════════════ */

    /* ── Header brand lock-up (PNG logo) — bigger ── */
    .header__heading-logo-wrapper { display: none !important; }
    .header__heading-link .h2 { font-size: 0 !important; }
    .header__heading-link {
      display: inline-flex !important;
      align-items: center !important;
      text-decoration: none !important;
      padding: 12px 0 !important;
    }
    .tl-logo {
      display: block;
      height: 64px;
      width: auto;
      max-width: 260px;
      object-fit: contain;
    }
    @media (min-width: 750px) {
      .tl-logo { height: 88px; max-width: 360px; }
    }
    @media (min-width: 1100px) {
      .tl-logo { height: 110px; max-width: 440px; }
    }
    /* Increase the header padding so the bigger logo has breathing room */
    .header { padding-top: 12px !important; padding-bottom: 12px !important; }

    /* ── Primary CTA — rose-gold gradient ── */
    .button--primary,
    button[name="add"],
    .product-form__submit,
    .cart__checkout-button {
      background: linear-gradient(135deg, #C56A6A 0%, #D98A8A 100%) !important;
      color: #fff !important;
      font-weight: 700 !important;
      letter-spacing: 0.06em !important;
      border: none !important;
      box-shadow: 0 4px 20px rgba(197,106,106,0.32) !important;
      transition: box-shadow 0.25s ease, transform 0.2s ease !important;
    }
    .button--primary:hover,
    button[name="add"]:hover,
    .product-form__submit:hover {
      box-shadow: 0 6px 28px rgba(197,106,106,0.5) !important;
      transform: translateY(-2px) !important;
    }
    .shopify-payment-button__button--branded {
      background: linear-gradient(135deg, #C56A6A, #D98A8A) !important;
      box-shadow: 0 4px 16px rgba(197,106,106,0.25) !important;
    }

    /* ── Price color ── */
    .price__regular .price-item,
    .price .price-item--regular,
    .price-item {
      color: #C56A6A !important;
      font-weight: 700 !important;
    }
    .price__sale .price-item--regular,
    s.price-item { color: rgba(31,26,24,0.32) !important; }

    /* ── Collapsible heading hover ── */
    .collapsible-content__summary:hover,
    details[open] > summary { color: #C56A6A !important; }

    /* ── Links ── */
    a:not(.button):not(.header__heading-link):not(.sgp-hero__cta):not(.sgp-fcta__btn) {
      color: #B47756;
    }
    a:not(.button):not(.header__heading-link):hover { color: #C56A6A; }

    /* ── Header glass blur ── */
    .header, .header-wrapper {
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(197,106,106,0.10) !important;
      background: rgba(255,253,250,0.85) !important;
    }

    /* ── Cart drawer accent ── */
    .cart-drawer { border-left: 1px solid rgba(197,106,106,0.15) !important; }

    /* ── Product images: subtle radius ── */
    .product__media img,
    .product-media-container img {
      border-radius: 12px !important;
    }

    /* ── Universal cream background — eliminate white chunks between sections ── */
    body { background-color: #FBF7F2 !important; }
    .color-background-1, .color-scheme-1,
    .gradient { background-color: #FBF7F2 !important; }
    .multicolumn { background-color: #FBF7F2 !important; }
    .collapsible-content { background-color: #FBF7F2 !important; }
    /* Header stays cream too so the logo blends seamlessly */
    .shopify-section-group-header-group .header-wrapper,
    .header-wrapper { background-color: #FBF7F2 !important; }

    /* ── Mobile sticky ATC ── */
    #sgp-sticky-bar {
      display: none;
      position: fixed; bottom: 0; left: 0; right: 0;
      z-index: 9998;
      background: rgba(31,26,24,0.97);
      backdrop-filter: blur(14px);
      border-top: 1px solid rgba(197,106,106,0.30);
      padding: 12px 16px;
      align-items: center;
      gap: 12px;
      box-shadow: 0 -4px 30px rgba(0,0,0,0.35);
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    #sgp-sticky-bar.visible { display: flex; transform: translateY(0); }
    #sgp-sticky-bar__title {
      flex: 1; font-size: 0.85em; font-weight: 600;
      color: #fff;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    #sgp-sticky-bar__price {
      font-weight: 800; color: #D98A8A;
      font-size: 1em; white-space: nowrap;
    }
    #sgp-sticky-bar__btn {
      background: linear-gradient(135deg, #C56A6A, #D98A8A);
      color: #fff; font-weight: 700; font-size: 0.82em;
      border: none; border-radius: 50px;
      padding: 11px 20px;
      cursor: pointer;
      text-transform: uppercase; letter-spacing: 0.06em;
      white-space: nowrap;
      box-shadow: 0 4px 15px rgba(197,106,106,0.3);
    }
    @media (min-width: 750px) { #sgp-sticky-bar { display: none !important; } }

    /* ── Email capture popup ── */
    #sgp-popup-overlay {
      display: none;
      position: fixed; inset: 0;
      z-index: 99999;
      background: rgba(20,12,10,0.78);
      backdrop-filter: blur(6px);
      align-items: center; justify-content: center;
    }
    #sgp-popup-overlay.active { display: flex; }
    #sgp-popup {
      position: relative;
      background: #FBF7F2;
      border: 1px solid rgba(197,106,106,0.22);
      border-radius: 18px;
      padding: 36px 32px 32px;
      max-width: 420px; width: 90%;
      box-shadow: 0 0 60px rgba(197,106,106,0.18);
      text-align: center;
      animation: sgpPopIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes sgpPopIn {
      from { opacity: 0; transform: scale(0.85) translateY(20px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    #sgp-popup__close {
      position: absolute; top: 12px; right: 16px;
      background: none; border: none;
      color: rgba(31,26,24,0.4);
      font-size: 1.4rem; cursor: pointer; line-height: 1; padding: 4px 8px;
    }
    #sgp-popup__close:hover { color: #1F1A18; }
    #sgp-popup__badge {
      display: inline-block;
      background: rgba(197,106,106,0.10);
      border: 1px solid rgba(197,106,106,0.30);
      color: #C56A6A; font-size: 0.72rem; font-weight: 700;
      letter-spacing: 0.12em; text-transform: uppercase;
      padding: 5px 14px; border-radius: 50px; margin-bottom: 16px;
    }
    #sgp-popup__heading {
      color: #1F1A18; font-size: 1.5rem; font-weight: 700;
      line-height: 1.25; margin: 0 0 10px;
    }
    #sgp-popup__heading span {
      background: linear-gradient(90deg, #C56A6A, #D98A8A);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    #sgp-popup__sub {
      color: #3B2F2B; font-size: 0.92rem; margin: 0 0 20px; line-height: 1.55;
    }
    #sgp-popup__form { display: flex; flex-direction: column; gap: 10px; }
    #sgp-popup__email {
      background: #fff !important;
      border: 1px solid rgba(197,106,106,0.25) !important;
      border-radius: 50px !important;
      color: #1F1A18 !important;
      font-size: 0.95rem; padding: 13px 20px !important;
      outline: none; width: 100%; box-sizing: border-box; text-align: center;
    }
    #sgp-popup__email:focus {
      border-color: rgba(197,106,106,0.6) !important;
      box-shadow: 0 0 12px rgba(197,106,106,0.18) !important;
    }
    #sgp-popup__submit {
      background: linear-gradient(135deg, #C56A6A, #D98A8A) !important;
      color: #fff !important; font-weight: 700 !important;
      font-size: 0.92rem !important; border: none !important;
      border-radius: 50px !important; padding: 13px 24px !important;
      cursor: pointer !important; text-transform: uppercase !important;
      letter-spacing: 0.06em !important;
      box-shadow: 0 4px 20px rgba(197,106,106,0.3) !important;
    }
    #sgp-popup__success { display: none; color: #C56A6A; font-size: 1rem; font-weight: 700; padding: 8px 0; }
    #sgp-popup__skip {
      margin-top: 14px; font-size: 0.78rem; color: rgba(31,26,24,0.4);
      cursor: pointer; background: none; border: none; text-decoration: underline;
    }
    #sgp-popup__skip:hover { color: #1F1A18; }
  `;

  function injectCSS() {
    if (document.getElementById('sgp-override')) return;
    var s = document.createElement('style');
    s.id = 'sgp-override';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ── Header logo: swap to PNG ───────────────────────────────────────────── */
  function installHeaderLogo() {
    document.querySelectorAll('.header__heading-link').forEach(function (link) {
      if (link.dataset.tlLogo === '2') return;
      link.dataset.tlLogo = '2';
      link.innerHTML = '<img class="tl-logo" src="' + LOGO_URL +
                       '?v=20260428b" alt="Talven" />';
    });
  }

  /* ── Favicon: remove all existing icon links, inject ours ─────────────── */
  function installFavicon() {
    if (document.documentElement.dataset.tlFavicon === '1') return;
    document.documentElement.dataset.tlFavicon = '1';
    var head = document.head;
    if (!head) return;
    head.querySelectorAll('link[rel*="icon"]').forEach(function (l) {
      l.parentNode && l.parentNode.removeChild(l);
    });
    var l1 = document.createElement('link');
    l1.rel = 'icon';
    l1.type = 'image/png';
    l1.href = FAVICON_URL + '?v=20260428b';
    head.appendChild(l1);
    var l2 = document.createElement('link');
    l2.rel = 'shortcut icon';
    l2.type = 'image/png';
    l2.href = FAVICON_URL + '?v=20260428b';
    head.appendChild(l2);
    var l3 = document.createElement('link');
    l3.rel = 'apple-touch-icon';
    l3.href = FAVICON_URL + '?v=20260428b';
    head.appendChild(l3);
  }

  /* ── Mobile sticky ATC bar ──────────────────────────────────────────────── */
  function initStickyBar() {
    if (window.innerWidth >= 750) return;
    var addBtn = document.querySelector('button[name="add"], .product-form__submit');
    if (!addBtn) return;
    if (document.getElementById('sgp-sticky-bar')) return;

    var product = document.querySelector('h1.product__title, .product__title')
                  ? (document.querySelector('h1.product__title, .product__title').textContent || 'Talven').trim()
                  : 'Talven';
    var price = document.querySelector('.price__regular .price-item, .price .price-item--regular, .price-item');
    var priceText = price ? price.textContent.trim() : '';

    var bar = document.createElement('div');
    bar.id = 'sgp-sticky-bar';
    bar.innerHTML =
      '<span id="sgp-sticky-bar__title">' + (product.length > 28 ? product.slice(0,26) + '…' : product) + '</span>' +
      '<span id="sgp-sticky-bar__price">' + priceText + '</span>' +
      '<button id="sgp-sticky-bar__btn" type="button">Add to Cart</button>';
    document.body.appendChild(bar);

    document.getElementById('sgp-sticky-bar__btn').addEventListener('click', function () {
      var b = document.querySelector('button[name="add"], .product-form__submit');
      if (b) b.click();
    });

    var io = new IntersectionObserver(function (entries) {
      bar.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    io.observe(addBtn);
  }

  /* ── Email capture popup ────────────────────────────────────────────────── */
  function initEmailPopup() {
    var STORAGE_KEY = 'sgp_popup_v2';
    if (localStorage.getItem(STORAGE_KEY)) return;

    var overlay = document.createElement('div');
    overlay.id = 'sgp-popup-overlay';
    overlay.innerHTML =
      '<div id="sgp-popup">' +
        '<button id="sgp-popup__close" aria-label="Close">✕</button>' +
        '<div id="sgp-popup__badge">Welcome to Talven</div>' +
        '<h2 id="sgp-popup__heading">Get <span>10% Off</span><br>your first Talven order</h2>' +
        '<p id="sgp-popup__sub">Join the list. We send a short note when something new arrives — and you save 10% on this order.</p>' +
        '<form id="sgp-popup__form">' +
          '<input id="sgp-popup__email" type="email" placeholder="your@email.com" autocomplete="email" required />' +
          '<button id="sgp-popup__submit" type="submit">Claim my 10% →</button>' +
          '<p id="sgp-popup__success">✓ You\'re in. Check your inbox for the code.</p>' +
        '</form>' +
        '<button id="sgp-popup__skip">No thanks, I\'ll pay full price</button>' +
      '</div>';
    document.body.appendChild(overlay);

    function dismiss() {
      overlay.classList.remove('active');
      localStorage.setItem(STORAGE_KEY, '1');
    }

    document.getElementById('sgp-popup__close').addEventListener('click', dismiss);
    document.getElementById('sgp-popup__skip').addEventListener('click', dismiss);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) dismiss(); });

    document.getElementById('sgp-popup__form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('sgp-popup__email').value.trim();
      if (!email) return;
      var btn = document.getElementById('sgp-popup__submit');
      btn.textContent = 'Saving…';
      btn.disabled = true;
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'form_type=customer&utf8=✓&contact[email]=' + encodeURIComponent(email) +
              '&contact[tags]=email-popup,10-percent-discount&contact[accepts_marketing]=true'
      }).then(function () {
        document.getElementById('sgp-popup__form').style.display = 'none';
        document.getElementById('sgp-popup__success').style.display = 'block';
        localStorage.setItem(STORAGE_KEY, '1');
        setTimeout(function () { overlay.classList.remove('active'); }, 3000);
      }).catch(function () {
        document.getElementById('sgp-popup__form').style.display = 'none';
        document.getElementById('sgp-popup__success').style.display = 'block';
        setTimeout(function () { overlay.classList.remove('active'); }, 3000);
      });
    });

    var shown = false;
    function showPopup() { if (shown) return; shown = true; overlay.classList.add('active'); }

    setTimeout(showPopup, 22000);
    document.addEventListener('mouseleave', function (e) {
      if (e.clientY <= window.innerHeight * 0.1) showPopup();
    });
  }

  /* ── Legacy brand-name title cleanup (only "Derma Rose Co.") ────────────── */
  function fixTitleTag() {
    try {
      if (document.title.indexOf('Derma Rose Co.') !== -1) {
        document.title = document.title
          .replace(/Derma Rose Co\./g, 'Talven')
          .replace(/Talven\s*[–-]\s*Talven/g, 'Talven');
      }
    } catch (e) {}
  }

  /* ── Standalone product detection ───────────────────────────────────────── */
  function markStandaloneProducts() {
    var p = window.location.pathname;
    var handles = [
      'blackheadremover',
      'redlightwand',
      'acupressuremat',
      'necktraction',
      'neckmassager'
    ];
    for (var i = 0; i < handles.length; i++) {
      if (p.indexOf('/products/' + handles[i]) !== -1 || p.indexOf('/' + handles[i]) !== -1) {
        document.body.classList.add('template-product', 'standalone-template');
        return;
      }
    }
  }

  /* ── Init ───────────────────────────────────────────────────────────────── */
  injectCSS();
  installFavicon();
  installHeaderLogo();
  fixTitleTag();
  markStandaloneProducts();

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    installFavicon();
    installHeaderLogo();
    fixTitleTag();
    markStandaloneProducts();
    initStickyBar();
    initEmailPopup();
    setTimeout(installHeaderLogo, 600);
    setTimeout(installHeaderLogo, 2000);
  });
})();
