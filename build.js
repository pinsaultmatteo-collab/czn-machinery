// 📁 /build.js — génère les fiches produit + le catalogue depuis Axonaut + produit-data.js
// Bilingue FR + EN.
//
// Axonaut → titre / prix / stock UNIQUEMENT.
// produit-data.js (FR) / produit-data.en.js (EN) → descriptions, sections, caractéristiques, photos.
// E-commerce retiré : pas de panier ni paiement, CTA = « Demander un devis » / « Request a quote ».
//
// Lancement :  AXONAUT_API_KEY='ta_cle' node build.js   → génère FR + EN + rafraîchit le cache.
// Sans clé : si .axonaut-cache.json existe, le build tourne depuis le cache (FR + EN).

const fs = require("fs");
const path = require("path");

let DATA_FR = {};
try { DATA_FR = require("./produit-data.js"); } catch (e) { DATA_FR = {}; }
let DATA_EN = {};
try { DATA_EN = require("./produit-data.en.js"); } catch (e) { DATA_EN = {}; }

const SITE = "https://czn-machinery.com";
const AXONAUT_BASE = "https://axonaut.com/api/v2";
const CACHE_FILE = path.join(process.cwd(), ".axonaut-cache.json");

/* ── Axonaut → routage par CATÉGORIE (page) + MARQUE lue dans le titre ── */
function categoryToSlug(category) {
  const c = (category || "").toLowerCase();
  if (c.includes("pelle")) return "mini-pelles";
  if (c.includes("chargeur")) return "mini-chargeurs";
  if (c.includes("tombereau") || c.includes("dumper")) return "mini-tombereaux";
  return null;
}
function brandFromName(name) {
  const n = (name || "").toUpperCase();
  if (n.includes("SONCA")) return "Sonca";
  if (n.includes("XCAVATOR")) return "Xcavator";
  if (n.includes("LEITE")) return "Leite";
  return null;
}

/* ── Axonaut ── */
async function fetchAllProducts(apiKey) {
  const all = [];
  for (let page = 1; page <= 30; page++) {
    const res = await fetch(`${AXONAUT_BASE}/products`, { headers: { userApiKey: apiKey, Accept: "application/json", page: String(page) } });
    if (!res.ok) throw new Error(`Axonaut ${res.status} (page ${page})`);
    const batch = await res.json();
    const items = Array.isArray(batch) ? batch : (batch.data || batch.results || []);
    if (!items.length) break;
    all.push(...items);
    if (items.length < 500) break;
  }
  return all;
}
const toNum = (v) => { const n = parseFloat(v); return isNaN(n) ? null : n; };
function normalize(p) {
  const stock = toNum(p.stock);
  return {
    id: p.id, name: p.name || "", reference: p.product_code || String(p.id),
    brand: brandFromName(p.name), pageSlug: categoryToSlug(p.category),
    priceHT: toNum(p.price), priceTTC: toNum(p.price_with_tax), vat: toNum(p.tax_rate) ?? 20,
    inStock: stock == null ? null : stock > 0, image: p.image || null, disabled: !!p.disabled,
  };
}

/* ── locales ──
   Tout ce qui dépend de la langue passe par l'objet L. FR = comportement historique. */
const TYPEMAP_FR = [[/mini\s*-?\s*pelle/i, "Mini-pelle"], [/mini\s*-?\s*chargeur/i, "Mini-chargeur"], [/mini\s*-?\s*tombereau/i, "Mini-tombereau"]];
const TYPEMAP_EN = [[/mini\s*-?\s*pelle/i, "Mini excavator"], [/mini\s*-?\s*chargeur/i, "Mini loader"], [/mini\s*-?\s*tombereau/i, "Mini dumper"]];

