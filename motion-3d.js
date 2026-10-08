/* ============================================================
   CZN Machinery — Mouvement 3D de la page d'accueil
   ------------------------------------------------------------
   1. Inclinaison 3D des cartes (.product-card, .catv2-card) : la
      carte pivote vers le curseur, un reflet suit la souris.
   2. Rien n'est fait sur ecran tactile ni si l'utilisateur a
      demande moins d'animations : les cartes gardent alors le
      simple soulevement CSS d'origine.
   Les angles sont passes en variables CSS (--rx, --ry), le style
   reste dans styles.css.
   ============================================================ */
(function () {
  'use strict';
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || calm) return;

  var MAX = 7;           // inclinaison maximale, en degres

  function arm(card) {
    card.classList.add('tilt');
    var glare = document.createElement('span');
    glare.className = 'tilt-glare';
    card.appendChild(glare);

    card.addEventListener('mouseenter', function () { card.classList.add('is-tilting'); });
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;    // 0 → 1
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', ((px - 0.5) * 2 * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((0.5 - py) * 2 * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
    });
    card.addEventListener('mouseleave', function () {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }

  function init() {
    [].slice.call(document.querySelectorAll('.product-card, .catv2-card')).forEach(arm);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
