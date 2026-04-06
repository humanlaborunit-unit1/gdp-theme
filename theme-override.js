/**
 * GalaxyDream Pro — Supplement CSS & UI Enhancements
 * Injected via Shopify Script Tags API → jsDelivr CDN
 * Theme colors are now native via settings_data.json.
 * This file handles: mobile sticky bar, email popup, polish overrides.
 */
(function () {
  'use strict';

  var CSS = `
    /* ══════════════════════════════════════════════════════
       GALAXYDREAM PRO — POLISH OVERRIDES
       Theme handles base colors. This supplements.
    ══════════════════════════════════════════════════════ */

    /* ── Store name: inject brand ── */
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

    /* ── Primary CTA button — neon gradient glow ── */
    .button--primary,
    button[name="add"],
    .product-form__submit,
    .cart__checkout-button {
      background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%) !important;
      color: #000814 !important;
      font-weight: 800 !important;
      border: none !important;
      box-shadow: 0 0 22px rgba(0,212,255,0.4) !important;
      transition: box-shadow 0.25s ease, transform 0.2s ease !important;
    }
    .button--primary:hover,
    button[name="add"]:hover,
    .product-form__submit:hover {
      box-shadow: 0 0 40px rgba(0,212,255,0.65) !important;
      transform: translateY(-2px) !important;
    }

    /* ── Shopify dynamic checkout buttons ── */
    .shopify-payment-button__button--branded {
      background: linear-gradient(135deg, #00d4ff, #7c3aed) !important;
      box-shadow: 0 0 20px rgba(0,212,255,0.3) !important;
    }

    /* ── Product price color ── */
    .price__regular .price-item,
    .price .price-item--regular,
    .price-item {
      color: #00d4ff !important;
      font-weight: 800 !important;
    }
    .price__sale .price-item--regular,
    s.price-item {
      color: rgba(255,255,255,0.25) !important;
    }

    /* ── Collapsible tab headings ── */
    .collapsible-content__summary:hover,
    details[open] > summary { color: #00d4ff !important; }

    /* ── Links ── */
    a:not(.button):not(.header__heading-link):not(.gdp-hero__cta):not(.gdp-fcta__btn) {
      color: #7c9eff;
    }
    a:not(.button):not(.header__heading-link):hover { color: #00d4ff; }

    /* ── Header glass blur ── */
    .header, .header-wrapper {
      backdrop-filter: blur(16px) !important;
      -webkit-backdrop-filter: blur(16px) !important;
      border-bottom: 1px solid rgba(0,212,255,0.1) !important;
    }

    /* ── Cart drawer border ── */
    .cart-drawer {
      border-left: 1px solid rgba(0,212,255,0.15) !important;
    }

    /* ── Media / product images ── */
    .product__media img,
    .product-media-container img {
      border-radius: 12px !important;
    }

    /* ── Mobile sticky add-to-cart bar ── */
    #gdp-sticky-bar {
      display: none;
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9998;
      background: rgba(5,8,18,0.97);
      backdrop-filter: blur(14px);
      border-top: 1px solid rgba(0,212,255,0.25);
      padding: 12px 16px;
      align-items: center;
      gap: 12px;
      box-shadow: 0 -4px 30px rgba(0,212,255,0.1);
      transform: translateY(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    #gdp-sticky-bar.visible {
      display: flex;
      transform: translateY(0);
    }
    #gdp-sticky-bar__title {
      flex: 1;
      font-size: 0.85em;
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
      font-size: 0.82em;
      border: none;
      border-radius: 50px;
      padding: 11px 20px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
      box-shadow: 0 0 15px rgba(0,212,255,0.3);
    }
    @media screen and (min-width: 750px) {
      #gdp-sticky-bar { display: none !important; }
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
      box-shadow: 0 0 60px rgba(0,212,255,0.12);
      text-align: center;
      animation: gdpPopIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }
    @keyframes gdpPopIn {
      from { opacity: 0; transform: scale(0.85) translateY(20px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    #gdp-popup__close {
      position: absolute; top: 14px; right: 18px;
      background: none; border: none;
      color: rgba(255,255,255,0.35);
      font-size: 1.4rem; cursor: pointer; line-height: 1; padding: 4px 8px;
    }
    #gdp-popup__close:hover { color: #fff; }
    #gdp-popup__badge {
      display: inline-block;
      background: rgba(0,212,255,0.08);
      border: 1px solid rgba(0,212,255,0.35);
      color: #00d4ff; font-size: 0.72rem; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 5px 14px; border-radius: 50px; margin-bottom: 16px;
    }
    #gdp-popup__heading {
      color: #f0f4ff; font-size: 1.5rem; font-weight: 800;
      line-height: 1.25; margin: 0 0 10px;
    }
    #gdp-popup__heading span {
      background: linear-gradient(90deg, #00d4ff, #7c3aed);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    #gdp-popup__sub {
      color: #8892a4; font-size: 0.88rem; margin: 0 0 22px; line-height: 1.55;
    }
    #gdp-popup__form { display: flex; flex-direction: column; gap: 10px; }
    #gdp-popup__email {
      background: rgba(15,23,40,0.9) !important;
      border: 1px solid rgba(0,212,255,0.25) !important;
      border-radius: 50px !important;
      color: #f0f4ff !important;
      font-size: 0.95rem; padding: 13px 20px !important;
      outline: none; width: 100%; box-sizing: border-box; text-align: center;
    }
    #gdp-popup__email:focus {
      border-color: rgba(0,212,255,0.6) !important;
      box-shadow: 0 0 12px rgba(0,212,255,0.12) !important;
    }
    #gdp-popup__submit {
      background: linear-gradient(135deg, #00d4ff, #7c3aed) !important;
      color: #000814 !important; font-weight: 800 !important;
      font-size: 0.92rem !important; border: none !important;
      border-radius: 50px !important; padding: 13px 24px !important;
      cursor: pointer !important; text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      box-shadow: 0 0 20px rgba(0,212,255,0.3) !important;
    }
    #gdp-popup__success { display: none; color: #00d4ff; font-size: 1rem; font-weight: 700; padding: 8px 0; }
    #gdp-popup__skip {
      margin-top: 14px; font-size: 0.76rem; color: rgba(255,255,255,0.25);
      cursor: pointer; background: none; border: none; text-decoration: underline;
    }
    #gdp-popup__skip:hover { color: rgba(255,255,255,0.55); }
  `;

  function injectCSS() {
    if (document.getElementById('gdp-override')) return;
    var s = document.createElement('style');
    s.id = 'gdp-override';
    s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }

  // ── Mobile sticky ATC bar ────────────────────────────────────────────────

  function initStickyBar() {
    if (window.innerWidth >= 750) return;
    if (!document.querySelector('.product-form__submit, button[name="add"]')) return;
    if (document.getElementById('gdp-sticky-bar')) return;

    var addBtn = document.querySelector('button[name="add"], .product-form__submit');
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
    if (localStorage.getItem(STORAGE_KEY)) return;

    var overlay = document.createElement('div');
    overlay.id = 'gdp-popup-overlay';
    overlay.innerHTML =
      '<div id="gdp-popup">' +
        '<button id="gdp-popup__close" aria-label="Close">\u2715</button>' +
        '<div id="gdp-popup__badge">\u2726 Limited Offer</div>' +
        '<h2 id="gdp-popup__heading">Get <span>10% Off</span><br>Your Galaxy</h2>' +
        '<p id="gdp-popup__sub">Join 10,000+ galaxy dreamers. Get exclusive deals and your welcome discount straight to your inbox.</p>' +
        '<form id="gdp-popup__form">' +
          '<input id="gdp-popup__email" type="email" placeholder="your@email.com" autocomplete="email" required />' +
          '<button id="gdp-popup__submit" type="submit">Claim My 10% Off \u2192</button>' +
          '<p id="gdp-popup__success">\u2713 You\'re in! Check your inbox for your discount.</p>' +
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
    overlay.addEventListener('click', function(e) { if (e.target === overlay) dismiss(); });

    document.getElementById('gdp-popup__form').addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('gdp-popup__email').value.trim();
      if (!email) return;
      var btn = document.getElementById('gdp-popup__submit');
      btn.textContent = 'Saving...';
      btn.disabled = true;
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'form_type=customer&utf8=\u2713&contact[email]=' + encodeURIComponent(email) +
              '&contact[tags]=email-popup,10-percent-discount&contact[accepts_marketing]=true'
      }).then(function() {
        document.getElementById('gdp-popup__form').style.display = 'none';
        document.getElementById('gdp-popup__success').style.display = 'block';
        localStorage.setItem(STORAGE_KEY, '1');
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      }).catch(function() {
        document.getElementById('gdp-popup__form').style.display = 'none';
        document.getElementById('gdp-popup__success').style.display = 'block';
        setTimeout(function() { overlay.classList.remove('active'); }, 3000);
      });
    });

    var shown = false;
    function showPopup() { if (shown) return; shown = true; overlay.classList.add('active'); }

    setTimeout(showPopup, 8000);
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= window.innerHeight * 0.1) showPopup();
    });
    var scrollFired = false;
    window.addEventListener('scroll', function() {
      if (scrollFired) return;
      var scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.6) { scrollFired = true; showPopup(); }
    }, { passive: true });
  }

  // ── Init ─────────────────────────────────────────────────────────────────

  injectCSS();

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    initStickyBar();
    initEmailPopup();
  });

})();