const LOCALES = {
  fr: {
    lang: "fr", ogLocale: "fr_FR", prefix: "", out: "",
    DATA: DATA_FR, typeMap: TYPEMAP_FR, finance: true,
    LABELS: { "mini-pelles": "Mini-pelle", "mini-chargeurs": "Mini-chargeur", "mini-tombereaux": "Mini-tombereau", "accessoires": "Accessoire" },
    CAT_NAME: { "mini-pelles": "Mini-pelles", "mini-chargeurs": "Mini-chargeurs", "mini-tombereaux": "Mini-tombereaux", "accessoires": "Accessoires" },
    PAGES: [
      { slug: "mini-pelles", file: "mini-pelles/index.html", label: "Mini-pelle", eyebrow: "01 — Terrassement", h1: "Mini-pelles <em>neuves</em>" },
      { slug: "mini-chargeurs", file: "mini-chargeurs/index.html", label: "Mini-chargeur", eyebrow: "02 — Manutention", h1: "Mini-chargeurs <em>neufs</em>" },
      { slug: "mini-tombereaux", file: "mini-tombereaux/index.html", label: "Mini-tombereau", eyebrow: "03 — Transport", h1: "Mini-tombereaux <em>neufs</em>" },
    ],
    ui: {
      home: "Accueil", breadcrumb: "Fil d'Ariane", search: "Recherche", navCta: "Demander un devis",
      logoAria: "CZN Machinery - Accueil", hours: "Showroom Lun–Ven · 9h–12h / 14h–18h",
      open: "Actuellement ouvert", closed: "Actuellement fermé",
      tagFr: "Français", tagEn: "English",
      navLinks: [["/mini-pelles/", "Mini-pelles"], ["/mini-chargeurs/", "Mini-chargeurs"], ["/mini-tombereaux/", "Mini-tombereaux"], ["/accessoires/", "Accessoires"], ["/entreprise/", "Entreprise"], ["/guides/", "Guides"], ["/contact/", "Contact"]],
      footTagline: "Engins de chantier importés en direct depuis 2019. Toulouse, France.",
      footCols: [
        ["Catalogue", [["/mini-pelles/", "Mini-pelles"], ["/mini-chargeurs/", "Mini-chargeurs"], ["/mini-tombereaux/", "Mini-tombereaux"], ["/accessoires/", "Accessoires"], ["/occasion/", "Occasion"]]],
        ["Acheter", [["/entreprise/financement/", "Financement"], ["/contact/", "Demander un devis"], ["/#livraison", "Livraison France"], ["/#avis", "Avis clients"]]],
        ["Ressources", [["/guides/", "Tous les guides"], ["/guides/comment-choisir-mini-pelle/", "Comment choisir"], ["/guides/prix-mini-pelle/", "Prix mini-pelle"], ["/guides/caces-mini-pelle/", "CACES & permis"]]],
        ["Entreprise", [["/entreprise/", "À propos"], ["/entreprise/financement/", "Financement"], ["/contact/", "Contact"], ["mailto:contact@czn-machinery.com", "contact@czn-machinery.com"], ["tel:+33531605161", "05 31 60 51 61"]]],
      ],
      footLegal: [["/mentions-legales/", "Mentions légales"], ["/cgv/", "CGV"], ["/politique-confidentialite/", "Politique de confidentialité"]],
      inStock: "En stock", onOrder: "Sur commande", from: "À partir de", priceSuffix: "HT · hors livraison",
      priceWord: "Prix", onQuote: "Sur devis", cardAria: "Voir la fiche ",
      ht: "HT", ttcWord: (v) => `soit ${v} € TTC`, titleFrom: (p) => ` dès ${p} € HT`,
      requestQuote: "Demander un devis", warranty2y: "✓ Garantie 2 ans", deliveryFr: "✓ Livraison France", directImporter: "✓ Importateur direct",
      techSpecs: "Caractéristiques techniques", specsEmpty: 'Fiche technique détaillée disponible sur demande — <a href="/contact/">contactez-nous</a>.',
      ctaInterested: (n) => `Intéressé par la ${n} ?`, ctaBody: "Demandez votre devis personnalisé — réponse rapide, conseil sans engagement.",
      itemListName: (label) => `${label}s CZN Machinery`,
      devisMsg: (name, ref) => `Bonjour, je voudrais un devis pour la ${name}${ref ? ` (réf. ${ref})` : ""}. Merci de me recontacter.`,
      introDefault: (name, label, brand) => `${name} — ${label.toLowerCase()} ${brand || ""} importée en direct par CZN Machinery. Garantie 2 ans, livraison dans toute la France.`,
      continueVisit: "Continuer la visite", exploreRange: "Explorez le reste de <em>la gamme</em>.",
      photoSoon: "Photo à venir", visualsSoon: "Visuels à venir",
      finMonthlyLine: (m) => `ou à partir de <strong>${m} €</strong> / mois<sup>*</sup>`,
      finBtn: "Simuler mon financement",
      finNote: (months, rate) => `* Estimation indicative sur ${months} mois, TAEG fixe ${rate} %, hors assurance facultative — sans valeur contractuelle. Un crédit vous engage et doit être remboursé.`,
    },
  },
  en: {
    lang: "en", ogLocale: "en_GB", prefix: "/en", out: "en",
    DATA: DATA_EN, typeMap: TYPEMAP_EN, finance: false,
    LABELS: { "mini-pelles": "Mini excavator", "mini-chargeurs": "Mini loader", "mini-tombereaux": "Mini dumper", "accessoires": "Attachment" },
    CAT_NAME: { "mini-pelles": "Mini excavators", "mini-chargeurs": "Mini loaders", "mini-tombereaux": "Mini dumpers", "accessoires": "Attachments" },
    PAGES: [
      { slug: "mini-pelles", file: "en/mini-pelles/index.html", label: "Mini excavator", eyebrow: "01 — Earthworks", h1: "New <em>mini excavators</em>" },
      { slug: "mini-chargeurs", file: "en/mini-chargeurs/index.html", label: "Mini loader", eyebrow: "02 — Handling", h1: "New <em>mini loaders</em>" },
      { slug: "mini-tombereaux", file: "en/mini-tombereaux/index.html", label: "Mini dumper", eyebrow: "03 — Transport", h1: "New <em>mini dumpers</em>" },
    ],
    ui: {
      home: "Home", breadcrumb: "Breadcrumb", search: "Search", navCta: "Request a quote",
      logoAria: "CZN Machinery - Home", hours: "Showroom Mon–Fri · 9am–12pm / 2pm–6pm",
      open: "Currently open", closed: "Currently closed",
      tagFr: "Français", tagEn: "English",
      navLinks: [["/en/mini-pelles/", "Mini excavators"], ["/en/mini-chargeurs/", "Mini loaders"], ["/en/mini-tombereaux/", "Mini dumpers"], ["/en/accessoires/", "Attachments"], ["/en/entreprise/", "Company"], ["/en/guides/", "Guides"], ["/en/contact/", "Contact"]],
      footTagline: "Construction machines imported directly since 2019. Toulouse, France.",
      footCols: [
        ["Catalogue", [["/en/mini-pelles/", "Mini excavators"], ["/en/mini-chargeurs/", "Mini loaders"], ["/en/mini-tombereaux/", "Mini dumpers"], ["/en/accessoires/", "Attachments"], ["/en/occasion/", "Used"]]],
        ["Buy", [["/en/entreprise/financement/", "Financing"], ["/en/contact/", "Request a quote"], ["/en/#livraison", "Delivery in France"], ["/en/#avis", "Customer reviews"]]],
        ["Resources", [["/en/guides/", "All guides"], ["/en/guides/comment-choisir-mini-pelle/", "How to choose"], ["/en/guides/prix-mini-pelle/", "Mini excavator prices"], ["/en/guides/caces-mini-pelle/", "CACES & licences"]]],
        ["Company", [["/en/entreprise/", "About"], ["/en/entreprise/financement/", "Financing"], ["/en/contact/", "Contact"], ["mailto:contact@czn-machinery.com", "contact@czn-machinery.com"], ["tel:+33531605161", "05 31 60 51 61"]]],
      ],
      footLegal: [["/mentions-legales/", "Legal notice"], ["/cgv/", "Terms of sale"], ["/politique-confidentialite/", "Privacy policy"]],
      inStock: "In stock", onOrder: "On order", from: "From", priceSuffix: "excl. VAT · delivery not included",
      priceWord: "Price", onQuote: "On quote", cardAria: "View the ",
      ht: "excl. VAT", ttcWord: (v) => `i.e. ${v} € incl. VAT`, titleFrom: (p) => ` from ${p} € excl. VAT`,
      requestQuote: "Request a quote", warranty2y: "✓ 2-year warranty", deliveryFr: "✓ Delivery across France", directImporter: "✓ Direct importer",
      techSpecs: "Technical specifications", specsEmpty: 'Detailed spec sheet available on request — <a href="/en/contact/">get in touch</a>.',
      ctaInterested: (n) => `Interested in the ${n}?`, ctaBody: "Request your personalised quote — fast reply, advice with no obligation.",
      itemListName: (label) => `${label}s CZN Machinery`,
      devisMsg: (name, ref) => `Hello, I would like a quote for the ${name}${ref ? ` (ref. ${ref})` : ""}. Please get back to me.`,
      introDefault: (name, label, brand) => `${name} — ${label.toLowerCase()} ${brand || ""} imported directly by CZN Machinery. 2-year warranty, delivery across France.`,
      continueVisit: "Continue the tour", exploreRange: "Explore the rest of <em>the range</em>.",
      photoSoon: "Photo coming soon", visualsSoon: "Photos coming soon",
    },
  },
};
function catPath(L, slug) { return L.prefix + "/" + slug + "/"; }

/* ── utils ── */
function cleanName(name, brand, L) {
  let n = (name || "").trim();
  if (brand) n = n.replace(new RegExp("^" + brand + "\\s+", "i"), "");
  for (const [re, rep] of L.typeMap) n = n.replace(re, rep);
  return n.trim();
}
const euro = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const slugUrl = (ref, L) => L.prefix + "/produit/" + encodeURIComponent(ref) + "/";
const altSlugUrl = (ref, prefix) => prefix + "/produit/" + encodeURIComponent(ref) + "/";

