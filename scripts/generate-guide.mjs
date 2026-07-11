// 📁 scripts/generate-guide.mjs
// Publie automatiquement UN guide SEO (FR) sur la page /guides/.
// Lancé par le workflow GitHub Actions "weekly-guide" (mardi 9h Paris) ou en manuel.
//
//   node scripts/generate-guide.mjs
//
// Nécessite la variable d'environnement ANTHROPIC_API_KEY (GitHub Secret — jamais commitée).
// - Prend le 1er sujet non publié de scripts/guides-queue.json
// - Rédige l'article via l'API Claude (claude-opus-4-8, sortie structurée JSON)
// - Assemble le HTML à partir d'un guide existant (chrome identique au site : nav, footer, pixels…)
// - Écrit guides/<slug>/index.html, ajoute la carte sur guides/index.html, marque le sujet publié
// - Régénère sitemap.xml / llms.txt / index.md via seo-gen.js
//
// Le commit + push est fait par le workflow (pas par ce script).

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const SITE = "https://czn-machinery.com";
const MODEL = "claude-opus-4-8";
const REFERENCE_GUIDE = "guides/utilisation-mini-pelle/index.html"; // gabarit (chrome à jour ; slug absent du footer → remplacement global sûr)
const QUEUE_FILE = "scripts/guides-queue.json";

const CATEGORIES = ["Fondamentaux", "Achat", "Usages", "Entretien", "Réglementation", "Comparatifs", "Occasion", "Location"];

// Liens internes autorisés (le modèle doit uniquement pointer vers ces pages réelles)
const GUIDE_SLUGS = fs.readdirSync(path.join(ROOT, "guides"), { withFileTypes: true })
  .filter((e) => e.isDirectory()).map((e) => e.name);
const ALLOWED_LINKS = [
  "/", "/mini-pelles/", "/mini-chargeurs/", "/mini-tombereaux/", "/remorques/",
  "/autres-engins/", "/accessoires/", "/occasion/", "/entreprise/",
  "/entreprise/financement/", "/contact/",
  ...GUIDE_SLUGS.map((s) => `/guides/${s}/`),
];
const ALLOWED_PREFIXES = ["/produit/"]; // fiches produits acceptées par préfixe

// Images du site utilisables pour illustrer (facultatif, 1 max)
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

function fail(msg) { console.error("❌ " + msg); process.exit(1); }

/* ── 1. Sujet suivant ── */
const queue = JSON.parse(fs.readFileSync(path.join(ROOT, QUEUE_FILE), "utf8"));
const topic = (queue.topics || []).find((t) => t.published !== true);
if (!topic) { console.log("ℹ️ File de sujets épuisée — rien à publier. Ajoute des sujets dans " + QUEUE_FILE + "."); process.exit(0); }
const slug = topic.slug;
if (fs.existsSync(path.join(ROOT, "guides", slug, "index.html"))) {
  console.log(`ℹ️ Le guide /guides/${slug}/ existe déjà — marqué publié, on passe.`);
  topic.published = true; topic.publishedAt = today();
  fs.writeFileSync(path.join(ROOT, QUEUE_FILE), JSON.stringify(queue, null, 2));
  process.exit(0);
}
console.log(`📝 Sujet : ${topic.workingTitle} (/guides/${slug}/)`);

/* ── 2. Rédaction via l'API Claude ── */
const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) fail("ANTHROPIC_API_KEY manquante (à définir dans les GitHub Secrets).");

const SCHEMA = {
  type: "object", additionalProperties: false,
  properties: {
    title: { type: "string" },
    metaDescription: { type: "string" },
    category: { type: "string", enum: CATEGORIES },
    lede: { type: "string" },
    readingTime: { type: "integer" },
    heroImage: { type: "string" },
    toc: { type: "array", items: { type: "object", additionalProperties: false, properties: { id: { type: "string" }, label: { type: "string" } }, required: ["id", "label"] } },
    bodyHtml: { type: "string" },
    related: { type: "array", items: { type: "object", additionalProperties: false, properties: { href: { type: "string" }, cat: { type: "string" }, title: { type: "string" }, desc: { type: "string" } }, required: ["href", "cat", "title", "desc"] } },
  },
  required: ["title", "metaDescription", "category", "lede", "readingTime", "heroImage", "toc", "bodyHtml", "related"],
};

