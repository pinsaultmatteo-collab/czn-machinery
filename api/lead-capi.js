// 📁 /api/lead-capi.js
//
// Conversions API (côté serveur) pour l'événement "Lead" de CZN Machinery.
// Le formulaire de contact envoie ici un POST first-party (même domaine → NON
// bloqué par les adblockers). On hashe les PII en SHA-256 et on transmet
// l'événement directement aux serveurs Meta. Dédoublonnage avec le pixel
// navigateur grâce à un event_id commun.
//
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   META_PIXEL_ID        = 27438719989102942   (ton pixel)
//   META_CAPI_TOKEN      = (token CAPI de CE pixel : Events Manager → dataset →
//                           Paramètres → Conversions API → Générer un token d'accès)
//   META_PIXEL_ID_2      = 3745808205722674     (optionnel — pixel Youneat, si tu as un token)
//   META_CAPI_TOKEN_2    = (optionnel)
//   META_TEST_EVENT_CODE = (optionnel — onglet « Évènements de test » ; à retirer une fois validé)

const crypto = require("crypto");
const GRAPH_VERSION = "v23.0"; // bumpable (dernière : v25.0) — /events est stable

const sha256 = (v) =>
  crypto.createHash("sha256").update(String(v).trim().toLowerCase()).digest("hex");

// Téléphone → chiffres seuls, format international sans "+"
function normPhone(p) {
  let d = String(p || "").replace(/[^0-9]/g, "");
  if (!d) return "";
  if (d.charAt(0) === "0") d = "33" + d.slice(1); // FR : 0X… → 33X…
  return d;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, note: "Lead CAPI endpoint actif" });
  }
  try {
    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) {} }
    body = body || {};

    // --- user_data (clés de matching) ---
    const user_data = {};
    if (body.email) user_data.em = [sha256(body.email)];
    const ph = normPhone(body.phone);
    if (ph) user_data.ph = [sha256(ph)];
    if (body.name) {
      const parts = String(body.name).trim().split(/\s+/);
      if (parts[0]) user_data.fn = [sha256(parts[0])];
      if (parts.length > 1) user_data.ln = [sha256(parts[parts.length - 1])];
    }
    if (body.fbc) user_data.fbc = body.fbc;
    if (body.fbp) user_data.fbp = body.fbp;

    // IP + User-Agent réels du visiteur (le POST vient du navigateur → gros gain de match)
    const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
      || (req.socket && req.socket.remoteAddress) || "";
    if (ip) user_data.client_ip_address = ip;
    const ua = req.headers["user-agent"] || "";
    if (ua) user_data.client_user_agent = ua;

    const event = {
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: body.event_source_url || "https://czn-machinery.com/contact/",
      user_data,
      custom_data: { value: 1, currency: "EUR" },
    };
    if (body.event_id) event.event_id = body.event_id; // dédoublonnage avec le pixel

    // --- Cible(s) : 1 ou 2 pixels ---
    const targets = [];
    if (process.env.META_PIXEL_ID && process.env.META_CAPI_TOKEN)
      targets.push({ id: process.env.META_PIXEL_ID, token: process.env.META_CAPI_TOKEN });
    if (process.env.META_PIXEL_ID_2 && process.env.META_CAPI_TOKEN_2)
      targets.push({ id: process.env.META_PIXEL_ID_2, token: process.env.META_CAPI_TOKEN_2 });
    if (targets.length === 0)
      return res.status(200).json({ ok: false, error: "Aucun pixel configuré (env manquantes)" });

    const payload = { data: [event] };
    if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

    const results = await Promise.all(targets.map(async (t) => {
      try {
        const r = await fetch(
          `https://graph.facebook.com/${GRAPH_VERSION}/${t.id}/events?access_token=${encodeURIComponent(t.token)}`,
          { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
        );
        const j = await r.json().catch(() => ({}));
        return { pixel: t.id, status: r.status, events_received: j.events_received, fbtrace_id: j.fbtrace_id, error: j.error };
      } catch (e) {
        return { pixel: t.id, error: String(e.message || e) };
      }
    }));

    return res.status(200).json({ ok: true, event_id: event.event_id || null, results });
  } catch (err) {
    return res.status(200).json({ ok: false, error: String(err.message || err) });
  }
};
