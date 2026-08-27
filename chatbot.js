/* ============================================================
   CZN Machinery — Assistant de qualification (scripté)
   ------------------------------------------------------------
   Autonome : injecte son CSS, son markup, et se branche sur les
   canaux existants du site pour la bascule vers un humain :
     • [data-rdv]  → ouvre la modale de RDV Axonaut (rdv-modal.js)
     • tel:        → appel (tracking click_phone déjà délégué)
     • /contact/?topic=…&msg=…  → formulaire PRÉ-REMPLI (Formspree + CAPI)

   Trilingue : la langue est lue sur <html lang> (fr | en | es).
   Aucun appel réseau, aucune dépendance, aucune clé API.

   ▸ POUR MODIFIER LES TEXTES : tout est dans PACKS ci-dessous.
   ▸ POUR MODIFIER LE PARCOURS : voir buildTree() (structure commune
     aux 3 langues, seuls les libellés changent).
   ============================================================ */
(function () {
  'use strict';

  var PHONE      = '+33531605161';
  var PHONE_TXT  = '05 31 60 51 61';
  var TEASER_MS  = 12000;   // délai avant la bulle d'accroche (0 = désactivé)

  /* ---------------- langue ---------------- */
  var LANG = (document.documentElement.getAttribute('lang') || 'fr').slice(0, 2).toLowerCase();
  if (LANG !== 'en' && LANG !== 'es') LANG = 'fr';
  var PREFIX = LANG === 'fr' ? '' : '/' + LANG;

  /* ---------------- textes ---------------- */
  var PACKS = {
    fr: {
      title: 'Assistant CZN', subtitle: 'Réponse immédiate',
      open: "Ouvrir l'assistant", close: 'Fermer', restart: 'Recommencer',
      teaser: 'Une question ? Je vous oriente 👋',
      human: 'Parler à un conseiller', typing: 'écrit…',
      you: 'Vous',
      q_start: "Bonjour 👋 Je suis l'assistant CZN Machinery. Que puis-je faire pour vous ?",
      o_machine: 'Je cherche une machine', o_devis: 'Question sur un devis / prix',
      o_sav: 'SAV / pièces détachées', o_finance: 'Financement',
      o_delivery: 'Livraison', o_human: 'Parler à un conseiller',
      q_type: 'Quel type de machine vous intéresse ?',
      t_pelle: 'Mini-pelle', t_chargeur: 'Mini-chargeur', t_tombereau: 'Mini-tombereau / dumper',
      t_remorque: 'Remorque', t_autre: 'Broyeur / concasseur', t_occasion: "Machine d'occasion",
      t_unsure: 'Je ne sais pas encore',
      q_usage: 'Pour quel usage principal ?',
      u_terrassement: 'Terrassement', u_reseaux: 'Tranchées & réseaux',
      u_paysage: 'Aménagement paysager', u_demolition: 'Démolition',
      u_agricole: 'Agricole', u_autre: 'Autre / polyvalent',
      q_size: 'Quel gabarit recherchez-vous ?',
      s_micro: 'Moins de 1 T (micro-pelle)', s_1: '1 à 2 T', s_2: '2 à 3 T',
      s_3: 'Plus de 3 T', s_unsure: 'À définir avec un conseiller',
      q_timing: 'Sous quel délai souhaitez-vous être équipé ?',
      d_now: 'Dès que possible', d_soon: 'Sous 1 à 3 mois', d_later: 'Je me renseigne',
      q_devis: 'Votre demande concerne…',
      dv_new: 'Un devis pour une machine', dv_pending: 'Un devis déjà en cours',
      q_sav: 'De quoi s’agit-il ?',
      sv_piece: 'Une pièce détachée', sv_panne: 'Une panne / un dépannage',
      sv_entretien: 'Un entretien / une révision', sv_garantie: 'La garantie',
      i_finance: 'Nous proposons le financement <strong>Sofinco</strong> : de 200 € à 75 000 €, de 6 à 120 mois, avec ou sans apport. Réponse de principe immédiate.',
      f_simulate: 'Simuler mon financement',
      i_delivery: 'Nous livrons partout en France métropolitaine sur porte-engin spécialisé. Tarif fixe selon 6 zones, <strong>dès 250 € HT</strong>.',
      f_zones: 'Voir les tarifs par zone',
      q_hand: 'Comment souhaitez-vous continuer ?',
      recap_intro: 'Merci ! Voici ce que j’ai noté :',
      h_rdv: '📅 Prendre rendez-vous', h_call: '📞 Appeler le ' + PHONE_TXT,
      h_form: '✉️ Envoyer ma demande', h_catalog: 'Voir les machines',
      l_need: 'Besoin', l_type: 'Type de machine', l_usage: 'Usage',
      l_size: 'Gabarit', l_timing: 'Délai', l_sav: 'SAV',
      msg_head: "Demande envoyée depuis l'assistant du site :"
    },
    en: {
      title: 'CZN Assistant', subtitle: 'Instant reply',
      open: 'Open the assistant', close: 'Close', restart: 'Start over',
      teaser: 'A question? Let me point you 👋',
      human: 'Talk to an advisor', typing: 'is typing…',
      you: 'You',
      q_start: "Hello 👋 I'm the CZN Machinery assistant. How can I help?",
      o_machine: "I'm looking for a machine", o_devis: 'Question about a quote / price',
      o_sav: 'After-sales / spare parts', o_finance: 'Financing',
      o_delivery: 'Delivery', o_human: 'Talk to an advisor',
      q_type: 'Which type of machine are you interested in?',
      t_pelle: 'Mini excavator', t_chargeur: 'Mini loader', t_tombereau: 'Mini dumper',
      t_remorque: 'Trailer', t_autre: 'Mulcher / crusher', t_occasion: 'Used machine',
      t_unsure: "I'm not sure yet",
      q_usage: 'What is the main use?',
      u_terrassement: 'Earthworks', u_reseaux: 'Trenches & utilities',
      u_paysage: 'Landscaping', u_demolition: 'Demolition',
      u_agricole: 'Agricultural', u_autre: 'Other / versatile',
      q_size: 'What size are you looking for?',
      s_micro: 'Under 1 T (micro excavator)', s_1: '1 to 2 T', s_2: '2 to 3 T',
      s_3: 'Over 3 T', s_unsure: 'To be defined with an advisor',
      q_timing: 'When do you need the machine?',
      d_now: 'As soon as possible', d_soon: 'Within 1 to 3 months', d_later: 'Just researching',
      q_devis: 'Your request is about…',
      dv_new: 'A quote for a machine', dv_pending: 'A quote already in progress',
      q_sav: 'What is it about?',
      sv_piece: 'A spare part', sv_panne: 'A breakdown / repair',
      sv_entretien: 'Servicing / maintenance', sv_garantie: 'The warranty',
      i_finance: 'We offer <strong>Sofinco</strong> financing: from €200 to €75,000, over 6 to 120 months, with or without a down payment. Immediate provisional answer.',
      f_simulate: 'Simulate my financing',
      i_delivery: 'We deliver anywhere in mainland France on a specialised plant trailer. Fixed pricing across 6 zones, <strong>from €250 excl. VAT</strong>.',
      f_zones: 'See pricing by zone',
      q_hand: 'How would you like to continue?',
      recap_intro: "Thanks! Here's what I noted:",
      h_rdv: '📅 Book an appointment', h_call: '📞 Call ' + PHONE_TXT,
      h_form: '✉️ Send my request', h_catalog: 'See the machines',
      l_need: 'Need', l_type: 'Machine type', l_usage: 'Use',
      l_size: 'Size', l_timing: 'Timeframe', l_sav: 'After-sales',
      msg_head: 'Request sent from the website assistant:'
    },
    es: {
      title: 'Asistente CZN', subtitle: 'Respuesta inmediata',
      open: 'Abrir el asistente', close: 'Cerrar', restart: 'Empezar de nuevo',
      teaser: '¿Alguna pregunta? Le oriento 👋',
      human: 'Hablar con un asesor', typing: 'está escribiendo…',
      you: 'Usted',
      q_start: 'Hola 👋 Soy el asistente de CZN Machinery. ¿En qué puedo ayudarle?',
      o_machine: 'Busco una máquina', o_devis: 'Consulta sobre presupuesto / precio',
      o_sav: 'Posventa / recambios', o_finance: 'Financiación',
      o_delivery: 'Entrega', o_human: 'Hablar con un asesor',
      q_type: '¿Qué tipo de máquina le interesa?',
      t_pelle: 'Miniexcavadora', t_chargeur: 'Minicargadora', t_tombereau: 'Minidúmper',
      t_remorque: 'Remolque', t_autre: 'Trituradora / machacadora', t_occasion: 'Máquina de ocasión',
      t_unsure: 'Aún no lo sé',
      q_usage: '¿Cuál es el uso principal?',
      u_terrassement: 'Movimiento de tierras', u_reseaux: 'Zanjas y redes',
      u_paysage: 'Jardinería y paisajismo', u_demolition: 'Demolición',
      u_agricole: 'Agrícola', u_autre: 'Otro / polivalente',
      q_size: '¿Qué tamaño busca?',
      s_micro: 'Menos de 1 T (microexcavadora)', s_1: 'De 1 a 2 T', s_2: 'De 2 a 3 T',
      s_3: 'Más de 3 T', s_unsure: 'A definir con un asesor',
      q_timing: '¿Para cuándo necesita la máquina?',
      d_now: 'Lo antes posible', d_soon: 'En 1 a 3 meses', d_later: 'Solo me informo',
      q_devis: 'Su consulta se refiere a…',
      dv_new: 'Un presupuesto para una máquina', dv_pending: 'Un presupuesto ya en curso',
      q_sav: '¿De qué se trata?',
      sv_piece: 'Un recambio', sv_panne: 'Una avería / reparación',
      sv_entretien: 'Mantenimiento / revisión', sv_garantie: 'La garantía',
      i_finance: 'Ofrecemos financiación <strong>Sofinco</strong>: de 200 € a 75.000 €, de 6 a 120 meses, con o sin entrada. Respuesta previa inmediata.',
      f_simulate: 'Simular mi financiación',
      i_delivery: 'Entregamos en toda la Francia metropolitana en góndola especializada. Tarifa fija según 6 zonas, <strong>desde 250 € sin IVA</strong>.',
      f_zones: 'Ver tarifas por zona',
      q_hand: '¿Cómo desea continuar?',
      recap_intro: 'Gracias. Esto es lo que he anotado:',
      h_rdv: '📅 Pedir cita', h_call: '📞 Llamar al ' + PHONE_TXT,
      h_form: '✉️ Enviar mi solicitud', h_catalog: 'Ver las máquinas',
      l_need: 'Necesidad', l_type: 'Tipo de máquina', l_usage: 'Uso',
      l_size: 'Tamaño', l_timing: 'Plazo', l_sav: 'Posventa',
      msg_head: 'Solicitud enviada desde el asistente de la web:'
    }
  };
  var t = PACKS[LANG];

  /* ---------------- parcours ----------------
     Structure commune aux 3 langues. Chaque option :
       { label, next }                → question suivante
       { label, topic }               → termine et bascule (sujet du formulaire)
       { label, href }                → lien direct
       { sum: 'l_type' }              → libellé de la ligne dans le résumé
       { cat: 'mini-pelles' }         → catégorie proposée à la fin
  --------------------------------------------- */
  function buildTree() {
    return {
      start: { q: t.q_start, opts: [
        { label: t.o_machine,  next: 'type',   sum: 'l_need' },
        { label: t.o_devis,    next: 'devis',  sum: 'l_need' },
        { label: t.o_sav,      next: 'sav',    sum: 'l_need' },
        { label: t.o_finance,  next: 'finance' },
        { label: t.o_delivery, next: 'delivery' },
        { label: t.o_human,    topic: 'autre' }
      ]},
      type: { q: t.q_type, opts: [
        { label: t.t_pelle,     next: 'usage', sum: 'l_type', cat: 'mini-pelles' },
        { label: t.t_chargeur,  next: 'usage', sum: 'l_type', cat: 'mini-chargeurs' },
        { label: t.t_tombereau, next: 'timing', sum: 'l_type', cat: 'mini-tombereaux' },
        { label: t.t_remorque,  next: 'timing', sum: 'l_type', cat: 'remorques' },
        { label: t.t_autre,     next: 'timing', sum: 'l_type', cat: 'autres-engins' },
        { label: t.t_occasion,  topic: 'occasion', sum: 'l_type', cat: 'occasion' },
        { label: t.t_unsure,    next: 'usage', sum: 'l_type' }
      ]},
      usage: { q: t.q_usage, opts: [
        { label: t.u_terrassement, next: 'size', sum: 'l_usage' },
        { label: t.u_reseaux,      next: 'size', sum: 'l_usage' },
        { label: t.u_paysage,      next: 'size', sum: 'l_usage' },
        { label: t.u_demolition,   next: 'size', sum: 'l_usage' },
        { label: t.u_agricole,     next: 'size', sum: 'l_usage' },
        { label: t.u_autre,        next: 'size', sum: 'l_usage' }
      ]},
      size: { q: t.q_size, opts: [
        { label: t.s_micro,  next: 'timing', sum: 'l_size' },
        { label: t.s_1,      next: 'timing', sum: 'l_size' },
        { label: t.s_2,      next: 'timing', sum: 'l_size' },
        { label: t.s_3,      next: 'timing', sum: 'l_size' },
        { label: t.s_unsure, next: 'timing', sum: 'l_size' }
      ]},
      timing: { q: t.q_timing, opts: [
        { label: t.d_now,   topic: 'devis', sum: 'l_timing' },
        { label: t.d_soon,  topic: 'devis', sum: 'l_timing' },
        { label: t.d_later, topic: 'devis', sum: 'l_timing' }
      ]},
      devis: { q: t.q_devis, opts: [
        { label: t.dv_new,     next: 'type' },
        { label: t.dv_pending, topic: 'devis', sum: 'l_need' }
      ]},
      sav: { q: t.q_sav, opts: [
        { label: t.sv_piece,     topic: 'sav', sum: 'l_sav' },
        { label: t.sv_panne,     topic: 'sav', sum: 'l_sav' },
        { label: t.sv_entretien, topic: 'sav', sum: 'l_sav' },
        { label: t.sv_garantie,  topic: 'sav', sum: 'l_sav' }
      ]},
      finance: { info: t.i_finance, q: t.q_hand, opts: [
        { label: t.f_simulate, href: PREFIX + '/entreprise/financement/' },
        { label: t.human, topic: 'financement' }
      ]},
      delivery: { info: t.i_delivery, q: t.q_hand, opts: [
        { label: t.f_zones, href: PREFIX + '/#livraison' },
        { label: t.human, topic: 'livraison' }
      ]}
    };
  }

  /* ---------------- CSS ---------------- */
  var css = [
    '.czn-bot,.czn-bot *{box-sizing:border-box;}',
    '.czn-bot-launch{position:fixed;right:20px;bottom:20px;z-index:9990;width:60px;height:60px;border:none;',
    'border-radius:50%;cursor:pointer;background:var(--orange,#F2811C);color:#fff;box-shadow:0 10px 30px rgba(33,42,53,.28);',
    'display:flex;align-items:center;justify-content:center;transition:transform .22s ease,box-shadow .22s ease;}',
    '.czn-bot-launch:hover{transform:scale(1.07);box-shadow:0 14px 38px rgba(242,129,28,.42);}',
    '.czn-bot-launch svg{width:27px;height:27px;pointer-events:none;}',
    '.czn-bot-launch .ic-x{display:none;}',
    '.czn-bot-launch.is-open .ic-chat{display:none;}.czn-bot-launch.is-open .ic-x{display:block;}',
    '.czn-bot-dot{position:absolute;top:2px;right:2px;width:13px;height:13px;border-radius:50%;background:#2ecc71;border:2px solid #fff;}',
    '.czn-bot-launch.is-open .czn-bot-dot{display:none;}',
    '.czn-bot-teaser{position:fixed;right:92px;bottom:34px;z-index:9990;max-width:230px;background:#fff;color:var(--ink,#212A35);',
    'font-family:var(--f-body,Inter,sans-serif);font-size:13.5px;line-height:1.45;padding:11px 14px;border-radius:14px 14px 2px 14px;',
    'box-shadow:0 10px 30px rgba(33,42,53,.18);opacity:0;transform:translateY(6px);pointer-events:none;transition:opacity .3s,transform .3s;}',
    '.czn-bot-teaser.show{opacity:1;transform:translateY(0);pointer-events:auto;}',
    '.czn-bot-teaser button{position:absolute;top:-7px;right:-7px;width:21px;height:21px;border-radius:50%;border:none;cursor:pointer;',
    'background:var(--ink,#212A35);color:#fff;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center;}',
    '.czn-bot-panel{position:fixed;right:20px;bottom:92px;z-index:9991;width:372px;max-width:calc(100vw - 32px);max-height:min(620px,calc(100vh - 120px));',
    'background:var(--cream,#f4efe4);border-radius:18px;box-shadow:0 26px 70px rgba(33,42,53,.34);display:none;flex-direction:column;overflow:hidden;',
    'font-family:var(--f-body,Inter,sans-serif);opacity:0;transform:translateY(10px) scale(.98);transition:opacity .22s ease,transform .22s ease;}',
    '.czn-bot-panel.open{display:flex;}.czn-bot-panel.in{opacity:1;transform:translateY(0) scale(1);}',
    '.czn-bot-head{flex:0 0 auto;display:flex;align-items:center;gap:11px;padding:14px 16px;background:var(--ink,#212A35);color:#fff;}',
    '.czn-bot-ava{width:38px;height:38px;border-radius:50%;background:var(--orange,#F2811C);display:flex;align-items:center;justify-content:center;flex:0 0 auto;}',
    '.czn-bot-ava svg{width:19px;height:19px;}',
    '.czn-bot-ttl{flex:1;min-width:0;}',
    '.czn-bot-ttl b{display:block;font-size:14.5px;font-weight:600;letter-spacing:.01em;}',
    '.czn-bot-ttl span{display:block;font-size:11.5px;opacity:.72;margin-top:1px;}',
    '.czn-bot-x{flex:0 0 auto;width:32px;height:32px;border:none;border-radius:50%;cursor:pointer;background:rgba(255,255,255,.13);',
    'color:#fff;font-size:19px;line-height:1;display:flex;align-items:center;justify-content:center;transition:background .2s;}',
    '.czn-bot-x:hover{background:rgba(255,255,255,.26);}',
    '.czn-bot-log{flex:1 1 auto;min-height:170px;overflow-y:auto;padding:16px 16px 6px;display:flex;flex-direction:column;gap:9px;}',
    '.czn-bot-b{max-width:86%;padding:10px 13px;border-radius:14px;font-size:13.8px;line-height:1.5;animation:cznIn .26s ease both;}',
    '@keyframes cznIn{from{opacity:0;transform:translateY(7px);}to{opacity:1;transform:none;}}',
    '.czn-bot-b.bot{align-self:flex-start;background:#fff;color:var(--ink,#212A35);border-bottom-left-radius:4px;box-shadow:0 2px 8px rgba(33,42,53,.07);}',
    '.czn-bot-b.me{align-self:flex-end;background:var(--orange,#F2811C);color:#fff;border-bottom-right-radius:4px;font-weight:500;}',
    '.czn-bot-b.recap{background:#fff;border:1px dashed rgba(33,42,53,.22);box-shadow:none;font-size:13px;}',
    '.czn-bot-b.recap div{display:flex;gap:6px;padding:2px 0;}',
    '.czn-bot-b.recap i{font-style:normal;color:var(--muted,#6b6660);flex:0 0 auto;}',
    '.czn-bot-b.recap b{font-weight:600;}',
    '.czn-bot-type{align-self:flex-start;display:flex;gap:4px;padding:11px 14px;background:#fff;border-radius:14px;border-bottom-left-radius:4px;}',
    '.czn-bot-type i{width:6px;height:6px;border-radius:50%;background:var(--muted-light,#98938b);animation:cznBl 1.2s infinite;}',
    '.czn-bot-type i:nth-child(2){animation-delay:.18s;}.czn-bot-type i:nth-child(3){animation-delay:.36s;}',
    '@keyframes cznBl{0%,60%,100%{opacity:.28;transform:translateY(0);}30%{opacity:1;transform:translateY(-3px);}}',
    '.czn-bot-opts{flex:0 1 auto;overflow-y:auto;padding:6px 16px 12px;display:flex;flex-direction:column;gap:7px;}',
    '.czn-bot-o{width:100%;text-align:left;padding:10px 13px;border-radius:11px;cursor:pointer;font-size:13.4px;font-weight:500;',
    'font-family:inherit;background:#fff;color:var(--ink,#212A35);border:1px solid rgba(33,42,53,.13);',
    'transition:border-color .18s,background .18s,transform .12s;text-decoration:none;display:block;}',
    '.czn-bot-o:hover{border-color:var(--orange,#F2811C);background:var(--orange-dim,rgba(242,129,28,.12));transform:translateX(2px);}',
    '.czn-bot-o.pri{background:var(--orange,#F2811C);color:#fff;border-color:var(--orange,#F2811C);}',
    '.czn-bot-o.pri:hover{background:var(--orange-deep,#C9551A);border-color:var(--orange-deep,#C9551A);}',
    '.czn-bot-foot{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;gap:10px;',
    'padding:9px 16px;border-top:1px solid rgba(33,42,53,.09);background:rgba(255,255,255,.5);}',
    '.czn-bot-foot a,.czn-bot-foot button{font-family:inherit;font-size:12px;color:var(--muted,#6b6660);background:none;border:none;',
    'cursor:pointer;text-decoration:none;padding:2px;transition:color .18s;}',
    '.czn-bot-foot a:hover,.czn-bot-foot button:hover{color:var(--orange,#F2811C);}',
    '.czn-bot-foot a{font-weight:600;color:var(--ink,#212A35);}',
    '@media(max-width:600px){',
    '.czn-bot-panel{right:0;bottom:0;width:100%;max-width:100%;max-height:100%;height:100dvh;border-radius:0;}',
    '.czn-bot-launch{right:16px;bottom:16px;width:56px;height:56px;}',
    '.czn-bot-teaser{right:80px;bottom:26px;max-width:190px;}',
    '.czn-bot-panel.open ~ .czn-bot-launch{display:none;}}',
    '@media(prefers-reduced-motion:reduce){.czn-bot-panel,.czn-bot-b,.czn-bot-launch{transition:none;animation:none;}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------------- markup ---------------- */
  var IC_CHAT = '<svg class="ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
  var IC_X    = '<svg class="ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  var launch = document.createElement('button');
  launch.type = 'button'; launch.className = 'czn-bot czn-bot-launch';
  launch.setAttribute('aria-label', t.open); launch.setAttribute('aria-expanded', 'false');
  launch.innerHTML = IC_CHAT + IC_X + '<span class="czn-bot-dot"></span>';

  var teaser = document.createElement('div');
  teaser.className = 'czn-bot czn-bot-teaser';
  teaser.innerHTML = '<span></span><button type="button" aria-label="' + t.close + '">&times;</button>';
  teaser.querySelector('span').textContent = t.teaser;

  var panel = document.createElement('div');
  panel.className = 'czn-bot czn-bot-panel';
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-label', t.title);
  panel.innerHTML =
    '<div class="czn-bot-head"><div class="czn-bot-ava">' + IC_CHAT + '</div>' +
      '<div class="czn-bot-ttl"><b></b><span></span></div>' +
      '<button type="button" class="czn-bot-x" aria-label="' + t.close + '">&times;</button></div>' +
    '<div class="czn-bot-log" aria-live="polite"></div>' +
    '<div class="czn-bot-opts"></div>' +
    '<div class="czn-bot-foot"><a href="' + PREFIX + '/contact/"></a><button type="button" class="czn-bot-rs"></button></div>';
  panel.querySelector('.czn-bot-ttl b').textContent = t.title;
  panel.querySelector('.czn-bot-ttl span').textContent = t.subtitle;
  panel.querySelector('.czn-bot-foot a').textContent = t.human + ' →';
  panel.querySelector('.czn-bot-rs').textContent = '↻ ' + t.restart;

  var logEl  = panel.querySelector('.czn-bot-log');
  var optsEl = panel.querySelector('.czn-bot-opts');

  /* ---------------- état ---------------- */
  var TREE = buildTree(), answers = [], lastCat = null, started = false;

  function track(name, params) {
    try { if (typeof gtag === 'function') gtag('event', name, params || {}); } catch (e) {}
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function scroll() { logEl.scrollTop = logEl.scrollHeight; }

  function say(html, who) {
    var b = document.createElement('div');
    b.className = 'czn-bot-b ' + (who || 'bot');
    b.innerHTML = html;
    logEl.appendChild(b); scroll(); return b;
  }
  function typing(cb) {
    var d = document.createElement('div');
    d.className = 'czn-bot-type'; d.innerHTML = '<i></i><i></i><i></i>';
    logEl.appendChild(d); scroll();
    setTimeout(function () { d.remove(); cb(); }, 480);
  }

  function setOpts(list) {
    optsEl.innerHTML = '';
    list.forEach(function (o) {
      var el = document.createElement(o.href ? 'a' : 'button');
      el.className = 'czn-bot-o' + (o.pri ? ' pri' : '');
      if (o.href) { el.href = o.href; if (o.blank) el.target = '_blank'; }
      else el.type = 'button';
      if (o.rdv) el.setAttribute('data-rdv', '');
      el.textContent = o.label;
      if (o.onClick) el.addEventListener('click', o.onClick);
      optsEl.appendChild(el);
    });
    // les options viennent de reduire la hauteur du log : on re-scrolle
    requestAnimationFrame(scroll);
  }

  /* ---------------- moteur ---------------- */
  function goto(id) {
    var node = TREE[id];
    if (!node) return handoff('autre');
    typing(function () {
      if (node.info) say(node.info);
      say(esc(node.q));
      setOpts(node.opts.map(function (o) {
        return {
          label: o.label,
          href: o.href,
          onClick: function (e) {
            if (o.href) { track('chatbot_link', { step: id, choice: o.label }); return; }
            e.preventDefault();
            say(esc(o.label), 'me');
            if (o.sum) answers.push({ k: t[o.sum] || o.sum, v: o.label });
            if (o.cat) lastCat = o.cat;
            track('chatbot_step', { step: id, choice: o.label });
            optsEl.innerHTML = '';
            if (o.topic) handoff(o.topic); else goto(o.next);
          }
        };
      }));
    });
  }

  function recapText() {
    return answers.map(function (a) { return '• ' + a.k + ' : ' + a.v; }).join('\n');
  }
  function contactHref(topic) {
    var msg = t.msg_head + '\n' + recapText() + '\n\n';
    return PREFIX + '/contact/?topic=' + encodeURIComponent(topic) +
           '&msg=' + encodeURIComponent(msg);
  }

  function handoff(topic) {
    typing(function () {
      if (answers.length) {
        say(esc(t.recap_intro));
        say(answers.map(function (a) {
          return '<div><i>' + esc(a.k) + '</i><b>' + esc(a.v) + '</b></div>';
        }).join(''), 'bot recap');
      }
      say(esc(t.q_hand));
      var list = [
        { label: t.h_rdv, pri: true, rdv: true, onClick: function () {
            track('chatbot_handoff', { method: 'rdv', topic: topic }); close();
          } },
        { label: t.h_form, href: contactHref(topic), onClick: function () {
            track('chatbot_handoff', { method: 'form', topic: topic });
          } },
        { label: t.h_call, href: 'tel:' + PHONE, onClick: function () {
            track('chatbot_handoff', { method: 'phone', topic: topic });
          } }
      ];
      if (lastCat) list.push({ label: t.h_catalog, href: PREFIX + '/' + lastCat + '/' });
      setOpts(list);
    });
  }

  function reset() {
    answers = []; lastCat = null; logEl.innerHTML = ''; optsEl.innerHTML = '';
    goto('start');
  }

  /* ---------------- ouverture / fermeture ---------------- */
  var isOpen = false;
  function open() {
    if (isOpen) return;
    isOpen = true; hideTeaser(true);
    panel.classList.add('open');
    requestAnimationFrame(function () { panel.classList.add('in'); });
    launch.classList.add('is-open'); launch.setAttribute('aria-expanded', 'true');
    if (!started) { started = true; reset(); track('chatbot_open', { lang: LANG }); 
      try { if (typeof fbq === 'function') fbq('trackCustom', 'ChatbotOpen'); } catch (e) {} }
    panel.querySelector('.czn-bot-x').focus();
  }
  function close() {
    if (!isOpen) return;
    isOpen = false;
    panel.classList.remove('in');
    setTimeout(function () { if (!isOpen) panel.classList.remove('open'); }, 200);
    launch.classList.remove('is-open'); launch.setAttribute('aria-expanded', 'false');
  }
  function toggle() { isOpen ? close() : open(); }

  function hideTeaser(perm) {
    teaser.classList.remove('show');
    if (perm) { try { sessionStorage.setItem('czn_bot_teaser', '1'); } catch (e) {} }
  }

  /* ---------------- init ---------------- */
  function init() {
    document.body.appendChild(panel);
    document.body.appendChild(teaser);
    document.body.appendChild(launch);

    launch.addEventListener('click', toggle);
    panel.querySelector('.czn-bot-x').addEventListener('click', close);
    panel.querySelector('.czn-bot-rs').addEventListener('click', function () {
      track('chatbot_restart'); reset();
    });
    teaser.querySelector('button').addEventListener('click', function (e) {
      e.stopPropagation(); hideTeaser(true);
    });
    teaser.addEventListener('click', function () { open(); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) close();
    });

    // bulle d'accroche : une seule fois par session
    var seen = false;
    try { seen = sessionStorage.getItem('czn_bot_teaser') === '1'; } catch (e) {}
    if (TEASER_MS && !seen) {
      setTimeout(function () {
        if (!isOpen) { teaser.classList.add('show'); setTimeout(function () { hideTeaser(false); }, 9000); }
      }, TEASER_MS);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