const SYSTEM = `Tu es rédacteur SEO senior pour CZN Machinery, importateur direct d'engins de chantier compacts basé à Toulouse (France), en activité depuis 2019.

CONTEXTE CZN (à mettre en avant, sans en faire une publicité lourde) :
- Gamme : mini-pelles (dès 4 125 € HT), mini-chargeurs, mini-tombereaux (dumpers), remorques porte-engin (1,5 T et 2,7 T), broyeur forestier radiocommandé et concasseur à mâchoires (catégorie « Autres engins »), accessoires.
- Marques : Sonca, Xcavator. Moteurs Laidong de série (Kubota sur commande).
- Atouts : importation en direct (prix compétitifs), garantie 2 ans (24 mois), livraison partout en France, SAV France, financement Sofinco, showroom Toulouse, +5 500 clients équipés.
- Occasion : machines révisées 50 points, garanties 6 mois.

OBJECTIF : article de blog optimisé SEO qui capte du trafic sur le mot-clé cible, apporte une vraie valeur au lecteur, et redirige naturellement vers les pages du site CZN.

RÈGLES STRICTES :
- Langue : français, ton factuel et pédagogique, "0 langage commercial" agressif.
- N'INVENTE JAMAIS de chiffres précis (prix, specs techniques) autres que ceux fournis ci-dessus. Le seul prix de départ à citer est « dès 4 125 € HT » pour les mini-pelles neuves. Pour les fourchettes de marché (prix d'occasion, coûts de location…), reste en fourchettes prudentes et générales.
- Longueur : 1 200 à 1 800 mots.
- Maille interne : insère 3 à 6 liens internes vers des pages CZN, UNIQUEMENT depuis cette liste autorisée : ${ALLOWED_LINKS.join(", ")} (les fiches produits /produit/... sont aussi autorisées). Un CTA vers /contact/ ou une page catégorie est bienvenu.
- bodyHtml : HTML du CORPS de l'article uniquement (ce qui va dans <article class="article-body">). Balises autorisées : <p>, <h2 id="...">, <h3>, <ul>/<li>, <ol>/<li>, <strong>, <a href="...">, et pour les tableaux <div class="table-wrap"><table><thead>…</thead><tbody>…</tbody></table></div>. Tu PEUX inclure un bloc CTA : <div class="article-inline-cta"><div class="article-inline-cta-text"><h4>Titre</h4><p>phrase</p></div><a href="/xxx/">Libellé →</a></div>. N'inclus PAS de <h1>, <html>, <head>, <script>, <style>, ni d'attributs on*.
- Chaque <h2> doit avoir un id="slug-court" en minuscules sans accents, et le tableau "toc" doit lister exactement ces {id,label} dans l'ordre.
- "related" : 3 guides connexes existants, href pris dans la liste /guides/... autorisée (pas la page en cours), cat = leur rubrique, title et desc courts.
- title : accrocheur, < 60 caractères si possible (le suffixe " | CZN Machinery" est ajouté automatiquement, ne l'inclus pas).
- metaDescription : 150-160 caractères, contient le mot-clé.
- heroImage : facultatif — si une image de la liste illustre bien le sujet, mets son chemin exact, sinon chaîne vide. Images dispo : ${ALLOWED_IMAGES.map((i) => i.src).join(", ")}.`;

const USER = `Rédige le guide.
Titre de travail : ${topic.workingTitle}
Rubrique imposée : ${topic.category}
Mot-clé cible : ${topic.focusKeyword}
Angle / brief : ${topic.brief}

Réponds uniquement via le format JSON demandé.`;

console.log("🤖 Appel API Claude…");
const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "content-type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
  body: JSON.stringify({
    model: MODEL, max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { format: { type: "json_schema", schema: SCHEMA } },
    system: SYSTEM,
    messages: [{ role: "user", content: USER }],
  }),
});
if (!res.ok) fail(`API HTTP ${res.status} : ${await res.text()}`);
const data = await res.json();
if (data.stop_reason === "refusal") fail("Réponse refusée par le modèle (stop_reason=refusal).");
const textBlock = (data.content || []).find((b) => b.type === "text");
if (!textBlock) fail("Pas de bloc texte dans la réponse.");
let art;
try { art = JSON.parse(textBlock.text); } catch (e) { fail("JSON invalide : " + e.message + "\n" + textBlock.text.slice(0, 500)); }

