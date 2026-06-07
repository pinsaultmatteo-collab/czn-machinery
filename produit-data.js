// 📁 /produit-data.js — LE SEUL FICHIER À ÉDITER pour le contenu des fiches.
// Axonaut fournit nom / prix / stock. Ici : tagline, intro, sections, specs, photos.
// Clé = référence Axonaut (product_code).
//
// PHOTOS : déposer les fichiers dans le repo sous /images/... puis lister les chemins.
//          (autant de photos que tu veux — la 1re est l'image principale).
// SPECS  : groupées -> [{ group, rows:[{label,value}] }]  (ou simple [{label,value}]).
//          Laisse [] tant que tu n'as pas les vraies valeurs.

module.exports = {

  // ───────────────────────── MODÈLE COMPLET (référence) ─────────────────────────
  "SMP06": {
    tagline: `Micro pelle ultra-compacte, transportable en permis B.`,
    intro: `La mini pelleteuse SJW-06 est la micro pelle la plus compacte de la gamme SONCA avec seulement 700 mm de largeur et 660 kg. Elle se faufile partout : portails de jardin, passages étroits, cours intérieures. Équipée du moteur Longxin G300FD Euro 5 de 8,5 CV, elle offre une puissance suffisante pour les travaux de terrassement léger, l'aménagement paysager et le creusement de tranchées.`,
    stats: [
      { value: "660 kg",      label: "Poids opérationnel" },
      { value: "Poste ouvert", label: "Type de cabine" },
      { value: "8,5 CV",      label: "Puissance moteur" },
      { value: "1,09 m",      label: "Profondeur d'excavation" },
    ],
    sections: [
      {
        title: "Compacte, légère et transportable facilement",
        body: `La SJW-06 pèse seulement 660 kg, ce qui la rend transportable sur une simple remorque avec un véhicule de permis B. Son châssis compact et ses chenilles de 150 mm offrent stabilité et maniabilité sur tous types de sols. Le poste de conduite ouvert assure une visibilité totale à 360° (canopy disponible en option).`,
        features: [
          { title: "Transportable permis B", text: "Avec 660 kg, elle se charge sur une remorque standard. Aucun permis spécial nécessaire pour le transport." },
          { title: "Poste de conduite ouvert", text: "Visibilité optimale à 360° et commandes ergonomiques accessibles, même dans les espaces réduits." },
          { title: "Chenilles tout terrain", text: "Chenilles caoutchouc de 150 mm pour une bonne adhérence sans abîmer pelouses et surfaces fragiles." },
        ],
      },
      {
        title: "Système hydraulique performant et précis",
        body: `Le système hydraulique utilise une pompe Gear 3+3 délivrant 21,6 L/min à 16 MPa. Ce débit généreux pour cette classe de machine assure des mouvements fluides et précis du bras, du balancier et du godet. Le réservoir hydraulique de 11,4 L garantit une autonomie de travail confortable.`,
        features: [
          { title: "Pompe Gear 3+3", text: "Pompe à engrenages double flux assurant un débit de 21,6 L/min pour des mouvements simultanés fluides." },
          { title: "Pression 16 MPa", text: "Force d'excavation de 3,5 kN au balancier, suffisante pour creuser dans la plupart des sols courants." },
          { title: "Entretien simplifié", text: "Accès facile aux points de maintenance, intervalles d'entretien espacés pour réduire les coûts." },
        ],
      },
      {
        title: "Pour particuliers comme professionnels",
        body: `Choix idéal pour les particuliers réalisant eux-mêmes leurs travaux (jardin, terrasse, piscine hors-sol, tranchées) comme pour les paysagistes et artisans intervenant dans des espaces restreints. Sa facilité de transport et sa simplicité d'utilisation en font une micro pelle accessible à tous.`,
        features: [
          { title: "Idéale aménagement paysager", text: "Massifs, tranchées d'arrosage, fondations de murets, plantation d'arbres : elle simplifie les travaux pénibles à la main." },
          { title: "Prix imbattable + garantie 2 ans", text: "Dès 4 125 € HT, garantie pièces 24 mois et SAV basé en France avec stock de pièces détachées." },
          { title: "Accessoires dédiés", text: "Attache rapide, godet de curage, dent ripper, pouce de manutention, râteau : adaptez la machine à vos besoins." },
        ],
      },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids opérationnel", value: "660 kg" },
        { label: "Longueur totale", value: "2 287 mm" },
        { label: "Largeur totale", value: "700 mm" },
        { label: "Hauteur totale", value: "1 350 mm" },
        { label: "Largeur chenille", value: "150 mm" },
        { label: "Largeur du godet standard", value: "300 mm" },
        { label: "Type de cabine", value: "Poste ouvert (canopy en option)" },
      ]},
      { group: "Dimensions de travail", rows: [
        { label: "Profondeur de fouille max.", value: "1 091 mm" },
        { label: "Profondeur de fouille verticale max.", value: "1 018 mm" },
        { label: "Hauteur d'excavation max.", value: "2 114 mm" },
        { label: "Hauteur de déversement max.", value: "1 386 mm" },
        { label: "Rayon d'excavation horizontal max.", value: "2 254 mm" },
        { label: "Force d'excavation (balancier)", value: "3,5 kN" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "Longxin G300FD" },
        { label: "Puissance", value: "6,8 kW (8,5 CV)" },
        { label: "Énergie", value: "Diesel Euro 5" },
        { label: "Pompe hydraulique", value: "Gear Pump 3+3" },
        { label: "Débit pompe", value: "21,6 L/min" },
        { label: "Pression système", value: "16 MPa" },
        { label: "Réservoir carburant", value: "6 L" },
        { label: "Réservoir hydraulique", value: "11,4 L" },
      ]},
      { group: "Déplacement & chenilles", rows: [
        { label: "Vitesse de déplacement", value: "1,5 km/h" },
        { label: "Vitesse de rotation", value: "9,5 tr/min" },
        { label: "Chenilles", value: "150 × 72 × 34" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-06/produit/mini-pelle-sonca-sjw-06-compacte.webp",    alt: "Mini-pelle Sonca SJW-06 ultra-compacte 660 kg" },
      { src: "/images/SONCA/SJW-06/produit/mini-pelle-sonca-sjw-06-godet.webp",       alt: "SJW-06 détail godet d'excavation 300 mm" },
      { src: "/images/SONCA/SJW-06/produit/mini-pelle-sjw-06-excavation.webp",        alt: "SJW-06 en excavation, creusement de tranchée" },
      { src: "/images/SONCA/SJW-06/produit/mini-pelle-sonca-sjw-06-terrassement.webp",alt: "SJW-06 terrassement et nivellement" },
      { src: "/images/SONCA/SJW-06/produit/mini-pelle-sonca-sjw-06-600-kg.webp",      alt: "SJW-06 vue latérale, largeur 700 mm" },
    ],
  },

  // ───────────── À ENRICHIR (copie le modèle ci-dessus + tes anciennes fiches) ─────────────
  // Anciennes pages à reprendre : czn-machinery.com/modeles/mini-pelle-sjw-12f/ et /sjw-12p/

  "SMP12F": {
    tagline: `Mini-pelle 1,2 t polyvalente — version F.`,
    intro: `La Sonca SJW-12 F est une mini-pelle de 1,2 tonne polyvalente, taillée pour les travaux de terrassement réguliers des artisans, paysagistes et loueurs. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [],     // ← reprendre depuis l'ancienne fiche SJW-12 F
    sections: [],
    specs: [],
    images: [],
  },

  "SMP12P": {
    tagline: `Mini-pelle 1,2 t polyvalente — version P.`,
    intro: `La Sonca SJW-12 P est une mini-pelle de 1,2 tonne de la série SJW-12, adaptée au terrassement courant. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [],
    sections: [],
    specs: [],
    images: [],
  },

  "X-MP-XC06S": {
    tagline: `Mini-pelle compacte d'entrée de gamme.`,
    intro: `La Xcavator XC06S est une mini-pelle compacte d'entrée de gamme, pensée pour le terrassement léger et l'aménagement extérieur. Excellent rapport capacité/prix. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [],
    sections: [],
    specs: [],
    images: [],
  },

  "X-MP-XC25-2C": {
    tagline: `La plus capable de la gamme.`,
    intro: `La Xcavator XC25U-2C est la mini-pelle la plus performante du catalogue, destinée aux chantiers de terrassement exigeants — BTP, terrassement, location. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [],
    sections: [],
    specs: [],
    images: [],
  },

};
