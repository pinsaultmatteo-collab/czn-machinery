// 📁 Destination dans ton repo : /api/axonaut-rdv.js
//
// Reçoit les webhooks Axonaut, détecte les RDV pris EN LIGNE (via la page de
// réservation), et envoie l'événement GA4 "rdv_confirmed" au Measurement Protocol.
//
// Détection : topic "event.created" + lien "public/booking/" dans le contenu
// (présent uniquement sur les réservations en ligne → exclut les events agenda
// créés manuellement par l'équipe).
//
// Variables d'environnement requises (Vercel → Settings → Environment Variables) :
//   GA4_MEASUREMENT_ID    = G-G0HZD8F8BK
//   GA4_API_SECRET        = (secret GA4 → Admin → Flux de données → Protocole de mesure)
//   AXONAUT_WEBHOOK_TOKEN = (chaîne secrète, identique au ?token= de la Callback URL)

module.exports = async (req, res) => {
  // 1) Sécurité : seul Axonaut connaît le token (placé dans l'URL de callback)
  const token = req.query && req.query.token;
  if (!process.env.AXONAUT_WEBHOOK_TOKEN || token !== process.env.AXONAUT_WEBHOOK_TOKEN) {
    return res.status(401).json({ error: "unauthorized" });
  }

  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, note: "Axonaut webhook endpoint actif" });
  }

  try {
    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) {} }
    body = body || {};

    const topic = body.topic || "";
    const data = body.data || {};
    const content = String(data.content || "");

    // 2) Filtre : RDV pris EN LIGNE uniquement
    const isOnlineBooking = topic === "event.created" && /public\/booking\//i.test(content);

    if (!isOnlineBooking) {
      return res.status(200).json({ ok: true, ignored: topic || "unknown" });
    }

    // 3bis) Meta CAPI — événement "Schedule" (RDV réellement pris en ligne)
    try {
      const MPX = process.env.META_PIXEL_ID, MTOK = process.env.META_CAPI_TOKEN;
      if (MPX && MTOK) {
        const crypto = require("crypto");
        const sha = (v) => crypto.createHash("sha256").update(String(v).trim().toLowerCase()).digest("hex");
        const raw = JSON.stringify(data || {});
        const mail = raw.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
        const user_data = {};
        if (data && data.id) user_data.external_id = [sha(String(data.id))];
        if (mail) user_data.em = [sha(mail[0])];
        const ev = {
          event_name: "Schedule",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "system_generated",
          event_id: "rdv." + ((data && data.id) || Date.now()),
          user_data
        };
        const pl = { data: [ev] };
        if (process.env.META_TEST_EVENT_CODE) pl.test_event_code = process.env.META_TEST_EVENT_CODE;
        await fetch(
          `https://graph.facebook.com/v23.0/${MPX}/events?access_token=${encodeURIComponent(MTOK)}`,
          { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(pl) }
        );
      }
    } catch (e) { /* n'affecte jamais le flux GA4 */ }

    // 3) Envoi de l'événement à GA4 (Measurement Protocol)
    const MID = process.env.GA4_MEASUREMENT_ID;
    const SECRET = process.env.GA4_API_SECRET;
    if (MID && SECRET) {
      const clientId = `${Date.now()}.${Math.floor(Math.random() * 1e9)}`;
      const payload = {
        client_id: clientId,
        non_personalized_ads: true,
        events: [{
          name: "rdv_confirmed",
          params: {
            method: "axonaut",
            rdv_id: data.id || null,
            duration_min: data.duration || null,
            session_id: String(Date.now()),
            engagement_time_msec: 1
          }
        }]
      };
      const r = await fetch(
        `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(MID)}&api_secret=${encodeURIComponent(SECRET)}`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
      );
      return res.status(200).json({ ok: true, tracked: "rdv_confirmed", rdv_id: data.id || null, ga_status: r.status });
    }

    return res.status(200).json({ ok: true, tracked: "rdv_confirmed (GA non configuré)", rdv_id: data.id || null });
  } catch (err) {
    // 200 volontaire : éviter qu'Axonaut ne retente en boucle / désactive le webhook
    return res.status(200).json({ ok: false, error: String(err.message || err) });
  }
};
