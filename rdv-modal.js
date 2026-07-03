/* ============================================================
   CZN Machinery — Popup de prise de rendez-vous (Axonaut)
   Auto-suffisant : injecte son CSS, crée la modale, intercepte
   les clics sur le bouton ".nav-cta" (Prendre un rdv) et tout
   élément portant l'attribut [data-rdv].
   L'iframe Axonaut n'est chargée qu'à la première ouverture.
   ============================================================ */
(function () {
  'use strict';

  var IFRAME_SRC = 'https://axonaut.com/public/booking/d79ca1/pageShow/r-servez-un-rendez-vous-bf82ae';
  var loaded = false;
  var lastFocus = null;

  // ---------- CSS ----------
  var css = [
    '.rdv-overlay{position:fixed;inset:0;z-index:9999;display:none;align-items:flex-start;justify-content:center;',
    'background:rgba(33,42,53,.55);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);',
    'padding:40px 16px;overflow-y:auto;opacity:0;transition:opacity .25s ease;}',
    '.rdv-overlay.open{display:flex;opacity:1;}',
    '.rdv-dialog{position:relative;width:100%;max-width:760px;background:#f4efe4;border-radius:16px;',
    'box-shadow:0 24px 70px rgba(0,0,0,.35);overflow:hidden;transform:translateY(12px);transition:transform .25s ease;}',
    '.rdv-overlay.open .rdv-dialog{transform:translateY(0);}',
    '.rdv-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;',
    'border-bottom:1px solid rgba(33,42,53,.1);}',
    '.rdv-head h2{margin:0;font-size:1.15rem;color:#212A35;font-family:inherit;font-weight:600;}',
    '.rdv-close{flex:0 0 auto;width:38px;height:38px;border:none;border-radius:50%;cursor:pointer;',
    'background:rgba(33,42,53,.08);color:#212A35;font-size:24px;line-height:1;display:flex;align-items:center;',
    'justify-content:center;transition:background .2s ease,color .2s ease;}',
    '.rdv-close:hover{background:rgba(242,129,28,.18);color:#F2811C;}',
    '.rdv-body{position:relative;background:#fff;min-height:700px;}',
    '.rdv-body iframe{display:block;width:100%;height:700px;border:none;}',
    '.rdv-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;',
    'color:#5a6470;font-size:.95rem;}',
    'body.rdv-lock{overflow:hidden;}',
    '@media(max-width:600px){.rdv-overlay{padding:0;}.rdv-dialog{max-width:none;min-height:100vh;border-radius:0;}',
    '.rdv-body,.rdv-body iframe{min-height:0;height:calc(100vh - 74px);}}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ---------- Markup ----------
  var overlay = document.createElement('div');
  overlay.className = 'rdv-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Prendre un rendez-vous');
  overlay.innerHTML =
    '<div class="rdv-dialog">' +
      '<div class="rdv-head">' +
        '<h2>Prendre un rendez-vous</h2>' +
        '<button type="button" class="rdv-close" aria-label="Fermer">&times;</button>' +
      '</div>' +
      '<div class="rdv-body">' +
        '<div class="rdv-loading">Chargement du calendrier&hellip;</div>' +
      '</div>' +
    '</div>';

  var bodyEl = overlay.querySelector('.rdv-body');
  var closeBtn = overlay.querySelector('.rdv-close');

  // ---------- Open / Close ----------
  function open(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    if (!loaded) {
      var iframe = document.createElement('iframe');
      iframe.src = IFRAME_SRC;
      iframe.title = 'Calendrier de prise de rendez-vous CZN Machinery';
      iframe.addEventListener('load', function () {
        var l = bodyEl.querySelector('.rdv-loading');
        if (l) l.parentNode.removeChild(l);
      });
      bodyEl.appendChild(iframe);
      loaded = true;
    }
    overlay.classList.add('open');
    if(typeof gtag==='function'){gtag('event','rdv_open',{method:'axonaut'});}
    if(typeof fbq==='function'){fbq('trackCustom','RdvOpen');}
    document.body.classList.add('rdv-lock');
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('rdv-lock');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  // ---------- Init ----------
  // Délégation sur document : ouvre la popup pour tout .nav-cta / [data-rdv],
  // y compris les éléments injectés plus tard (ex. bouton du menu burger mobile).
  function init() {
    document.body.appendChild(overlay);
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('.nav-cta, [data-rdv]') : null;
      if (t) open(e);
      var tel = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null;
      if (tel) {
        if (typeof gtag === 'function') gtag('event', 'click_phone', { phone: (tel.getAttribute('href') || '').replace('tel:', '') });
        if (typeof fbq === 'function') fbq('track', 'Contact');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
