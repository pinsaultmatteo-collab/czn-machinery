// 📁 scripts/generate-guide.mjs
// Publie automatiquement UN guide SEO, en FR **et** en EN (miroir), sur /guides/ et /en/guides/.
// Lancé par le workflow GitHub Actions "weekly-guide" (mardi 9h Paris) ou en manuel.
//
//   node scripts/generate-guide.mjs
//
// Nécessite ANTHROPIC_API_KEY (GitHub Secret — jamais commitée).
// 1) prend le 1er sujet non publié de scripts/guides-queue.json
// 2) rédige l'article FR (API Claude, sortie structurée JSON)
// 3) le traduit en EN (2e appel)
// 4) assemble les 2 pages depuis des gabarits existants (chrome identique : nav, footer, pixels, hreflang croisés)
// 5) écrit guides/<slug>/ et en/guides/<slug>/, ajoute la carte sur les 2 index, marque le sujet publié
// 6) régénère sitemap.xml / llms.txt / index.md via seo-gen.js
// Le commit + push est fait par le workflow.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const SITE = "https://czn-machinery.com";
const MODEL = "claude-opus-4-8";
const QUEUE_FILE = "scripts/guides-queue.json";
const REF_SLUG = "location-mini-pelle"; // gabarit bilingue (hreflang + liens de langue déjà en place, slug absent du footer)

const CATEGORIES = ["Fondamentaux", "Achat", "Usages", "Entretien", "Réglementation", "Comparatifs", "Occasion", "Location"];
const CAT_EN = { "Fondamentaux": "Fundamentals", "Achat": "Buying", "Usages": "Uses", "Entretien": "Maintenance", "Réglementation": "Regulations", "Comparatifs": "Comparisons", "Occasion": "Used", "Location": "Rental" };

