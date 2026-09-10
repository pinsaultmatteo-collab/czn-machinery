// 📁 /api/axonaut-lead.js
//
// Remonte dans Axonaut (CRM) chaque demande envoyée depuis le formulaire de
// contact du site, EN PLUS du circuit existant (Formspree + e-mail à
// contact@czn-machinery.com), qui reste inchangé.
//
// Ce qui est créé dans Axonaut :
//   • une SOCIÉTÉ marquée `is_prospect` → visible dans Clients ▸ Prospects
//   • un CONTACT (employee) rattaché à cette société → visible dans Contacts
//   • un ÉVÉNEMENT retraçant la demande (sujet, message, page, tracking)
//
// Anti-doublon : on cherche d'abord une société existante (par e-mail du
// contact, puis par nom exact). Si elle existe, on ne la recrée pas : on y
// ajoute le contact s'il manque, et on journalise l'événement.
//
// ⚠️ Le champ `comments` de la société n'est renseigné qu'à la CRÉATION.
// On n'y touche jamais ensuite : c'est une zone de notes éditée par les
// commerciaux, l'historique des demandes va dans les événements.
//
// Variable d'environnement requise (déjà présente sur Vercel) :
//   AXONAUT_API_KEY
//
// Le endpoint répond TOUJOURS 200 : un incident CRM ne doit jamais faire
// échouer l'envoi du formulaire côté visiteur.

const AXONAUT_BASE = "https://axonaut.com/api/v2";
const TIMEOUT_MS = 8000;

/* Provenance de la demande : permet aux commerciaux de distinguer d'un coup
   d'œil un formulaire rempli d'une conversation avec l'assistant. */
const SOURCES = { chatbot: "Assistant du site", formulaire: "Formulaire du site" };

const TOPICS = {
  devis: "Demande de devis",
  financement: "Financement",
  livraison: "Livraison",
  sav: "SAV / pièces détachées",
  occasion: "Machine d'occasion",
  autre: "Autre",
};

const clean = (v) => String(v == null ? "" : v).trim();
const norm = (v) => clean(v).toLowerCase().replace(/\s+/g, " ");
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const ALLOWED_HOSTS = /^(www\.)?czn-machinery\.com$|^localhost$|\.vercel\.app$/;

/* Commercial à qui attribuer les prospects venant du site.
   Accepte un e-mail directement, ou un NOM qu'on résout via GET /users
   (le champ Axonaut `business_manager` attend un e-mail).
   Surchargeable sans redéploiement via la variable AXONAUT_BUSINESS_MANAGER. */
const BUSINESS_MANAGER = process.env.AXONAUT_BUSINESS_MANAGER || "Mickael Legrand";

/* Personnes qui doivent VOIR passer chaque demande. Axonaut n'autorise qu'UN
   seul commercial par société et par opportunité (champ unique), mais les
   événements acceptent une liste : tout le monde est donc notifié de
   l'activité, même si la fiche reste rattachée à un responsable.
   Noms ou e-mails, séparés par des virgules. */
const NOTIFY = (process.env.AXONAUT_NOTIFY || "Mickael Legrand, m.caron@czn-machinery.com")
  .split(",").map((v) => clean(v)).filter(Boolean);

/* Opportunité créée pour chaque demande, dans la colonne « Nouveau Prospect »
   du cycle commercial. Les noms exacts sont résolus via GET /pipes : si la
   colonne est renommée dans Axonaut, la correspondance tient quand même
   (casse et accents ignorés). Surchargeables via AXONAUT_PIPE / AXONAUT_PIPE_STEP. */
/* Liste de préférence : on prend la PREMIÈRE colonne qui existe réellement.
   « Demandes web » est une colonne dédiée à créer à la main dans Axonaut
   (l'API ne permet pas de modifier un pipeline existant). Tant qu'elle
   n'existe pas, les demandes vont dans « Nouveau Prospect » ; dès qu'elle est
   créée, elles y basculent seules, sans redéploiement. */
const PIPE_STEPS = (process.env.AXONAUT_PIPE_STEP || "Demandes web, Nouveau Prospect")
  .split(",").map((v) => clean(v)).filter(Boolean);
const PIPE_NAME = process.env.AXONAUT_PIPE || "";

/* Comparaison de noms insensible à la casse, aux accents et à la ponctuation
   (« Mickaël Legrand », « mickael legrand », « Legrand, Mickael » → même clé). */
const nameKey = (v) =>
  String(v == null ? "" : v).normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z]/g, "");

/* Annuaire des utilisateurs Axonaut, mémorisé (voir CACHE_TTL_MS) : évite un
   appel par lead tout en prenant en compte une arrivée/départ assez vite. */
