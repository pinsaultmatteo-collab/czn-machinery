// Fonction serverless Vercel — renvoie note + nombre total d'avis + jusqu'à 5 avis Google.
// La clé API reste cote serveur (variable d'environnement GOOGLE_PLACES_API_KEY).
// Mise en cache CDN 24h (s-maxage) => ~1 appel/jour a Google => reste dans le quota gratuit.

const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJH6Xc6USxrhIR6Da1eLFl1rM";

module.exports = async function handler(req, res) {
  const KEY = process.env.GOOGLE_PLACES_API_KEY;
  if (!KEY) {
    res.status(500).json({ error: "missing_key" });
    return;
  }
  try {
    const fieldMask = [
      "rating",
      "userRatingCount",
      "googleMapsUri",
      "reviews.rating",
      "reviews.text",
      "reviews.originalText",
      "reviews.authorAttribution",
      "reviews.relativePublishTimeDescription",
      "reviews.publishTime",
    ].join(",");

    const r = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: { "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": fieldMask },
    });
    if (!r.ok) {
      res.status(502).json({ error: "google_" + r.status });
      return;
    }
    const d = await r.json();

    const reviews = (d.reviews || []).map((rv) => ({
      rating: rv.rating || null,
      author: (rv.authorAttribution && rv.authorAttribution.displayName) || "",
      when: rv.relativePublishTimeDescription || "",
      publishTime: rv.publishTime || "",
      lang: (rv.originalText && rv.originalText.languageCode) || (rv.text && rv.text.languageCode) || "",
      text: (rv.originalText && rv.originalText.text) || (rv.text && rv.text.text) || "",
    }));

    // cache CDN : 24h, sert l'ancienne valeur pendant la revalidation
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    res.status(200).json({
      rating: d.rating || null,
      total: d.userRatingCount || null,
      url: d.googleMapsUri || "",
      reviews,
    });
  } catch (e) {
    res.status(500).json({ error: "fetch_failed" });
  }
};