/* ── chrome (sans panier — e-commerce retiré) ── */
const FLAG_FR = `<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#0055A4"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>`;
const FLAG_EN = `<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><clipPath id="ukc"><rect width="60" height="30"/></clipPath><clipPath id="uks"><path d="M30 15 60 0v0h-4L30 12.5zM30 15 0 30h4L30 17.5zM30 15 0 0h4L30 12.5zM30 15 60 30h-4L30 17.5z"/></clipPath><g clip-path="url(#ukc)"><rect width="60" height="30" fill="#012169"/><path d="M0 0 60 30M60 0 0 30" stroke="#fff" stroke-width="6"/><path d="M0 0 60 30M60 0 0 30" clip-path="url(#uks)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>`;
function langSwitch(L, frUrl, enUrl) {
  const frA = `<a href="${frUrl}" class="lang${L.lang === "fr" ? " active" : ""}" hreflang="fr" aria-label="${L.ui.tagFr}">${FLAG_FR}<span>FR</span></a>`;
  const enA = `<a href="${enUrl}" class="lang${L.lang === "en" ? " active" : ""}" hreflang="en" aria-label="${L.ui.tagEn}">${FLAG_EN}<span>EN</span></a>`;
  return `<span class="util-langs">${frA}${enA}</span>`;
}
function utilityBar(L, frUrl, enUrl) {
  return `<div class="utility-bar"><div class="container">
  <div class="utility-left"><span>📍 Toulouse, France</span><span class="util-divider"></span><span class="util-hours">${L.ui.hours}</span><span class="status-pill is-closed" id="openStatus" aria-live="polite"><span class="status-dot"></span><span class="status-text">—</span></span></div>
  <div class="utility-right"><a href="tel:+33531605161" class="util-phone"><svg class="util-phone-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z"/></svg><span>+33 5 31 60 51 61</span></a><span class="util-divider"></span>${langSwitch(L, frUrl, enUrl)}</div>
</div></div>
<script>(function(){function r(){var el=document.getElementById('openStatus');if(!el)return;var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Paris',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());var m={};p.forEach(function(x){m[x.type]=x.value;});var mn=parseInt(m.hour,10)*60+parseInt(m.minute,10);var o=['Mon','Tue','Wed','Thu','Fri'].indexOf(m.weekday)>=0&&(mn>=540&&mn<1080);el.classList.toggle('is-open',o);el.classList.toggle('is-closed',!o);var t=el.querySelector('.status-text');if(t)t.textContent=o?'${L.ui.open}':'${L.ui.closed}';}r();setInterval(r,60000);})();</script>`;
}

const LOGO = (ink) => `<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g><text x="400" y="240" text-anchor="middle" font-family="'Archivo Black', sans-serif" font-size="192" font-weight="900" letter-spacing="-8" fill="${ink}" transform="skewX(-11)">CZN</text><polygon points="344,212 390,212 379,239 333,239" fill="#F2811C"/><polygon points="590,246 624,206 624,246" fill="#F2811C"/></g><g><line x1="128" y1="292" x2="236" y2="292" stroke="${ink}" stroke-width="3"/><line x1="246" y1="292" x2="262" y2="292" stroke="#F2811C" stroke-width="3"/><text x="371" y="300" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="600" letter-spacing="10" fill="#F2811C">MACHINERY</text><line x1="480" y1="292" x2="496" y2="292" stroke="#F2811C" stroke-width="3"/><line x1="506" y1="292" x2="614" y2="292" stroke="${ink}" stroke-width="3"/></g></svg>`;

function nav(L) {
  const links = L.ui.navLinks.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("");
  return `<nav id="mainNav"><div class="nav-inner">
  <a href="${L.prefix ? L.prefix + "/" : "/"}" class="site-logo site-logo--nav" aria-label="${L.ui.logoAria}">${LOGO("#212A35")}</a>
  <ul class="nav-links">
    ${links}
  </ul>
  <div class="nav-actions">
    <a href="#" class="nav-icon" aria-label="${L.ui.search}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></a>
    <a href="${L.prefix}/contact/" class="nav-cta">${L.ui.navCta} <svg class="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 5h12M8 1l4 4-4 4"/></svg></a>
  </div></div></nav>
<script>(function(){var path=window.location.pathname.replace(/\\/$/,'')||'/';document.querySelectorAll('.nav-links a').forEach(function(a){var h=a.getAttribute('href').replace(/\\/$/,'')||'/';if(path===h||(h!==''&&h!=='/'&&path.indexOf(h)===0))a.classList.add('nav-active');});})();</script>`;
}

function footer(L) {
  const cols = L.ui.footCols.map(([h, items]) => `  <div class="footer-col"><h4>${h}</h4><ul>${items.map(([href, t]) => `<li><a href="${href}">${t}</a></li>`).join("")}</ul></div>`).join("\n");
  const legal = L.ui.footLegal.map(([href, t]) => `<a href="${href}">${t}</a>`).join("");
  return `<footer><div class="container"><div class="footer-top">
  <div class="footer-brand"><a href="${L.prefix ? L.prefix + "/" : "/"}" class="site-logo site-logo--footer" aria-label="${L.ui.logoAria}">${LOGO("#F4F1EC")}</a>
    <p class="footer-tagline">${L.ui.footTagline}</p>
    <div class="footer-social">
      <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/></svg></a>
      <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8a4 4 0 0 1 3.4 3.4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
      <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17 3.5 12 3.5 12 3.5s-5 0-8.1.2c-.4 0-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.8v1.7c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.8 2.3.9 1.7.2 7.4.2 7.4.2s5 0 8.1-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-1.7C23.2 8.9 23 7 23 7zM9.7 14.6V8.4l6.5 3.1-6.5 3.1z"/></svg></a>
      <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.86 0-1.62.65-1.62 2v4.67h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg></a>
    </div>
  </div>
${cols}
</div>
<div class="footer-bottom"><div>© 2026 CZE France SAS · 11 impasse Pierre Camo, 31200 Toulouse · SIRET 824 356 513 00021</div><div class="footer-legal">${legal}</div></div>
</div></footer>`;
}

