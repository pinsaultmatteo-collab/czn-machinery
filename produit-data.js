// 📁 /produit-data.js — LE SEUL FICHIER À ÉDITER pour le contenu des fiches.
// Axonaut fournit nom / prix / stock. Ici : tagline, intro, sections, specs, photos.
// Clé = référence Axonaut (product_code).
//
// PHOTOS : déposer les fichiers dans le repo sous /images/... puis lister les chemins.
// SPECS  : groupées -> [{ group, rows:[{label,value}] }]  (ou simple [{label,value}]).

module.exports = {

  // ───────────────────────── SONCA SJW-06 ─────────────────────────
  "SMPSJW06": {
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
        { label: "Énergie", value: "Essence Euro 5" },
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
      { src: "/images/SONCA/SJW-06/sjw-06-profil.webp",       alt: "Mini-pelle Sonca SJW-06, vue latérale godet à droite" },
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-avant.webp",    alt: "Mini-pelle Sonca SJW-06, vue 3/4 avant" },
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-arriere.webp",  alt: "Sonca SJW-06, vue 3/4 arrière" },
      { src: "/images/SONCA/SJW-06/sjw-06-bras-leve.webp",    alt: "Sonca SJW-06 bras levé" },
      { src: "/images/SONCA/SJW-06/sjw-06-arriere-droit.webp",alt: "Sonca SJW-06, vue arrière droite" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 F ─────────────────────────
  "SMPSJW12F": {
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
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-arriere-gauche.webp",  alt: "SJW-12 F arrière gauche" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-moteur.webp",          alt: "SJW-12 F, cache moteur" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 P ─────────────────────────
  "SMPSJW12P": {
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
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-arriere-gauche.webp",alt: "SJW-12 P arrière gauche, système hydraulique" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-moteur.webp",        alt: "SJW-12 P, cache moteur et finitions" },
    ],
  },

  // ───────────────────────── SONCA SJW-18 PRO ─────────────────────────
  "SMPSJW18PRO": {
    tagline: `Mini-pelle 1,8 t, le bon compromis taille/puissance.`,
    intro: `La SONCA SJW-18 PRO est une mini-pelle 1,8 tonne polyvalente, taillée pour les chantiers de terrassement plus exigeants tout en restant facilement transportable. Robuste et confortable, elle accepte une large gamme d'accessoires. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1,8 t", label: "Force d'excavation" },
      { value: "24 CV", label: "Puissance moteur" },
      { value: "1 271 kg", label: "Poids opérationnel" },
      { value: "2,2 m", label: "Profondeur d'excavation" },
    ],
    sections: [
      { title: "Conception renforcée pour usage intensif",
        body: "Moteur Laidong 385 renforcé de 24 CV et pompe hydraulique Shimadzu haute durabilité : une excavatrice de 1,8 tonne aux composants renforcés pour les chantiers les plus exigeants (BTP, travaux publics, terrassement intensif).",
        features: [
          { title: "Moteur Laidong 385", text: "24 CV tricylindre refroidi par liquide, composants durcis pour un fonctionnement continu." },
          { title: "Pompe Shimadzu 25 l/min", text: "Vérins surdimensionnés et joints haute résistance pour une durabilité maximale." },
          { title: "Capacités d'excavation", text: "Hauteur d'excavation 2,9 m et profondeur 2,2 m maintenues même en usage intensif." },
        ] },
      { title: "Structure ultra-robuste",
        body: "Châssis en acier haute résistance, points de pivot renforcés et largeur de 1,1 m conservant la maniabilité tout en offrant une stabilité accrue.",
        features: [
          { title: "Châssis renforcé", text: "Acier haute résistance, soudures renforcées et protections additionnelles." },
          { title: "Pack pro complet", text: "Godet 40 cm, canopy, boîte à outils et kit de maintenance inclus." },
          { title: "Réservoirs", text: "Carburant 10 L, hydraulique 16 L." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Force d'excavation", value: "1 800 kg" },
        { label: "Longueur totale", value: "2 250 mm" },
        { label: "Largeur totale", value: "1 100 mm" },
        { label: "Hauteur totale", value: "2 200 mm" },
        { label: "Longueur du bras", value: "2 560 mm" },
        { label: "Largeur de la voie", value: "230 mm" },
        { label: "Longueur de la voie", value: "1 500 mm" },
        { label: "Poids opérationnel", value: "1 271 kg" },
        { label: "Largeur du godet", value: "400 mm" },
      ]},
      { group: "Dimensions de travail", rows: [
        { label: "Hauteur d'excavation max.", value: "2 900 mm" },
        { label: "Hauteur de déversement max.", value: "2 400 mm" },
        { label: "Profondeur de creusement max. au sol", value: "2 200 mm" },
        { label: "Rayon de creusement max. au sol", value: "2 600 mm" },
        { label: "Rayon de rotation max.", value: "1 190 mm" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "Laidong 385 renforcé" },
        { label: "Puissance", value: "24 CV" },
        { label: "Énergie", value: "Diesel Euro 5" },
        { label: "Refroidissement", value: "Liquide" },
        { label: "Type de moteur", value: "Tricylindre renforcé" },
        { label: "Pompe hydraulique", value: "Shimadzu" },
        { label: "Débit pompe", value: "25 l/min" },
        { label: "Réservoir carburant", value: "10 L" },
        { label: "Réservoir hydraulique", value: "16 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-profil.webp",  alt: "Mini-pelle Sonca SJW-18 PRO, vue latérale godet à droite" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-avant.webp",   alt: "Mini-pelle Sonca SJW-18 PRO vue avant" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-moteur.webp",  alt: "Sonca SJW-18 PRO moteur" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-pedales.webp", alt: "Sonca SJW-18 PRO pédales et commandes" },
    ],
  },

  // ───────────────────────── SONCA SJW-25 ─────────────────────────
  "SMPSJW25": {
    tagline: `Mini-pelle 2,5 t pour les gros travaux.`,
    intro: `La SONCA SJW-25 est la plus puissante des mini-pelles Sonca avec ses 2,5 tonnes : profondeur d'excavation accrue et force d'arrachage supérieure pour s'attaquer aux chantiers de terrassement les plus ambitieux. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "2,5 t", label: "Force d'excavation" },
      { value: "29 CV", label: "Puissance moteur" },
      { value: "1 725 kg", label: "Poids opérationnel" },
      { value: "2,6 m", label: "Profondeur d'excavation" },
    ],
    sections: [
      { title: "Voies variables et moteur Changchai 29 CV",
        body: "Système exclusif d'ajustement de la largeur des chenilles (1080-1520 mm) pour passer les accès étroits puis se stabiliser sur terrain difficile. Moteur Changchai 390 de 29 CV refroidi par liquide, fiable et sobre.",
        features: [
          { title: "Voies variables 1080-1520 mm", text: "Chenilles étroites pour les passages, larges pour la stabilité maximale." },
          { title: "Moteur Changchai 390", text: "29 CV (20 kW), 4 temps refroidi par liquide, Euro 5." },
          { title: "Flèche orientable", text: "Atteint les zones difficiles d'accès sans repositionner la machine." },
        ] },
      { title: "Maniabilité et moteur de translation protégé",
        body: "Rayon de pivotement arrière réduit à 756 mm et moteur de translation plat intégré au châssis, protégé des chocs pour une durabilité accrue sur terrains difficiles.",
        features: [
          { title: "Rayon arrière 756 mm", text: "Manœuvre dans les espaces les plus exigus." },
          { title: "Moteur de translation protégé", text: "Intégré au châssis, à l'abri des obstacles." },
          { title: "Option pouce manipulateur", text: "Dispositif de 225 mm pour saisir bois, béton, roches." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Force d'excavation", value: "2 500 kg" },
        { label: "Longueur totale", value: "2 700 mm" },
        { label: "Largeur totale", value: "1 300 mm" },
        { label: "Hauteur totale", value: "2 550 mm" },
        { label: "Largeur des patins", value: "250 mm" },
        { label: "Largeur du godet", value: "420 mm" },
        { label: "Longueur de la voie", value: "1 800 mm" },
        { label: "Hauteur de la voie", value: "320 mm" },
        { label: "Poids opérationnel", value: "1 725 kg" },
      ]},
      { group: "Dimensions de travail", rows: [
        { label: "Hauteur d'excavation max.", value: "3 400 mm" },
        { label: "Hauteur de déversement max.", value: "2 673 mm" },
        { label: "Profondeur d'excavation max.", value: "2 600 mm" },
        { label: "Rayon de rotation arrière", value: "756 mm" },
        { label: "Rayon de creusement max.", value: "4 163 mm" },
        { label: "Voies variables", value: "1 080 - 1 520 mm" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "Changchai 390" },
        { label: "Puissance", value: "29 CV (20 kW)" },
        { label: "Énergie", value: "Diesel Euro 5" },
        { label: "Refroidissement", value: "Liquide" },
        { label: "Réservoir carburant", value: "12 L" },
        { label: "Réservoir hydraulique", value: "18 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-profil.webp",          alt: "Mini-pelle Sonca SJW-25, vue latérale godet à droite" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-3-4-avant.webp",      alt: "Mini-pelle Sonca SJW-25, vue 3/4 avant" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-cabine-joysticks.webp", alt: "Sonca SJW-25 cabine et joysticks" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-leviers-pedales.webp",  alt: "Sonca SJW-25 leviers et pédales" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-moteur.webp",           alt: "Sonca SJW-25 moteur" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12JS ─────────────────────────
  "XMP-XC-12-JS": {
    tagline: `Mini-pelle 1,2 t, maniable et endurante.`,
    intro: `La XCAVATOR XC12JS est une mini-pelle 1,2 tonne compacte et maniable, pensée pour le terrassement et l'aménagement dans les espaces restreints. Fiable et facile à prendre en main. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-vue-avant.webp",             alt: "Mini-pelle Xcavator XC12JS vue avant" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-bras-excavation-etendu.webp", alt: "Xcavator XC12JS bras d'excavation étendu" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-siege-cabine.webp",          alt: "Xcavator XC12JS siège et poste de conduite" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-moteur.webp",                alt: "Xcavator XC12JS moteur" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12S ─────────────────────────
  "XMP-XC-12-S": {
    tagline: `Mini-pelle 1,2 t polyvalente.`,
    intro: `La XCAVATOR XC12S est une mini-pelle 1,2 tonne polyvalente, idéale pour les particuliers et artisans cherchant une machine compacte et performante pour le terrassement courant. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant.webp",            alt: "Mini-pelle Xcavator XC12S vue avant" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant-gauche.webp",     alt: "Xcavator XC12S vue avant gauche" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-avant-droit.webp",   alt: "Xcavator XC12S profil avant droit" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-droit-excavation.webp", alt: "Xcavator XC12S en excavation" },
    ],
  },

  // ───────────────────────── XCAVATOR XC18S PRO ─────────────────────────
  "XMP-XC-18-PRO": {
    tagline: `Mini-pelle 1,8 t, performance et confort.`,
    intro: `La XCAVATOR XC18S PRO est une mini-pelle 1,8 tonne qui allie puissance hydraulique et confort de conduite pour les chantiers de terrassement intensifs. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-avant.webp",                 alt: "Mini-pelle Xcavator XC18S PRO vue avant" },
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-profil-droit.webp",          alt: "Xcavator XC18S PRO profil droit" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-vue-ensemble.webp",  alt: "Xcavator XC18S PRO vue d'ensemble" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-moteur.webp",        alt: "Xcavator XC18S PRO moteur" },
    ],
  },

  // ───────────────────────── XCAVATOR XC25S (CANOPY) ─────────────────────────
  "XMP-XC-25-S-C": {
    tagline: `Mini-pelle 2,5 t avec canopy de série.`,
    intro: `La XCAVATOR XC25S est une mini-pelle 2,5 tonnes équipée d'un canopy de protection de série. Conçue pour les gros travaux de terrassement, elle conjugue puissance, stabilité et sécurité de l'opérateur. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-avant-droite.webp",       alt: "Mini-pelle Xcavator XC25S vue avant droite" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-gauche.webp",          alt: "Xcavator XC25S profil gauche" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-arriere-droite.webp",     alt: "Xcavator XC25S vue arrière droite" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-droit-excavation.webp", alt: "Xcavator XC25S en excavation" },
    ],
  },

  // ───────────── XCAVATOR XC06S & XC25U-2C — clés corrigées, photos à fournir ─────────────
  "XMP-XC06S": {
    tagline: `Mini-pelle compacte d'entrée de gamme.`,
    intro: `La XCAVATOR XC06S est une mini-pelle compacte d'entrée de gamme, pensée pour le terrassement léger et l'aménagement extérieur. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ pas d'URL fournie — photos à venir
  },

  "XMP-XC25-2C": {
    tagline: `Mini-pelle 2,5 t, la plus capable de la gamme.`,
    intro: `La XCAVATOR XC25U-2C est l'une des mini-pelles les plus performantes du catalogue, destinée aux chantiers de terrassement exigeants. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ pas d'URL fournie — photos à venir
  },

  // ───────────────────────── SONCA SJ-08EL (tombereau) ─────────────────────────
  "SMTSJ08EL": {
    tagline: `Mini-tombereau chenillé, grande capacité.`,
    intro: `Le SONCA SJ-08EL est un mini-tombereau (mini-dumper) sur chenilles à benne basculante, conçu pour transporter terre, gravats et matériaux sur les terrains les plus difficiles. Sa large capacité en fait un allié des chantiers d'évacuation et d'aménagement. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "800 kg", label: "Poids opérationnel" },
      { value: "0,22 m³", label: "Capacité benne" },
      { value: "10 CV", label: "Puissance moteur" },
      { value: "1,75 m", label: "Hauteur de basculement" },
    ],
    sections: [
      { title: "Moteur diesel 10 CV et chenilles tout-terrain",
        body: "Moteur KD292F diesel de 10 CV (306 cc) à démarrage électrique et chenilles robustes pour transporter des charges lourdes sur terrains accidentés, boueux ou en pente jusqu'à 20°.",
        features: [
          { title: "Moteur KD292F 10 CV", text: "306 cc, démarrage électrique, couple élevé." },
          { title: "Chenilles robustes", text: "Stabilité et adhérence sur tous terrains, pente 20°." },
          { title: "Benne 0,22 m³", text: "Volume total 0,26 m³, hauteur de basculement 1,75 m." },
        ] },
      { title: "Compact, télescopique et facile d'entretien",
        body: "Format 1,98 × 0,87 × 1,68 m et conception télescopique pour les espaces confinés. Conception sans capot facilitant l'accès aux composants et l'entretien.",
        features: [
          { title: "Dimensions compactes", text: "1,98 m × 0,87 m × 1,68 m, 2 vitesses (2,1-4,2 km/h)." },
          { title: "Refroidisseur d'huile", text: "Dissipation thermique optimisée pour l'usage intensif." },
          { title: "Entretien simplifié", text: "Réservoir hydraulique 7 L, accès facilité aux composants." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids opérationnel", value: "800 kg" },
        { label: "Longueur de la machine", value: "1 982 mm" },
        { label: "Largeur de la machine", value: "870 mm" },
        { label: "Hauteur de la machine", value: "1 680 mm" },
        { label: "Distance entre centres chenilles", value: "620 mm" },
        { label: "Dimensions de la benne", value: "1235 × 730 × 590 mm" },
        { label: "Capacité de montée", value: "20°" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Volume de la benne", value: "0,26 m³" },
        { label: "Capacité de chargement", value: "0,22 m³" },
        { label: "Hauteur de levage et basculement", value: "1 750 mm" },
        { label: "Vitesse de déplacement", value: "2,1 - 4,2 km/h" },
        { label: "Nombre de vitesses", value: "2 vitesses" },
        { label: "Système de déplacement", value: "Chenilles" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KD292F Diesel 10 CV" },
        { label: "Cylindrée", value: "306 cc" },
        { label: "Puissance", value: "10 CV" },
        { label: "Énergie", value: "Diesel" },
        { label: "Démarrage", value: "Électrique" },
        { label: "Réservoir carburant", value: "5,3 L" },
        { label: "Réservoir hydraulique", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-droit.webp",   alt: "Mini-tombereau Sonca SJ-08EL profil avant droit" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-deplie.webp",  alt: "Sonca SJ-08EL benne déployée" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-moteur.webp",               alt: "Sonca SJ-08EL moteur" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-manettes.webp",             alt: "Sonca SJ-08EL commandes" },
    ],
  },

  // ───────────────────────── SONCA SJ-05E (tombereau) ─────────────────────────
  "SMTSJ05E": {
    tagline: `Mini-tombereau chenillé compact.`,
    intro: `Le SONCA SJ-05E est un mini-tombereau sur chenilles compact à benne basculante, idéal pour transporter des matériaux dans les espaces restreints et sur sols meubles. Maniable et endurant. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "500 kg", label: "Charge maximale" },
      { value: "0,22 m³", label: "Capacité benne" },
      { value: "6,5 CV", label: "Puissance moteur" },
      { value: "0,95 m", label: "Rayon de braquage" },
    ],
    sections: [
      { title: "Ultra-compact et maniable",
        body: "Mini-dumper de 500 kg de charge au rayon de braquage exceptionnel de 0,95 m. Moteur KD292F diesel de 6,5 CV (200 cc) à double démarrage manuel et électrique.",
        features: [
          { title: "Moteur KD292F 6,5 CV", text: "200 cc, démarrage manuel et électrique." },
          { title: "Rayon de braquage 0,95 m", text: "Agilité maximale dans les espaces étroits." },
          { title: "Chenilles caoutchouc", text: "Charge 500 kg, pente franchissable 20°." },
        ] },
      { title: "Vitesse variable et hydraulique Northern",
        body: "Deux vitesses (1,7 / 3,5 km/h) et soupape de commande multidirectionnelle Northern Hydraulics pour des manœuvres précises et contrôlées.",
        features: [
          { title: "2 vitesses", text: "1,7 / 3,5 km/h selon les besoins du chantier." },
          { title: "Commande Northern", text: "Manœuvrabilité précise et sécurité accrue." },
          { title: "Réservoir hydraulique 7 L", text: "Mouvements fluides même en usage intensif." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids", value: "500 kg" },
        { label: "Longueur hors tout", value: "1 517 mm" },
        { label: "Largeur hors tout", value: "870 mm" },
        { label: "Hauteur totale", value: "1 278 mm" },
        { label: "Rayon de braquage min.", value: "950 mm" },
        { label: "Entraxe de piste", value: "520 mm" },
        { label: "Garde au sol min.", value: "85 mm" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Capacité de chargement max.", value: "500 kg" },
        { label: "Volume de chargement benne", value: "0,22 m³" },
        { label: "Dimensions benne", value: "1040 × 730 × 590 mm" },
        { label: "Pente max. franchissable", value: "20°" },
        { label: "Vitesse de marche", value: "1,7 / 3,5 km/h" },
        { label: "Nombre de vitesses", value: "2 vitesses" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KD292F Diesel 6,5 CV" },
        { label: "Puissance", value: "6,5 CV" },
        { label: "Cylindrée", value: "200 cc" },
        { label: "Énergie", value: "Diesel" },
        { label: "Poids moteur", value: "16 kg" },
        { label: "Démarrage", value: "Manuel et électrique" },
        { label: "Réservoir carburant", value: "3,1 L" },
        { label: "Réservoir hydraulique", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-profil-gauche.webp",       alt: "Mini-tombereau Sonca SJ-05E profil gauche" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-biais-arriere-droit.webp", alt: "Sonca SJ-05E vue de biais arrière droit" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-chenilles.webp",           alt: "Sonca SJ-05E chenilles" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-moteur.webp",              alt: "Sonca SJ-05E moteur" },
    ],
  },

  // ───────────────────────── SONCA SJ-05EL (tombereau) ─────────────────────────
  "SMTSJ05EL": {
    tagline: `Mini-tombereau chenillé, benne relevable.`,
    intro: `Le SONCA SJ-05EL est un mini-tombereau sur chenilles à benne relevable, pour décharger en hauteur (remorque, big-bag, conteneur). Compact et tout-terrain, il facilite l'évacuation des matériaux sur chantier. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "500 kg", label: "Charge maximale" },
      { value: "0,15 m³", label: "Capacité benne" },
      { value: "10 CV", label: "Puissance moteur" },
      { value: "1,35 m", label: "Hauteur de déchargement" },
    ],
    sections: [
      { title: "Dumper télescopique 10 CV",
        body: "Mini-tombereau télescopique au moteur KD292F diesel de 10 CV, benne de 0,15 m³ (volume total 0,22 m³) et capacité de 500 kg pour un transport efficace sur chantier.",
        features: [
          { title: "Moteur KD292F 10 CV", text: "Diesel, démarrage électrique, 2 vitesses (1,7-3,5 km/h)." },
          { title: "Système télescopique", text: "Hauteur de déchargement 1,35 m, idéal en espace restreint." },
          { title: "Benne 0,15 m³", text: "Volume total 0,22 m³, charge 500 kg." },
        ] },
      { title: "Tout-terrain et facile d'entretien",
        body: "Chenilles pour une traction stable sur sols accidentés, boueux ou glissants. Capot moteur à grand angle d'ouverture pour un entretien quotidien simplifié.",
        features: [
          { title: "Traction tous terrains", text: "Chenilles, pente franchissable 20°." },
          { title: "Entretien facilité", text: "Capot à grande ouverture, refroidisseur d'huile." },
          { title: "Compact", text: "1,57 m × 0,87 m × 1,66 m, rayon de braquage 0,95 m." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids opérationnel", value: "500 kg" },
        { label: "Poids net", value: "430 kg" },
        { label: "Longueur de la machine", value: "1 566 mm" },
        { label: "Largeur de la machine", value: "870 mm" },
        { label: "Hauteur de la machine", value: "1 660 mm" },
        { label: "Rayon de braquage min.", value: "950 mm" },
        { label: "Distance entre centres chenilles", value: "520 mm" },
        { label: "Garde au sol min.", value: "85 mm" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Capacité de chargement max.", value: "500 kg" },
        { label: "Capacité de chargement benne", value: "0,15 m³" },
        { label: "Volume total benne", value: "0,22 m³" },
        { label: "Dimensions benne", value: "1040 × 730 × 590 mm" },
        { label: "Hauteur de déchargement", value: "1 350 mm" },
        { label: "Capacité de pente", value: "20°" },
        { label: "Vitesse", value: "1,7 - 3,5 km/h" },
        { label: "Nombre de vitesses", value: "2 vitesses" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KD292F Diesel 10 CV" },
        { label: "Puissance", value: "10 CV" },
        { label: "Énergie", value: "Diesel" },
        { label: "Démarrage", value: "Électrique" },
        { label: "Refroidissement", value: "Air" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-avant-droit.webp",  alt: "Mini-tombereau Sonca SJ-05EL profil avant droit" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit.webp",        alt: "Sonca SJ-05EL profil droit" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit-releve.webp", alt: "Sonca SJ-05EL benne relevée" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-moteur.webp",              alt: "Sonca SJ-05EL moteur" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-manettes.webp",            alt: "Sonca SJ-05EL commandes" },
    ],
  },

  // ───────────────────────── SONCA SJ-05M (tombereau) ─────────────────────────
  "SMTSJ05M": {
    tagline: `Mini-tombereau chenillé maniable.`,
    intro: `Le SONCA SJ-05M est un mini-tombereau sur chenilles à benne basculante, pensé pour la maniabilité et la simplicité d'utilisation sur les petits et moyens chantiers. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "500 kg", label: "Charge maximale" },
      { value: "0,22 m³", label: "Capacité benne" },
      { value: "6,5 CV", label: "Puissance moteur" },
      { value: "0,95 m", label: "Rayon de braquage" },
    ],
    sections: [
      { title: "Le dumper essentiel, simple et fiable",
        body: "Version essentielle du mini-tombereau : moteur KD292F diesel de 6,5 CV (200 cc), une vitesse de 1,7 km/h et un rayon de braquage de 0,95 m. Capacité de charge de 500 kg pour le transport sur terrains difficiles.",
        features: [
          { title: "Moteur KD292F 6,5 CV", text: "200 cc, démarrage manuel, performances constantes." },
          { title: "Rayon de braquage 0,95 m", text: "Se glisse dans les endroits difficiles d'accès." },
          { title: "Chenilles caoutchouc", text: "Charge 500 kg, pente franchissable 20°." },
        ] },
      { title: "Benne compacte et transmission Northern",
        body: "Benne de 1040 × 730 × 590 mm (0,22 m³) et transmission hydraulique Northern Hydraulics réputée pour sa robustesse et sa précision.",
        features: [
          { title: "Benne 0,22 m³", text: "Gravier, terre, pierres, compost transportés sans effort." },
          { title: "Transmission Northern", text: "Manœuvres fluides et contrôlées, durabilité accrue." },
          { title: "Réservoir hydraulique 7 L", text: "Mouvements fluides pour une efficacité maximale." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids", value: "400 kg" },
        { label: "Longueur hors tout", value: "1 517 mm" },
        { label: "Largeur hors tout", value: "870 mm" },
        { label: "Hauteur totale", value: "1 278 mm" },
        { label: "Rayon de braquage min.", value: "950 mm" },
        { label: "Entraxe de piste", value: "520 mm" },
        { label: "Garde au sol min.", value: "85 mm" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Capacité de chargement max.", value: "500 kg" },
        { label: "Volume de chargement benne", value: "0,22 m³" },
        { label: "Dimensions benne", value: "1040 × 730 × 590 mm" },
        { label: "Pente max. franchissable", value: "20°" },
        { label: "Vitesse de marche", value: "1,7 km/h" },
        { label: "Nombre de vitesses", value: "1 vitesse" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KD292F Diesel 6,5 CV" },
        { label: "Puissance", value: "6,5 CV" },
        { label: "Cylindrée", value: "200 cc" },
        { label: "Énergie", value: "Diesel" },
        { label: "Démarrage", value: "Manuel" },
        { label: "Réservoir carburant", value: "3,1 L" },
        { label: "Réservoir hydraulique", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-vue-ensemble.webp", alt: "Mini-tombereau Sonca SJ-05M vue d'ensemble" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-chenilles.webp",    alt: "Sonca SJ-05M chenilles" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-moteur.webp",       alt: "Sonca SJ-05M moteur" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-manettes.webp",     alt: "Sonca SJ-05M commandes" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 W (chargeur) ─────────────────────────
  "SMCSJ460W": {
    tagline: `Mini-chargeur sur roues, compact et puissant.`,
    intro: `Le SONCA SJ-460 W est un mini-chargeur articulé sur roues, idéal pour la manutention, le chargement et les travaux d'aménagement. Compact, il se faufile partout et accepte de nombreux accessoires (godet, fourches…). Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 000 kg", label: "Poids total" },
      { value: "400 kg", label: "Charge maximale" },
      { value: "0,12 m³", label: "Capacité godet" },
      { value: "2,45 m", label: "Hauteur de levée" },
    ],
    sections: [
      { title: "Moteur KOOP 23 CV et système à roues",
        body: "Moteur KOOP bicylindre de 23 CV (639 cc) Euro 5 et roues 18×8.5×8 offrant une excellente adhérence et une mobilité rapide sur terrains variés, réguliers ou accidentés.",
        features: [
          { title: "Moteur KOOP bicylindre", text: "23 CV, 639 cc, 3600 tr/min, norme Euro 5." },
          { title: "Système à roues", text: "Roues 18×8.5×8 pour une mobilité fluide et rapide." },
          { title: "Godet 0,12 m³", text: "Charge max 400 kg, hauteur de travail 2,45 m." },
        ] },
      { title: "Compact et hydraulique performant",
        body: "Format 2,2 × 1,1 × 1,28 m pour les espaces restreints, avec un système hydraulique de 17-21 Bar et une force de levage de 4,5 kN.",
        features: [
          { title: "Dimensions compactes", text: "2,2 m × 1,1 m × 1,28 m, garde au sol 150 mm." },
          { title: "Force de levage 4,5 kN", text: "Hauteur de déchargement 1,51 m." },
          { title: "Angles de travail", text: "Inclinaison 38°, ouverture 82°, déversement 34°." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids total", value: "1 000 kg" },
        { label: "Hauteur de la machine", value: "1 280 mm" },
        { label: "Longueur totale", value: "1 680 mm" },
        { label: "Longueur avec godet standard", value: "2 206 mm" },
        { label: "Largeur", value: "1 100 mm" },
        { label: "Largeur du godet", value: "1 000 mm" },
        { label: "Empattement", value: "850 mm" },
        { label: "Garde au sol", value: "150 mm" },
        { label: "Dimensions roues", value: "18×8.5×8" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Charge maximale", value: "400 kg" },
        { label: "Capacité du godet", value: "0,12 m³" },
        { label: "Force de levage max.", value: "4,5 kN" },
        { label: "Vitesse maximale", value: "0 - 6 km/h" },
        { label: "Hauteur de travail max.", value: "2 450 mm" },
        { label: "Hauteur de déchargement max.", value: "1 510 mm" },
        { label: "Angle d'inclinaison (position basse)", value: "38°" },
        { label: "Angle d'ouverture (position haute)", value: "82°" },
        { label: "Angle max. de déversement", value: "34°" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KOOP bicylindre" },
        { label: "Puissance nominale", value: "23 CV" },
        { label: "Cylindrée", value: "639 cc" },
        { label: "Vitesse nominale", value: "3 600 tr/min" },
        { label: "Norme moteur", value: "Euro 5" },
        { label: "Pression", value: "17 - 21 Bar" },
        { label: "Réservoir carburant", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-profil.webp",             alt: "Mini-chargeur Sonca SJ-460 W profil" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-biais.webp",              alt: "Sonca SJ-460 W vue de biais" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-moteur.webp",             alt: "Sonca SJ-460 W moteur" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-panneau-de-controle.webp",alt: "Sonca SJ-460 W panneau de contrôle" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-radiateur.webp",          alt: "Sonca SJ-460 W radiateur" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 T (chargeur chenillé) ─────────────────────────
  "SMCSJ460T": {
    tagline: `Mini-chargeur sur chenilles, tout-terrain.`,
    intro: `Le SONCA SJ-460 T est la version chenillée du mini-chargeur compact : meilleure motricité et stabilité sur sols meubles ou difficiles, pour la manutention et le chargement sur tous terrains. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 000 kg", label: "Poids total" },
      { value: "400 kg", label: "Charge maximale" },
      { value: "0,12 m³", label: "Capacité godet" },
      { value: "30 %", label: "Pente franchissable" },
    ],
    sections: [
      { title: "Chenilles tout-terrain et moteur KOOP 23 CV",
        body: "Version chenillée du chargeur compact : chenilles de 720 mm (18×72) pour une adhérence exceptionnelle sur sols meubles, boueux ou accidentés, avec une pente franchissable de 30 %.",
        features: [
          { title: "Moteur KOOP bicylindre", text: "23 CV, 639 cc, 3600 tr/min, Euro 5." },
          { title: "Chenilles 720 mm", text: "Adhérence maximale, pente franchissable de 30 %." },
          { title: "Godet 0,12 m³", text: "Charge max 400 kg, hauteur de travail 2,45 m." },
        ] },
      { title: "Compact et endurant",
        body: "Format 2,2 × 1,1 × 1,28 m et composants robustes pour les espaces étroits et les chantiers exigeants, avec hydraulique de 17-21 Bar et force de levage de 4,5 kN.",
        features: [
          { title: "Dimensions compactes", text: "2,2 m × 1,1 m × 1,28 m, garde au sol 150 mm." },
          { title: "Force de levage 4,5 kN", text: "Hauteur de déchargement 1,51 m." },
          { title: "Robustesse", text: "Composants renforcés pour une longévité accrue." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids total", value: "1 000 kg" },
        { label: "Hauteur de la machine", value: "1 280 mm" },
        { label: "Longueur totale", value: "1 680 mm" },
        { label: "Longueur avec godet standard", value: "2 206 mm" },
        { label: "Largeur", value: "1 100 mm" },
        { label: "Largeur des chenilles", value: "720 mm" },
        { label: "Taille des chenilles", value: "18×72" },
        { label: "Largeur du godet", value: "1 000 mm" },
        { label: "Empattement", value: "850 mm" },
        { label: "Garde au sol", value: "150 mm" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Charge maximale", value: "400 kg" },
        { label: "Capacité du godet", value: "0,12 m³" },
        { label: "Force de levage max.", value: "4,5 kN" },
        { label: "Hauteur de travail max.", value: "2 450 mm" },
        { label: "Hauteur de déchargement max.", value: "1 510 mm" },
        { label: "Angle d'inclinaison (position basse)", value: "38°" },
        { label: "Angle d'ouverture (position haute)", value: "82°" },
        { label: "Pente max. franchissable", value: "30 %" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KOOP bicylindre" },
        { label: "Puissance nominale", value: "23 CV" },
        { label: "Cylindrée", value: "639 cc" },
        { label: "Vitesse nominale", value: "3 600 tr/min" },
        { label: "Norme moteur", value: "Euro 5" },
        { label: "Pression", value: "17 - 21 Bar" },
        { label: "Réservoir carburant", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-profil-leve.webp",         alt: "Mini-chargeur Sonca SJ-460 T benne levée" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-moteur.webp",              alt: "Sonca SJ-460 T moteur" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-radiateur.webp",           alt: "Sonca SJ-460 T radiateur" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-tableau-de-commandes.webp",alt: "Sonca SJ-460 T tableau de commandes" },
    ],
  },

  // ───────────────────────── SONCA SJ-490 W (chargeur) ─────────────────────────
  "SMCSJ490W": {
    tagline: `Mini-chargeur sur roues, montée en puissance.`,
    intro: `Le SONCA SJ-490 W est un mini-chargeur articulé sur roues plus puissant, pour les travaux de manutention et de chargement plus intensifs tout en restant compact et maniable. Importé en direct par CZN Machinery, garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 100 kg", label: "Poids total" },
      { value: "250 kg", label: "Charge nominale" },
      { value: "0,12 m³", label: "Capacité godet" },
      { value: "2,47 m", label: "Hauteur de levée" },
    ],
    sections: [
      { title: "Moteur KOOP 15 kW et siège opérateur",
        body: "Chargeur sur pneus avec siège intégré pour le confort lors des longues sessions. Moteur KOOP de 15 kW (639 cc) Euro 5 pour une bonne mobilité sur tous terrains.",
        features: [
          { title: "Moteur KOOP 15 kW", text: "639 cc, 3600 tr/min, norme Euro 5." },
          { title: "Siège opérateur intégré", text: "Confort et ergonomie pour les sessions prolongées." },
          { title: "Godet 0,12 m³", text: "Hauteur de travail 2,47 m, déchargement 1,38 m." },
        ] },
      { title: "Compact et hydraulique 18 MPa",
        body: "Format 2,75 × 1,1 × 1,28 m avec siège, pression hydraulique nominale de 18 MPa et mobilité sur pneus pour une bonne polyvalence.",
        features: [
          { title: "Dimensions compactes", text: "2,75 m × 1,1 m × 1,28 m, garde au sol 170 mm." },
          { title: "Pression 18 MPa", text: "Mouvements fluides et réactifs." },
          { title: "Vitesse 0-5,5 km/h", text: "Contrôle précis sur tous terrains." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Longueur sans godet", value: "2 222 mm" },
        { label: "Longueur avec godet", value: "2 750 mm" },
        { label: "Largeur", value: "1 100 mm" },
        { label: "Hauteur", value: "1 280 mm" },
        { label: "Largeur du godet", value: "1 050 mm" },
        { label: "Distance entre roues", value: "623 mm" },
        { label: "Garde au sol", value: "170 mm" },
        { label: "Poids total", value: "1 100 kg" },
        { label: "Capacité de charge nominale", value: "250 kg" },
      ]},
      { group: "Performances de travail", rows: [
        { label: "Capacité du godet", value: "0,12 m³" },
        { label: "Hauteur de travail max.", value: "2 466 mm" },
        { label: "Hauteur de déchargement max.", value: "1 382 mm" },
        { label: "Hauteur jusqu'au pivot du godet", value: "1 877 mm" },
        { label: "Vitesse", value: "0 - 5,5 km/h" },
        { label: "Angle d'inclinaison (position basse)", value: "20°" },
        { label: "Angle d'ouverture (position haute)", value: "35°" },
      ]},
      { group: "Mécanique", rows: [
        { label: "Moteur", value: "KOOP" },
        { label: "Puissance nominale", value: "15 kW" },
        { label: "Cylindrée", value: "639 cc" },
        { label: "Vitesse nominale", value: "3 600 tr/min" },
        { label: "Norme moteur", value: "Euro 5" },
        { label: "Pression nominale", value: "18 MPa" },
        { label: "Réservoir carburant", value: "15 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-profil-droit-leve.webp", alt: "Mini-chargeur Sonca SJ-490 W benne levée" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-moteur.webp",            alt: "Sonca SJ-490 W moteur" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-radiateur.webp",         alt: "Sonca SJ-490 W radiateur" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-manettes.webp",          alt: "Sonca SJ-490 W commandes" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-siege.webp",             alt: "Sonca SJ-490 W siège" },
    ],
  },

  // ───────────────────────── REMORQUE 1.5T (Temared MultiTransporter 3318 C) ─────────────────────────
  "REM-1.5T": {
    tagline: `Remorque plateau basculante 1,5 T pour engins et matériaux.`,
    intro: `La remorque CZN 1,5 T (Temared MultiTransporter 3318 C) est une remorque plateau polyvalente pour le transport de mini-engins, motos, quads et matériaux. Plateau en contreplaqué antidérapant de 3,30 × 1,84 m, châssis en acier galvanisé boulonné et système basculant pour un chargement facilité. PTAC 1 500 kg : idéale pour transporter une micro-pelle ou un mini-chargeur. Importée et garantie par CZN Machinery, livraison dans toute la France.`,
    stats: [
      { value: "1 500 kg", label: "PTAC" },
      { value: "1 160 kg", label: "Charge utile" },
      { value: "3,30 × 1,84 m", label: "Plateau" },
      { value: "340 kg", label: "Poids à vide" },
    ],
    sections: [
      { title: "Plateau basculant, chargement facile",
        body: `Le système basculant incline le plateau pour charger un engin sans rampe externe. Le plancher en contreplaqué imperméable et antidérapant de 3,30 m × 1,84 m accueille mini-pelles, motos, quads et matériel de chantier.`,
        features: [
          { title: "Plateau 3,30 × 1,84 m", text: "Surface généreuse pour les engins compacts et le matériel." },
          { title: "Contreplaqué antidérapant", text: "Plancher imperméable, robuste et sûr pour l'arrimage." },
          { title: "Basculement intégré", text: "Inclinaison du plateau pour un chargement sans rampe additionnelle." },
        ] },
      { title: "Châssis galvanisé, durable",
        body: `Châssis en sections d'acier galvanisé boulonnées : résistance à la corrosion et longévité, même en usage intensif et par tous les temps.`,
        features: [
          { title: "Acier galvanisé", text: "Protection anticorrosion pour une durée de vie prolongée." },
          { title: "Construction boulonnée", text: "Entretien et remplacement de pièces simplifiés." },
          { title: "PTAC 1 500 kg", text: "Tractable avec un véhicule et un permis adaptés." },
        ] },
    ],
    specs: [
      { group: "Capacités", rows: [
        { label: "PTAC", value: "1 500 kg" },
        { label: "Charge utile", value: "~1 160 kg" },
        { label: "Poids à vide", value: "~340 kg" },
      ]},
      { group: "Dimensions", rows: [
        { label: "Longueur plateau", value: "3 300 mm" },
        { label: "Largeur plateau", value: "1 840 mm" },
      ]},
      { group: "Construction", rows: [
        { label: "Châssis", value: "Acier galvanisé boulonné" },
        { label: "Plateau", value: "Contreplaqué imperméable antidérapant" },
        { label: "Type", value: "Basculant" },
      ]},
      { group: "Roulement", rows: [
        { label: "Pneus", value: "185 R14C" },
      ]},
    ],
    option: { label: "Roue de secours + support", desc: "Roue 185 R14C + support de fixation complet", refs: ["REM-ROUE-185-R14C", "REM-SUPPORT-ROUE-DE-SECOURS-COMPLET"] },
    images: [
      { src: "/images/remorques/REM-1.5T/remorque-1-5t-avant.webp",   alt: "Remorque CZN Machinery 1,5 T basculante, vue avant 3/4" },
      { src: "/images/remorques/REM-1.5T/remorque-1-5t-arriere.webp", alt: "Remorque CZN 1,5 T MultiTransporter, vue arrière" },
    ],
  },

  // ───────────────────────── REMORQUE 2.7T (Temared Builder 3 2615/2 S) ─────────────────────────
  "REM-2.7T": {
    tagline: `Remorque double essieu 2,7 T pour engins et charges lourdes.`,
    intro: `La remorque CZN 2,7 T (Temared Builder 3 2615/2 S) est une remorque robuste à châssis soudé pour le transport de mini-pelles, mini-chargeurs et matériaux lourds. Plateau contreplaqué antidérapant de 2,60 × 1,50 m, timon en V renforcé, roue jockey à pliage automatique et rampe basculante pour le chargement d'engins. PTAC 2 700 kg, double essieu. Importée et garantie par CZN Machinery, livraison France.`,
    stats: [
      { value: "2 700 kg", label: "PTAC" },
      { value: "2 178 kg", label: "Charge utile" },
      { value: "2,60 × 1,50 m", label: "Plateau" },
      { value: "Double essieu", label: "Configuration" },
    ],
    sections: [
      { title: "Conçue pour les charges lourdes",
        body: `Châssis porteur soudé en profilés d'acier fermés : la remorque encaisse le transport de mini-engins et de matériaux très lourds, jusqu'à 2,7 tonnes de PTAC.`,
        features: [
          { title: "Châssis soudé", text: "Profilés acier fermés pour une rigidité maximale." },
          { title: "Charge utile ~2 178 kg", text: "De quoi transporter une mini-pelle de 2 à 2,5 t." },
          { title: "Double essieu", text: "Stabilité et répartition de charge sur les longs trajets." },
        ] },
      { title: "Chargement d'engins facilité",
        body: `Rampe basculante et marche sur les côtés pour charger une mini-pelle ou un mini-chargeur en sécurité. Timon en V extrêmement robuste et roue jockey à pliage automatique.`,
        features: [
          { title: "Rampe basculante", text: "Montée des engins en douceur, ressorts d'assistance au relevage." },
          { title: "Timon en V renforcé", text: "Robustesse et tenue de route, supports stabilisateurs." },
          { title: "Plancher antidérapant", text: "Contreplaqué imperméable avec clips de sécurisation." },
        ] },
    ],
    specs: [
      { group: "Capacités", rows: [
        { label: "PTAC", value: "2 700 kg" },
        { label: "Charge utile", value: "~2 178 kg" },
        { label: "Poids à vide", value: "~522 kg" },
      ]},
      { group: "Dimensions", rows: [
        { label: "Longueur plateau", value: "2 600 mm" },
        { label: "Largeur plateau", value: "1 503 mm" },
      ]},
      { group: "Construction", rows: [
        { label: "Châssis", value: "Acier soudé (profilés fermés)" },
        { label: "Plateau", value: "Contreplaqué imperméable antidérapant" },
        { label: "Timon", value: "En V renforcé + roue jockey à pliage automatique" },
        { label: "Chargement", value: "Rampe basculante" },
      ]},
      { group: "Roulement", rows: [
        { label: "Essieux", value: "Double essieu" },
        { label: "Pneus", value: "195/50 R13C" },
        { label: "Entraxe", value: "5 × 112" },
      ]},
    ],
    option: { label: "Roue de secours + support", desc: "Roue 195/50 R13C + support de fixation complet", refs: ["REM-ROUE-195/50", "REM-SUPPORT-ROUE-DE-SECOURS-COMPLET"] },
    images: [
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-avant.webp",          alt: "Remorque CZN Machinery 2,7 T double essieu, vue avant 3/4" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-face.webp",           alt: "Remorque CZN 2,7 T Builder, vue de face" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-arriere.webp",        alt: "Remorque CZN 2,7 T, vue arrière" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-rampe.webp",          alt: "Remorque CZN 2,7 T avec rampe basculante ouverte" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-arriere-fermee.webp", alt: "Remorque CZN 2,7 T plateau fermé, vue arrière" },
    ],
  },

  // ───────────────────────── XCAVATOR XC13P (1,15 t) ─────────────────────────
  "XMPXC13P": {
    tagline: `Mini-pelle 1,15 t à bras déporté — l'essentiel performant, transportable en permis B.`,
    intro: `La mini-pelle Xcavator XC13P est la mini-pelle 1,15 tonne d'entrée de gamme idéale pour les particuliers et les artisans. Avec son poids à vide de seulement 1 150 kg, elle se transporte sur une remorque standard avec un véhicule de permis B. Son bras déporté (swing boom) de série permet de creuser le long des murs et des clôtures sans déplacer la machine. Motorisation Koop 192F mono-cylindre Euro 5, commande hydraulique au joystick (pilot) et toit de protection 4 montants (ROPS). Importée en direct par CZN Machinery : garantie constructeur 2 ans, livraison dans toute la France.`,
    stats: [
      { value: "1 150 kg", label: "Poids à vide" },
      { value: "Koop 192F", label: "Moteur Euro 5" },
      { value: "Bras déporté", label: "Swing boom de série" },
      { value: "40 cm", label: "Godet standard" },
    ],
    sections: [
      { title: "Compacte et transportable en permis B",
        body: `Avec 1 150 kg sur la balance, la XC13P se charge sur une remorque classique tractée par un véhicule de permis B : aucun convoi spécial, aucun poids lourd. Ses chenilles caoutchouc ménagent les sols fragiles (pelouses, dallages) tout en assurant l'adhérence sur terrain meuble. La machine idéale pour les accès étroits, les jardins clos et les chantiers de rénovation.`,
        features: [
          { title: "Transport facile", text: "1 150 kg : remorque standard + permis B suffisent. Chargement par rampes, pas de logistique lourde." },
          { title: "Chenilles caoutchouc", text: "Bonne accroche sur terrain meuble sans abîmer pelouses, terrasses et surfaces délicates." },
          { title: "Toit 4 montants (ROPS)", text: "Structure de protection au retournement homologuée, pour travailler en sécurité." },
        ] },
      { title: "Bras déporté et hydraulique prête à travailler",
        body: `Le bras déporté (swing boom) pivote pour creuser au plus près des murs, fondations et clôtures sans repositionner la machine. La commande hydraulique au joystick (pilot) offre des mouvements doux et précis. Le moteur de rotation renforcé apporte un couple supérieur pour les travaux les plus exigeants, et le pouce hydraulique (grappin de tri) est livré de série.`,
        features: [
          { title: "Swing boom de série", text: "Creusez le long des murs et en limite de propriété sans déplacer l'engin." },
          { title: "Pouce hydraulique inclus", text: "Grappin de tri livré de série pour manipuler pierres, souches et gravats." },
          { title: "Pack sécurité complet", text: "Arrêt d'urgence, siège à contacteur de présence, rétroviseur et alarme de recul de série." },
        ] },
      { title: "Pour les particuliers comme les pros",
        body: `Terrassement léger, tranchées, aménagement paysager, fondations de murets, plantation : la XC13P abat le travail manuel pénible à un prix d'entrée de gamme. Garantie 2 ans, SAV et stock de pièces en France. Délai indicatif de livraison : 20 à 25 jours.`,
        features: [
          { title: "Polyvalente", text: "Idéale pour le jardin, la rénovation et les petits chantiers de terrassement." },
          { title: "Garantie 2 ans", text: "Garantie constructeur 24 mois, pièces détachées et SAV basés en France." },
          { title: "Accessoires en option", text: "Attache rapide semi-automatique, godets dédiés (20 cm à dents, 100 cm de curage) disponibles en supplément." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids à vide", value: "1 150 kg" },
        { label: "Godet standard", value: "40 cm" },
        { label: "Train de roulement", value: "Chenilles caoutchouc" },
        { label: "Protection", value: "Toit 4 montants (ROPS)" },
        { label: "Délai indicatif", value: "20 à 25 jours" },
      ]},
      { group: "Motorisation & commande", rows: [
        { label: "Moteur", value: "Koop 192F – mono-cylindre" },
        { label: "Norme antipollution", value: "Euro 5" },
        { label: "Commande", value: "Hydraulique (joystick pilot)" },
        { label: "Bras", value: "Déporté (swing boom)" },
        { label: "Moteur de translation", value: "Caché – simple vitesse" },
      ]},
      { group: "Équipements inclus", rows: [
        { label: "Vérin sur le dessus du bras", value: "Oui" },
        { label: "Moteur de rotation", value: "Renforcé (couple supérieur)" },
        { label: "Pouce hydraulique", value: "Grappin de tri (de série)" },
        { label: "Sécurité", value: "Pack échappement / arrêt d'urgence" },
        { label: "Confort & sécurité", value: "Siège à contacteur de présence, rétroviseur, alarme de recul" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-profil-bras-deporte-deploye.webp", alt: "Mini-pelle Xcavator XC13P 1,15 t, vue latérale bras déporté déployé, godet à droite" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-trois-quarts-avant-droite.webp",   alt: "Mini-pelle Xcavator XC13P, vue trois-quarts avant droite, bras déporté" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-trois-quarts-arriere-droite.webp", alt: "Mini-pelle Xcavator XC13P, vue trois-quarts arrière droite sur chenilles caoutchouc" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-vue-arriere-trois-quarts.webp",    alt: "Mini-pelle Xcavator XC13P, vue arrière trois-quarts, bras replié" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-poste-conduite-toit-rops.webp",    alt: "Mini-pelle Xcavator XC13P, poste de conduite ouvert et toit de protection 4 montants ROPS" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-vue-avant-bras-releve.webp",       alt: "Mini-pelle Xcavator XC13P, vue de face bras relevé, godet 40 cm" },
    ],
  },

  // ───────────────────────── XCAVATOR XC15P (1,25 t) ─────────────────────────
  "XMPXC15P": {
    tagline: `Mini-pelle 1,25 t bi-cylindre — la polyvalence chantier.`,
    intro: `La mini-pelle Xcavator XC15P est la mini-pelle 1,25 tonne pensée pour les chantiers polyvalents. Son moteur Laidong KM385B bi-cylindre Euro 5 offre un surcroît de couple et de souplesse, tandis que ses chenilles 230 × 72 × 44 et sa largeur de 1 160 mm assurent stabilité et passage dans la plupart des accès. Bras déporté (swing boom) de série, commande hydraulique au joystick (pilot) et toit 4 montants (ROPS). Importée en direct par CZN Machinery : garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 250 kg", label: "Poids à vide" },
      { value: "Bi-cylindre", label: "Laidong KM385B Euro 5" },
      { value: "1 160 mm", label: "Largeur machine" },
      { value: "Bras déporté", label: "Swing boom de série" },
    ],
    sections: [
      { title: "Moteur bi-cylindre, plus de couple",
        body: `Le moteur Laidong KM385B bi-cylindre Euro 5 apporte davantage de couple et de douceur que les motorisations mono-cylindre de la classe inférieure. Résultat : des mouvements plus fluides, une meilleure tenue en charge et un confort de travail supérieur sur les longues journées de chantier.`,
        features: [
          { title: "Laidong KM385B", text: "Bi-cylindre Euro 5 : couple généreux et fonctionnement plus souple qu'un mono-cylindre." },
          { title: "Chenilles 230 × 72 × 44", text: "Largeur de semelle généreuse pour une bonne stabilité et une faible pression au sol." },
          { title: "Commande joystick pilot", text: "Pilotage hydraulique précis du bras, du balancier et du godet." },
        ] },
      { title: "Compacte mais stable",
        body: `Avec 1 160 mm de largeur, la XC15P passe la plupart des accès tout en offrant une assise stable. Le bras déporté (swing boom) permet de creuser en limite de mur ou de clôture. Le pouce hydraulique (grappin de tri) est livré de série pour le tri et la manutention.`,
        features: [
          { title: "Largeur 1 160 mm", text: "Compromis idéal entre stabilité au travail et passage dans les accès de chantier." },
          { title: "Swing boom de série", text: "Excavation au plus près des obstacles sans repositionner la machine." },
          { title: "Pouce hydraulique inclus", text: "Grappin de tri de série pour pierres, souches et gravats." },
        ] },
      { title: "Équipée et garantie",
        body: `Vérin sur le dessus du bras, moteur de translation caché, pack échappement et arrêt d'urgence, siège à contacteur de présence, rétroviseur et alarme de recul : la XC15P est livrée prête à travailler. Garantie constructeur 2 ans, SAV et pièces en France. Délai indicatif de livraison : environ 30 jours.`,
        features: [
          { title: "Prête à l'emploi", text: "Équipements de sécurité et de confort de série, godet 40 cm inclus." },
          { title: "Garantie 2 ans", text: "Garantie 24 mois, pièces détachées et SAV basés en France." },
          { title: "Accessoires en option", text: "Attache rapide semi-automatique, godets 20 cm à dents et 120 cm de curage disponibles en supplément." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids à vide", value: "1 250 kg" },
        { label: "Largeur machine", value: "1 160 mm" },
        { label: "Godet standard", value: "40 cm" },
        { label: "Chenilles", value: "230 × 72 × 44" },
        { label: "Protection", value: "Toit 4 montants (ROPS)" },
        { label: "Délai indicatif", value: "≈ 30 jours" },
      ]},
      { group: "Motorisation & commande", rows: [
        { label: "Moteur", value: "Laidong KM385B – bi-cylindre" },
        { label: "Norme antipollution", value: "Euro 5" },
        { label: "Commande", value: "Hydraulique (joystick pilot)" },
        { label: "Bras", value: "Déporté (swing boom)" },
        { label: "Moteur de translation", value: "Caché – simple vitesse" },
      ]},
      { group: "Équipements inclus", rows: [
        { label: "Vérin sur le dessus du bras", value: "Oui" },
        { label: "Pouce hydraulique", value: "Grappin de tri (de série)" },
        { label: "Sécurité", value: "Pack échappement / arrêt d'urgence" },
        { label: "Confort & sécurité", value: "Siège à contacteur de présence, rétroviseur, alarme de recul" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-profil-bras-deporte-deploye.webp", alt: "Mini-pelle Xcavator XC15P 1,25 t, vue latérale bras déporté déployé, godet à droite" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-trois-quarts-avant-droite.webp",   alt: "Mini-pelle Xcavator XC15P, vue trois-quarts avant droite" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-trois-quarts-arriere-droite.webp", alt: "Mini-pelle Xcavator XC15P, vue trois-quarts arrière droite" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-vue-arriere-trois-quarts.webp",    alt: "Mini-pelle Xcavator XC15P, vue arrière trois-quarts, bras replié" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-poste-conduite-toit-rops.webp",    alt: "Mini-pelle Xcavator XC15P, poste de conduite et toit 4 montants ROPS" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-vue-avant-bras-releve.webp",       alt: "Mini-pelle Xcavator XC15P, vue de face bras relevé" },
    ],
  },

  // ───────────────────────── XCAVATOR XC17 PRO V2 (1,45 t) ─────────────────────────
  "XMPXC17PROV2": {
    tagline: `Mini-pelle 1,45 t PRO — voie variable et 2 vitesses de translation.`,
    intro: `La mini-pelle Xcavator XC17 PRO V2 est la version PRO de 1,45 tonne, dotée d'un train de roulement à voie variable (90 à 120 cm) et d'une translation à 2 vitesses. La voie se rétracte pour passer les accès étroits, puis s'élargit pour une stabilité maximale au travail. Hydraulique avancée (3ᵉ circuit / hydraulic advance) pour piloter les accessoires, moteur Laidong KM385B bi-cylindre Euro 5, commande au joystick (pilot) et toit 4 montants (ROPS). Importée en direct par CZN Machinery : garantie 2 ans, livraison France.`,
    stats: [
      { value: "1 450 kg", label: "Poids à vide" },
      { value: "90–120 cm", label: "Voie variable" },
      { value: "2 vitesses", label: "Translation" },
      { value: "3ᵉ circuit", label: "Hydraulique avancée" },
    ],
    sections: [
      { title: "Voie variable : étroite pour passer, large pour travailler",
        body: `Le train de roulement à voie variable se rétracte à 90 cm pour franchir les portails et les accès les plus serrés, puis s'élargit jusqu'à 120 cm pour offrir une stabilité maximale lors du terrassement. Un avantage décisif sur les chantiers en milieu contraint où l'accès et la stabilité semblent incompatibles.`,
        features: [
          { title: "Châssis 90–120 cm", text: "Passe les accès étroits replié, travaille en grande stabilité une fois élargi." },
          { title: "Translation 2 vitesses", text: "Vitesse lente pour la précision, vitesse rapide pour les déplacements sur le chantier." },
          { title: "Moteur de translation caché", text: "Mécanisme protégé des chocs et des projections pour une meilleure longévité." },
        ] },
      { title: "Hydraulique avancée et bras déporté",
        body: `La XC17 PRO V2 reçoit un 3ᵉ circuit hydraulique (hydraulic advance) pour alimenter les accessoires hydrauliques (pouce, tarière, etc.). Le pouce hydraulique (grappin de tri) est livré de série, et le vérin sur le dessus du bras renforce la précision et la force de cavage.`,
        features: [
          { title: "3ᵉ circuit hydraulique", text: "Alimente les accessoires hydrauliques : pouce, tarière, brise-roche léger…" },
          { title: "Pouce hydraulique inclus", text: "Grappin de tri de série pour le tri et la manutention." },
          { title: "Vérin sur le dessus du bras", text: "Meilleure visibilité sur le godet et géométrie de cavage optimisée." },
        ] },
      { title: "PRO, équipée et garantie",
        body: `Pack échappement et arrêt d'urgence, siège à contacteur de présence, rétroviseur et alarme de recul : la XC17 PRO V2 est livrée complète. Garantie constructeur 2 ans, SAV et pièces détachées en France. Délai indicatif de livraison : environ 30 jours.`,
        features: [
          { title: "Version PRO", text: "Voie variable, 2 vitesses et hydraulique avancée pour les utilisateurs exigeants." },
          { title: "Garantie 2 ans", text: "Garantie 24 mois, pièces et SAV basés en France." },
          { title: "Accessoires en option", text: "Attache rapide semi-automatique, godets 20 cm à dents et 120 cm de curage en supplément." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids à vide", value: "1 450 kg" },
        { label: "Largeur machine", value: "1 160 mm" },
        { label: "Voie variable", value: "90 – 120 cm" },
        { label: "Godet standard", value: "40 cm" },
        { label: "Chenilles", value: "230 × 72 × 44" },
        { label: "Protection", value: "Toit 4 montants (ROPS)" },
        { label: "Délai indicatif", value: "≈ 30 jours" },
      ]},
      { group: "Motorisation & commande", rows: [
        { label: "Moteur", value: "Laidong KM385B – bi-cylindre" },
        { label: "Norme antipollution", value: "Euro 5" },
        { label: "Commande", value: "Hydraulique (joystick pilot)" },
        { label: "Hydraulique", value: "Avancée — 3ᵉ circuit (hydraulic advance)" },
        { label: "Translation", value: "Moteur caché – 2 vitesses" },
      ]},
      { group: "Équipements inclus", rows: [
        { label: "Vérin sur le dessus du bras", value: "Oui" },
        { label: "Train élargissable", value: "90 – 120 cm (voie variable)" },
        { label: "Pouce hydraulique", value: "Grappin de tri (de série)" },
        { label: "Sécurité", value: "Pack échappement / arrêt d'urgence" },
        { label: "Confort & sécurité", value: "Siège à contacteur de présence, rétroviseur, alarme de recul" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-profil-godet-droite.webp",        alt: "Mini-pelle Xcavator XC17 PRO V2 1,45 t, vue latérale flanc droit, godet à droite, gyrophare et toit ROPS" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-trois-quarts-avant-droite.webp",  alt: "Mini-pelle Xcavator XC17 PRO V2, vue trois-quarts avant droite, bras déployé" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-trois-quarts-arriere-gauche.webp",alt: "Mini-pelle Xcavator XC17 PRO V2, vue trois-quarts arrière gauche" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-poste-conduite-toit-rops.webp",   alt: "Mini-pelle Xcavator XC17 PRO V2, poste de conduite et toit de protection 4 montants ROPS" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-vue-avant-bras-releve.webp",      alt: "Mini-pelle Xcavator XC17 PRO V2, vue de face bras relevé" },
    ],
  },

  // ───────────────────────── XCAVATOR XC22 PRO V2 (2 t) ─────────────────────────
  "XMPXC22PROV2": {
    tagline: `Mini-pelle 2 t — la plus robuste de la gamme, hydraulique 3 pompes.`,
    intro: `La mini-pelle Xcavator XC22 PRO V2 est la mini-pelle 2 tonnes la plus robuste de la gamme. Son système hydraulique à trois pompes délivre puissance et fluidité pour enchaîner les mouvements simultanés, tandis que la translation à 2 vitesses et la voie variable (110 à 140 cm) en font une machine aussi à l'aise dans les accès serrés que sur les gros chantiers de terrassement. Moteur Laidong KM385B bi-cylindre Euro 5, bras déporté (swing boom), commande au joystick hydraulique et toit 4 montants (ROPS). Importée en direct par CZN Machinery : garantie 2 ans, livraison France.`,
    stats: [
      { value: "2 000 kg", label: "Poids à vide" },
      { value: "3 pompes", label: "Hydraulique" },
      { value: "110–140 cm", label: "Voie variable" },
      { value: "2 vitesses", label: "Translation" },
    ],
    sections: [
      { title: "Hydraulique 3 pompes, puissance et fluidité",
        body: `Le système hydraulique à trois pompes alimente simultanément le bras, la rotation et la translation sans perte de débit. Les mouvements combinés restent fluides et puissants, même en charge : un atout majeur pour la productivité sur les chantiers de terrassement les plus exigeants.`,
        features: [
          { title: "Trois pompes", text: "Mouvements simultanés fluides et puissants, sans à-coups, même sous charge." },
          { title: "Translation 2 vitesses", text: "Précision à basse vitesse, déplacements rapides sur le chantier en vitesse haute." },
          { title: "Bras déporté (swing boom)", text: "Creusez en limite de mur et de clôture sans déplacer la machine." },
        ] },
      { title: "Voie variable 110–140 cm, stabilité maximale",
        body: `Le train de roulement élargissable passe de 110 cm (accès) à 140 cm (travail) pour offrir la meilleure stabilité de la gamme lors des opérations de cavage et de levage. La machine de 2 tonnes qui ne recule devant aucun chantier.`,
        features: [
          { title: "Châssis 110–140 cm", text: "Replié pour l'accès, élargi pour une stabilité maximale au travail." },
          { title: "2 tonnes robustes", text: "La machine la plus capable de la gamme pour le terrassement intensif." },
          { title: "Moteur de translation caché", text: "Protégé des chocs et projections pour une fiabilité accrue." },
        ] },
      { title: "Équipée et garantie",
        body: `Vérin sur le dessus du bras, pouce hydraulique (grappin de tri), pack échappement et arrêt d'urgence, siège à contacteur de présence, rétroviseur et alarme de recul : la XC22 PRO V2 est livrée prête à travailler. Garantie constructeur 2 ans, SAV et pièces en France. Délai indicatif de livraison : environ 30 jours.`,
        features: [
          { title: "Pouce hydraulique inclus", text: "Grappin de tri de série pour pierres, souches et gravats." },
          { title: "Garantie 2 ans", text: "Garantie 24 mois, pièces détachées et SAV basés en France." },
          { title: "Accessoires en option", text: "Attache rapide hydraulique, godets 20 cm à dents et 120 cm de curage disponibles en supplément." },
        ] },
    ],
    specs: [
      { group: "Caractéristiques générales", rows: [
        { label: "Poids à vide", value: "2 000 kg" },
        { label: "Voie variable", value: "110 – 140 cm" },
        { label: "Godet standard", value: "40 cm" },
        { label: "Protection", value: "Toit 4 montants (ROPS)" },
        { label: "Délai indicatif", value: "≈ 30 jours" },
      ]},
      { group: "Motorisation & commande", rows: [
        { label: "Moteur", value: "Laidong KM385B – bi-cylindre" },
        { label: "Norme antipollution", value: "Euro 5" },
        { label: "Hydraulique", value: "Trois pompes" },
        { label: "Commande", value: "Joystick hydraulique" },
        { label: "Bras", value: "Déporté (swing boom)" },
        { label: "Translation", value: "Moteur caché – 2 vitesses" },
      ]},
      { group: "Équipements inclus", rows: [
        { label: "Vérin sur le dessus du bras", value: "Oui" },
        { label: "Train élargissable", value: "110 – 140 cm (voie variable)" },
        { label: "Pouce hydraulique", value: "Grappin de tri (de série)" },
        { label: "Sécurité", value: "Pack échappement / arrêt d'urgence" },
        { label: "Confort & sécurité", value: "Siège à contacteur de présence, rétroviseur, alarme de recul" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-avant-droite-lame.webp", alt: "Mini-pelle Xcavator XC22 PRO V2 2 t, vue trois-quarts avant droite avec lame" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-profil-gauche-bras-deploye.webp",     alt: "Mini-pelle Xcavator XC22 PRO V2, profil gauche avec bras déporté déployé" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-arriere-droite.webp",    alt: "Mini-pelle Xcavator XC22 PRO V2, vue trois-quarts arrière droite" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-arriere-gauche.webp",    alt: "Mini-pelle Xcavator XC22 PRO V2, vue trois-quarts arrière gauche" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-vue-arriere.webp",                    alt: "Mini-pelle Xcavator XC22 PRO V2, vue arrière sur chenilles" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-vue-avant-lame.webp",                 alt: "Mini-pelle Xcavator XC22 PRO V2, vue de face avec lame et bras relevé" },
    ],
  },

  // ───────────────────────── SONCA BROYEUR FORESTIER (SMCBF) ─────────────────────────
  "SMCBF": {
    tagline: `Broyeur forestier radiocommandé sur chenilles, moteur KOOP 15 CV diesel.`,
    intro: `Le broyeur forestier Sonca est une machine chenillée entièrement radiocommandée, conçue pour débroussailler et broyer la végétation là où l'homme ne peut pas — ou ne devrait pas — intervenir : talus, fortes pentes, friches, sous-bois et fermes solaires. Piloté à distance jusqu'à 600 m, il tient l'opérateur à l'écart du danger. Son moteur diesel KOOP KD195F de 15 CV à démarrage électrique entraîne un rotor de coupe flottant de 1 000 mm équipé de couteaux type fléaux. Importé en direct par CZN Machinery : garantie 24 mois et pièces détachées disponibles 10 ans.`,
    stats: [
      { value: "1 000 mm", label: "Largeur de coupe" },
      { value: "346 kg", label: "Poids net" },
      { value: "15 CV", label: "Moteur KOOP diesel" },
      { value: "600 m", label: "Portée radiocommande" },
    ],
    sections: [
      {
        title: "Radiocommandé jusqu'à 600 m, en toute sécurité",
        body: `La radiocommande longue portée (jusqu'à 600 m, incluse) permet de travailler à distance des projections et des zones dangereuses. Le moteur diesel KOOP à démarrage électrique et l'alternateur intégré rechargent automatiquement la batterie 24 V de commande en fonctionnement : pas de recharge manuelle entre deux sessions.`,
        features: [
          { title: "Radiocommande incluse", text: "Portée longue distance jusqu'à 600 m, opérateur à l'écart du danger." },
          { title: "Moteur KOOP KD195F", text: "Monocylindre diesel 15 CV, démarrage électrique." },
          { title: "Recharge automatique", text: "Alternateur intégré, batterie de commande 24 V rechargée en marche." },
        ],
      },
      {
        title: "Coupe flottante 1 000 mm à couteaux type fléaux",
        body: `Le rotor de 1 000 mm est équipé de 20 jeux de couteaux Y suspendus (40 pièces), efficaces sur l'herbe haute, les ronces et les jeunes ligneux. La hauteur de coupe se règle manuellement de 20 à 200 mm, et le mécanisme flottant suit le relief du terrain pour une coupe régulière sans scalper le sol.`,
        features: [
          { title: "Largeur de coupe 1 000 mm", text: "Hauteur réglable de 20 à 200 mm (réglage manuel)." },
          { title: "Couteaux type fléaux", text: "Couteaux Y suspendus, 20 jeux / 40 pièces." },
          { title: "Mécanisme flottant", text: "Le groupe de coupe suit le relief pour une coupe homogène." },
        ],
      },
      {
        title: "Chenilles tous terrains, spécialiste des pentes",
        body: `Les chenilles caoutchouc de 150 mm assurent l'adhérence sur sol meuble, humide ou accidenté. La machine travaille jusqu'à 30° de pente (et se déplace jusqu'à 45°), pour un rendement d'environ 0,5 ha/h — idéale pour l'entretien des talus, vergers, parcs et fermes photovoltaïques.`,
        features: [
          { title: "Chenilles 150 mm", text: "Adhérence et stabilité sur terrains difficiles." },
          { title: "Pentes fortes", text: "Travail jusqu'à 30°, déplacement jusqu'à 45°." },
          { title: "Rendement ~0,5 ha/h", text: "Vitesse de déplacement 0 à 5 km/h." },
        ],
      },
    ],
    specs: [
      { group: "Coupe", rows: [
        { label: "Largeur de coupe", value: "1 000 mm" },
        { label: "Hauteur de coupe", value: "20 – 200 mm (réglage manuel)" },
        { label: "Type de couteaux", value: "Couteaux Y suspendus (type fléaux)" },
        { label: "Nombre de couteaux", value: "20 jeux / 40 pièces" },
        { label: "Mécanisme", value: "Flottant (suit le relief)" },
      ]},
      { group: "Moteur", rows: [
        { label: "Marque", value: "KOOP KD195F – monocylindre" },
        { label: "Puissance", value: "15 CV" },
        { label: "Énergie", value: "Diesel" },
        { label: "Démarrage", value: "Électrique" },
      ]},
      { group: "Déplacement & performances", rows: [
        { label: "Largeur de chenille", value: "150 mm" },
        { label: "Vitesse de déplacement", value: "0 – 5 km/h" },
        { label: "Pente max. en travail", value: "30° (déplacement jusqu'à 45°)" },
        { label: "Rendement", value: "≈ 0,5 ha/h (7,5 mu/h)" },
        { label: "Portée de la radiocommande", value: "Jusqu'à 600 m" },
      ]},
      { group: "Dimensions & commande", rows: [
        { label: "Dimensions (L × l × H)", value: "1 560 × 1 170 × 820 mm" },
        { label: "Poids net", value: "≈ 346 kg" },
        { label: "Mode de commande", value: "Radiocommande" },
        { label: "Tension de commande", value: "24 V" },
        { label: "Recharge", value: "Alternateur intégré (automatique en marche)" },
      ]},
      { group: "Équipement & garantie", rows: [
        { label: "Télécommande longue portée", value: "Incluse (jusqu'à 600 m)" },
        { label: "Chargeur", value: "Inclus" },
        { label: "Kit d'outillage", value: "Offert (tournevis, clés, clés six pans)" },
        { label: "Garantie", value: "24 mois" },
        { label: "Pièces détachées", value: "Disponibles 10 ans" },
      ]},
    ],
    images: [
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-4.webp", alt: "Broyeur forestier radiocommandé Sonca — vue 3/4 avant, tête de broyage et moteur KOOP" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-1.webp", alt: "Broyeur forestier radiocommandé Sonca — vue 3/4 arrière sur chenilles" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-2.webp", alt: "Broyeur forestier radiocommandé Sonca — vue d'ensemble" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-3.webp", alt: "Broyeur forestier radiocommandé Sonca — détail du moteur KOOP KD195F" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-5.webp", alt: "Broyeur forestier radiocommandé Sonca — vue de profil" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-6.webp", alt: "Broyeur forestier radiocommandé Sonca — tête de coupe et chenilles" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-7.webp", alt: "Broyeur forestier radiocommandé Sonca — vue rapprochée du rotor de broyage" },
    ],
  },

  // ───────────────────────── SONCA CONCASSEUR (CONC-SONCA) ─────────────────────────
  "CONC-SONCA": {
    tagline: `Concasseur à mâchoires compact sur chenilles, moteur Koop diesel Euro 5.`,
    intro: `Le concasseur à mâchoires Sonca est une unité de concassage compacte et mobile, montée sur chenilles, qui recycle vos gravats directement sur le chantier : béton, briques, parpaings, pierre et déblais sont transformés en granulat réutilisable, sans coûts de transport ni de mise en décharge. Alimentation par trémie, commandes hydrauliques à leviers et moteur diesel Koop KD1100F conforme à la norme Euro 5. Importé en direct par CZN Machinery : garantie 24 mois. Spécifications techniques détaillées (capacité, ouverture des mâchoires, dimensions) communiquées sur demande.`,
    stats: [
      { value: "Sur chenilles", label: "Mobile sur chantier" },
      { value: "Trémie", label: "Alimentation" },
      { value: "Diesel Euro 5", label: "Motorisation" },
      { value: "24 mois", label: "Garantie" },
    ],
    sections: [
      {
        title: "Recyclez vos gravats directement sur le chantier",
        body: `Plutôt que d'évacuer et d'acheter du granulat, concassez sur place vos déchets inertes — béton, briques, parpaings, pierre naturelle — et réutilisez le matériau en remblai, sous-couche ou drainage. Vous économisez le transport, la décharge et l'achat de matériaux neufs, tout en réduisant l'empreinte du chantier.`,
        features: [
          { title: "Béton, brique, pierre", text: "Transforme les déblais inertes en granulat réutilisable." },
          { title: "Économies immédiates", text: "Moins de transport, moins de décharge, moins d'achat de granulat." },
          { title: "Alimentation par trémie", text: "Chargement simple à la pelle ou au godet." },
        ],
      },
      {
        title: "Compact, chenillé et autonome",
        body: `Monté sur chenilles caoutchouc, le concasseur se déplace au plus près de la zone de travail, y compris dans les accès étroits. Les commandes hydrauliques à leviers pilotent le déplacement et le fonctionnement, entraînés par un moteur diesel Koop KD1100F Euro 5 fiable et autonome sur le terrain.`,
        features: [
          { title: "Châssis chenillé", text: "Mobilité et stabilité sur sol accidenté." },
          { title: "Commandes hydrauliques", text: "Pilotage par leviers, prise en main directe." },
          { title: "Moteur Koop KD1100F", text: "Diesel, norme Euro 5." },
        ],
      },
    ],
    specs: [
      { group: "Moteur", rows: [
        { label: "Marque", value: "Koop KD1100F" },
        { label: "Énergie", value: "Diesel" },
        { label: "Norme", value: "Euro 5" },
      ]},
      { group: "Caractéristiques générales", rows: [
        { label: "Type", value: "Concasseur à mâchoires" },
        { label: "Mobilité", value: "Chenilles caoutchouc" },
        { label: "Alimentation", value: "Trémie" },
        { label: "Commande", value: "Hydraulique à leviers" },
      ]},
      { group: "Garantie", rows: [
        { label: "Garantie", value: "24 mois" },
        { label: "Pièces détachées", value: "Disponibles" },
        { label: "Spécifications complètes", value: "Capacité, ouverture des mâchoires et dimensions sur demande" },
      ]},
    ],
    images: [
      { src: "/images/CONCASSEUR/concasseur-sonca-2.webp", alt: "Concasseur à mâchoires Sonca — vue 3/4 sur chenilles avec goulotte d'évacuation" },
      { src: "/images/CONCASSEUR/concasseur-sonca-1.webp", alt: "Concasseur à mâchoires Sonca — vue de face, trémie d'alimentation" },
      { src: "/images/CONCASSEUR/concasseur-sonca-3.webp", alt: "Concasseur à mâchoires Sonca — vue d'ensemble" },
      { src: "/images/CONCASSEUR/concasseur-sonca-4.webp", alt: "Concasseur à mâchoires Sonca — vue latérale" },
      { src: "/images/CONCASSEUR/concasseur-sonca-5.webp", alt: "Concasseur à mâchoires Sonca — détail du châssis chenillé" },
      { src: "/images/CONCASSEUR/concasseur-sonca-6.webp", alt: "Concasseur à mâchoires Sonca — commandes hydrauliques à leviers" },
      { src: "/images/CONCASSEUR/concasseur-sonca-7.webp", alt: "Concasseur à mâchoires Sonca — bloc hydraulique et moteur" },
      { src: "/images/CONCASSEUR/concasseur-sonca-8.webp", alt: "Concasseur à mâchoires Sonca — vue rapprochée de la mâchoire" },
    ],
  },

};