/* ── 3. Validations ── */
if (!art.title || !art.bodyHtml || art.bodyHtml.length < 800) fail("Contenu généré trop court ou incomplet.");
if (!CATEGORIES.includes(art.category)) art.category = topic.category;
if (!Array.isArray(art.toc) || !art.toc.length) fail("Sommaire (toc) manquant.");
if (!Array.isArray(art.related) || art.related.length < 3) fail("Guides associés (related) manquants.");
const readingTime = Number.isInteger(art.readingTime) && art.readingTime > 0 ? art.readingTime : 8;

// Neutralise les liens internes hors allow-list (on déballe le <a> plutôt que de casser)
const allowedSet = new Set(ALLOWED_LINKS);
art.bodyHtml = art.bodyHtml.replace(/<a\s+href="(\/[^"#]*?)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => {
  const clean = href.endsWith("/") ? href : href + "/";
  if (allowedSet.has(clean) || ALLOWED_PREFIXES.some((p) => href.startsWith(p))) return `<a href="${clean}">${inner}</a>`;
  console.warn("⚠️ lien interne non autorisé retiré : " + href);
  return inner;
});
// Filtre le related sur les guides existants
art.related = art.related.filter((r) => /^\/guides\/[a-z0-9-]+\/$/.test(r.href) && r.href !== `/guides/${slug}/` && GUIDE_SLUGS.includes(r.href.split("/")[2])).slice(0, 3);
if (art.related.length < 3) fail("Moins de 3 guides associés valides après filtrage.");

const heroImg = (art.heroImage && ALLOWED_IMAGES.some((i) => i.src === art.heroImage)) ? art.heroImage : "";
const heroAlt = heroImg ? (ALLOWED_IMAGES.find((i) => i.src === heroImg)?.alt || art.title) : "";

/* ── 4. Assemblage HTML depuis le gabarit ── */
let html = fs.readFileSync(path.join(ROOT, REFERENCE_GUIDE), "utf8");
const refSlug = "utilisation-mini-pelle";
// remplace le slug du gabarit partout (canonical, og:url, barre utilitaire, breadcrumb JSON…)
html = html.split(refSlug).join(slug);
// FR-only : pas de miroir EN — la barre langue EN pointe vers l'accueil EN, on retire d'éventuels hreflang alternates
html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, "");
html = html.replace(/(<a href=")\/en\/guides\/[^"]*(" class="lang")/g, "$1/en/$2");

const fullTitle = `${art.title} | CZN Machinery`;
html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`);
html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(art.metaDescription)}">`);
html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(fullTitle)}">`);
html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(art.metaDescription)}">`);

// JSON-LD (Breadcrumb + Article)
const url = `${SITE}/guides/${slug}/`;
const jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides/` },
      { "@type": "ListItem", position: 3, name: art.title, item: url },
    ] },
    { "@type": "Article", headline: art.title, description: art.metaDescription, articleSection: art.category,
      inLanguage: "fr-FR", datePublished: today(), dateModified: today(),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "CZN Machinery", url: `${SITE}/` },
      publisher: { "@type": "Organization", name: "CZN Machinery", url: `${SITE}/`, logo: { "@type": "ImageObject", url: `${SITE}/images/czn-machinery-logo-small.webp` } },
      ...(heroImg ? { image: SITE + heroImg } : {}) },
  ],
};
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`);

// Hero
const heroHtml = `<section class="article-hero">
  <div class="container">
    <div class="breadcrumb"><a href="/">Accueil</a><span class="bc-sep">/</span><a href="/guides/">Guides</a><span class="bc-sep">/</span><span aria-current="page">${esc(art.category)}</span></div>
    <span class="article-cat">${esc(art.category)}</span>
    <h1 class="article-title">${esc(art.title)}</h1>
    <p class="article-lede">${esc(art.lede)}</p>
    <div class="article-meta">
      <span>⏱ ${readingTime} min de lecture</span>
      <span>✓ Conseils CZN Machinery</span>
      <span>↻ Mis à jour ${new Date().getFullYear()}</span>
    </div>
  </div>
</section>`;
html = html.replace(/<section class="article-hero">[\s\S]*?<\/section>/, heroHtml);