const HEAD_FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@600&display=swap" rel="stylesheet">`;
const FAVICONS = `<link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;
function hreflangLinks(frUrl, enUrl) {
  return `<link rel="alternate" hreflang="fr" href="${SITE}${frUrl}"><link rel="alternate" hreflang="en" href="${SITE}${enUrl}"><link rel="alternate" hreflang="x-default" href="${SITE}${frUrl}">`;
}

/* ── catalogue (cartes + JSON-LD entre marqueurs) ── */
function cardHTML(p, L) {
  const tag = p.inStock ? `<span class="product-tag stock">${L.ui.inStock}</span>` : `<span class="product-tag">${L.ui.onOrder}</span>`;
  const d = L.DATA[p.reference] || {};
  const imgs = (d.images || []).map((im) => (typeof im === "string" ? { src: im } : im));
  const photo = imgs[0] ? imgs[0].src : p.image;
  const name = cleanName(p.name, p.brand, L);
  const img = photo
    ? '<img class="product-photo" src="' + esc(photo) + '" alt="' + esc(name) + '" loading="lazy">'
    : '<div class="product-photo" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;width:100%;height:100%;background:var(--cream-2);color:var(--muted);font-family:var(--f-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;"><span style="font-size:15px;letter-spacing:.04em;">' + esc(p.brand || "CZN") + "</span><span>" + esc(L.ui.photoSoon) + "</span></div>";
  const price = (p.priceHT && p.priceHT > 0)
    ? '<span class="price-label">' + L.ui.from + '</span>\n              <span class="price-val">' + euro(p.priceHT) + '<span class="currency">€</span></span>\n              <span class="price-suffix">' + L.ui.priceSuffix + "</span>"
    : '<span class="price-label">' + L.ui.priceWord + '</span>\n              <span class="price-val" style="font-size:22px;">' + L.ui.onQuote + "</span>";
  return ['      <article class="product-card" data-brand="' + esc(p.brand || "") + '" style="position:relative;">',
    '        <a class="card-link" href="' + slugUrl(p.reference, L) + '" aria-label="' + esc(L.ui.cardAria + name) + '" style="position:absolute;inset:0;z-index:2;"></a>',
    '        <div class="product-img" style="aspect-ratio:1/1;">' + tag + img + "</div>",
    '        <div class="product-info"><div class="product-brand">' + esc(p.brand || "CZN") + "</div>",
    '          <h3 class="product-name">' + esc(name) + "</h3>",
    '          <div class="product-footer"><div class="product-price">', "              " + price, "            </div>",
    '            <span class="product-cta" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>',
    "          </div></div>", "      </article>"].join("\n");
}
function itemListJsonLd(products, label, L) {
  const items = products.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: productNode(p, label, L) }));
  return '<script type="application/ld+json">\n' + JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: L.ui.itemListName(label), itemListElement: items }) + "\n</" + "script>";
}
function replaceBetween(content, start, end, inner) {
  const s = content.indexOf(start), e = content.indexOf(end);
  if (s === -1 || e === -1) throw new Error("Marqueurs introuvables (" + start + ")");
  return content.slice(0, s + start.length) + "\n" + inner + "\n" + content.slice(e);
}

/* ── specs : aplatit groupé OU plat → [{label,value}] ── */
function flatSpecs(d) {
  if (!Array.isArray(d.specs)) return [];
  if (d.specs.length && d.specs[0] && d.specs[0].rows) return d.specs.flatMap((g) => g.rows || []);
  return d.specs;
}

/* ── JSON-LD produit ── */
function productNode(p, label, L) {
  const d = L.DATA[p.reference] || {};
  const node = {
    "@type": "Product", name: cleanName(p.name, p.brand, L), sku: p.reference,
    brand: { "@type": "Brand", name: p.brand || "CZN" }, category: label,
    offers: { "@type": "Offer", price: String(p.priceHT || 0), priceCurrency: "EUR", availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder", url: SITE + slugUrl(p.reference, L) },
  };
  const desc = d.intro || d.description;
  if (desc) node.description = desc;
  const imgs = (d.images || []).map((im) => (typeof im === "string" ? im : im.src)).map((s) => (s.startsWith("http") ? s : SITE + s));
  if (imgs.length) node.image = imgs;
  const fs2 = flatSpecs(d);
  if (fs2.length) node.additionalProperty = fs2.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value }));
  return node;
}

/* ── rendu fiche ── */
function galleryHTML(p, d, L) {
  const imgs = (d.images || []).map((im) => (typeof im === "string" ? { src: im, alt: "" } : im));
  if (!imgs.length) return `<div class="pdp-gallery pdp-gallery--empty"><div class="pdp-noimg"><span>${esc(p.brand || "CZN")}</span><small>${esc(L.ui.visualsSoon)}</small></div></div>`;
  const thumbs = imgs.map((im, i) => `<button class="pdp-thumb${i === 0 ? " active" : ""}" data-src="${esc(im.src)}" aria-label="Photo ${i + 1}"><img src="${esc(im.src)}" alt="${esc(im.alt || "")}" loading="lazy"></button>`).join("");
  const arrows = imgs.length > 1 ? `<button class="pdp-nav pdp-prev" aria-label="Photo ${L.lang === "fr" ? "précédente" : "previous"}">&#8249;</button><button class="pdp-nav pdp-next" aria-label="Photo ${L.lang === "fr" ? "suivante" : "next"}">&#8250;</button>` : "";
  return `<div class="pdp-gallery"><div class="pdp-main"><img id="pdpMain" src="${esc(imgs[0].src)}" alt="${esc(imgs[0].alt || cleanName(p.name, p.brand, L))}">${arrows}</div>${imgs.length > 1 ? `<div class="pdp-thumbs">${thumbs}</div>` : ""}</div>`;
}
function statsHTML(d) {
  if (!Array.isArray(d.stats) || !d.stats.length) return "";
  return `<div class="pdp-stats">` + d.stats.map((s) => `<div class="pdp-stat"><div class="pdp-stat-val">${esc(s.value)}</div><div class="pdp-stat-label">${esc(s.label)}</div></div>`).join("") + `</div>`;
}
function sectionsHTML(d) {
  if (!Array.isArray(d.sections) || !d.sections.length) return "";
  return d.sections.map((sec) => {
    const feats = (sec.features || []).map((f) => `<div class="pdp-feat"><h4>${esc(f.title)}</h4><p>${esc(f.text)}</p></div>`).join("");
    return `<section class="pdp-block"><h2>${esc(sec.title)}</h2>${sec.body ? `<p class="pdp-block-body">${esc(sec.body)}</p>` : ""}${feats ? `<div class="pdp-feats">${feats}</div>` : ""}</section>`;
  }).join("\n");
}
function specsHTML(d, L) {
  if (!Array.isArray(d.specs) || !d.specs.length) return `<div class="pdp-specs-empty">${L.ui.specsEmpty}</div>`;
  const grouped = d.specs[0] && d.specs[0].rows;
  const groups = grouped ? d.specs : [{ group: null, rows: d.specs }];
  return groups.map((g) => {
    const rows = (g.rows || []).map((r) => `<div class="pdp-spec"><dt>${esc(r.label)}</dt><dd>${esc(r.value)}</dd></div>`).join("");
    return `${g.group ? `<h3 class="pdp-spec-group">${esc(g.group)}</h3>` : ""}<dl class="pdp-specs">${rows}</dl>`;
  }).join("\n");
}

