/* ============================================================
   CZN Machinery — Sélecteur de couleur
   ------------------------------------------------------------
   Deux usages, un seul fichier :
     • CARTES d'aperçu  → <article class="product-card" data-colors='[…]'>
       change la photo (et le prix si la couleur en déclare un).
     • FICHE PRODUIT    → <div class="pdp-colors" data-colors='[…]'>
       change la galerie entière (image principale + vignettes),
       le libellé de couleur, le prix HT et le prix TTC.

   Les données viennent de `colors:` dans produit-data, sérialisées par
   build.js. Sans data-colors, ce script ne fait rien : les pages sans
   déclinaison sont totalement inchangées.
   ============================================================ */
(function () {
  'use strict';

  var VAT = 1.2;  // même taux que le build pour le prix TTC

  function parse(el) {
    try { return JSON.parse(el.getAttribute('data-colors') || '[]'); }
    catch (e) { return []; }
  }
  /* 7050 -> "7 050" avec une espace fine, comme le rendu serveur */
  function euro(n) {
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  function mark(dots, key) {
    dots.forEach(function (d) { d.classList.toggle('is-on', d.dataset.color === key); });
  }

  /* ---------- cartes d'aperçu ---------- */
  function initCard(card) {
    var colors = parse(card);
    if (colors.length < 2) return;
    var dots = [].slice.call(card.querySelectorAll('.cs-dot'));
    var img = card.querySelector('.product-photo');
    var val = card.querySelector('.price-val');
    var lab = card.querySelector('.cs-label');
    if (!dots.length || !img) return;

    dots.forEach(function (dot) {
      // Le lien invisible recouvre la carte : on stoppe la propagation
      // pour que cliquer une pastille ne navigue pas vers la fiche.
      ['click', 'mousedown', 'touchstart'].forEach(function (evt) {
        dot.addEventListener(evt, function (e) { e.preventDefault(); e.stopPropagation(); });
      });
      dot.addEventListener('click', function () {
        var c = colors.filter(function (x) { return x.key === dot.dataset.color; })[0];
        if (!c) return;
        if (c.images && c.images[0]) {
          img.src = c.images[0].src;
          if (c.images[0].alt) img.alt = c.images[0].alt;
        }
        if (val && c.priceHT) {
          val.innerHTML = euro(c.priceHT) + '<span class="currency">€</span>';
        }
        if (lab && c.label) lab.textContent = c.label;
        mark(dots, c.key);
      });
    });
  }

  /* ---------- fiche produit ---------- */
  function initPdp(box) {
    var colors = parse(box);
    if (colors.length < 2) return;
    var dots = [].slice.call(box.querySelectorAll('.cs-dot'));
    var main = document.getElementById('pdpMain');
    var thumbsBox = document.querySelector('.pdp-thumbs');
    var priceEl = document.getElementById('pdpPrice');
    var ttcEl = document.getElementById('pdpPriceTtc');
    var labelEl = document.getElementById('pdpColorLabel');
    if (!dots.length || !main) return;

    // Gabarit du libellé TTC ("soit 8 460 € TTC") : on garde la phrase et on
    // remplace seulement le nombre, pour rester valable dans les 3 langues.
    // Le motif DOIT commencer par un chiffre : sinon il avale aussi l'espace
    // qui precede le nombre, et on obtient « soit8 988 € ».
    var ttcTpl = ttcEl ? ttcEl.textContent.replace(/\d[\d  \s.,]*€/, '{v} €') : null;

    function apply(c) {
      var imgs = c.images || [];
      if (!imgs.length) return;

      main.src = imgs[0].src;
      main.alt = imgs[0].alt || main.alt;

      if (thumbsBox) {
        thumbsBox.innerHTML = imgs.map(function (im, i) {
          return '<button class="pdp-thumb' + (i === 0 ? ' active' : '') + '" data-src="' + im.src +
                 '" aria-label="Photo ' + (i + 1) + '"><img src="' + im.src +
                 '" alt="' + (im.alt || '') + '" loading="lazy"></button>';
        }).join('');
        // la galerie d'origine a capté les anciens boutons : on rebranche
        var nb = [].slice.call(thumbsBox.querySelectorAll('.pdp-thumb'));
        nb.forEach(function (b) {
          b.addEventListener('click', function () {
            main.src = b.dataset.src;
            nb.forEach(function (x) { x.classList.toggle('active', x === b); });
          });
        });
      }

      if (priceEl && c.priceHT) priceEl.innerHTML = euro(c.priceHT) + ' €';
      if (ttcEl && ttcTpl && c.priceHT) {
        ttcEl.textContent = ttcTpl.replace('{v}', euro(Math.round(c.priceHT * VAT)));
      }
      if (labelEl && c.label) labelEl.textContent = c.label;
      mark(dots, c.key);
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var c = colors.filter(function (x) { return x.key === dot.dataset.color; })[0];
        if (c) apply(c);
      });
    });
  }

  function init() {
    [].slice.call(document.querySelectorAll('.product-card[data-colors]')).forEach(initCard);
    [].slice.call(document.querySelectorAll('.pdp-colors[data-colors]')).forEach(initPdp);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