// Corps
const heroImgHtml = heroImg ? `<img src="${heroImg}" alt="${esc(heroAlt)}" loading="eager" style="width:100%;height:auto;border-radius:14px;margin:0 0 26px;display:block;">\n` : "";
html = html.replace(/(<article class="article-body">)[\s\S]*?(<\/article>)/, `$1\n${heroImgHtml}${art.bodyHtml}\n      $2`);

// Sommaire
const tocLis = art.toc.map((t) => `        <li><a href="#${esc(t.id)}">${esc(t.label)}</a></li>`).join("\n");
const tocHtml = `<aside class="article-toc">
        <div class="article-toc-title">Sommaire</div>
        <ul>
${tocLis}
        </ul>
      </aside>`;
html = html.replace(/<aside class="article-toc">[\s\S]*?<\/aside>/, tocHtml);

// Section "À lire aussi"
const relCards = art.related.map((r) => `      <a href="${esc(r.href)}" class="related-card">
        <span class="related-card-cat">${esc(r.cat)}</span>
        <span class="related-card-title">${esc(r.title)}</span>
        <span class="related-card-desc">${esc(r.desc)}</span>
      </a>`).join("\n");
const relHtml = `<section class="sec-paper" style="padding: 72px 0;">
  <div class="container">
    <div class="inner-header reveal">
      <div class="eyebrow">À lire aussi</div>
      <h2 class="section-title">Articles <em>associés</em>.</h2>
    </div>
    <div class="related-guides">
${relCards}
    </div>
  </div>
</section>`;
html = html.replace(/<section class="sec-paper"[\s\S]*?<\/section>/, relHtml);

// Écrit le guide
const dir = path.join(ROOT, "guides", slug);
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "index.html"), html);
console.log(`✅ Guide écrit : guides/${slug}/index.html`);

/* ── 5. Carte sur la page /guides/ + compteurs ── */
const idxPath = path.join(ROOT, "guides", "index.html");
let idx = fs.readFileSync(idxPath, "utf8");
const oldCount = (idx.match(/class="guide-item /g) || []).length;
const newCount = oldCount + 1;
const num = String(newCount).padStart(2, "0");
const card = `      <a href="/guides/${slug}/" class="guide-item reveal">
        <div class="guide-item-head"><span class="guide-item-num">${num}</span><span class="guide-item-cat">${esc(art.category)}</span></div>
        <h3 class="guide-item-title">${esc(art.title)}</h3>
        <p class="guide-item-desc">${esc(art.metaDescription)}</p>
        <span class="guide-item-link">Lire le guide →</span>
      </a>`;
if (!/<div class="guides-hub-grid">/.test(idx)) fail("Grille guides-hub-grid introuvable dans guides/index.html.");
idx = idx.replace(/(<div class="guides-hub-grid">[\s\S]*?)(\n\s*<\/div>\s*<\/div>\s*<\/section>)/, `$1\n${card}$2`);
// compteurs "N guides pratiques" + hero-stat
idx = idx.split(`${oldCount} guides pratiques`).join(`${newCount} guides pratiques`);
idx = idx.replace(new RegExp(`(<div class="hero-stat-num"><em>)${oldCount}(</em></div><div class="hero-stat-label">Guides pratiques)`), `$1${newCount}$2`);
fs.writeFileSync(idxPath, idx);
console.log(`✅ Carte ajoutée sur /guides/ (n°${num}, total ${newCount}).`);

/* ── 6. Marque le sujet publié ── */
topic.published = true; topic.publishedAt = today();
fs.writeFileSync(path.join(ROOT, QUEUE_FILE), JSON.stringify(queue, null, 2));

/* ── 7. Régénère les fichiers SEO ── */
console.log("🔄 seo-gen.js…");
execSync("node seo-gen.js", { cwd: ROOT, stdio: "inherit" });

console.log(`🎉 Terminé : ${art.title}`);
