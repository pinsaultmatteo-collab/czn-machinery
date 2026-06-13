// Reconstruit .axonaut-cache.json à partir des fiches produit FR existantes.
// Permet de lancer build.js sans la clé Axonaut (génération EN immédiate).
// Source de vérité = JSON-LD Product de chaque /produit/<ref>/index.html (visibles uniquement).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PRODUIT = path.join(ROOT, "produit");
const LABEL_TO_SLUG = { "Mini-pelle": "mini-pelles", "Mini-chargeur": "mini-chargeurs", "Mini-tombereau": "mini-tombereaux" };

function firstJsonLdProduct(html) {
  const re = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  let m;
  while ((m = re.exec(html))) {
    try {
      const j = JSON.parse(m[1]);
      if (j && j["@type"] === "Product") return j;
    } catch (e) {}
  }
  return null;
}
function parseTTC(html) {
  const m = html.match(/pdp-price-ttc">soit\s*([0-9\s  ]|&thinsp;)+/);
  if (!m) return null;
  const seg = html.slice(html.indexOf("pdp-price-ttc"));
  const mm = seg.match(/soit\s*([0-9  \s]|&thinsp;)+€\s*TTC/);
  if (!mm) return null;
  const digits = mm[0].replace(/&thinsp;/g, "").replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

const out = [];
for (const ref of fs.readdirSync(PRODUIT)) {
  const file = path.join(PRODUIT, ref, "index.html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const node = firstJsonLdProduct(html);
  if (!node) continue;
  const brand = node.brand && node.brand.name ? node.brand.name : null;
  if (brand && brand.toLowerCase() === "xcavator") continue; // masqué, comme build.js
  const pageSlug = LABEL_TO_SLUG[node.category] || null;
  if (!pageSlug) continue;
  const priceHT = node.offers && node.offers.price ? parseFloat(node.offers.price) : null;
  const inStock = node.offers ? /InStock/i.test(node.offers.availability || "") : null;
  out.push({
    id: node.sku, name: node.name, reference: node.sku, brand,
    pageSlug, priceHT: priceHT || null, priceTTC: parseTTC(html),
    vat: 20, inStock, image: null, disabled: false,
  });
}
out.sort((a, b) => a.reference.localeCompare(b.reference));
fs.writeFileSync(path.join(ROOT, ".axonaut-cache.json"), JSON.stringify(out, null, 2));
console.log("Cache écrit :", out.length, "produits ->", out.map((p) => p.reference).join(", "));
