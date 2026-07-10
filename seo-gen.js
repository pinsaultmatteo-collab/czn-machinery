// 📁 /seo-gen.js — Générateur SEO/LLM maison.
//
// Régénère, à partir des fichiers index.html du site :
//   • sitemap.xml          (toutes les URLs + priorités)
//   • llms.txt             (index pour les IA — descriptions soignées préservées)
//   • <page>/index.md      (version markdown de chaque page, pour les crawlers IA)
//   • llms-full.md         (tout le contenu FR en un seul markdown)
//
// À relancer après toute modif de contenu :  node seo-gen.js
// (typiquement juste après `node build.js`).

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ROOT = process.cwd();
const SITE = "https://czn-machinery.com";

/* ── 1. Lister les pages (index.html) ── */
function findPages(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".git" || e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) findPages(full, acc);
    else if (e.name === "index.html") acc.push(full);
  }
  return acc;
}
const urlOf = (file) => {
  const rel = path.relative(ROOT, path.dirname(file)).replace(/\\/g, "/");
  return rel === "" ? "/" : "/" + rel + "/";
};

/* ── 2. Métadonnées d'une page ── */
function readMeta(html) {
  const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const lang = (html.match(/<html lang="([^"]*)"/) || [])[1] || "fr";
  const title = decode(t.trim());
  const cleanTitle = title.replace(/\s*\|\s*CZN Machinery.*$/i, "").trim();          // sans suffixe marque
  const shortName = cleanTitle.split(/\s+[—–]\s+/)[0].trim();                          // avant le « — » (utile produits)
  return { title, cleanTitle, shortName, desc: decode(d.trim()), lang };
}

/* ── 3. HTML → Markdown (basique mais propre) ── */
function decode(s) {
  return String(s)
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n))      // entités numériques (&#8249; etc.)
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&thinsp;/g, " ").replace(/&hellip;/g, "…").replace(/&times;/g, "×").replace(/&euro;/g, "€")
    .replace(/[‹›]\s*/g, "");                                      // flèches de galerie résiduelles
}
const strip = (s) => decode(String(s).replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
function toMarkdown(html) {
  let b = (html.match(/<main[\s\S]*?<\/main>/i) || [])[0]
       || (html.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [])[1] || html;
  b = b.replace(/<script[\s\S]*?<\/script>/gi, "")
       .replace(/<style[\s\S]*?<\/style>/gi, "")
       .replace(/<svg[\s\S]*?<\/svg>/gi, "")
       .replace(/<nav[\s\S]*?<\/nav>/gi, "")
       .replace(/<header[\s\S]*?<\/header>/gi, "")
       .replace(/<footer[\s\S]*?<\/footer>/gi, "")
       .replace(/<div class="utility-bar"[\s\S]*?<\/script>/i, "");
  b = b.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, h, t) => { const x = strip(t); return x ? `[${x}](${h})` : ""; });
  b = b.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (m, t) => `\n\n# ${strip(t)}\n`);
  b = b.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (m, t) => `\n\n## ${strip(t)}\n`);
  b = b.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (m, t) => `\n\n### ${strip(t)}\n`);
  b = b.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (m, t) => `\n#### ${strip(t)}\n`);
  b = b.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (m, t) => `- ${strip(t)}\n`);
  b = b.replace(/<dt[^>]*>([\s\S]*?)<\/dt>/gi, (m, t) => `\n**${strip(t)}** : `);
  b = b.replace(/<\/(p|div|section|tr|dd|article)>/gi, "\n");
  b = b.replace(/<[^>]+>/g, " ");
  b = decode(b).replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  return b;
}

/* ── 4. Collecte ── */
const pages = findPages(ROOT)
  .map((f) => ({ file: f, url: urlOf(f), html: fs.readFileSync(f, "utf8") }))
  .map((p) => ({ ...p, ...readMeta(p.html) }))
  .sort((a, b) => a.url.localeCompare(b.url));

/* ── 5. sitemap.xml ── */
/* lastmod : date du dernier commit git de la page (signal de fraîcheur pour Google).
   Les fichiers modifiés/non commités renvoient la date du jour ; fallback = mtime. */
