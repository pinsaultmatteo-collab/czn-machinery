// 📁 Destination dans ton repo : /api/products.js
//
// Vercel transforme automatiquement tout fichier de /api/ en fonction serverless,
// même sur un site 100 % statique — aucun framework requis.
//
// Rôle : lire le catalogue Axonaut côté serveur (la clé API n'est JAMAIS exposée
// au navigateur), normaliser les produits, et les ranger par catégorie de site.
//
// ⚠️ AVANT TOUT : ajoute la variable d'environnement dans Vercel
//    Settings → Environment Variables → AXONAUT_API_KEY = ta_clé
//    (Ne me la colle jamais ici. Elle ne doit vivre que dans Vercel.)
//
// Utilisation une fois déployé :
//   /api/products                    → tous les produits, normalisés et rangés
//   /api/products?category=mini-pelles → filtré sur une catégorie de site
//   /api/products?debug=1            → DÉCOUVERTE : te montre la vraie structure
//                                      Axonaut + la liste de tes noms de catégories
//
// 👉 ÉTAPE SUIVANTE : déploie, ouvre /api/products?debug=1, et envoie-moi
//    « categoriesAxonaut » + « echantillonBrut ». Je verrouille alors le mapping
//    et les noms de champs exacts (prix, stock…) sur tes vraies données.

const AXONAUT_BASE = "https://axonaut.com/api/v2";

// ─────────────────────────────────────────────────────────────
//  MAPPING CATÉGORIE AXONAUT → PAGE DU SITE
//  À ajuster avec tes vrais noms de catégories (vus via ?debug=1).
//  La clé = nom (ou fragment) de la catégorie côté Axonaut (insensible à la casse).
//  La valeur = le slug de la page du site.
// ─────────────────────────────────────────────────────────────
const CATEGORY_MAP = [
  { match: "pelle",      slug: "mini-pelles" },
  { match: "chargeur",   slug: "mini-chargeurs" },
  { match: "tombereau",  slug: "mini-tombereaux" },
  { match: "dumper",     slug: "mini-tombereaux" },
  { match: "accessoire", slug: "accessoires" },
];

function mapCategory(rawCategory) {
  const c = (rawCategory || "").toString().toLowerCase();
  for (const rule of CATEGORY_MAP) {
    if (c.includes(rule.match)) return rule.slug;
  }
  return "autres"; // non mappé → visible en debug pour ajuster CATEGORY_MAP
}

// Cache mémoire court (réutilisé tant que la fonction reste "chaude").
let CACHE = { at: 0, data: null };
const CACHE_MS = 5 * 60 * 1000; // 5 minutes

// Récupère TOUS les produits Axonaut en gérant la pagination.
// (Piège classique : ne récupérer que la page 1 et perdre 80 % du catalogue.)
async function fetchAllProducts(apiKey) {
  const all = [];
  const MAX_PAGES = 30;   // garde-fou
  const PER_PAGE = 500;   // Axonaut renvoie jusqu'à 500 résultats par page

  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(`${AXONAUT_BASE}/products`, {
      headers: {
        userApiKey: apiKey,
        Accept: "application/json",
        page: String(page), // ← pagination via EN-TÊTE HTTP (exigé par Axonaut), pas via ?page=
      },
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Axonaut ${res.status} (page ${page}): ${body.slice(0, 200)}`);
    }
    const batch = await res.json();
    const items = Array.isArray(batch) ? batch : (batch.data || batch.results || []);
    if (!items.length) break;
    all.push(...items);
    if (items.length < PER_PAGE) break; // dernière page atteinte
  }
  return all;
}

// Normalisation défensive : on tolère plusieurs noms de champs possibles,
// le temps de verrouiller les vrais via ?debug=1.
function normalize(p) {
  const priceHT =
    num(p.price) ?? num(p.unit_price) ?? num(p.pricing && p.pricing.price) ?? null;
  const vat = num(p.tax_rate) ?? num(p.vat) ?? num(p.tax) ?? 0;
  const stock =
    num(p.stock) ?? num(p.stock_quantity) ?? num(p.available_stock) ?? null;
  const rawCat =
    p.category || p.product_category || p.family || p.categoryName || "";

  return {
    id: p.id ?? p.product_id ?? null,
    name: p.name || p.product_name || p.label || "Sans nom",
    reference: p.product_code || p.reference || p.sku || null,
    brand: p.brand || p.manufacturer || null,
    priceHT,
    priceTTC: priceHT != null ? round2(priceHT * (1 + vat / 100)) : null,
    vat,
    stock,
    inStock: stock == null ? null : stock > 0,
    rawCategory: rawCat,
    pageSlug: mapCategory(rawCat),
  };
}

const num = (v) => (v === 0 || v ? Number(v) : null);
const round2 = (n) => Math.round(n * 100) / 100;

module.exports = async (req, res) => {
  const apiKey = process.env.AXONAUT_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "AXONAUT_API_KEY manquante dans les variables d'environnement Vercel." });
  }

  try {
    // Cache
    let raw;
    if (CACHE.data && Date.now() - CACHE.at < CACHE_MS) {
      raw = CACHE.data;
    } else {
      raw = await fetchAllProducts(apiKey);
      CACHE = { at: Date.now(), data: raw };
    }

    // ── Mode découverte : révèle la vraie structure pour caler le mapping ──
    if (req.query && req.query.debug) {
      const cats = {};
      raw.forEach((p) => {
        const c = p.category || p.product_category || p.family || p.categoryName || "(vide)";
        cats[c] = (cats[c] || 0) + 1;
      });
      return res.status(200).json({
        total: raw.length,
        categoriesAxonaut: cats,            // ← envoie-moi ça
        echantillonBrut: raw.slice(0, 2),   // ← et ça (2 produits bruts)
        clesDisponibles: raw[0] ? Object.keys(raw[0]) : [],
      });
    }

    // ── Mode normal : produits normalisés, rangés par catégorie ──
    let products = raw.map(normalize);

    const wanted = req.query && req.query.category;
    if (wanted) products = products.filter((p) => p.pageSlug === wanted);

    // Cache CDN : 5 min, revalidation en arrière-plan
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ count: products.length, products });
  } catch (err) {
    return res.status(502).json({ error: "Échec de récupération Axonaut", detail: String(err.message || err) });
  }
};