let usersCache, usersCacheAt = 0;
async function axUsers(apiKey) {
  if (usersCache && Date.now() - usersCacheAt < CACHE_TTL_MS) return usersCache;
  usersCacheAt = Date.now();
  try {
    const r = await ax(apiKey, "/users");
    usersCache = r.ok ? asList(r.data) : [];
  } catch (e) {
    usersCache = [];
    console.warn("[axonaut-lead] annuaire indisponible :", String(e.message || e));
  }
  return usersCache;
}

/* « Mickael Legrand » ou « m.caron@… » → e-mail. Renvoie null si inconnu. */
function emailOf(entry, users) {
  const v = clean(entry);
  if (!v) return null;
  if (v.includes("@")) return v;
  const key = nameKey(v);
  const hit =
    users.find((u) => nameKey(u.fullname) === key) ||
    users.find((u) => nameKey(clean(u.firstname) + clean(u.lastname)) === key) ||
    users.find((u) => nameKey(clean(u.lastname) + clean(u.firstname)) === key);
  if (!hit) {
    console.warn("[axonaut-lead] utilisateur introuvable :", v,
      "| annuaire:", users.map((u) => u.fullname).join(", "));
  }
  return (hit && clean(hit.email)) || null;
}

/* Renvoie { pipe, step } avec les libellés EXACTS d'Axonaut.
   Mémorisé 10 min : assez pour éviter un appel par lead, assez court pour
   qu'une colonne ajoutée dans Axonaut soit prise en compte rapidement sans
   attendre le recyclage de l'instance. */
const CACHE_TTL_MS = 10 * 60 * 1000;
let pipeCache, pipeCacheAt = 0;
async function resolvePipe(apiKey) {
  if (pipeCache !== undefined && Date.now() - pipeCacheAt < CACHE_TTL_MS) return pipeCache;
  pipeCacheAt = Date.now();
  try {
    const r = await ax(apiKey, "/pipes");
    const pipes = (r.ok ? asList(r.data) : []).filter((p) => !p.is_deleted);
    const wanted = nameKey(PIPE_NAME);
    // Si un pipeline précis est configuré on le privilégie, sinon on prend le
    // premier qui contient la colonne visée.
    const ordered = wanted ? pipes.filter((p) => nameKey(p.name) === wanted).concat(pipes) : pipes;
    // On parcourt les colonnes par ordre de préférence, pas les pipelines :
    // « Demandes web » l'emporte partout où elle existe.
    for (const want of PIPE_STEPS) {
      const key = nameKey(want);
      for (const p of ordered) {
        const st = (p.pipe_steps || []).find((x) => nameKey(x.name) === key);
        if (st) return (pipeCache = { pipe: p.name, step: st.name });
      }
    }
    console.warn("[axonaut-lead] aucune colonne trouvee parmi :", PIPE_STEPS.join(" / "),
      "| pipelines:", pipes.map((p) => p.name + " [" + (p.pipe_steps || []).map((x) => x.name).join(", ") + "]").join(" / "));
    // Repli sur le dernier libellé configuré : c'est le plus sûr.
    pipeCache = { pipe: PIPE_NAME || null, step: PIPE_STEPS[PIPE_STEPS.length - 1] };
  } catch (e) {
    console.warn("[axonaut-lead] resolution pipeline impossible :", String(e.message || e));
    pipeCache = { pipe: PIPE_NAME || null, step: PIPE_STEPS[PIPE_STEPS.length - 1] };
  }
  return pipeCache;
}

/* Appel Axonaut avec timeout — ne lève jamais sur un HTTP non-2xx : on
   retourne { ok, status, data } pour décider au cas par cas. */
async function ax(apiKey, path, init) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(AXONAUT_BASE + path, {
      ...(init || {}),
      signal: ctrl.signal,
      headers: {
        userApiKey: apiKey,
        Accept: "application/json",
        ...((init && init.body) ? { "Content-Type": "application/json" } : {}),
        ...((init && init.headers) || {}),
      },
    });
    const data = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}

/* L'API renvoie tantôt un tableau, tantôt un objet enveloppe. */
const asList = (d) => (Array.isArray(d) ? d : (d && (d.data || d.results)) || []);

const employeesOf = (c) => (c && Array.isArray(c.employees) ? c.employees : []);
const hasEmail = (c, email) =>
  employeesOf(c).some((e) => norm(e && e.email) === email);

/* « Jean Dupont » → { firstname:"Jean", lastname:"Dupont" }
   « Dupont »      → { firstname:"",     lastname:"Dupont" }  (tri CRM par nom) */
function splitName(full) {
  const parts = clean(full).split(/\s+/).filter(Boolean);
  if (!parts.length) return { firstname: "", lastname: "" };
  if (parts.length === 1) return { firstname: "", lastname: parts[0] };
  return { firstname: parts.shift(), lastname: parts.join(" ") };
}

