/**
 * Derma Dose Co. — CSS & UI Enhancements
 * Injected via Shopify Script Tags API → jsDelivr CDN
 * Theme colors are native via settings_data.json.
 * This file handles: mobile sticky bar, email popup, polish overrides, brand-name rewrites.
 *
 * Meta Pixel + Conversions API are handled by the official Meta Sales Channel
 * Shopify app (installed 2026-04-20), which fires events through Shopify's
 * sanctioned Customer Events / Web Pixels API. The previous inline pixel here
 * was firing duplicate PageView and broken e-commerce events (sandboxed by
 * Web Pixels Manager since 2023). Removed to avoid duplicate-event risk.
 */

/* ── Store Enhancements ──────────────────────────────────────────────────── */
(function () {
  'use strict';

  var CSS = `
    /* ══════════════════════════════════════════════════════
       DERMA ROSE CO. — POLISH OVERRIDES
       Theme handles base colors. This supplements.
    ══════════════════════════════════════════════════════ */

    /* ── Store name: inject brand ── */
    .header__heading-link .h2 { font-size: 0 !important; }
    .header__heading-link .h2::before {
      content: "Derma Dose Co.";
      font-size: 1.1rem !important;
      font-weight: 800 !important;
      letter-spacing: 0.06em !important;
      background: linear-gradient(90deg, #C56A6A, #D98A8A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Primary CTA button — rose gold gradient ── */
    .button--primary,
    button[name="add"],
    .product-form__submit,
    .cart__checkout-button {
      background: linear-gradient(135deg, #C56A6A 0%, #D98A8A 100%) !important;
      color: #1a1a2e !important;
      font-weight: 800 !important;
      border: none !important;
      box-shadow: 0 4px 20px rgba(197,106,106,0.35) !important;
      transition: box-shadow 0.25s ease, transform 0.2s ease !important;
    }
    .button--primary:hover,
    button[name="add"]:hover,
    .product-form__submit:hover {
      box-shadow: 0 6px 32px rgba(197,106,106,0.55) !important;
      transform: translateY(-2px) !important;
    }

    /* ── Shopify dynamic checkout buttons ── */
    .shopify-payment-button__button--branded {
      background: linear-gradient(135deg, #C56A6A, #D98A8A) !important;
      box-shadow: 0 4px 16px rgba(197,106,106,0.25) !important;
    }

    /* ── Product price color ── */
    .price__regular .price-item,
    .price .price-item--regular,
    .price-item {
      color: #C56A6A !important;
      font-weight: 800 !important;
    }
    .price__sale .price-item--regular,
    s.price-item {
      color: rgba(255,255,255,0.25) !important;
    }

    /* ── Collapsible tab headings ── */
    .collapsible-content__summary:hover,
    details[open] > summary { color: #C56A6A !important; }

    /* ── Links ── */
    a:not(.button):not(.header__heading-link):not(.sgp-hero__cta):not(.sgp-fcta__btn) {
      color: #D98A8A;
    }
    a:not(.button):not(.header__heading-link):hover { color: #C56A6A; }

    /* ── Header glass blur ── */
    .header, .header-wrapper {
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(197,106,106,0.1) !important;
    }

    /* ── Cart drawer border ── */
    .cart-drawer {
      border-left: 1px solid rgba(197,106,106,0.15) !important;
    }

    /* ── Media / product images ── */
    .product__media img,
    .product-media-container img {
      border-radius: 12px !important;
    }

    /* ── Mobile sticky add-to-cart bar ── */
    #sgp-sticky-bar {
      display: none;
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9998;
      background: rgba(5,8,18,0.97);
      backdrop-filter: blur(14px);
      border-top: 1px solid rgba(197,106,106,0.25);
      padding: 12px 16px;
      align-items: center;
      gap: 12px;
      box-shadow: 0 -4px 30px rgba(197,106,106,0.1);
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    #sgp-sticky-bar.visible {
      display: flex;
      transform: translateY(0);
    }
    #sgp-sticky-bar__title {
      flex: 1;
      font-size: 0.85em;
      font-weight: 700;
      color: #f0f4ff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #sgp-sticky-bar__price {
      font-weight: 800;
      color: #C56A6A;
      font-size: 1em;
      white-space: nowrap;
    }
    #sgp-sticky-bar__btn {
      background: linear-gradient(135deg, #C56A6A, #D98A8A);
      color: #1a1a2e;
      font-weight: 800;
      font-size: 0.82em;
      border: none;
      border-radius: 50px;
      padding: 11px 20px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
      box-shadow: 0 4px 15px rgba(197,106,106,0.3);
    }
    @media screen and (min-width: 750px) {
      #sgp-sticky-bar { display: none !important; }
    }

    /* ── Email capture popup ── */
    #sgp-popup-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(3,5,14,0.85);
      backdrop-filter: blur(6px);
      align-items: center;
      justify-content: center;
    }
    #sgp-popup-overlay.active { display: flex; }
    #sgp-popup {
      position: relative;
      background: linear-gradient(135deg, #0a0e1c 0%, #1a1018 100%);
      border: 1px solid rgba(197,106,106,0.3);
      border-radius: 20px;
      padding: 40px 36px 36px;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 0 60px rgba(197,106,106,0.12);
      text-align: center;
      animation: sgpPopIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes sgpPopIn {
      from { opacity: 0; transform: scale(0.85) translateY(20px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    #sgp-popup__close {
      position: absolute; top: 14px; right: 18px;
      background: none; border: none;
      color: rgba(255,255,255,0.35);
      font-size: 1.4rem; cursor: pointer; line-height: 1; padding: 4px 8px;
    }
    #sgp-popup__close:hover { color: #fff; }
    #sgp-popup__badge {
      display: inline-block;
      background: rgba(197,106,106,0.08);
      border: 1px solid rgba(197,106,106,0.35);
      color: #C56A6A; font-size: 0.72rem; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 5px 14px; border-radius: 50px; margin-bottom: 16px;
    }
    #sgp-popup__heading {
      color: #f0f4ff; font-size: 1.5rem; font-weight: 800;
      line-height: 1.25; margin: 0 0 10px;
    }
    #sgp-popup__heading span {
      background: linear-gradient(90deg, #C56A6A, #D98A8A);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    #sgp-popup__sub {
      color: #8892a4; font-size: 0.88rem; margin: 0 0 22px; line-height: 1.55;
    }
    #sgp-popup__form { display: flex; flex-direction: column; gap: 10px; }
    #sgp-popup__email {
      background: rgba(15,23,40,0.9) !important;
      border: 1px solid rgba(197,106,106,0.25) !important;
      border-radius: 50px !important;
      color: #f0f4ff !important;
      font-size: 0.95rem; padding: 13px 20px !important;
      outline: none; width: 100%; box-sizing: border-box; text-align: center;
    }
    #sgp-popup__email:focus {
      border-color: rgba(197,106,106,0.6) !important;
      box-shadow: 0 0 12px rgba(197,106,106,0.12) !important;
    }
    #sgp-popup__submit {
      background: linear-gradient(135deg, #C56A6A, #D98A8A) !important;
      color: #1a1a2e !important; font-weight: 800 !important;
      font-size: 0.92rem !important; border: none !important;
      border-radius: 50px !important; padding: 13px 24px !important;
      cursor: pointer !important; text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      box-shadow: 0 4px 20px rgba(197,106,106,0.3) !important;
    }
    #sgp-popup__success { display: none; color: #C56A6A; font-size: 1rem; font-weight: 700; padding: 8px 0; }
    #sgp-popup__skip {
      margin-top: 14px; font-size: 0.76rem; color: rgba(255,255,255,0.25);
      cursor: pointer; background: none; border: none; text-decoration: underline;
    }
    #sgp-popup__skip:hover { color: rgba(255,255,255,0.55); }
  `;

  function injectCSS() {
    if (document.getElementById('sgp-override')) return;
    var s = document.createElement('style');
    s.id = 'sgp-override';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  // ── Mobile sticky ATC bar ────────────────────────────────────────────────

  function initStickyBar() {
    if (window.innerWidth >= 750) return;
    if (!document.querySelector('.product-form__submit, button[name="add"]')) return;
    if (document.getElementById('sgp-sticky-bar')) return;

    var addBtn = document.querySelector('button[name="add"], .product-form__submit');
    var bar = document.createElement('div');
    bar.id = 'sgp-sticky-bar';
    bar.innerHTML =
      '<span id="sgp-sticky-bar__title">Derma Dose Co.</span>' +
      '<span id="sgp-sticky-bar__price">$44.99</span>' +
      '<button id="sgp-sticky-bar__btn" onclick="(document.querySelector(\'button[name=add],.product-form__submit\')||{click:function(){}}).click()">Add to Cart</button>';
    document.body.appendChild(bar);

    var io = new IntersectionObserver(function(entries) {
      bar.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    io.observe(addBtn);
  }

  // ── Email Capture Popup ──────────────────────────────────────────────────

  function initEmailPopup() {
    var STORAGE_KEY = 'sgp_popup_v1';
    if (localStorage.getItem(STORAGE_KEY)) return;

    var overlay = document.createElement('div');
    overlay.id = 'sgp-popup-overlay';
    overlay.innerHTML =
      '<div id="sgp-popup">' +
        '<button id="sgp-popup__close" aria-label="Close">\u2715</button>' +
        '<div id="sgp-popup__badge">Limited Launch Offer</div>' +
        '<h2 id="sgp-popup__heading">Get <span>10% Off</span><br>Your Derma Dose Co. Order</h2>' +
        '<p id="sgp-popup__sub">Join our community and get your exclusive launch discount. Professional pore cleansing starts here.</p>' +
        '<form id="sgp-popup__form">' +
          '<input id="sgp-popup__email" type="email" placeholder="your@email.com" autocomplete="email" required />' +
          '<button id="sgp-popup__submit" type="submit">Claim My 10% Off \u2192</button>' +
          '<p id="sgp-popup__success">\u2713 You\'re in! Check your inbox for your discount.</p>' +
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
    overlay.addEventListener('click', function(e) { if (e.target === overlay) dismiss(); });

    document.getElementById('sgp-popup__form').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('sgp-popup__email').value.trim();
      if (!email) return;
      var btn = document.getElementById('sgp-popup__submit');
      btn.textContent = 'Saving...';
      btn.disabled = true;
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'form_type=customer&utf8=\u2713&contact[email]=' + encodeURIComponent(email) +
              '&contact[tags]=email-popup,10-percent-discount&contact[accepts_marketing]=true'
      }).then(function() {
        document.getElementById('sgp-popup__form').style.display = 'none';
        document.getElementById('sgp-popup__success').style.display = 'block';
        localStorage.setItem(STORAGE_KEY, '1');
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      }).catch(function() {
        document.getElementById('sgp-popup__form').style.display = 'none';
        document.getElementById('sgp-popup__success').style.display = 'block';
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      });
    });

    var shown = false;
    function showPopup() { if (shown) return; shown = true; overlay.classList.add('active'); }

    setTimeout(showPopup, 20000);
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= window.innerHeight * 0.1) showPopup();
    });
  }

  // ── Meta Pixel E-Commerce Events — REMOVED 2026-04-20 ─────────────────────
  // Shopify's Web Pixels Manager (2023+) sandboxes the storefront and blocks
  // inline fbq calls fired on later events (DOMContentLoaded / form submit /
  // click). Only PageView slipped through. ViewContent / AddToCart /
  // InitiateCheckout / Purchase never reached Meta — confirmed via API.
  //
  // Replaced with the official Meta Sales Channel app (installed via Shopify
  // admin → Apps → Meta), which fires all events through the sanctioned
  // Customer Events / Web Pixels API + Conversions API. That setup is the
  // 2026 standard per reference_2026_meta_test_strategy memory.

  // ── Brand Name Rewrites (shop.name is stuck via admin, rewrite in DOM) ──
  // Scoped to ONLY: <title>, header logo/shop name, footer copyright.
  // Must NOT rewrite inside <main>, .product, .product__title, .product-form,
  // or the product info block — the product is literally named "GlowVac Pro".
  function rewriteBrandIn(node) {
    if (!node) return;
    // Guard: never rewrite inside product/main regions
    if (node.closest && node.closest('main, .product, .product__title, .product-form, .product__info-wrapper, .product__info-container')) return;
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
    var texts = [], t;
    while ((t = walker.nextNode())) {
      if (t.nodeValue && (t.nodeValue.indexOf('GlowVac Pro') !== -1 || t.nodeValue.indexOf('Derma Rose Co.') !== -1)) {
        texts.push(t);
      }
    }
    texts.forEach(function(tn){
      tn.nodeValue = tn.nodeValue
        .replace(/GlowVac Pro/g, 'Derma Dose Co.')
        .replace(/Derma Rose Co\./g, 'Derma Dose Co.');
    });
  }

  function fixBrandNameEverywhere() {
    try {
      // 1. <title>
      if (document.title.indexOf('GlowVac Pro') !== -1 || document.title.indexOf('Derma Rose Co.') !== -1) {
        document.title = document.title
          .replace(/GlowVac Pro/g, 'Derma Dose Co.')
          .replace(/Derma Rose Co\./g, 'Derma Dose Co.')
          .replace(/Derma Dose Co\. – Derma Dose Co\./g, 'Derma Dose Co.');
      }
      if (!document.body) return;

      // 2. Header logo / shop name link
      var headerSelectors = [
        '.header__heading',
        '.header__heading-link',
        '.header__heading-logo',
        'h1.header__heading'
      ];
      headerSelectors.forEach(function(sel){
        document.querySelectorAll(sel).forEach(rewriteBrandIn);
      });

      // 3. Footer copyright (Dawn default: .copyright__content)
      var footerSelectors = [
        '.copyright__content',
        '.copyright',
        '.footer__copyright',
        'small.copyright__content'
      ];
      footerSelectors.forEach(function(sel){
        document.querySelectorAll(sel).forEach(rewriteBrandIn);
      });
    } catch(e) {}
  }

  // ── Init ─────────────────────────────────────────────────────────────────

  injectCSS();
  fixBrandNameEverywhere();

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    fixBrandNameEverywhere();
    initStickyBar();
    initEmailPopup();
    // initPixelEvents removed 2026-04-20 — Meta Sales Channel app handles all e-commerce events
    // re-run after any late footer/copyright injection
    setTimeout(fixBrandNameEverywhere, 500);
    setTimeout(fixBrandNameEverywhere, 2000);
  });

})();
