// 📁 /produit-data.js — LE SEUL FICHIER À ÉDITER pour le contenu des fiches.
// Axonaut fournit nom / prix / stock. Ici : tagline, intro, sections, specs, photos.
// Clé = référence Axonaut (product_code).
//
// PHOTOS : déposer les fichiers dans le repo sous /images/... puis lister les chemins.
// SPECS  : groupées -> [{ group, rows:[{label,value}] }]  (ou simple [{label,value}]).

module.exports = {

  // ───────────────────────── SONCA SJW-06 ─────────────────────────
  "SMP06": {
    tagline: `Micro pelle ultra-compacte, transportable en permis B.`,
    intro: `La mini pelleteuse SJW-06 est la micro pelle la plus compacte de la gamme SONCA avec seulement 700 mm de largeur et 660 kg. Elle se faufile partout : portails de jardin, passages étroits, cours intérieures. Équipée du moteur Longxin G300FD Euro 5 de 8,5 CV, elle offre une puissance suffisante pour les travaux de terrassement léger, l'aménagement paysager et le creusement de tranchées.`,
    stats: [
      { value: "660 kg", label: "Poids opérationnel" },
      { value: "Poste ouvert", label: "Type de cabine" },
      { value: "8,5 CV", label: "Puissance moteur" },
      { value: "1,09 m", label: "Profondeur d'excavation" },
    ],
    sections: [
      { title: "Compacte, légère et transportable facilement",
        body: `La SJW-06 pèse seulement 660 kg, ce qui la rend transportable sur une simple remorque avec un véhicule de permis B. Son châssis compact et ses chenilles de 150 mm offrent stabilité et maniabilité sur tous types de sols. Le poste de conduite ouvert assure une visibilité totale à 360° (canopy disponible en option).`,
        features: [
          { title: "Transportable permis B", text: "Avec 660 kg, elle se charge sur une remorque standard. Aucun permis spécial nécessaire pour le transport." },
          { title: "Poste de conduite ouvert", text: "Visibilité optimale à 360° et commandes ergonomiques accessibles, même dans les espaces réduits." },
          { title: "Chenilles tout terrain", text: "Chenilles caoutchouc de 150 mm pour une bonne adhérence sans abîmer pelouses et surfaces fragiles." },
        ] },
      { title: "Système hydraulique performant et précis",
        body: `Le système hydraulique utilise une pompe Gear 3+3 délivrant 21,6 L/min à 16 MPa. Ce débit généreux pour cette classe de machine assure des mouvements fluides et précis du bras, du balancier et du godet. Le réservoir hydraulique de 11,4 L garantit une autonomie de travail confortable.`,
        features: [
          { title: "Pompe Gear 3+3", text: "Pompe à engrenages double flux assurant un débit de 21,6 L/min pour des mouvements simultanés fluides." },
          { title: "Pression 16 MPa", text: "Force d'excavation de 3,5 kN au balancier, suffisante pour creuser dans la plupart des sols courants." },
          { title: "Entretien simplifié", text: "Accès facile aux points de maintenance, intervalles d'entretien espacés pour réduire les coûts." },
        ] },
      { title: "Pour particuliers comme professionnels",
        body: `Choix idéal pour les particuliers réalisant eux-mêmes leurs travaux (jardin, terrasse, piscine hors-sol, tranchées) comme pour les paysagistes et artisans intervenant dans des espaces restreints. Sa facilité de transport et sa simplicité d'utilisation en font une micro pelle accessible à tous.`,
        features: [
          { title: "Idéale aménagement paysager", text: "Massifs, tranchées d'arrosage, fondations de murets, plantation d'arbres : elle simplifie les travaux pénibles à la main." },
          { title: "Prix imbattable + garantie 2 ans", text: "Dès 4 125 € HT, garantie pièces 24 mois et SAV basé en France avec stock de pièces détachées." },
          { title: "Accessoires dédiés", text: "Attache rapide, godet de curage, dent ripper, pouce de manutention, râteau : adaptez la machine à vos besoins." },
        ] },
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

  // ───────────────────────── SONCA SJW-12 F ─────────────────────────
  "SMP12F": {
    tagline: `Mini-pelle 1,2 t à flèche orientable de série.`,
    intro: `La SONCA SJW-12 F est la mini-pelle 1,2 tonne polyvalente à flèche orientable de série. Cette fonctionnalité permet d'atteindre des angles impossibles avec une flèche fixe et d'intervenir dans les zones difficiles d'accès sans repositionner la machine. Avec sa largeur d'un mètre et son rayon de pivotement réduit, elle navigue aisément dans les espaces restreints — l'outil idéal pour le terrassement et l'aménagement résidentiel. Moteur KOOP KD192F 10 CV refroidi par air. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1,00 m", label: "Largeur totale" },
      { value: "10 CV", label: "Puissance moteur" },
      { value: "1,65 m", label: "Profondeur d'excavation" },
      { value: "1,49 m", label: "Rayon de pivotement" },
    ],
    sections: [
      { title: "Flèche orientable de série",
        body: `La flèche orientable permet d'atteindre des angles inaccessibles avec une flèche fixe et augmente considérablement la zone de travail sans déplacer la machine. Le cache moteur protège les flexibles hydrauliques pour une plus grande longévité et une maintenance simplifiée.`,
        features: [
          { title: "Maniabilité exceptionnelle", text: "Intervention efficace dans toutes les zones difficiles d'accès, sans repositionner la machine." },
          { title: "Cache moteur protecteur", text: "Protège efficacement les flexibles hydrauliques des éléments extérieurs pour une durabilité accrue." },
          { title: "Moteur KOOP 10 CV", text: "Moteur KOOP KD192F refroidi par air, équilibre entre puissance, fiabilité et facilité d'entretien." },
        ] },
      { title: "Compacte et maniable",
        body: `Avec une largeur de seulement 1 mètre et un rayon de pivotement minimal de 1 490 mm à l'avant, la SJW-12 F navigue aisément autour des obstacles dans les espaces les plus restreints, tout en maximisant la productivité sur les chantiers résidentiels.`,
        features: [
          { title: "Largeur 1 mètre", text: "Passe les accès étroits et les portails de jardin standard." },
          { title: "Pivotement 1 490 mm", text: "Navigation précise autour des obstacles, idéale en milieu résidentiel." },
          { title: "Godet 40 cm inclus", text: "Livrée prête à l'emploi pour les travaux de terrassement courants." },
        ] },
    ],
    // Specs confirmées pour la version F. Tu peux compléter avec sa fiche technique complète.
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Largeur totale", value: "1 000 mm" },
        { label: "Largeur du godet", value: "400 mm" },
      ]},
      { group: "Dimensions de travail", rows: [
        { label: "Profondeur d'excavation max.", value: "1 650 mm" },
        { label: "Rayon de pivotement min. (avant)", value: "1 490 mm" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KOOP KD192F" },
        { label: "Puissance", value: "10 CV" },
        { label: "Refroidissement", value: "Air" },
        { label: "Énergie", value: "Diesel Euro 5" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-avant-droit.webp",    alt: "Mini-pelle Sonca SJW-12 F à flèche orientable, vue avant droit" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-biais-gauche.webp",    alt: "SJW-12 F vue de biais gauche" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-arriere-gauche.webp",  alt: "SJW-12 F arrière gauche" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-moteur.webp",          alt: "SJW-12 F, cache moteur" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 P ─────────────────────────
  "SMP12P": {
    tagline: `La 1,2 t à flèche orientable, finitions haut de gamme.`,
    intro: `La SONCA SJW-12 P est la version aboutie de la gamme compacte 1,2 tonne : flèche orientable, finitions soignées et joysticks hydrauliques intégrés aux accoudoirs du siège pour une ergonomie et une précision optimales. Son rayon de pivotement de 1 490 mm et sa largeur d'un mètre permettent de naviguer dans les espaces les plus restreints. Destinée aux particuliers exigeants et aux chantiers résidentiels soignés, elle conjugue performance technique et esthétique. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 015 kg", label: "Poids opérationnel" },
      { value: "1,00 m", label: "Largeur totale" },
      { value: "10 CV", label: "Puissance moteur" },
      { value: "1,65 m", label: "Profondeur d'excavation" },
    ],
    sections: [
      { title: "Flèche orientable et finitions soignées",
        body: `La SJW-12 P se distingue par sa flèche orientable et ses finitions de qualité. Le système d'orientation renforcé offre maniabilité et précision dans tous les espaces exigus, tandis que le cache moteur esthétique protège l'ensemble des composants.`,
        features: [
          { title: "Flèche orientable renforcée", text: "Système d'orientation durable et précis pour travailler dans les espaces les plus exigus." },
          { title: "Joysticks intégrés", text: "Commandes hydrauliques intégrées aux accoudoirs du siège pour une ergonomie optimale." },
          { title: "Moteur KOOP optimisé", text: "Moteur KOOP KD192F, équilibre entre puissance, fiabilité et facilité d'entretien." },
        ] },
      { title: "Compacte et précise",
        body: `Avec un rayon de pivotement minimal de 1 490 mm et une largeur de seulement 1 mètre, la SJW-12 P se déplace avec une grande précision autour des obstacles. Idéale pour les jardins, cours intérieures et aménagements résidentiels soignés.`,
        features: [
          { title: "Largeur 1 mètre", text: "Accès facilité aux espaces restreints et passages étroits." },
          { title: "Pivotement 1 490 mm", text: "Navigation ultra-précise autour des obstacles." },
          { title: "Pack complet", text: "Livrée avec godet 40 cm, canopy, boîte à outils et filtres." },
        ] },
      { title: "Système hydraulique optimisé",
        body: `Le système hydraulique, renforcé pour supporter la flèche orientable, conserve une grande précision. La pompe Tianjin de 20 L et le godet de terrassement de 40 cm assurent des mouvements fluides et parfaitement contrôlés, même lors des manœuvres d'orientation.`,
        features: [
          { title: "Pompe Tianjin 20 L", text: "Débit généreux pour des mouvements fluides et une bonne productivité." },
          { title: "Godet 40 cm renforcé", text: "Inclus, dimensionné pour les travaux de terrassement courants." },
          { title: "Option pouce manipulateur", text: "Dispositif optionnel sur le balancier, pour saisir tous types de matériaux." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids opérationnel", value: "1 015 kg" },
        { label: "Force d'excavation", value: "1 200 kg" },
        { label: "Longueur totale", value: "2 200 mm" },
        { label: "Largeur totale", value: "1 000 mm" },
        { label: "Hauteur totale", value: "2 240 mm" },
        { label: "Largeur des patins", value: "170 mm" },
        { label: "Largeur du godet", value: "400 mm" },
        { label: "Hauteur de voie", value: "320 mm" },
      ]},
      { group: "Dimensions de travail", rows: [
        { label: "Profondeur d'excavation max.", value: "1 650 mm" },
        { label: "Hauteur d'excavation max.", value: "2 580 mm" },
        { label: "Hauteur de déversement max.", value: "1 750 mm" },
        { label: "Rayon de creusement au sol", value: "2 500 mm" },
        { label: "Rayon de rotation max.", value: "1 100 mm" },
        { label: "Rayon de pivotement min. (avant)", value: "1 490 mm" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KOOP KD192F" },
        { label: "Puissance", value: "10,3 / 11,7 CV" },
        { label: "Régime nominal", value: "3 600 tr/min" },
        { label: "Cylindrée", value: "499 cc" },
        { label: "Énergie", value: "Diesel Euro 5" },
        { label: "Refroidissement", value: "Air" },
        { label: "Type de moteur", value: "Monocylindre" },
        { label: "Consommation", value: "275–280 g/kWh" },
        { label: "Pompe hydraulique", value: "Tianjin" },
        { label: "Débit pompe", value: "20 L" },
        { label: "Réservoir carburant", value: "5,5 L" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-avant-droit.webp",   alt: "Mini-pelle Sonca SJW-12 P à flèche orientable, vue avant droit" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-profil-gauche.webp", alt: "SJW-12 P profil gauche" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-arriere-gauche.webp",alt: "SJW-12 P arrière gauche, système hydraulique" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-moteur.webp",        alt: "SJW-12 P, cache moteur et finitions" },
    ],
  },

  // ───────────── XCAVATOR — à enrichir quand tu auras les infos ─────────────
  "X-MP-XC06S": {
    tagline: `Mini-pelle compacte d'entrée de gamme.`,
    intro: `La Xcavator XC06S est une mini-pelle compacte d'entrée de gamme, pensée pour le terrassement léger et l'aménagement extérieur. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [], images: [],
  },

  "X-MP-XC25-2C": {
    tagline: `La plus capable de la gamme.`,
    intro: `La Xcavator XC25U-2C est la mini-pelle la plus performante du catalogue, destinée aux chantiers de terrassement exigeants. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [], images: [],
  },

};