/* ── Financement (estimation — FR uniquement, aucun organisme nommé) ── */
const FIN_DEFAULT_MONTHS = 60;
const FIN_USE_TTC = false;
function finBase(p) {
  if (FIN_USE_TTC) return p.priceTTC && p.priceTTC > 0 ? Math.round(p.priceTTC) : (p.priceHT ? Math.round(p.priceHT * (1 + (p.vat || 20) / 100)) : 0);
  return p.priceHT || 0;
}
function finRate(base) { return base < 6000 ? 0.099 : 0.079; }
function finMonthly(base, months) {
  if (!base || months <= 0) return null;
  const i = finRate(base) / 12;
  return base * i / (1 - Math.pow(1 + i, -months));
}
function finModalHTML(p, name) {
  const base = finBase(p);
  if (!base) return "";
  return `
  <div class="fin-modal" id="finModal" hidden>
    <div class="fin-backdrop" data-fin-close></div>
    <div class="fin-dialog" role="dialog" aria-modal="true" aria-labelledby="finTitle">
      <button class="fin-x" type="button" data-fin-close aria-label="Fermer la simulation">&times;</button>
      <div id="finCalc" data-base="${base}" data-name="${esc(name)}" data-ref="${esc(p.reference || "")}">
        <p class="fin-eyebrow">Simulation de financement</p>
        <h3 id="finTitle" class="fin-title">${esc(name)}</h3>
        <p class="fin-amount">Montant financé : <strong>${euro(base)} €</strong> <span>${FIN_USE_TTC ? "TTC" : "HT"}</span></p>
        <div class="fin-result">
          <div><span id="finMonthly" class="fin-monthly-val">—</span><span class="fin-monthly-unit">€/mois</span></div>
          <span id="finTaeg" class="fin-taeg">—</span>
        </div>
        <div class="fin-slider">
          <div class="fin-slider-top">Durée du financement <strong><span id="finMonths">${FIN_DEFAULT_MONTHS}</span> mois</strong></div>
          <input type="range" id="finRange" class="fin-range" min="0" max="120" step="1" value="${FIN_DEFAULT_MONTHS}" aria-label="Durée du financement en mois">
          <div class="fin-ticks"><span>0</span><span>60</span><span>120</span></div>
        </div>
        <div class="fin-detail">
          <div><span>Coût total du crédit</span><strong id="finCost">—</strong></div>
          <div><span>Montant total dû</span><strong id="finTotal">—</strong></div>
        </div>
        <p class="fin-legal">Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager. Cette simulation est purement indicative, hors assurance facultative, et n'a aucune valeur contractuelle. Toute demande est soumise à étude et à l'acceptation préalable du dossier par l'organisme de financement.</p>
        <a href="/contact/?topic=financement" id="finCta" class="btn btn-primary fin-cta">Demander un financement</a>
      </div>
    </div>
  </div>`;
}
const FINANCE_CSS = `
  .pdp-fin{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:14px;}
  .pdp-fin-monthly{font-size:15px;color:var(--ink);}
  .pdp-fin-monthly strong{font-family:var(--f-display);font-weight:600;font-size:19px;color:var(--orange);}
  .pdp-fin-btn{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--orange);background:rgba(242,129,28,.12);border:1px solid rgba(242,129,28,.42);border-radius:100px;padding:9px 18px;cursor:pointer;transition:background .2s,border-color .2s,box-shadow .2s;}
  .pdp-fin-btn:hover{background:rgba(242,129,28,.2);border-color:var(--orange);box-shadow:0 2px 10px rgba(242,129,28,.22);}
  .pdp-fin-note{font-size:12px;line-height:1.5;color:var(--muted);margin-top:8px;max-width:54ch;}
  .fin-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
  .fin-modal[hidden]{display:none;}
  .fin-backdrop{position:absolute;inset:0;background:rgba(20,25,32,.55);backdrop-filter:blur(3px);}
  .fin-dialog{position:relative;width:100%;max-width:460px;max-height:92vh;overflow:auto;background:var(--cream-pure,#faf6ec);border-radius:20px;padding:34px 30px 28px;box-shadow:0 30px 80px rgba(0,0,0,.35);}
  .fin-x{position:absolute;top:14px;right:16px;width:34px;height:34px;border:none;background:rgba(33,42,53,.06);border-radius:50%;font-size:22px;line-height:1;color:var(--ink);cursor:pointer;}
  .fin-x:hover{background:rgba(33,42,53,.12);}
  .fin-eyebrow{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);margin-bottom:6px;}
  .fin-title{font-family:var(--f-display);font-weight:600;font-size:22px;letter-spacing:-.02em;color:var(--ink);margin-bottom:10px;}
  .fin-amount{font-size:14px;color:var(--muted);margin-bottom:18px;}.fin-amount strong{color:var(--ink);font-size:16px;}.fin-amount span{font-family:var(--f-mono);font-size:11px;}
  .fin-result{display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--cream,#f4efe4);border-radius:14px;padding:16px 20px;margin-bottom:22px;}
  .fin-monthly-val{font-family:var(--f-display);font-weight:600;font-size:36px;letter-spacing:-.02em;color:var(--ink);}
  .fin-monthly-unit{font-family:var(--f-mono);font-size:13px;color:var(--muted);margin-left:5px;}
  .fin-taeg{font-family:var(--f-mono);font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--orange);text-align:right;line-height:1.3;}
  .fin-slider-top{display:flex;justify-content:space-between;align-items:baseline;font-size:14px;color:var(--muted);margin-bottom:10px;}
  .fin-slider-top strong{color:var(--ink);font-family:var(--f-display);font-size:16px;}
  .fin-range{width:100%;-webkit-appearance:none;appearance:none;height:5px;border-radius:5px;background:rgba(33,42,53,.15);outline:none;margin:0;}
  .fin-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,.25);}
  .fin-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;}
  .fin-ticks{display:flex;justify-content:space-between;font-family:var(--f-mono);font-size:10px;color:var(--muted);margin-top:7px;}
  .fin-detail{display:flex;flex-direction:column;gap:9px;margin-top:22px;padding-top:18px;border-top:1px solid rgba(33,42,53,.12);}
  .fin-detail div{display:flex;justify-content:space-between;font-size:14px;}
  .fin-detail span{color:var(--muted);}.fin-detail strong{color:var(--ink);font-weight:600;}
  .fin-legal{font-size:11px;line-height:1.55;color:var(--muted);margin:20px 0 18px;}
  .fin-cta{width:100%;justify-content:center;}`;
