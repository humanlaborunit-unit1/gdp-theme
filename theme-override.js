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

  // Inject CSS immediately to prevent flash of unstyled content
  injectCSS();

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    initStickyBar();
  });

})();