const TODAY = new Date().toISOString().slice(0, 10);
const DIRTY = (() => {
  try {
    return new Set(execSync("git status --porcelain", { encoding: "utf8" })
      .split("\n").map((l) => l.slice(3).trim()).filter(Boolean)
      .map((rel) => path.resolve(ROOT, rel)));
  } catch { return new Set(); }
})();
function lastmod(file) {
  if (DIRTY.has(path.resolve(file))) return TODAY;
  try {
    const d = execSync(`git log -1 --format=%cs -- "${path.relative(ROOT, file)}"`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }).trim();
    if (d) return d;
  } catch { /* fichier non suivi : on retombe sur mtime */ }
  try { return new Date(fs.statSync(file).mtime).toISOString().slice(0, 10); } catch { return TODAY; }
}
function priority(u) {
  if (u === "/") return "1.0";
  if (/^\/(mini-pelles|mini-chargeurs|mini-tombereaux|remorques|accessoires|autres-engins)\/$/.test(u)) return "0.9";
  if (/^\/produit\//.test(u)) return "0.8";
  if (u === "/guides/") return "0.7";
  if (/^\/guides\//.test(u)) return "0.6";
  if (/^\/(entreprise|contact|occasion)\b/.test(u)) return "0.7";
  if (/^\/en\//.test(u)) return "0.5";
  if (/(cgv|mentions-legales|politique|boutique)/.test(u)) return "0.3";
  return "0.5";
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  + pages.map((p) => `  <url><loc>${SITE}${p.url}</loc><lastmod>${lastmod(p.file)}</lastmod><priority>${priority(p.url)}</priority></url>`).join("\n")
  + `\n</urlset>\n`;
fs.writeFileSync("sitemap.xml", sitemap);

/* ── 6. llms.txt (descriptions soignées préservées par URL) ── */
const oldLlms = fs.existsSync("llms.txt") ? fs.readFileSync("llms.txt", "utf8") : "# CZN Machinery\n";
const intro = oldLlms.split(/\n## /)[0].trimEnd();                       // tout avant la 1re section
const curated = {};                                                      // url -> description soignée existante
for (const m of oldLlms.matchAll(/^- \[[^\]]*\]\((https?:\/\/[^)]+)\)(?::\s*(.*))?$/gm)) {
  const u = m[1].replace(SITE, ""); if (m[2]) curated[u] = m[2].trim();
}
const fr = pages.filter((p) => !p.url.startsWith("/en/"));
const desc = (p) => curated[p.url] || p.desc;
const isGamme = (u) => /^\/(mini-pelles|mini-chargeurs|mini-tombereaux|remorques|accessoires|occasion|boutique)\/$/.test(u);
const isProduit = (u) => /^\/produit\//.test(u);
const isGuide = (u) => /^\/guides\/.+/.test(u);
const isEnt = (u) => ["/", "/entreprise/", "/entreprise/financement/", "/contact/", "/guides/"].includes(u);
const isOpt = (u) => /(cgv|mentions-legales|politique)/.test(u);
const lineFull = (p) => `- [${p.cleanTitle}](${SITE}${p.url})${desc(p) ? ": " + desc(p) : ""}`;
const lineProd = (p) => `- [${p.shortName}](${SITE}${p.url})`;
const section = (title, list, fn) => (list.length ? `## ${title}\n` + list.map(fn).join("\n") + "\n" : "");
let llms = intro + "\n\n"
  + section("Gammes", fr.filter((p) => isGamme(p.url)), lineFull) + "\n"
  + section("Produits", fr.filter((p) => isProduit(p.url)), lineProd) + "\n"
  + section("Guides", fr.filter((p) => isGuide(p.url)), lineFull) + "\n"
  + section("Entreprise", fr.filter((p) => isEnt(p.url)), lineFull) + "\n"
  + section("Optional",
      fr.filter((p) => isOpt(p.url)).concat([{ cleanTitle: "CZN Machinery (English)", url: "/en/", desc: "English version of the website" }]),
      lineFull);
fs.writeFileSync("llms.txt", llms.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");

/* ── 7. <page>/index.md + llms-full.md ── */
const full = [];
for (const p of pages) {
  const md = `# ${p.cleanTitle}\n\n${p.desc ? "> " + p.desc + "\n\n" : ""}${toMarkdown(p.html)}\n`;
  fs.writeFileSync(path.join(path.dirname(p.file), "index.md"), md);
  if (!p.url.startsWith("/en/")) full.push(`<!-- ${p.url} -->\n\n` + md);
}
fs.writeFileSync("llms-full.md", full.join("\n\n---\n\n"));

console.log(`✓ seo-gen : ${pages.length} pages → sitemap.xml + llms.txt + ${pages.length} index.md + llms-full.md`);