const FINANCE_JS = `(function(){var root=document.getElementById('finCalc'),modal=document.getElementById('finModal');if(!root||!modal)return;var base=parseFloat(root.dataset.base)||0;var name=root.dataset.name||'',ref=root.dataset.ref||'',cta=document.getElementById('finCta');function setCta(msg){if(cta)cta.href='/contact/?topic=financement&msg='+encodeURIComponent(msg);}var range=document.getElementById('finRange'),eM=document.getElementById('finMonths'),eMon=document.getElementById('finMonthly'),eT=document.getElementById('finTaeg'),eC=document.getElementById('finCost'),eTot=document.getElementById('finTotal');var f0=new Intl.NumberFormat('fr-FR',{maximumFractionDigits:0}),f2=new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2});function rate(b){return b<6000?0.099:0.079;}function calc(){var n=parseInt(range.value,10);eM.textContent=n;var r=rate(base);if(n<=0){eMon.textContent=f0.format(base);eT.textContent='Paiement comptant';eC.textContent='0 €';eTot.textContent=f0.format(base)+' €';setCta('Bonjour, je souhaite acheter la '+name+(ref?' (réf. '+ref+')':'')+' au comptant ('+f0.format(base)+' € HT). Merci de me recontacter.');return;}var i=r/12,m=base*i/(1-Math.pow(1+i,-n)),tot=m*n;eMon.textContent=f2.format(m);eT.textContent='TAEG fixe '+(r*100).toLocaleString('fr-FR')+' %';eC.textContent=f0.format(tot-base)+' €';eTot.textContent=f0.format(tot)+' €';setCta('Bonjour, je souhaite un financement pour la '+name+(ref?' (réf. '+ref+')':'')+'.\\n\\nSimulation : montant '+f0.format(base)+' € HT, durée '+n+' mois, mensualité estimée '+f2.format(m)+' €/mois, TAEG fixe '+(r*100).toLocaleString('fr-FR')+' %, coût total du crédit '+f0.format(tot-base)+' €, montant total dû '+f0.format(tot)+' €.\\n\\nMerci de me recontacter.');}range.addEventListener('input',calc);calc();function op(){modal.hidden=false;document.body.style.overflow='hidden';}function cl(){modal.hidden=true;document.body.style.overflow='';}document.querySelectorAll('[data-fin-open]').forEach(function(b){b.addEventListener('click',op);});modal.querySelectorAll('[data-fin-close]').forEach(function(b){b.addEventListener('click',cl);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!modal.hidden)cl();});})();`;

