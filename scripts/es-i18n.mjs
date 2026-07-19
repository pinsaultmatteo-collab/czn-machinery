#!/usr/bin/env node
// 📁 /scripts/es-i18n.mjs
// Outillage i18n pour la 3e langue (ES). Deux rôles, purement MÉCANIQUES (aucune traduction) :
//   1. scaffoldEs(file)  : crée la copie /es/<file> depuis la page FR (lang, canonical, og, hreflang,
//                          préfixe /es/ sur les liens internes de PAGES, sélecteur 3 langues ES actif).
//                          => le texte reste EN FRANÇAIS ; la traduction est faite ensuite (agents).
//   2. patchOriginal(f,l): met à jour une page FR ou EN existante -> sélecteur 3 langues (page-spécifique)
//                          + bloc hreflang (fr / en / es-ES / x-default).
// Usage : node scripts/es-i18n.mjs <fichier-FR>       (traite 1 page : scaffold ES + patch FR + patch EN)
//         node scripts/es-i18n.mjs --all              (toutes les pages « à la main »)
//         node scripts/es-i18n.mjs --list             (affiche la liste des pages traitées)

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE = "https://czn-machinery.com";

const FLAG_FR = `<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#0055A4"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>`;
const FLAG_EN = `<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><clipPath id="ukc"><rect width="60" height="30"/></clipPath><clipPath id="uks"><path d="M30 15 60 0v0h-4L30 12.5zM30 15 0 30h4L30 17.5zM30 15 0 0h4L30 12.5zM30 15 60 30h-4L30 17.5z"/></clipPath><g clip-path="url(#ukc)"><rect width="60" height="30" fill="#012169"/><path d="M0 0 60 30M60 0 0 30" stroke="#fff" stroke-width="6"/><path d="M0 0 60 30M60 0 0 30" clip-path="url(#uks)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>`;
const FLAG_ES = `<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#AA151B"/><rect y=".5" width="3" height="1" fill="#F1BF00"/></svg>`;

// ── liste des pages FR « à la main » (celles qui portent un sélecteur util-langs, hors /en, /es, /produit, /boutique)
function handFiles() {
  const out = [];
  const skipTop = new Set(["en", "es", "produit", "boutique", "node_modules", ".git", ".github", "images", "api", "downloads", "scripts", ".vercel", ".claude"]);
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const rel = path.relative(ROOT, full);
      const top = rel.split(path.sep)[0];
      if (skipTop.has(top)) continue;
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full);
      else if (name === "index.html") {
        const html = fs.readFileSync(full, "utf8");
        // pages « à la main » : celles avec le sélecteur de langue OU les coques catégorie (marqueurs PRODUCTS)
        if (html.includes('class="util-langs"') || html.includes("<!-- PRODUCTS:START -->")) out.push(rel);
      }
    }
  }
  walk(ROOT);
  return out.sort();
}

// chemin d'URL FR d'un fichier : index.html -> "/", "guides/x/index.html" -> "/guides/x/"
function frPathOf(relFile) {
  let p = "/" + relFile.replace(/index\.html$/, "");
  if (!p.endsWith("/")) p += "/";
  return p.replace(/\/{2,}/g, "/");
}

