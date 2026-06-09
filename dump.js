// node dump.js  (avec AXONAUT_API_KEY exportée)
// Affiche les produits Axonaut qui vont apparaître sur le site + leur routage.
const BASE = "https://axonaut.com/api/v2";
const KEY = process.env.AXONAUT_API_KEY;

function catSlug(c) {
  c = (c || "").toLowerCase();
  if (c.includes("pelle")) return "mini-pelles";
  if (c.includes("chargeur")) return "mini-chargeurs";
  if (c.includes("tombereau") || c.includes("dumper")) return "mini-tombereaux";
  return null;
}
function brand(n) {
  n = (n || "").toUpperCase();
  if (n.includes("SONCA")) return "Sonca";
  if (n.includes("XCAVATOR")) return "Xcavator";
  if (n.includes("LEITE")) return "Leite";
  return "?";
}

(async () => {
  if (!KEY) { console.error("⚠ AXONAUT_API_KEY manquante — fais : export AXONAUT_API_KEY='ta_cle'"); process.exit(1); }
  let all = [];
  for (let p = 1; p <= 30; p++) {
    const r = await fetch(BASE + "/products", { headers: { userApiKey: KEY, Accept: "application/json", page: String(p) } });
    if (!r.ok) { console.error("Axonaut " + r.status + " (page " + p + ")"); process.exit(1); }
    const b = await r.json();
    const items = Array.isArray(b) ? b : (b.data || b.results || []);
    if (!items.length) break;
    all = all.concat(items);
    if (items.length < 500) break;
  }

  const routed = [];
  for (const x of all) {
    const page = catSlug(x.category);
    if (!page) continue;
    routed.push({
      page, brand: brand(x.name),
      ref: x.product_code || String(x.id),
      ht: x.price, name: x.name || "", img: x.image ? "oui" : "non",
    });
  }
  routed.sort((a, b) => (a.page + a.brand + a.name).localeCompare(b.page + b.brand + b.name));

  console.log("\n=== PRODUITS QUI VONT APPARAÎTRE SUR LE SITE (" + routed.length + ") ===\n");
  for (const x of routed)
    console.log([x.page.padEnd(15), x.brand.padEnd(9), String(x.ref).padEnd(16), (String(x.ht) + "€").padEnd(9), "photo:" + x.img, "| " + x.name].join(" "));

  const byPage = routed.reduce((m, x) => (m[x.page] = (m[x.page] || 0) + 1, m), {});
  console.log("\n=== Récap : " + JSON.stringify(byPage) + " ===");
  console.log("=== Total Axonaut : " + all.length + " produits (le reste = SAV/pièces sans catégorie, non affiché) ===\n");
})();