const GUIDE_SLUGS = fs.readdirSync(path.join(ROOT, "guides"), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
const ALLOWED_LINKS = [
  "/", "/mini-pelles/", "/mini-chargeurs/", "/mini-tombereaux/", "/remorques/",
  "/autres-engins/", "/accessoires/", "/occasion/", "/entreprise/",
  "/entreprise/financement/", "/contact/",
  ...GUIDE_SLUGS.map((s) => `/guides/${s}/`),
];
const ALLOWED_PREFIXES = ["/produit/"];
const ALLOWED_IMAGES = [
  { src: "/images/SONCA/SJW-06/sjw-06-3-4-avant.webp", alt: "Mini-pelle Sonca SJW-06" },
  { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-avant.webp", alt: "Mini-pelle Sonca SJW-18 PRO" },
  { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-avant-droite-lame.webp", alt: "Mini-pelle Xcavator XC22 PRO V2" },
  { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-4.webp", alt: "Broyeur forestier radiocommandé Sonca" },
  { src: "/images/CONCASSEUR/concasseur-sonca-2.webp", alt: "Concasseur à mâchoires Sonca" },
  { src: "/images/remorques/REM-2.7T/remorque-2-7t-avant.webp", alt: "Remorque porte-engin 2,7 T CZN" },
];

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const today = () => new Date().toISOString().slice(0, 10);
const year = () => new Date().getFullYear();
const fail = (m) => { console.error("❌ " + m); process.exit(1); };
// préfixe /en aux liens internes absolus (ne touche pas /en/… ni #ancre ni externe)
const enHref = (h) => (typeof h === "string" && h.startsWith("/") && !h.startsWith("/en/")) ? "/en" + h : h;
const enPrefixBody = (html) => html.replace(/href="(\/(?!en\/)[^"]*)"/g, (m, h) => `href="/en${h}"`);

/* ── appel API Claude ── */
async function callClaude({ schema, system, user }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) fail("ANTHROPIC_API_KEY manquante (à définir dans les GitHub Secrets).");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({
      model: MODEL, max_tokens: 16000,
      thinking: { type: "adaptive" },
      output_config: { format: { type: "json_schema", schema } },
      system, messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) fail(`API HTTP ${res.status} : ${await res.text()}`);
  const data = await res.json();
  if (data.stop_reason === "refusal") fail("Réponse refusée par le modèle (stop_reason=refusal).");
  const tb = (data.content || []).find((b) => b.type === "text");
  if (!tb) fail("Pas de bloc texte dans la réponse.");
  try { return JSON.parse(tb.text); } catch (e) { fail("JSON invalide : " + e.message + "\n" + tb.text.slice(0, 500)); }
}

/* ── 1. Sujet suivant ── */
const queue = JSON.parse(fs.readFileSync(path.join(ROOT, QUEUE_FILE), "utf8"));
const topic = (queue.topics || []).find((t) => t.published !== true);
if (!topic) { console.log("ℹ️ File de sujets épuisée — rien à publier."); process.exit(0); }
const slug = topic.slug;
if (fs.existsSync(path.join(ROOT, "guides", slug, "index.html"))) {
  console.log(`ℹ️ /guides/${slug}/ existe déjà — marqué publié, on passe.`);
  topic.published = true; topic.publishedAt = today();
  fs.writeFileSync(path.join(ROOT, QUEUE_FILE), JSON.stringify(queue, null, 2));
  process.exit(0);
}
console.log(`📝 Sujet : ${topic.workingTitle} (/guides/${slug}/)`);

/* ── 2. Rédaction FR ── */
const SCHEMA_FR = {
  type: "object", additionalProperties: false,
  properties: {
    title: { type: "string" }, metaDescription: { type: "string" },
    category: { type: "string", enum: CATEGORIES },
    lede: { type: "string" }, readingTime: { type: "integer" }, heroImage: { type: "string" },
    toc: { type: "array", items: { type: "object", additionalProperties: false, properties: { id: { type: "string" }, label: { type: "string" } }, required: ["id", "label"] } },
    bodyHtml: { type: "string" },
    related: { type: "array", items: { type: "object", additionalProperties: false, properties: { href: { type: "string" }, cat: { type: "string" }, title: { type: "string" }, desc: { type: "string" } }, required: ["href", "cat", "title", "desc"] } },
  },
  required: ["title", "metaDescription", "category", "lede", "readingTime", "heroImage", "toc", "bodyHtml", "related"],
};
const SYSTEM_FR = `Tu es rédacteur SEO senior pour CZN Machinery, importateur direct d'engins de chantier compacts basé à Toulouse (France), depuis 2019.

CONTEXTE CZN (à mettre en avant, sans publicité lourde) :
- Gamme : mini-pelles (dès 4 125 € HT), mini-chargeurs, mini-tombereaux (dumpers), remorques porte-engin (1,5 T et 2,7 T), broyeur forestier radiocommandé et concasseur à mâchoires (catégorie « Autres engins »), accessoires.
- Marques : Sonca, Xcavator. Moteurs Laidong de série (Kubota sur commande).
- Atouts : importation directe (prix compétitifs), garantie 2 ans (24 mois), livraison France, SAV France, financement Sofinco, showroom Toulouse, +5 500 clients.
- Occasion : machines révisées 50 points, garanties 6 mois.

OBJECTIF : article de blog optimisé SEO, utile au lecteur, qui redirige naturellement vers les pages du site CZN.

RÈGLES STRICTES :
- Français, ton factuel et pédagogique, sans langage commercial agressif.
- N'INVENTE JAMAIS de chiffres précis (prix, specs) hors ceux fournis. Seul prix de départ à citer : « dès 4 125 € HT » (mini-pelles neuves). Fourchettes de marché prudentes et générales.
- Longueur : 1 200 à 1 800 mots.
- Maille interne : 3 à 6 liens internes UNIQUEMENT depuis cette liste : ${ALLOWED_LINKS.join(", ")} (les fiches /produit/... sont aussi OK). Un CTA vers /contact/ ou une catégorie est bienvenu.
- bodyHtml : HTML du CORPS uniquement. Balises autorisées : <p>, <h2 id="...">, <h3>, <ul>/<li>, <ol>/<li>, <strong>, <a href="...">, tableaux <div class="table-wrap"><table>…</table></div>, et bloc CTA <div class="article-inline-cta"><div class="article-inline-cta-text"><h4>…</h4><p>…</p></div><a href="/…/">… →</a></div>. PAS de <h1>, <script>, <style>, <img>, ni attributs on*.
- Chaque <h2> a un id="slug-court" (minuscules, sans accents) ; "toc" liste exactement ces {id,label} dans l'ordre.
- "related" : 3 guides existants (href pris dans /guides/... autorisés, pas la page en cours), cat = rubrique, title + desc courts.
- title : accrocheur (< 60 car. si possible) ; NE PAS inclure " | CZN Machinery" (ajouté auto).
- metaDescription : 150-160 caractères, avec le mot-clé.
- heroImage : facultatif — chemin exact d'une image de cette liste si pertinent, sinon "". Images : ${ALLOWED_IMAGES.map((i) => i.src).join(", ")}.`;
const USER_FR = `Rédige le guide.
Titre de travail : ${topic.workingTitle}
Rubrique imposée : ${topic.category}
Mot-clé cible : ${topic.focusKeyword}
Angle / brief : ${topic.brief}

Réponds uniquement via le format JSON demandé.`;

console.log("🤖 Rédaction FR…");
const art = await callClaude({ schema: SCHEMA_FR, system: SYSTEM_FR, user: USER_FR });

/* ── validations FR ── */
if (!art.title || !art.bodyHtml || art.bodyHtml.length < 800) fail("Contenu FR trop court/incomplet.");
if (!CATEGORIES.includes(art.category)) art.category = topic.category;
if (!Array.isArray(art.toc) || !art.toc.length) fail("Sommaire FR manquant.");
if (!Array.isArray(art.related) || art.related.length < 3) fail("Guides associés FR manquants.");
const readingTime = Number.isInteger(art.readingTime) && art.readingTime > 0 ? art.readingTime : 8;
// neutralise les liens internes hors liste blanche
const allowedSet = new Set(ALLOWED_LINKS);
art.bodyHtml = art.bodyHtml.replace(/<a\s+href="(\/[^"#]*?)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => {
  const clean = href.endsWith("/") ? href : href + "/";
  if (allowedSet.has(clean) || ALLOWED_PREFIXES.some((p) => href.startsWith(p))) return `<a href="${clean}">${inner}</a>`;
  console.warn("⚠️ lien interne retiré : " + href);
  return inner;
});
art.related = art.related.filter((r) => /^\/guides\/[a-z0-9-]+\/$/.test(r.href) && r.href !== `/guides/${slug}/` && GUIDE_SLUGS.includes(r.href.split("/")[2])).slice(0, 3);
if (art.related.length < 3) fail("Moins de 3 guides associés valides après filtrage.");
const heroImg = (art.heroImage && ALLOWED_IMAGES.some((i) => i.src === art.heroImage)) ? art.heroImage : "";
const heroAlt = heroImg ? (ALLOWED_IMAGES.find((i) => i.src === heroImg)?.alt || art.title) : "";

/* ── 3. Traduction EN ── */
const SCHEMA_EN = {
  type: "object", additionalProperties: false,
  properties: {
    title: { type: "string" }, metaDescription: { type: "string" }, lede: { type: "string" },
    tocLabels: { type: "array", items: { type: "string" } },
    bodyHtml: { type: "string" },
    related: { type: "array", items: { type: "object", additionalProperties: false, properties: { cat: { type: "string" }, title: { type: "string" }, desc: { type: "string" } }, required: ["cat", "title", "desc"] } },
  },
  required: ["title", "metaDescription", "lede", "tocLabels", "bodyHtml", "related"],
};
const SYSTEM_EN = `You translate CZN Machinery blog guides from French to natural British English (en-GB), for an SEO blog. CZN Machinery imports compact construction machinery (mini excavators from €4,125 excl. VAT, mini loaders, mini dumpers, trailers, a forestry mulcher & a jaw crusher, attachments); Toulouse, France; 2-year warranty; France-based aftersales; direct import.
RULES:
- Translate faithfully and fluently; keep the same meaning, no added claims, no invented figures. Keep "€4,125 excl. VAT" style for prices.
- In bodyHtml: preserve EVERY HTML tag and EVERY attribute value (href, id, class) EXACTLY as given — only translate the visible text and the CTA wording. Do not add or remove tags or links.
- tocLabels: the English labels for each table-of-contents item, SAME number and SAME order as provided.
- related: SAME number and order as provided; translate cat/title/desc only.
- title: no " | CZN Machinery" suffix.`;
const USER_EN = `Traduis ce guide en anglais.
Titre FR : ${art.title}
Meta FR : ${art.metaDescription}
Lede FR : ${art.lede}
tocLabels FR (ordre à respecter) : ${JSON.stringify(art.toc.map((t) => t.label))}
related FR (ordre à respecter) : ${JSON.stringify(art.related.map((r) => ({ cat: r.cat, title: r.title, desc: r.desc })))}

bodyHtml FR (préserve toutes les balises et attributs href/id à l'identique) :
${art.bodyHtml}`;

console.log("🌍 Traduction EN…");
const en = await callClaude({ schema: SCHEMA_EN, system: SYSTEM_EN, user: USER_EN });
if (!en.title || !en.bodyHtml || en.bodyHtml.length < 700) fail("Traduction EN trop courte/incomplète.");
const artEn = {
  title: en.title, metaDescription: en.metaDescription, lede: en.lede,
  category: CAT_EN[art.category] || art.category, readingTime,
  heroImage: heroImg, heroAlt,
  toc: art.toc.map((t, i) => ({ id: t.id, label: (en.tocLabels && en.tocLabels[i]) || t.label })),
  bodyHtml: enPrefixBody(en.bodyHtml),
  related: art.related.map((r, i) => ({ href: enHref(r.href), cat: (en.related && en.related[i] && en.related[i].cat) || CAT_EN[r.cat] || r.cat, title: (en.related && en.related[i] && en.related[i].title) || r.title, desc: (en.related && en.related[i] && en.related[i].desc) || r.desc })),
};
art.heroAlt = heroAlt;

/* ── 4. Assemblage d'une page depuis un gabarit ── */
function buildGuide(L, a) {
  let html = fs.readFileSync(path.join(ROOT, L.refPath), "utf8");
  html = html.split(REF_SLUG).join(slug); // canonical, hreflang croisés, liens de langue, og:url
  const fullTitle = `${a.title} | CZN Machinery`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(a.metaDescription)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(fullTitle)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(a.metaDescription)}">`);

  const url = `${L.urlBase}${slug}/`;
  const jsonld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: L.breadHome, item: L.homeUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: L.guidesUrl },
      { "@type": "ListItem", position: 3, name: a.title, item: url } ] },
    { "@type": "Article", headline: a.title, description: a.metaDescription, articleSection: a.category,
      inLanguage: L.jsonldLang, datePublished: today(), dateModified: today(),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "CZN Machinery", url: `${SITE}/` },
      publisher: { "@type": "Organization", name: "CZN Machinery", url: `${SITE}/`, logo: { "@type": "ImageObject", url: `${SITE}/images/czn-machinery-logo-small.webp` } },
      ...(a.heroImage ? { image: SITE + a.heroImage } : {}) } ] };
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`);

  const hero = `<section class="article-hero">
  <div class="container">
    <div class="breadcrumb"><a href="${L.homeRel}">${L.breadHome}</a><span class="bc-sep">/</span><a href="${L.guidesRel}">Guides</a><span class="bc-sep">/</span><span aria-current="page">${esc(a.category)}</span></div>
    <span class="article-cat">${esc(a.category)}</span>
    <h1 class="article-title">${esc(a.title)}</h1>
    <p class="article-lede">${esc(a.lede)}</p>
    <div class="article-meta">
      <span>${L.metaRead(a.readingTime)}</span>
      <span>${L.metaAdvice}</span>
      <span>${L.metaUpd(year())}</span>
    </div>
  </div>