const isAsset = (p) =>
  /^\/(images|downloads)\//.test(p) ||
  /^\/(favicon|apple-touch-icon)/.test(p) ||
  /\.(css|js|webp|png|jpe?g|svg|ico|woff2?|xml|txt|pdf|mp4|webm|json)(\?|#|$)/i.test(p);

// préfixe /es sur les liens internes de PAGES (root-relative + absolus czn-machinery.com), en épargnant les assets
function prefixEs(html) {
  html = html.replace(/href="(\/[^"]*)"/g, (m, p) => {
    if (p.startsWith("/es/") || p.startsWith("/en/") || isAsset(p)) return m;
    const np = p === "/" ? "/es/" : "/es" + p;
    return `href="${np}"`;
  });
  html = html.replace(/https:\/\/czn-machinery\.com\/(?!es\/|en\/|images\/|downloads\/)([^"'\s)]*)/g, (m, rest) => {
    if (/\.(webp|png|jpe?g|svg|ico|css|js|woff2?|pdf|mp4|webm|xml|txt|json)(\?|#|$)/i.test(rest)) return m;
    return `${SITE}/es/${rest}`;
  });
  return html;
}

function switcherHTML(active, frPath) {
  const hrefs = { fr: frPath, en: "/en" + frPath, es: "/es" + frPath };
  const a = (lang, flag, label, txt) =>
    `<a href="${hrefs[lang]}" class="lang${active === lang ? " active" : ""}" hreflang="${lang === "es" ? "es-ES" : lang}" aria-label="${label}">${flag}<span>${txt}</span></a>`;
  return `<span class="util-langs">${a("fr", FLAG_FR, "Français", "FR")}${a("en", FLAG_EN, "English", "EN")}${a("es", FLAG_ES, "Español", "ES")}</span>`;
}
const SWITCHER_RE = /<span class="util-langs">\s*(?:<a\b[\s\S]*?<\/a>\s*)+<\/span>/;

function replaceSwitcher(html, active, frPath) {
  // Les coques catégorie n'ont pas de sélecteur : on n'en ajoute pas (on reste iso FR/EN), on saute.
  if (!SWITCHER_RE.test(html)) return html;
  return html.replace(SWITCHER_RE, switcherHTML(active, frPath));
}

function hreflangBlock(frPath) {
  return (
    `<link rel="alternate" hreflang="fr" href="${SITE}${frPath}">` +
    `<link rel="alternate" hreflang="en" href="${SITE}/en${frPath}">` +
    `<link rel="alternate" hreflang="es-ES" href="${SITE}/es${frPath}">` +
    `<link rel="alternate" hreflang="x-default" href="${SITE}${frPath}">`
  );
}
function setHreflang(html, frPath) {
  html = html.replace(/[ \t]*<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?/g, "");
  return html.replace(/(<link rel="canonical" href="[^"]*">)/, `$1\n${hreflangBlock(frPath)}`);
}

// ── crée la copie ES (mécanique, texte encore FR)
function scaffoldEs(relFile) {
  const frPath = frPathOf(relFile);
  let html = fs.readFileSync(path.join(ROOT, relFile), "utf8");
  html = html.replace(/<html lang="fr">/, '<html lang="es">');
  html = html.replace(/content="fr_FR"/g, 'content="es_ES"');
  html = html.replace(/"inLanguage":\s*"fr-FR"/g, '"inLanguage": "es-ES"');
  html = prefixEs(html);                       // canonical/og/JSON-LD/liens -> /es/
  html = setHreflang(html, frPath);            // bloc hreflang propre (URLs explicites, non re-préfixées)
  html = replaceSwitcher(html, "es", frPath);  // sélecteur 3 langues, ES actif
  const out = path.join(ROOT, "es", relFile);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return "es/" + relFile;
}

// ── met à jour une page FR ou EN existante (sélecteur 3 langues + hreflang)
function patchOriginal(relFile, lang) {
  const abs = path.join(ROOT, relFile);
  if (!fs.existsSync(abs)) return null;
  const frPath = frPathOf(lang === "en" ? relFile.replace(/^en\//, "") : relFile);
  let html = fs.readFileSync(abs, "utf8");
  html = setHreflang(html, frPath);
  html = replaceSwitcher(html, lang, frPath);
  fs.writeFileSync(abs, html);
  return relFile;
}

function processOne(relFile) {
  const done = [];
  done.push(scaffoldEs(relFile));
  done.push(patchOriginal(relFile, "fr"));
  const en = patchOriginal("en/" + relFile, "en");
  if (en) done.push(en);
  return done.filter(Boolean);
}

// ── CLI
const arg = process.argv[2];
if (arg === "--list") {
  console.log(handFiles().join("\n"));
} else if (arg === "--all") {
  const files = handFiles();
  let n = 0;
  for (const f of files) { const d = processOne(f); n++; console.log(`✓ [${n}/${files.length}] ${f}  ->  ${d.length} fichiers`); }
  console.log(`Terminé : ${files.length} pages FR traitées (scaffold ES + patch FR/EN).`);
} else if (arg) {
  console.log(processOne(arg).join("\n"));
} else {
  console.error("usage: node scripts/es-i18n.mjs <file|--all|--list>");
  process.exit(1);
}