function productPageHTML(p, L) {
  const d = L.DATA[p.reference] || {};
  const name = cleanName(p.name, p.brand, L);
  const label = L.LABELS[p.pageSlug] || "Produit";
  const cPath = catPath(L, p.pageSlug);
  const catName = L.CAT_NAME[p.pageSlug] || "Catalogue";
  const tagline = d.tagline || `${label} ${p.brand || ""}`.trim();
  const intro = d.intro || d.description || L.ui.introDefault(name, label, p.brand);
  const stockBadge = p.inStock ? `<span class="pdp-stock in">${L.ui.inStock}</span>` : `<span class="pdp-stock pre">${L.ui.onOrder}</span>`;
  const priceHTML = (p.priceHT && p.priceHT > 0)
    ? `<div class="pdp-price"><span class="pdp-price-val">${euro(p.priceHT)} €</span><span class="pdp-price-ht">${L.ui.ht}</span></div>${p.priceTTC ? `<div class="pdp-price-ttc">${L.ui.ttcWord(euro(p.priceTTC))}</div>` : ""}`
    : `<div class="pdp-price"><span class="pdp-price-val" style="font-size:32px;">${L.ui.onQuote}</span></div>`;
  const metaDesc = intro.slice(0, 158);
  const devisUrl = L.prefix + "/contact/?topic=devis&msg=" + encodeURIComponent(L.ui.devisMsg(name, p.reference));
  const frUrl = altSlugUrl(p.reference, ""), enUrl = altSlugUrl(p.reference, "/en");
  const finB = L.finance ? finBase(p) : 0;
  const finM = finB ? finMonthly(finB, FIN_DEFAULT_MONTHS) : null;
  const finBlock = (finB > 0 && finM) ? `
      <div class="pdp-fin">
        <span class="pdp-fin-monthly">${L.ui.finMonthlyLine(euro(Math.round(finM)))}</span>
        <button type="button" class="pdp-fin-btn" data-fin-open>${L.ui.finBtn}</button>
      </div>
      <p class="pdp-fin-note">${L.ui.finNote(FIN_DEFAULT_MONTHS, (finRate(finB) * 100).toLocaleString("fr-FR"))}</p>` : "";
  const finCss = (finB > 0 && finM) ? FINANCE_CSS : "";
  const finModal = (finB > 0 && finM) ? finModalHTML(p, name) : "";
  const finScript = (finB > 0 && finM) ? FINANCE_JS : "";

  return `<!DOCTYPE html>
<html lang="${L.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(name)} ${esc(p.brand || "")} — ${label}${p.priceHT ? L.ui.titleFrom(euro(p.priceHT)) : ""} | CZN Machinery</title>
<meta name="description" content="${esc(metaDesc)}">
${FAVICONS}
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE}${slugUrl(p.reference, L)}">
${hreflangLinks(frUrl, enUrl)}
<meta property="og:title" content="${esc(name)} ${esc(p.brand || "")} | CZN Machinery"><meta property="og:description" content="${esc(metaDesc)}"><meta property="og:type" content="product"><meta property="og:url" content="${SITE}${slugUrl(p.reference, L)}"><meta property="og:locale" content="${L.ogLocale}"><meta property="og:site_name" content="CZN Machinery">
${HEAD_FONTS}
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${JSON.stringify(productNode(p, label, L))}</script>
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: L.ui.home, item: SITE + (L.prefix || "") + "/" }, { "@type": "ListItem", position: 2, name: catName, item: SITE + cPath }, { "@type": "ListItem", position: 3, name: name, item: SITE + slugUrl(p.reference, L) }] })}</script>
<style>
  .pdp{padding:130px 0 60px;}
  .pdp-crumbs{font-family:var(--f-mono);font-size:12px;letter-spacing:.04em;color:var(--muted);margin-bottom:30px;}
  .pdp-crumbs a{color:var(--muted);text-decoration:none;}.pdp-crumbs a:hover{color:var(--orange);}
  .pdp-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:start;}
  .pdp-gallery{position:sticky;top:118px;}
  .pdp-main{position:relative;aspect-ratio:1/1;border-radius:18px;overflow:hidden;background:var(--oak);}
  .pdp-main img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;}
  .pdp-nav{position:absolute;top:50%;transform:translateY(-50%);width:42px;height:42px;border-radius:50%;border:none;cursor:pointer;background:rgba(255,255,255,.9);color:var(--ink);font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.25);transition:background .2s;}
  .pdp-nav:hover{background:#fff;}
  .pdp-prev{left:14px;}.pdp-next{right:14px;}
  .pdp-gallery--empty .pdp-noimg{aspect-ratio:16/10;border-radius:18px;background:linear-gradient(135deg,var(--oak),var(--oak-soft,#2A3441));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:rgba(244,239,228,.85);}
  .pdp-noimg span{font-family:var(--f-display);font-size:30px;font-weight:600;}.pdp-noimg small{font-family:var(--f-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.55;}
  .pdp-thumbs{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;}
  .pdp-thumb{width:78px;height:62px;border-radius:10px;overflow:hidden;border:2px solid transparent;background:none;cursor:pointer;padding:0;}
  .pdp-thumb.active{border-color:var(--orange);}.pdp-thumb img{width:100%;height:100%;object-fit:cover;}
  .pdp-eyebrow{font-family:var(--f-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--orange);margin-bottom:14px;}
  .pdp-title{font-family:var(--f-display);font-weight:500;font-size:clamp(32px,4.4vw,50px);line-height:1.03;letter-spacing:-.03em;color:var(--ink);}
  .pdp-tagline{font-family:var(--f-serif,'Fraunces',serif);font-style:italic;font-size:19px;color:var(--muted);margin-top:12px;}
  .pdp-stock{display:inline-block;margin-top:18px;font-family:var(--f-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:6px 12px;border-radius:100px;}
  .pdp-stock.in{background:rgba(34,140,80,.12);color:#1f7a45;}.pdp-stock.pre{background:rgba(33,42,53,.08);color:var(--ink);}
  .pdp-price{display:flex;align-items:baseline;gap:8px;margin-top:22px;}
  .pdp-price-val{font-family:var(--f-display);font-weight:600;font-size:42px;letter-spacing:-.02em;color:var(--ink);}
  .pdp-price-ht{font-family:var(--f-mono);font-size:13px;color:var(--muted);}.pdp-price-ttc{font-size:14px;color:var(--muted);margin-top:2px;}
  .pdp-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(33,42,53,.1);border:1px solid rgba(33,42,53,.1);border-radius:14px;overflow:hidden;margin-top:26px;}
  .pdp-stat{background:var(--cream,#f4efe4);padding:16px 18px;}
  .pdp-stat-val{font-family:var(--f-display);font-weight:600;font-size:21px;color:var(--ink);}
  .pdp-stat-label{font-family:var(--f-mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-top:3px;}
  .pdp-actions{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap;}
  .pdp-trust{display:flex;gap:22px;margin-top:24px;flex-wrap:wrap;font-size:13px;color:var(--muted);}
  .pdp-section{margin-top:72px;}
  .pdp-lead{font-size:18px;line-height:1.75;color:var(--ink);max-width:64ch;}
  .pdp-block{margin-top:56px;}
  .pdp-block h2{font-family:var(--f-display);font-weight:500;font-size:27px;letter-spacing:-.02em;color:var(--ink);margin-bottom:14px;}
  .pdp-block-body{font-size:16px;line-height:1.7;color:var(--ink);max-width:64ch;}
  .pdp-feats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:26px;}
  .pdp-feat{background:var(--cream-2,#faf6ec);border:1px solid rgba(33,42,53,.07);border-radius:14px;padding:20px;}
  .pdp-feat h4{font-family:var(--f-display);font-weight:600;font-size:15px;color:var(--ink);margin-bottom:7px;}
  .pdp-feat p{font-size:13.5px;line-height:1.6;color:var(--muted);}
  .pdp-spec-group{font-family:var(--f-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--orange);margin:28px 0 6px;}
  .pdp-specs{display:grid;grid-template-columns:repeat(2,1fr);gap:0 40px;max-width:860px;}
  .pdp-spec{display:flex;justify-content:space-between;gap:16px;padding:13px 2px;border-bottom:1px solid rgba(33,42,53,.1);}
  .pdp-spec dt{color:var(--muted);font-size:14px;}.pdp-spec dd{font-weight:500;color:var(--ink);font-size:14px;text-align:right;}
  .pdp-specs-empty{font-size:15px;color:var(--muted);}.pdp-specs-empty a{color:var(--orange);}
  .pdp-cta-band{margin-top:72px;background:var(--oak);border-radius:20px;padding:48px;text-align:center;color:var(--cream-pure,#faf6ec);}
  .pdp-cta-band h2{font-family:var(--f-display);font-weight:500;font-size:28px;color:var(--cream-pure,#faf6ec);margin-bottom:10px;}
  .pdp-cta-band p{color:rgba(244,239,228,.7);margin-bottom:24px;}
  @media(max-width:900px){.pdp-grid{grid-template-columns:1fr;gap:30px;}.pdp-gallery{position:static;}.pdp-feats{grid-template-columns:1fr;}.pdp-specs{grid-template-columns:1fr;}}
${finCss}
</style>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-G0HZD8F8BK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-G0HZD8F8BK');
</script>
<!-- Capture gclid Google Ads (tracking lead) -->
<script>
(function () {
  try {
    var gclid = new URLSearchParams(location.search).get('gclid');
    if (gclid) {
      localStorage.setItem('czn_gclid', JSON.stringify({
        value: gclid,
        expires: Date.now() + 90 * 24 * 60 * 60 * 1000
      }));
    }
  } catch (e) {}
})();
function getStoredGclid() {
  try {
    var raw = localStorage.getItem('czn_gclid');
    if (!raw) return '';
    var r = JSON.parse(raw);
    if (Date.now() > r.expires) { localStorage.removeItem('czn_gclid'); return ''; }
    return r.value || '';
  } catch (e) { return ''; }
}
</script>
</head>
<body>
${utilityBar(L, frUrl, enUrl)}
${nav(L)}
<main class="pdp"><div class="container">
  <nav class="pdp-crumbs" aria-label="${L.ui.breadcrumb}"><a href="${L.prefix ? L.prefix + "/" : "/"}">${L.ui.home}</a> &nbsp;/&nbsp; <a href="${cPath}">${catName}</a> &nbsp;/&nbsp; <span>${esc(name)}</span></nav>
  <div class="pdp-grid">
    ${galleryHTML(p, d, L)}
    <div class="pdp-info">
      <div class="pdp-eyebrow">${esc(p.brand || "CZN")} · ${label}</div>
      <h1 class="pdp-title">${esc(name)}</h1>
      <p class="pdp-tagline">${esc(tagline)}</p>
      ${stockBadge}
      ${priceHTML}
      ${finBlock}
      ${statsHTML(d)}
      <div class="pdp-actions">
        <a href="${devisUrl}" class="btn btn-primary">${L.ui.requestQuote} <svg class="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 5h12M8 1l4 4-4 4"/></svg></a>
        <a href="tel:+33531605161" class="btn btn-outline">05 31 60 51 61</a>
      </div>
      <div class="pdp-trust"><span>${L.ui.warranty2y}</span><span>${L.ui.deliveryFr}</span><span>${L.ui.directImporter}</span></div>
    </div>
  </div>

  <section class="pdp-section"><div class="pdp-lead">${esc(intro)}</div></section>
  ${sectionsHTML(d)}

  <section class="pdp-section"><h2 style="font-family:var(--f-display);font-weight:500;font-size:27px;letter-spacing:-.02em;color:var(--ink);margin-bottom:8px;">${L.ui.techSpecs}</h2>${specsHTML(d, L)}</section>

  <section class="pdp-cta-band">
    <h2>${esc(L.ui.ctaInterested(name))}</h2>
    <p>${L.ui.ctaBody}</p>
    <a href="${devisUrl}" class="btn btn-primary">${L.ui.requestQuote}</a>
  </section>
</div></main>
${finModal}
${footer(L)}
<script>
(function(){var main=document.getElementById('pdpMain');var th=Array.prototype.slice.call(document.querySelectorAll('.pdp-thumb'));if(!main||!th.length)return;var i=0;function show(n){i=(n+th.length)%th.length;main.src=th[i].dataset.src;th.forEach(function(x,k){x.classList.toggle('active',k===i);});}th.forEach(function(b,k){b.addEventListener('click',function(){show(k);});});var prev=document.querySelector('.pdp-prev');var next=document.querySelector('.pdp-next');if(prev)prev.addEventListener('click',function(){show(i-1);});if(next)next.addEventListener('click',function(){show(i+1);});})();
${finScript}
</script>
  <script src="/rdv-modal.js" defer></script>
  <script src="/mobile-nav.js" defer></script>
</body>
</html>`;
}

