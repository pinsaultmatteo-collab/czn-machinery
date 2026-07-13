# Publication automatique de guides SEO (bilingue FR + EN)

Publie **1 guide par semaine** — en **français ET en anglais** (miroir avec `hreflang` croisés) — sur `/guides/` et `/en/guides/`, **chaque mardi à 09:00 (heure de Paris)**.
Rédaction FR par l'API Claude, traduction EN par un 2ᵉ appel, assemblage dans les templates du site, mise à jour des 2 index + sitemap, puis push → Vercel redéploie.

## Mise en route (à faire une fois)

1. **Ajouter la clé API Anthropic en secret GitHub :**
   `Settings → Secrets and variables → Actions → New repository secret`
   - Nom : `ANTHROPIC_API_KEY`
   - Valeur : ta clé `sk-ant-...` (génère-en une neuve sur console.anthropic.com si celle-ci a déjà été partagée)

2. **Tester tout de suite** (sans attendre mardi) :
   `Actions → Guide SEO hebdomadaire → Run workflow`.

C'est tout. Ensuite ça tourne seul.

## Fonctionnement

- `scripts/guides-queue.json` — la liste des sujets. Le script prend le **1er sujet non publié**, le rédige, puis le marque `published: true` avec la date. Ajoute des sujets à la fin quand tu veux ; quand la file est vide, rien n'est publié (aucune erreur).
- `scripts/generate-guide.mjs` — génère l'article FR (Claude `claude-opus-4-8`, sortie JSON structurée), le **traduit en EN** (2ᵉ appel), assemble les 2 pages à partir des gabarits bilingues `guides/location-mini-pelle/` et `en/guides/location-mini-pelle/` (chrome identique : nav, footer, pixels, `hreflang` croisés, liens de langue vers le miroir), écrit `guides/<slug>/` **et** `en/guides/<slug>/`, ajoute la carte sur les **2 index**, régénère `sitemap.xml` / `llms.txt` / `index.md` via `seo-gen.js`. Liens internes de la version EN automatiquement préfixés `/en/`.
- `.github/workflows/weekly-guide.yml` — le planificateur (2 crons UTC + garde « 09h Paris » pour gérer l'heure d'été/hiver) + commit/push.

## Garde-fous intégrés

- **Maille interne** limitée à une liste blanche de pages réelles (catégories, guides existants, contact, financement, fiches produits) ; tout lien hors-liste est retiré.
- **Pas de chiffres inventés** : seul « dès 4 125 € HT » est autorisé comme prix ; le reste en fourchettes prudentes.
- **Validations** : si l'article est trop court, mal formé, ou sans 3 guides associés valides, le job échoue et ne publie rien.
- **Anti-doublon** : si le slug existe déjà, on marque publié et on passe.

## Régler la fréquence / l'horaire

Modifier les `cron:` dans `.github/workflows/weekly-guide.yml` (format UTC ; garder la garde 09h si tu changes). Pour changer de jour, remplacer le `2` (mardi) par le jour voulu (0=dim … 6=sam).