</section>`;
  html = html.replace(/<section class="article-hero">[\s\S]*?<\/section>/, hero);

  const heroImgHtml = a.heroImage ? `<img src="${a.heroImage}" alt="${esc(a.heroAlt)}" loading="eager" style="width:100%;height:auto;border-radius:14px;margin:0 0 26px;display:block;">\n` : "";
  html = html.replace(/(<article class="article-body">)[\s\S]*?(<\/article>)/, `$1\n${heroImgHtml}${a.bodyHtml}\n      $2`);

  const tocLis = a.toc.map((t) => `        <li><a href="#${esc(t.id)}">${esc(t.label)}</a></li>`).join("\n");
  html = html.replace(/<aside class="article-toc">[\s\S]*?<\/aside>/, `<aside class="article-toc">
        <div class="article-toc-title">${L.tocTitle}</div>
        <ul>
${tocLis}
        </ul>
      </aside>`);

  const relCards = a.related.map((r) => `      <a href="${esc(r.href)}" class="related-card">
        <span class="related-card-cat">${esc(r.cat)}</span>
        <span class="related-card-title">${esc(r.title)}</span>
        <span class="related-card-desc">${esc(r.desc)}</span>
      </a>`).join("\n");
  html = html.replace(/<section class="sec-paper"[\s\S]*?<\/section>/, `<section class="sec-paper" style="padding: 72px 0;">
  <div class="container">
    <div class="inner-header reveal">
      <div class="eyebrow">${L.relEyebrow}</div>
      <h2 class="section-title">${L.relTitle}</h2>
    </div>
    <div class="related-guides">