/* ── generation ── */
function categoryEndBlocks(L, slug) {
  const cats = [
    [catPath(L, "mini-pelles"), L.CAT_NAME["mini-pelles"]],
    [catPath(L, "mini-chargeurs"), L.CAT_NAME["mini-chargeurs"]],
    [catPath(L, "mini-tombereaux"), L.CAT_NAME["mini-tombereaux"]],
    [catPath(L, "accessoires"), L.CAT_NAME["accessoires"]],
  ];
  const cross = cats
    .filter(([href]) => href !== catPath(L, slug))
    .map(([href, label]) => `      <a href="${href}" class="cross-nav-card"><span>${label}</span><span class="cn-arrow">→</span></a>`)
    .join("\n");
  return `<section class="sec-cream">
  <div class="container">
    <div class="inner-header centered">
      <div class="eyebrow">${L.ui.continueVisit}</div>
      <h2 class="section-title">${L.ui.exploreRange}</h2>
    </div>
    <div class="cross-nav-grid">
${cross}
    </div>
  </div>
</section>`;
}

function categoryShellHTML(page, L) {
  const name = L.CAT_NAME[page.slug] || page.label + "s";
  const cPath = catPath(L, page.slug);
  const frUrl = "/" + page.slug + "/", enUrl = "/en/" + page.slug + "/";
  return `<!DOCTYPE html>
<html lang="${L.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(name)} — CZN Machinery</title>
<meta name="description" content="${esc(name)} — CZN Machinery.">
${FAVICONS}
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE}${cPath}">
${hreflangLinks(frUrl, enUrl)}
${HEAD_FONTS}
<link rel="stylesheet" href="/styles.css">
<!-- JSONLD:START --><!-- JSONLD:END -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-G0HZD8F8BK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-G0HZD8F8BK');
</script>
<!-- Capture gclid Google Ads (tracking lead) -->
<script>
(function () {
  try {
    var gclid = new URLSearchParams(location.search).get('gclid');
    if (gclid) {
      localStorage.setItem('czn_gclid', JSON.stringify({
        value: gclid,
        expires: Date.now() + 90 * 24 * 60 * 60 * 1000
      }));
    }
  } catch (e) {}
})();
function getStoredGclid() {
  try {
    var raw = localStorage.getItem('czn_gclid');
    if (!raw) return '';
    var r = JSON.parse(raw);
    if (Date.now() > r.expires) { localStorage.removeItem('czn_gclid'); return ''; }
    return r.value || '';
  } catch (e) { return ''; }
}
</script>
</head>
<body>
${utilityBar(L, frUrl, enUrl)}
${nav(L)}
<section class="featured"><div class="container">
  <div class="featured-header">
    <div>
      <div class="eyebrow">${esc(page.eyebrow || "")}</div>
      <h1 class="section-title" style="margin-top:14px;">${page.h1 || name}</h1>
    </div>
  </div>
  <div class="products-grid">
<!-- PRODUCTS:START -->
<!-- PRODUCTS:END -->
  </div>
</div></section>
${categoryEndBlocks(L, page.slug)}
${footer(L)}
</body>
</html>`;
}

function generateCatalog(all, L) {
  for (const page of L.PAGES) {
    const list = all.filter((p) => p.pageSlug === page.slug).sort((a, b) => (a.priceHT || 0) - (b.priceHT || 0));
    const file = path.join(process.cwd(), page.file);
    let html;
    if (fs.existsSync(file) && fs.readFileSync(file, "utf8").includes("<!-- PRODUCTS:START -->")) {
      html = fs.readFileSync(file, "utf8");          // page existante avec marqueurs : on garde le shell
    } else {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      html = categoryShellHTML(page, L);              // page absente / sans marqueurs : on crée le shell
    }
    const empty = L.lang === "fr" ? "Nouveaux modèles bientôt disponibles." : "New models coming soon.";
    const cards = list.length
      ? list.map((p) => cardHTML(p, L)).join("\n")
      : '      <p style="grid-column:1/-1;text-align:center;padding:70px 0;color:var(--muted);font-family:var(--f-mono);font-size:13px;letter-spacing:.04em;">' + empty + "</p>";
    html = replaceBetween(html, "<!-- PRODUCTS:START -->", "<!-- PRODUCTS:END -->", cards);
    html = replaceBetween(html, "<!-- JSONLD:START -->", "<!-- JSONLD:END -->", itemListJsonLd(list, page.label, L));
    fs.writeFileSync(file, html);
    console.log(`✓ catalogue ${L.lang} ${page.slug} : ${list.length} produits`);
  }
}
function generateProductPages(all, L) {
  for (const p of all) {
    const dir = path.join(process.cwd(), L.out, "produit", p.reference);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), productPageHTML(p, L));
    console.log(`✓ fiche ${L.lang} ${L.prefix}/produit/${p.reference}/`);
  }
}

/* ── Marques masquées temporairement (pas de stock / pas de commandes). ── */
const HIDDEN_BRANDS = ["Xcavator"];

async function main() {
  const apiKey = process.env.AXONAUT_API_KEY;
  let all;
  if (apiKey) {
    const raw = await fetchAllProducts(apiKey);
    const hidden = HIDDEN_BRANDS.map((b) => b.toLowerCase());
    all = raw.map(normalize).filter((p) => p.pageSlug && !p.disabled && !hidden.includes((p.brand || "").toLowerCase()));
    fs.writeFileSync(CACHE_FILE, JSON.stringify(all, null, 2));   // rafraîchit le cache
    console.log("Axonaut OK — cache rafraîchi (" + all.length + " produits).");
  } else if (fs.existsSync(CACHE_FILE)) {
    all = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
    console.log("⚠ Pas de clé Axonaut — build depuis le cache (" + all.length + " produits).");
  } else {
    console.error("❌ AXONAUT_API_KEY manquante et aucun cache (.axonaut-cache.json).");
    process.exit(1);
  }
  for (const L of [LOCALES.fr, LOCALES.en]) {
    generateCatalog(all, L);
    generateProductPages(all, L);
  }
  console.log("Terminé : " + all.length + " produits × FR/EN." + (HIDDEN_BRANDS.length ? " (masqué : " + HIDDEN_BRANDS.join(", ") + ")" : ""));
}
module.exports = { productPageHTML, cardHTML, itemListJsonLd, cleanName, normalize, generateCatalog, generateProductPages, LOCALES };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
