/* 📁 /mobile-nav.js — Header & top bar mobile CZN
   Injecte : burger + drawer de navigation, dropdown de langue (top bar).
   Chargé en defer sur toutes les pages. Aucun changement de markup requis. */
(function () {
  var isEN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0
          || window.location.pathname.indexOf('/en') === 0;
  var isES = (document.documentElement.lang || '').toLowerCase().indexOf('es') === 0
          || window.location.pathname.indexOf('/es') === 0;
  var prefix = isES ? '/es' : isEN ? '/en' : '';
  var t = function (fr, en, es) { return isES ? es : isEN ? en : fr; };

  /* ───────────────── 1. DROPDOWN LANGUE (top bar) ───────────────── */
  var utilRight = document.querySelector('.utility-bar .utility-right');
  if (utilRight) {
    var existing = utilRight.querySelector('.util-langs');
    var frHref = '/', enHref = '/en/', esHref = '/es/';
    if (existing) {
      var frA = existing.querySelector('a[hreflang="fr"]');
      var enA = existing.querySelector('a[hreflang="en"]');
      var esA = existing.querySelector('a[hreflang="es-ES"], a[hreflang="es"]');
      if (frA) frHref = frA.getAttribute('href');
      if (enA) enHref = enA.getAttribute('href');
      if (esA) esHref = esA.getAttribute('href');
    }
    var FLAG_FR = '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#0055A4"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>';
    var FLAG_EN = '<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0 60 30M60 0 0 30" stroke="#fff" stroke-width="6"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg>';
    var FLAG_ES = '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#AA151B"/><rect y=".5" width="3" height="1" fill="#F1BF00"/></svg>';

    var curFlag = isES ? FLAG_ES : isEN ? FLAG_EN : FLAG_FR;
    var curLabel = isES ? 'ES' : isEN ? 'EN' : 'FR';
    var dd = document.createElement('div');
    dd.className = 'lang-dd';
    dd.innerHTML =
      '<button type="button" class="lang-dd-btn" aria-haspopup="true" aria-expanded="false" aria-label="' + t('Choisir la langue', 'Choose language', 'Elegir idioma') + '">' +
        curFlag + '<span>' + curLabel + '</span>' +
        '<svg class="lang-dd-caret" width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l3.5 3.5L8 1"/></svg>' +
      '</button>' +
      '<div class="lang-dd-menu" role="menu">' +
        '<a role="menuitem" href="' + frHref + '" hreflang="fr"' + (!isEN && !isES ? ' class="active"' : '') + '>' + FLAG_FR + '<span>Français</span></a>' +
        '<a role="menuitem" href="' + enHref + '" hreflang="en"' + (isEN ? ' class="active"' : '') + '>' + FLAG_EN + '<span>English</span></a>' +
        '<a role="menuitem" href="' + esHref + '" hreflang="es-ES"' + (isES ? ' class="active"' : '') + '>' + FLAG_ES + '<span>Español</span></a>' +
      '</div>';
    utilRight.appendChild(dd);

    var btn = dd.querySelector('.lang-dd-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function () {
      dd.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* ───────────────── 3. PASTILLE COMPACTE (très petits écrans) ─────────────────
     "Actuellement ouvert" → "Ouvert" sous 420px (le script inline réécrit le
     texte complet toutes les 60s, on observe et on re-raccourcit). */
  var pill = document.getElementById('openStatus');
  if (pill) {
    var statusTxt = pill.querySelector('.status-text');
    var mqSmall = window.matchMedia('(max-width: 420px)');
    var shorten = function () {
      if (!statusTxt) return;
      var cur = statusTxt.textContent;
      if (/^(Actuellement|Currently)\s/i.test(cur)) statusTxt.dataset.full = cur;
      var full = statusTxt.dataset.full || cur;
      var want = full;
      if (mqSmall.matches) {
        want = full.replace(/^(Actuellement|Currently)\s+/i, '');
        want = want.charAt(0).toUpperCase() + want.slice(1);
      }
      if (cur !== want) statusTxt.textContent = want;
    };
    shorten();
    new MutationObserver(shorten).observe(pill, { childList: true, subtree: true, characterData: true });
    if (mqSmall.addEventListener) mqSmall.addEventListener('change', shorten);
  }

  /* ───────────────── 4. BURGER + DRAWER ───────────────── */
  var navInner = document.querySelector('#mainNav .nav-inner');
  if (!navInner) return;

  var burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'nav-burger';
  burger.setAttribute('aria-label', t('Ouvrir le menu', 'Open menu', 'Abrir el menú'));
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'mobileDrawer');
  burger.innerHTML = '<span></span><span></span><span></span>';
  navInner.appendChild(burger);

  /* Liens : clonés depuis la nav desktop pour rester synchro (page active, langue…) */
  var linksHTML = '';
  var navLinks = document.querySelectorAll('#mainNav .nav-links a');
  navLinks.forEach(function (a, i) {
    linksHTML += '<li style="--i:' + i + '"><a href="' + a.getAttribute('href') + '"' +
      (a.classList.contains('nav-active') ? ' class="nav-active"' : '') + '>' +
      a.textContent.trim() + '</a></li>';
  });

  var drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  drawer.id = 'mobileDrawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.innerHTML =
    '<div class="mobile-drawer-backdrop"></div>' +
    '<div class="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="' + t('Menu de navigation', 'Navigation menu', 'Menú de navegación') + '">' +
      '<div class="mobile-drawer-head">' +
        '<span class="mobile-drawer-title">' + t('Menu', 'Menu', 'Menú') + '</span>' +
        '<button type="button" class="mobile-drawer-close" aria-label="' + t('Fermer le menu', 'Close menu', 'Cerrar el menú') + '">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
      '</div>' +
      '<ul class="mobile-drawer-links">' + linksHTML + '</ul>' +
      '<div class="mobile-drawer-foot">' +
        '<a href="' + prefix + '/contact/" data-rdv class="mobile-drawer-cta">' + t('Prendre un RDV', 'Book an appointment', 'Reservar una cita') +
          ' <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 5h12M8 1l4 4-4 4"/></svg></a>' +
        '<a href="tel:+33531605161" class="mobile-drawer-phone">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z"/></svg>' +
          '+33 5 31 60 51 61</a>' +
      '</div>' +
    '</div>';
  document.body.appendChild(drawer);

  var panelLinks = drawer.querySelectorAll('a');
  function setOpen(open) {
    drawer.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('drawer-locked', open);
  }
  burger.addEventListener('click', function () { setOpen(!drawer.classList.contains('open')); });
  drawer.querySelector('.mobile-drawer-close').addEventListener('click', function () { setOpen(false); });
  drawer.querySelector('.mobile-drawer-backdrop').addEventListener('click', function () { setOpen(false); });
  panelLinks.forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