${relCards}
    </div>
  </div>
</section>`);
  return html;
}

/* ── config par langue ── */
const L_FR = { refPath: "guides/location-mini-pelle/index.html", outDir: `guides/${slug}`, homeRel: "/", guidesRel: "/guides/", homeUrl: `${SITE}/`, guidesUrl: `${SITE}/guides/`, urlBase: `${SITE}/guides/`, jsonldLang: "fr-FR", breadHome: "Accueil", tocTitle: "Sommaire", metaRead: (n) => `⏱ ${n} min de lecture`, metaAdvice: "✓ Conseils CZN Machinery", metaUpd: (y) => `↻ Mis à jour ${y}`, relEyebrow: "À lire aussi", relTitle: "Articles <em>associés</em>.", indexPath: "guides/index.html", countLabel: "Guides pratiques", countPhrase: "guides pratiques", readMore: "Lire le guide →" };
const L_EN = { refPath: "en/guides/location-mini-pelle/index.html", outDir: `en/guides/${slug}`, homeRel: "/en/", guidesRel: "/en/guides/", homeUrl: `${SITE}/en/`, guidesUrl: `${SITE}/en/guides/`, urlBase: `${SITE}/en/guides/`, jsonldLang: "en-GB", breadHome: "Home", tocTitle: "Contents", metaRead: (n) => `⏱ ${n} min read`, metaAdvice: "✓ CZN Machinery advice", metaUpd: (y) => `↻ Updated ${y}`, relEyebrow: "Further reading", relTitle: "Related <em>articles</em>.", indexPath: "en/guides/index.html", countLabel: "Practical guides", countPhrase: "practical guides", readMore: "Read the guide →" };

for (const [L, a] of [[L_FR, art], [L_EN, artEn]]) {
  const dir = path.join(ROOT, L.outDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), buildGuide(L, a));
  console.log(`✅ ${L.outDir}/index.html`);
}

/* ── 5. Cartes sur les 2 index + compteurs ── */
function addCard(L, a) {
  const idxPath = path.join(ROOT, L.indexPath);
  let idx = fs.readFileSync(idxPath, "utf8");
  const oldCount = (idx.match(/class="guide-item /g) || []).length;
  const newCount = oldCount + 1;
  const num = String(newCount).padStart(2, "0");
  const linkBase = L === L_EN ? `/en/guides/${slug}/` : `/guides/${slug}/`;
  const card = `      <a href="${linkBase}" class="guide-item reveal">
        <div class="guide-item-head"><span class="guide-item-num">${num}</span><span class="guide-item-cat">${esc(a.category)}</span></div>
        <h3 class="guide-item-title">${esc(a.title)}</h3>
        <p class="guide-item-desc">${esc(a.metaDescription)}</p>
        <span class="guide-item-link">${L.readMore}</span>
      </a>`;
  if (!/<div class="guides-hub-grid">/.test(idx)) fail("guides-hub-grid introuvable dans " + L.indexPath);
  idx = idx.replace(/(<div class="guides-hub-grid">[\s\S]*?)(\n\s*<\/div>\s*<\/div>\s*<\/section>)/, `$1\n${card}$2`);
  idx = idx.split(`${oldCount} ${L.countPhrase}`).join(`${newCount} ${L.countPhrase}`);
  idx = idx.replace(new RegExp(`(<div class="hero-stat-num"><em>)${oldCount}(</em></div><div class="hero-stat-label">${L.countLabel})`), `$1${newCount}$2`);
  fs.writeFileSync(idxPath, idx);
  console.log(`✅ carte ${L.indexPath} (n°${num}, total ${newCount})`);
}
addCard(L_FR, art);
addCard(L_EN, artEn);

/* ── 6. Marque publié ── */
topic.published = true; topic.publishedAt = today();
fs.writeFileSync(path.join(ROOT, QUEUE_FILE), JSON.stringify(queue, null, 2));

/* ── 7. SEO ── */
console.log("🔄 seo-gen.js…");
execSync("node seo-gen.js", { cwd: ROOT, stdio: "inherit" });
console.log(`🎉 Publié FR + EN : ${art.title}`);
