/**
 * GalaxyDream Pro — Space Theme Override
 * Injected via Shopify Script Tags API → served from jsDelivr CDN
 * Overrides Spotlight theme color schemes with deep space aesthetic
 */
(function () {
  'use strict';

  var CSS = `
    /* ══════════════════════════════════════════════════════
       GALAXYDREAM PRO — SPACE THEME OVERRIDE
       Applied via Script Tag injection (no paid plan needed)
    ══════════════════════════════════════════════════════ */

    /* ── Scheme 1: Main — deep space dark ── */
    .color-scheme-1 {
      --color-background: 8,11,22;
      --gradient-background: #080b16;
      --color-foreground: 240,244,255;
      --color-background-contrast: 20,28,52;
      --color-shadow: 0,212,255;
      --color-button: 0,212,255;
      --color-button-text: 0,8,20;
      --color-secondary-button: 8,11,22;
      --color-secondary-button-text: 240,244,255;
      --color-link: 0,212,255;
      --color-badge-foreground: 0,212,255;
      --color-badge-background: 8,11,22;
      --color-badge-border: 0,212,255;
    }

    /* ── Scheme 2: Alternate sections — navy ── */
    .color-scheme-2 {
      --color-background: 10,14,28;
      --gradient-background: #0a0e1c;
      --color-foreground: 196,204,232;
      --color-background-contrast: 22,30,56;
      --color-shadow: 139,92,246;
      --color-button: 139,92,246;
      --color-button-text: 255,255,255;
      --color-secondary-button: 10,14,28;
      --color-secondary-button-text: 196,204,232;
      --color-link: 139,92,246;
    }

    /* ── Scheme 3: Deep dark ── */
    .color-scheme-3 {
      --color-background: 5,8,18;
      --gradient-background: #050812;
      --color-foreground: 255,255,255;
      --color-background-contrast: 15,22,45;
      --color-button: 0,255,136;
      --color-button-text: 0,20,10;
      --color-secondary-button-text: 255,255,255;
      --color-link: 0,255,136;
    }

    /* ── Scheme 4: Near-black ── */
    .color-scheme-4 {
      --color-background: 3,5,14;
      --gradient-background: #03050e;
      --color-foreground: 255,255,255;
      --color-button: 0,212,255;
      --color-button-text: 0,8,20;
    }

    /* ── Scheme 5: Deep purple — urgency ── */
    .color-scheme-5 {
      --color-background: 20,6,44;
      --gradient-background: #14062c;
      --color-foreground: 255,255,255;
      --color-button: 0,212,255;
      --color-button-text: 0,8,20;
    }

    /* ── Global body & page ── */
    body {
      background-color: rgb(8,11,22) !important;
      color: rgb(240,244,255) !important;
    }

    /* ── Header — sticky glass ── */
    .header, .header-wrapper {
      background-color: rgba(8,11,22,0.96) !important;
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(0,212,255,0.15) !important;
    }
    .header__heading-link, .header__menu-item span,
    .header__icon svg, .header__icon {
      color: rgb(220,228,255) !important;
      fill: rgb(220,228,255) !important;
    }
    .header__heading-logo { filter: brightness(1.2); }

    /* ── Store name: hide "716 Table Smashers", inject brand name ── */
    .header__heading-link .h2 { font-size: 0 !important; }
    .header__heading-link .h2::before {
      content: "✦ GalaxyDream Pro";
      font-size: 1.1rem !important;
      font-weight: 800 !important;
      letter-spacing: 0.04em !important;
      background: linear-gradient(90deg, #00d4ff, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Announcement bar ── */
    .shopify-section-group-header-group .shopify-section:first-child > * {
      background: linear-gradient(90deg,#1e0a3c 0%,#0a1628 50%,#1e0a3c 100%) !important;
      border-bottom: 1px solid rgba(0,212,255,0.3) !important;
      color: #00d4ff !important;
      font-weight: 600 !important;
    }
    .announcement-bar, [class*="announcement"] {
      background: linear-gradient(90deg,#1e0a3c 0%,#0a1628 50%,#1e0a3c 100%) !important;
    }
    .announcement-bar__message, .announcement-bar a {
      color: #00d4ff !important;
      font-weight: 600 !important;
      letter-spacing: 0.04em !important;
    }

    /* ── Primary CTA button — neon gradient with glow ── */
    .button, .button--primary,
    button[name="add"],
    .product-form__submit,
    .cart__checkout-button {
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%) !important;
      background-color: transparent !important;
      color: #000814 !important;
      font-weight: 800 !important;
      border: none !important;
      border-radius: 50px !important;
      box-shadow: 0 0 22px rgba(0,212,255,0.45), 0 0 50px rgba(124,58,237,0.2) !important;
      transition: box-shadow 0.25s ease, transform 0.2s ease !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
    }
    .button:hover, .button--primary:hover,
    button[name="add"]:hover,
    .product-form__submit:hover {
      box-shadow: 0 0 35px rgba(0,212,255,0.7), 0 0 80px rgba(124,58,237,0.4) !important;
      transform: translateY(-2px) !important;
    }
    /* Secondary/outline buttons */
    .button--secondary {
      background: transparent !important;
      border: 2px solid rgba(0,212,255,0.5) !important;
      color: #00d4ff !important;
      box-shadow: none !important;
    }
    .button--secondary:hover {
      border-color: #00d4ff !important;
      box-shadow: 0 0 16px rgba(0,212,255,0.3) !important;
    }

    /* ── Shopify dynamic checkout buttons ── */
    .shopify-payment-button__button {
      border-radius: 50px !important;
    }
    .shopify-payment-button__button--branded {
      background: linear-gradient(135deg,#00d4ff,#7c3aed) !important;
      box-shadow: 0 0 20px rgba(0,212,255,0.35) !important;
    }

    /* ── Price display ── */
    .price__regular .price-item,
    .price .price-item--regular,
    .price-item {
      color: #00d4ff !important;
      font-size: 1.75em !important;
      font-weight: 800 !important;
    }
    .price__sale .price-item--regular,
    s.price-item {
      color: rgba(255,255,255,0.3) !important;
      font-size: 1em !important;
      font-weight: 400 !important;
    }

    /* ── Product images ── */
    .product__media img,
    .product-media-container img {
      border-radius: 12px !important;
      border: 1px solid rgba(0,212,255,0.12) !important;
    }
    .product__media-icon {
      background: rgba(8,11,22,0.8) !important;
    }

    /* ── Product title ── */
    .product__title, h1.product__title {
      color: #f0f4ff !important;
      font-weight: 800 !important;
      letter-spacing: -0.02em !important;
    }

    /* ── Forms — quantity, variant ── */
    .quantity__input,
    .quantity__button {
      background-color: rgba(15,23,40,0.9) !important;
      border-color: rgba(0,212,255,0.25) !important;
      color: #f0f4ff !important;
    }

    /* ── Card components ── */
    .card, .card-wrapper {
      background-color: rgb(10,14,28) !important;
      border-color: rgba(0,212,255,0.1) !important;
    }
    .card__heading, .card .h3 {
      color: #f0f4ff !important;
    }

    /* ── Collection / featured section headings ── */
    .title, .collection__title,
    h2.title, h3.title {
      color: #f0f4ff !important;
    }

    /* ── Rich text sections ── */
    .rich-text__text, .rte {
      color: #a0aec0 !important;
    }
    .rich-text__heading {
      color: #f0f4ff !important;
    }

    /* ── Collapsible content / FAQ ── */
    .collapsible-content__summary,
    details > summary {
      border-bottom-color: rgba(0,212,255,0.15) !important;
      color: #e0e8ff !important;
    }
    .collapsible-content__summary:hover {
      color: #00d4ff !important;
    }
    .disclosure-has-popup summary,
    details[open] > summary {
      color: #00d4ff !important;
    }

    /* ── Multicolumn cards ── */
    .multicolumn-card__info {
      background: rgba(10,14,28,0.7) !important;
      border: 1px solid rgba(0,212,255,0.1) !important;
      border-radius: 12px !important;
      padding: 20px !important;
    }
    .column__heading {
      color: #f0f4ff !important;
    }

    /* ── Image banner overlay ── */
    .banner__media::after {
      background: linear-gradient(135deg, rgba(8,11,22,0.7) 0%, rgba(20,6,44,0.4) 100%) !important;
    }
    .banner__content .banner__text * {
      color: #f0f4ff !important;
    }

    /* ── Footer ── */
    .footer {
      background-color: rgb(3,5,14) !important;
      border-top: 1px solid rgba(0,212,255,0.1) !important;
      color: #6b7280 !important;
    }
    .footer__content-top, .footer__content-bottom {
      color: #6b7280 !important;
    }
    .footer a { color: #8892a4 !important; }
    .footer a:hover { color: #00d4ff !important; }

    /* ── Cart drawer ── */
    .cart-drawer {
      background-color: rgb(8,11,22) !important;
      border-left: 1px solid rgba(0,212,255,0.15) !important;
    }
    .cart-drawer__header {
      border-bottom-color: rgba(0,212,255,0.15) !important;
    }

    /* ── Input fields ── */
    input[type="text"], input[type="email"],
    input[type="tel"], textarea, select {
      background-color: rgba(15,23,40,0.9) !important;
      border-color: rgba(0,212,255,0.2) !important;
      color: #f0f4ff !important;
    }
    input::placeholder, textarea::placeholder {
      color: #4a5568 !important;
    }

    /* ── Section dividers ── */
    .shopify-section { border-color: rgba(0,212,255,0.08) !important; }

    /* ── Headings global ── */
    h1, h2, h3, h4, h5, h6 {
      color: #f0f4ff;
      font-weight: 700;
    }

    /* ── Links ── */
    a:not(.button):not(.header__heading-link) {
      color: #7c9eff;
    }
    a:not(.button):hover {
      color: #00d4ff;
    }

    /* ── Email capture popup ── */
    #gdp-popup-overlay {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(3,5,14,0.85);
      backdrop-filter: blur(6px);
      align-items: center;
      justify-content: center;
    }
    #gdp-popup-overlay.active { display: flex; }
    #gdp-popup {
      position: relative;
      background: linear-gradient(135deg, #0a0e1c 0%, #14062c 100%);
      border: 1px solid rgba(0,212,255,0.3);
      border-radius: 20px;
      padding: 40px 36px 36px;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(124,58,237,0.1);
      text-align: center;
      animation: gdpPopIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes gdpPopIn {
      from { opacity: 0; transform: scale(0.85) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    #gdp-popup__close {
      position: absolute;
      top: 14px; right: 18px;
      background: none;
      border: none;
      color: rgba(255,255,255,0.4);
      font-size: 1.4rem;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
    }
    #gdp-popup__close:hover { color: #fff; }
    #gdp-popup__badge {
      display: inline-block;
      background: linear-gradient(135deg, #00d4ff22, #7c3aed22);
      border: 1px solid rgba(0,212,255,0.4);
      color: #00d4ff;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 50px;
      margin-bottom: 16px;
    }
    #gdp-popup__heading {
      color: #f0f4ff;
      font-size: 1.55rem;
      font-weight: 800;
      line-height: 1.25;
      margin: 0 0 10px;
    }
    #gdp-popup__heading span {
      background: linear-gradient(90deg, #00d4ff, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    #gdp-popup__sub {
      color: #8892a4;
      font-size: 0.9rem;
      margin: 0 0 22px;
      line-height: 1.5;
    }
    #gdp-popup__form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #gdp-popup__email {
      background: rgba(15,23,40,0.9) !important;
      border: 1px solid rgba(0,212,255,0.25) !important;
      border-radius: 50px !important;
      color: #f0f4ff !important;
      font-size: 0.95rem;
      padding: 13px 20px !important;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    #gdp-popup__email:focus {
      border-color: rgba(0,212,255,0.6) !important;
      box-shadow: 0 0 12px rgba(0,212,255,0.15) !important;
    }
    #gdp-popup__submit {
      background: linear-gradient(135deg, #00d4ff, #7c3aed) !important;
      color: #000814 !important;
      font-weight: 800 !important;
      font-size: 0.95rem !important;
      border: none !important;
      border-radius: 50px !important;
      padding: 13px 24px !important;
      cursor: pointer !important;
      text-transform: uppercase !important;
      letter-spacing: 0.06em !important;
      box-shadow: 0 0 20px rgba(0,212,255,0.35) !important;
      transition: box-shadow 0.2s, transform 0.2s !important;
    }
    #gdp-popup__submit:hover {
      box-shadow: 0 0 35px rgba(0,212,255,0.6) !important;
      transform: translateY(-1px) !important;
    }
    #gdp-popup__success {
      display: none;
      color: #00d4ff;
      font-size: 1.05rem;
      font-weight: 700;
      padding: 8px 0;
    }
    #gdp-popup__skip {
      margin-top: 14px;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.3);
      cursor: pointer;
      background: none;
      border: none;
      text-decoration: underline;
    }
    #gdp-popup__skip:hover { color: rgba(255,255,255,0.6); }

    /* ── Mobile sticky add-to-cart bar ── */
    #gdp-sticky-bar {
      display: none;
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: rgba(5,8,18,0.97);
      backdrop-filter: blur(14px);
      border-top: 1px solid rgba(0,212,255,0.3);
      padding: 12px 16px;
      align-items: center;
      gap: 12px;
      box-shadow: 0 -4px 30px rgba(0,212,255,0.12);
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    #gdp-sticky-bar.visible {
      display: flex;
      transform: translateY(0);
    }
    #gdp-sticky-bar__title {
      flex: 1;
      font-size: 0.88em;
      font-weight: 700;
      color: #f0f4ff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #gdp-sticky-bar__price {
      font-weight: 800;
      color: #00d4ff;
      font-size: 1em;
      white-space: nowrap;
    }
    #gdp-sticky-bar__btn {
      background: linear-gradient(135deg, #00d4ff, #7c3aed);
      color: #000814;
      font-weight: 800;
      font-size: 0.85em;
      border: none;
      border-radius: 50px;
      padding: 11px 22px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
      box-shadow: 0 0 15px rgba(0,212,255,0.35);
    }
    @media screen and (min-width: 750px) {
      #gdp-sticky-bar { display: none !important; }
    }
  `;

  function injectCSS() {
    if (document.getElementById('gdp-override')) return;
    var s = document.createElement('style');
    s.id = 'gdp-override';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  function initStickyBar() {
    if (window.innerWidth >= 750) return;
    var addBtn = document.querySelector('button[name="add"], .product-form__submit');
    if (!addBtn) return;
    if (document.getElementById('gdp-sticky-bar')) return;

    var bar = document.createElement('div');
    bar.id = 'gdp-sticky-bar';
    bar.innerHTML =
      '<span id="gdp-sticky-bar__title">GalaxyDream Pro Star Projector</span>' +
      '<span id="gdp-sticky-bar__price">$49.99</span>' +
      '<button id="gdp-sticky-bar__btn" onclick="(document.querySelector(\'button[name=add],.product-form__submit\')||{click:function(){}}).click()">Add to Cart</button>';
    document.body.appendChild(bar);

    var io = new IntersectionObserver(function(entries) {
      bar.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    io.observe(addBtn);
  }

  // ── Email Capture Popup ──────────────────────────────────────────────────

  function initEmailPopup() {
    var STORAGE_KEY = 'gdp_popup_v1';
    var dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    // Build the overlay
    var overlay = document.createElement('div');
    overlay.id = 'gdp-popup-overlay';
    overlay.innerHTML =
      '<div id="gdp-popup">' +
        '<button id="gdp-popup__close" aria-label="Close">✕</button>' +
        '<div id="gdp-popup__badge">✦ Limited Offer</div>' +
        '<h2 id="gdp-popup__heading">Get <span>10% Off</span><br>Your Galaxy</h2>' +
        '<p id="gdp-popup__sub">Join 10,000+ galaxy dreamers. Get exclusive deals, new arrivals, and your welcome discount — straight to your inbox.</p>' +
        '<form id="gdp-popup__form">' +
          '<input id="gdp-popup__email" type="email" placeholder="your@email.com" autocomplete="email" required />' +
          '<button id="gdp-popup__submit" type="submit">Claim My 10% Off →</button>' +
          '<p id="gdp-popup__success">✓ You\'re in! Check your inbox for your discount.</p>' +
        '</form>' +
        '<button id="gdp-popup__skip">No thanks, I\'ll pay full price</button>' +
      '</div>';

    document.body.appendChild(overlay);

    function dismiss() {
      overlay.classList.remove('active');
      localStorage.setItem(STORAGE_KEY, '1');
    }

    document.getElementById('gdp-popup__close').addEventListener('click', dismiss);
    document.getElementById('gdp-popup__skip').addEventListener('click', dismiss);
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) dismiss();
    });

    document.getElementById('gdp-popup__form').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('gdp-popup__email').value.trim();
      if (!email) return;

      var btn = document.getElementById('gdp-popup__submit');
      btn.textContent = 'Saving...';
      btn.disabled = true;

      // Submit to Shopify customer newsletter (no server needed)
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'form_type=customer&utf8=✓&contact[email]=' + encodeURIComponent(email) +
              '&contact[tags]=email-popup,10-percent-discount&contact[accepts_marketing]=true'
      }).then(function() {
        document.getElementById('gdp-popup__form').style.display = 'none';
        document.getElementById('gdp-popup__success').style.display = 'block';
        localStorage.setItem(STORAGE_KEY, '1');
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      }).catch(function() {
        // Fallback: still show success (email captured client-side is better than nothing)
        document.getElementById('gdp-popup__form').style.display = 'none';
        document.getElementById('gdp-popup__success').style.display = 'block';
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      });
    });

    // Show after 8s OR on exit intent (desktop mouse leave)
    var shown = false;
    function showPopup() {
      if (shown) return;
      shown = true;
      overlay.classList.add('active');
    }

    // Timed trigger: 8 seconds
    setTimeout(showPopup, 8000);

    // Exit intent: mouse moves to top 10% of viewport
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= window.innerHeight * 0.1) showPopup();
    });

    // Mobile scroll trigger: user scrolls 60% down the page
    var scrollFired = false;
    window.addEventListener('scroll', function() {
      if (scrollFired) return;
      var scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.6) { scrollFired = true; showPopup(); }
    }, { passive: true });
  }

  // Inject CSS immediately to prevent flash of unstyled content
  injectCSS();

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    initStickyBar();
    initEmailPopup();
  });

})();