async function searchCompanies(apiKey, query) {
  if (!query) return [];
  const r = await ax(apiKey, "/companies?search=" + encodeURIComponent(query));
  return r.ok ? asList(r.data) : [];
}

/* Recherche prudente : on ne rattache à une société existante que sur une
   correspondance FORTE (même e-mail de contact, ou nom strictement identique),
   pour ne jamais greffer un prospect sur la mauvaise fiche. */
async function findCompany(apiKey, email, companyName) {
  for (const c of await searchCompanies(apiKey, email)) {
    if (hasEmail(c, email)) return { company: c, matchedOn: "email" };
  }
  if (companyName) {
    const target = norm(companyName);
    for (const c of await searchCompanies(apiKey, companyName)) {
      if (norm(c.name) === target) return { company: c, matchedOn: "nom" };
    }
  }
  return { company: null, matchedOn: null };
}

/* Date ISO8601 avec décalage horaire (format attendu par Axonaut). */
function isoWithOffset(d) {
  const p = (n) => String(Math.floor(Math.abs(n))).padStart(2, "0");
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) +
    "T" + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()) +
    sign + p(off / 60) + ":" + p(off % 60);
}

function buildRecap(b, topicLabel, sourceLabel) {
  const lines = [];
  lines.push(sourceLabel + " — czn-machinery.com");
  lines.push("Sujet : " + topicLabel);
  if (clean(b.name)) lines.push("Nom : " + clean(b.name));
  if (clean(b.company)) lines.push("Société : " + clean(b.company));
  if (clean(b.email)) lines.push("E-mail : " + clean(b.email));
  if (clean(b.phone)) lines.push("Téléphone : " + clean(b.phone));
  if (clean(b.message)) lines.push("", "Message :", clean(b.message));
  const meta = [];
  if (clean(b.page)) meta.push("Page : " + clean(b.page));
  if (clean(b.lang)) meta.push("Langue : " + clean(b.lang));
  if (clean(b.gclid)) meta.push("gclid : " + clean(b.gclid));
  if (clean(b.fbclid)) meta.push("fbclid : " + clean(b.fbclid));
  if (meta.length) lines.push("", "— " + meta.join(" · "));
  return lines.join("\n");
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, note: "Axonaut lead endpoint actif" });
  }

  try {
    let b = req.body;
    if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) {} }
    b = b || {};

    // Origine : on n'accepte que les envois venant du site. Ce n'est pas une
    // sécurité forte (un en-tête se falsifie), mais cela bloque les POST
    // opportunistes de robots qui scannent les routes /api.
    const src = clean(req.headers && (req.headers.origin || req.headers.referer));
    if (src) {
      let host = "";
      try { host = new URL(src).hostname; } catch (e) { host = ""; }
      if (!ALLOWED_HOSTS.test(host)) {
        return res.status(200).json({ ok: false, error: "Origine non autorisée" });
      }
    }

    // Honeypot : rempli = robot, on ne pollue pas le CRM.
    if (clean(b._gotcha)) {
      return res.status(200).json({ ok: true, skipped: "honeypot" });
    }

    const email = norm(b.email);
    if (!isEmail(email)) {
      return res.status(200).json({ ok: false, error: "E-mail absent ou invalide" });
    }

    const apiKey = process.env.AXONAUT_API_KEY;
    if (!apiKey) {
      return res.status(200).json({ ok: false, error: "AXONAUT_API_KEY manquante" });
    }

    const personName = clean(b.name);
    const companyName = clean(b.company);
    const isB2C = !companyName;                       // particulier si pas de société
    const accountName = companyName || personName || email.split("@")[0];
    const { firstname, lastname } = splitName(personName);
    const phone = clean(b.phone);
    const topicKey = norm(b.topic);
    const topicLabel = TOPICS[topicKey] || TOPICS.autre;
    const sourceLabel = SOURCES[norm(b.source)] || SOURCES.formulaire;
    const recap = buildRecap(b, topicLabel, sourceLabel);
    const lang = (clean(b.lang) || "fr").slice(0, 2);

    const found = await findCompany(apiKey, email, companyName);
    let company = found.company;
    let companyCreated = false;
    let employeeCreated = false;

    // Résolu avant la création ; sur une société DÉJÀ existante on n'y touche
    // pas, pour ne pas déposséder le commercial qui la suit déjà.
    const users = await axUsers(apiKey);
    const managerEmail = emailOf(BUSINESS_MANAGER, users);
    // Destinataires de l'activité : tout le monde, responsable inclus, dédoublonné.
    const notifyEmails = [...new Set(
      [managerEmail].concat(NOTIFY.map((n) => emailOf(n, users))).filter(Boolean)
    )];

    if (!company) {
      // Nouvelle société → prospect + contact en un seul appel.
      const payload = {
        name: accountName,
        is_prospect: true,
        isB2C: isB2C,
        currency: "EUR",
        language: lang,
        comments: recap,
        ...(managerEmail ? { business_manager: managerEmail } : {}),
        employees: [{
          firstname: firstname,
          lastname: lastname,
          email: email,
          // ⚠️ dans le tableau imbriqué, Axonaut attend du camelCase
          phoneNumber: phone,
        }],
      };
      const r = await ax(apiKey, "/companies", { method: "POST", body: JSON.stringify(payload) });
      if (!r.ok || !r.data || !r.data.id) {
        const fail = {
          ok: false, step: "create_company", status: r.status,
          error: (r.data && (r.data.message || r.data.error)) || "Création société refusée",
          detail: r.data ? JSON.stringify(r.data).slice(0, 400) : null,
        };
        console.error("[axonaut-lead] ECHEC", JSON.stringify(fail));
        return res.status(200).json(fail);
      }
      company = r.data;
      companyCreated = true;
      employeeCreated = true;
    } else if (!hasEmail(company, email)) {
      // Société connue mais nouveau contact → on ajoute le contact seul.
      // Ici l'endpoint /employees attend du snake_case (phone_number).
      const r = await ax(apiKey, "/employees", {
        method: "POST",
        body: JSON.stringify({
          company_id: company.id,
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone_number: phone,
        }),
      });
      employeeCreated = !!(r.ok && r.data);
    }

    // Journalisation de la demande (n'écrase jamais les notes commerciales).
    let eventLogged = false;
    if (company && company.id) {
      const ev = await ax(apiKey, "/events", {
        method: "POST",
        body: JSON.stringify({
          company_id: company.id,
          title: sourceLabel + " — " + topicLabel,
          content: recap,
          date: isoWithOffset(new Date()),
          is_done: true,
          ...(notifyEmails.length ? { users: notifyEmails } : {}),
        }),
      });
      eventLogged = !!ev.ok;
    }

    // ── Opportunité dans le cycle commercial ──────────────────────────────
    // Sur une société déjà connue, on n'en rajoute pas si une opportunité
    // ouverte attend déjà dans la même colonne : inutile d'encombrer le
    // pipeline avec des doublons quand quelqu'un resoumet le formulaire.
    let opportunityId = null, opportunitySkipped = false, pipeUsed = null;
    if (company && company.id) {
      const pipe = await resolvePipe(apiKey);
      pipeUsed = pipe;
      let already = false;
      if (!companyCreated) {
        const ro = await ax(apiKey, "/companies/" + company.id + "/opportunities");
        already = asList(ro.data).some(
          (o) => o && !o.is_win && !o.is_archived && nameKey(o.pipe_step_name) === nameKey(pipe.step)
        );
      }
      if (already) {
        opportunitySkipped = true;
      } else {
        const oPayload = {
          company_id: company.id,
          name: sourceLabel + " — " + topicLabel,
          comments: recap,
          amount: 0,
          pipe_step_name: pipe.step,
          ...(pipe.pipe ? { pipe_name: pipe.pipe } : {}),
          ...(managerEmail ? { business_manager_email: managerEmail } : {}),
          // ⚠️ 3e convention de nommage : ici les clés sont préfixées employee_
          employees: [{
            employee_firstname: firstname,
            employee_lastname: lastname,
            employee_email: email,
            employee_phone: phone,
          }],
        };
        const ro = await ax(apiKey, "/opportunities", { method: "POST", body: JSON.stringify(oPayload) });
        if (ro.ok && ro.data && ro.data.id) opportunityId = ro.data.id;
        else console.warn("[axonaut-lead] opportunite refusee", ro.status, JSON.stringify(ro.data).slice(0, 300));
      }
    }

    const out = {
      ok: true,
      company_id: company ? company.id : null,
      company_created: companyCreated,
      matched_on: found.matchedOn,
      employee_created: employeeCreated,
      event_logged: eventLogged,
      // Drapeaux tels qu'Axonaut les a réellement enregistrés : c'est
      // `company_is_prospect` qui conditionne l'affichage dans Clients ▸ Prospects.
      company_name: company ? company.name : null,
      company_is_prospect: company ? company.is_prospect : null,
      company_is_customer: company ? company.is_customer : null,
      business_manager: managerEmail || null,
      notified: notifyEmails,
      opportunity_id: opportunityId,
      opportunity_skipped: opportunitySkipped,
      opportunity_pipe: pipeUsed ? pipeUsed.pipe : null,
      opportunity_step: pipeUsed ? pipeUsed.step : null,
    };
    console.log("[axonaut-lead]", JSON.stringify(out));
    return res.status(200).json(out);
  } catch (err) {
    return res.status(200).json({ ok: false, error: String((err && err.message) || err) });
  }
};
