// 📁 Destination dans ton repo : /api/products.js
//
// Lit le catalogue Axonaut côté serveur (la clé API n'est JAMAIS exposée au
// navigateur), puis ne renvoie au site QUE les vraies machines/accessoires.
//
// ⚠️ Les catégories Axonaut sont vides → on filtre par PRÉFIXE DE RÉFÉRENCE
//    (product_code). Tout produit dont le code ne commence par aucun préfixe
//    connu (donc tout le SAV / pièces) est EXCLU automatiquement.
//
// Variable d'environnement requise (Vercel → Settings → Environment Variables) :
//    AXONAUT_API_KEY = ta clé Axonaut   (ne la colle jamais dans le code)
//
// Tests une fois déployé :
//   /api/products?debug=1               → ce qui est détecté pour le site
//   /api/products                       → toutes les machines/accessoires retenues
//   /api/products?category=mini-pelles  → filtré sur une famille

const AXONAUT_BASE = "https://axonaut.com/api/v2";

// ─────────────────────────────────────────────────────────────
//  LISTE BLANCHE — préfixe de référence → page du site (+ marque)
//  À COMPLÉTER au fur et à mesure avec tes autres familles.
// ─────────────────────────────────────────────────────────────
const PREFIX_MAP = [
  { prefix: "SMP",  slug: "mini-pelles",     brand: "Sonca" },
  { prefix: "X-MP", slug: "mini-pelles",     brand: "Xcavator" },
  // { prefix: "SMC",  slug: "mini-chargeurs",  brand: "Sonca" },
  // { prefix: "X-MC", slug: "mini-chargeurs",  brand: "Xcavator" },
  // { prefix: "SMT",  slug: "mini-tombereaux", brand: "Sonca" },
  // { prefix: "ACC",  slug: "accessoires",     brand: null },
];

function classify(productCode) {
  const code = (productCode || "").toString().trim().toUpperCase();
  if (!code) return null;
  // préfixes les plus longs testés d'abord (évite les collisions type X-MP / X-MC)
  const rules = [...PREFIX_MAP].sort((a, b) => b.prefix.length - a.prefix.length);
  for (const r of rules) {
    if (code.startsWith(r.prefix.toUpperCase())) return { slug: r.slug, brand: r.brand };
  }
  return null; // hors site : SAV, pièces, services…
}

// Cache mémoire court (réutilisé tant que la fonction reste "chaude").
let CACHE = { at: 0, data: null };
const CACHE_MS = 5 * 60 * 1000;

// Récupère TOUT le catalogue Axonaut — pagination via EN-TÊTE HTTP `page`.
async function fetchAllProducts(apiKey) {
  const all = [];
  const MAX_PAGES = 30;
  const PER_PAGE = 500;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(`${AXONAUT_BASE}/products`, {
      headers: {
        userApiKey: apiKey,
        Accept: "application/json",
        page: String(page), // ← exigé par Axonaut (et non ?page= dans l'URL)
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
    if (items.length < PER_PAGE) break; // dernière page
  }
  return all;
}

const toNum = (v) => {
  const n = parseFloat(v);
  return isNaN(n) ? null : n;
};

// Normalisation sur les VRAIS champs Axonaut (confirmés via ?debug=1).
function normalize(p) {
  const cls = classify(p.product_code);
  const priceHT = toNum(p.price);
  const stock = toNum(p.stock);
  return {
    id: p.id ?? null,
    name: p.name || "Sans nom",
    reference: p.product_code || null,
    brand: cls ? cls.brand : null,
    pageSlug: cls ? cls.slug : null,
    priceHT,
    priceTTC: toNum(p.price_with_tax),
    vat: toNum(p.tax_rate) ?? 20,
    stock,
    inStock: stock == null ? null : stock > 0,
    image: p.image || null,
    disabled: !!p.disabled,
  };
}

module.exports = async (req, res) => {
  const apiKey = process.env.AXONAUT_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "AXONAUT_API_KEY manquante dans les variables d'environnement Vercel." });
  }

  try {
    let raw;
    if (CACHE.data && Date.now() - CACHE.at < CACHE_MS) {
      raw = CACHE.data;
    } else {
      raw = await fetchAllProducts(apiKey);
      CACHE = { at: Date.now(), data: raw };
    }

    // Ne garder que les produits whitelistés (préfixe connu) et actifs.
    let site = raw.map(normalize).filter((p) => p.pageSlug && !p.disabled);

    // ── Mode découverte : vérifie ce qui est retenu pour le site ──
    if (req.query && req.query.debug) {
      const parFamille = {};
      site.forEach((p) => { parFamille[p.pageSlug] = (parFamille[p.pageSlug] || 0) + 1; });
      return res.status(200).json({
        totalAxonaut: raw.length,
        retenusPourLeSite: site.length,
        parFamille,
        machinesDetectees: site.map((p) => ({
          ref: p.reference, name: p.name, brand: p.brand,
          slug: p.pageSlug, priceHT: p.priceHT, stock: p.stock,
        })),
      });
    }

    const wanted = req.query && req.query.category;
    if (wanted) site = site.filter((p) => p.pageSlug === wanted);

    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ count: site.length, products: site });
  } catch (err) {
    return res.status(502).json({ error: "Échec de récupération Axonaut", detail: String(err.message || err) });
  }
};
