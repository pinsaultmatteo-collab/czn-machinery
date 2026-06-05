// 📁 Destination : /build.js (à la racine du repo, à côté de index.html)
//
// Régénère les cartes produit + le JSON-LD des pages catalogue À PARTIR D'AXONAUT,
// directement dans le HTML (entre des marqueurs). Donc le HTML servi contient
// toujours les vraies machines → lisible par Google ET les crawlers IA, sans JS.
//
// Lancé : - en local pour tester :   AXONAUT_API_KEY=xxx node build.js
//         - automatiquement chaque jour par GitHub Actions (voir le workflow).
//
// Idempotent : si Axonaut n'a pas changé, le HTML régénéré est identique
// (aucun commit créé par le cron).

const fs = require("fs");
const path = require("path");

const AXONAUT_BASE = "https://axonaut.com/api/v2";

// Mêmes préfixes que /api/products.js — garder les deux synchronisés.
const PREFIX_MAP = [
  { prefix: "SMP",  slug: "mini-pelles",     brand: "Sonca" },
  { prefix: "X-MP", slug: "mini-pelles",     brand: "Xcavator" },
  // { prefix: "SMC",  slug: "mini-chargeurs",  brand: "Sonca" },
  // { prefix: "X-MC", slug: "mini-chargeurs",  brand: "Xcavator" },
  // { prefix: "SMT",  slug: "mini-tombereaux", brand: "Sonca" },
  // { prefix: "ACC",  slug: "accessoires",     brand: null },
];

// Quelles pages régénérer (fichier ↔ catégorie). On ajoutera les autres ici.
const PAGES = [
  { file: "mini-pelles/index.html", category: "mini-pelles", label: "Mini-pelle" },
];

function classify(code) {
  const c = (code || "").toString().trim().toUpperCase();
  if (!c) return null;
  const rules = [...PREFIX_MAP].sort((a, b) => b.prefix.length - a.prefix.length);
  for (const r of rules) if (c.startsWith(r.prefix.toUpperCase())) return r;
  return null;
}

async function fetchAllProducts(apiKey) {
  const all = [];
  for (let page = 1; page <= 30; page++) {
    const res = await fetch(`${AXONAUT_BASE}/products`, {
      headers: { userApiKey: apiKey, Accept: "application/json", page: String(page) },
    });
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
  const cls = classify(p.product_code);
  const stock = toNum(p.stock);
  return {
    id: p.id,
    name: p.name || "",
    reference: p.product_code || String(p.id),
    brand: cls ? cls.brand : null,
    pageSlug: cls ? cls.slug : null,
    priceHT: toNum(p.price),
    inStock: stock == null ? null : stock > 0,
    image: p.image || null,
    disabled: !!p.disabled,
  };
}

// "SONCA MINI PELLE SJW-06" → "Mini-pelle SJW-06"
function cleanName(name, brand) {
  let n = (name || "").trim();
  if (brand) n = n.replace(new RegExp("^" + brand + "\\s+", "i"), "");
  n = n.replace(/mini\s*-?\s*pelle/i, "Mini-pelle");
  return n.trim();
}

function euro(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "&thinsp;");
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function cardHTML(p) {
  const tag = p.inStock
    ? '<span class="product-tag stock">En stock</span>'
    : '<span class="product-tag">Sur commande</span>';
  const img = p.image
    ? '<img class="product-photo" src="' + esc(p.image) + '" alt="' + esc(cleanName(p.name, p.brand)) + '" loading="lazy">'
    : "";
  const price = (p.priceHT && p.priceHT > 0)
    ? '<span class="price-label">À partir de</span>\n              <span class="price-val">' + euro(p.priceHT) + '<span class="currency">€</span></span>\n              <span class="price-suffix">HT · hors livraison</span>'
    : '<span class="price-label">Prix</span>\n              <span class="price-val" style="font-size:22px;">Sur devis</span>';
  const ref = encodeURIComponent(p.reference);
  return [
    '      <article class="product-card" data-brand="' + esc(p.brand || "") + '">',
    '        <div class="product-img">' + tag + img + "</div>",
    '        <div class="product-info">',
    '          <div class="product-brand">' + esc(p.brand || "CZN") + "</div>",
    '          <h3 class="product-name">' + esc(cleanName(p.name, p.brand)) + "</h3>",
    '          <div class="product-footer">',
    '            <div class="product-price">',
    "              " + price,
    "            </div>",
    '            <a href="/produit/' + ref + '/" class="product-cta" aria-label="Voir la fiche produit">',
    '              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    "            </a>",
    "          </div>",
    "        </div>",
    "      </article>",
  ].join("\n");
}

function jsonLd(products, label) {
  const items = products.map((p, i) => ({
    "@type": "ListItem", position: i + 1,
    item: {
      "@type": "Product",
      name: cleanName(p.name, p.brand),
      sku: p.reference,
      brand: { "@type": "Brand", name: p.brand || "CZN" },
      category: label,
      offers: {
        "@type": "Offer",
        price: String(p.priceHT || 0),
        priceCurrency: "EUR",
        availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        url: "https://czn-machinery.com/produit/" + encodeURIComponent(p.reference) + "/",
      },
    },
  }));
  const obj = { "@context": "https://schema.org", "@type": "ItemList", name: label + "s CZN Machinery", itemListElement: items };
  return '<script type="application/ld+json">\n' + JSON.stringify(obj) + "\n</" + "script>";
}

function replaceBetween(content, start, end, inner) {
  const s = content.indexOf(start);
  const e = content.indexOf(end);
  if (s === -1 || e === -1) throw new Error("Marqueurs introuvables (" + start + " / " + end + ")");
  return content.slice(0, s + start.length) + "\n" + inner + "\n" + content.slice(e);
}

(async () => {
  const apiKey = process.env.AXONAUT_API_KEY;
  if (!apiKey) { console.error("❌ AXONAUT_API_KEY manquante"); process.exit(1); }

  const raw = await fetchAllProducts(apiKey);
  const all = raw.map(normalize).filter((p) => p.pageSlug && !p.disabled);

  for (const page of PAGES) {
    const list = all
      .filter((p) => p.pageSlug === page.category)
      .sort((a, b) => (a.priceHT || 0) - (b.priceHT || 0));

    const file = path.join(process.cwd(), page.file);
    let html = fs.readFileSync(file, "utf8");
    html = replaceBetween(html, "<!-- PRODUCTS:START -->", "<!-- PRODUCTS:END -->", list.map(cardHTML).join("\n"));
    html = replaceBetween(html, "<!-- JSONLD:START -->", "<!-- JSONLD:END -->", jsonLd(list, page.label));
    fs.writeFileSync(file, html);
    console.log("✓ " + page.file + " : " + list.length + " produits");
  }
})().catch((e) => { console.error(e); process.exit(1); });
