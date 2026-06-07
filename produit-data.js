// 📁 Destination : /produit-data.js (racine du repo, à côté de build.js)
//
// LE SEUL FICHIER À ÉDITER pour enrichir les fiches produit.
// Prix, stock, nom et marque viennent d'Axonaut automatiquement — NE PAS les mettre ici.
// Ici tu mets : la description, les caractéristiques techniques, les photos.
//
// Clé = référence Axonaut exacte (product_code).
//
//   tagline     : une phrase courte sous le titre
//   description : paragraphe de présentation (bon pour le SEO + le schema Product)
//   specs       : [{ label, value }]  → laisse vide [] tant que tu n'as pas les VRAIES valeurs
//   images      : ["/img/produits/xxx.jpg", ...]  → 1re = image principale (vide pour l'instant)
//
// Exemple de specs une fois que tu as la fiche technique CZN :
//   specs: [
//     { label: "Poids opérationnel", value: "0,6 t" },
//     { label: "Profondeur de fouille", value: "1,75 m" },
//     { label: "Moteur", value: "Kubota" },
//     { label: "Puissance", value: "10,5 ch" },
//     { label: "Largeur (chenilles rétractées)", value: "700 mm" },
//   ],

module.exports = {

  "SMP06": {
    tagline: "La micro-pelle des accès impossibles.",
    description: "La Sonca SJW-06 est la plus compacte de notre gamme de mini-pelles : une micro-pelle conçue pour se faufiler là où aucune autre ne passe — portails étroits, jardins clos, intérieurs, rénovation. Idéale pour les particuliers exigeants comme pour les paysagistes et artisans qui cherchent une machine maniable et facile à transporter. Importée en direct par CZN Machinery, elle est livrée prête à l'emploi partout en France, garantie 2 ans pièces et main-d'œuvre.",
    specs: [],   // ← à compléter avec la fiche technique Sonca SJW-06
    images: [],  // ← ex: ["/img/produits/SMP06-1.jpg", "/img/produits/SMP06-2.jpg"]
  },

  "X-MP-XC06S": {
    tagline: "Compacte, polyvalente, accessible.",
    description: "La Xcavator XC06S est une mini-pelle compacte d'entrée de gamme, pensée pour le terrassement léger, l'aménagement extérieur et les petits chantiers. Un excellent rapport capacité/prix pour démarrer sans se ruiner. Importée en direct par CZN Machinery : pas d'intermédiaire, garantie 2 ans et livraison dans toute la France.",
    specs: [],
    images: [],
  },

  "SMP12F": {
    tagline: "Le terrassement courant, sans compromis.",
    description: "La Sonca SJW-12 F (déclinaison « F ») est une mini-pelle polyvalente de la série SJW-12, taillée pour les travaux de terrassement réguliers des artisans, paysagistes et loueurs. Robuste et bien équipée, elle couvre la majorité des besoins du quotidien sur chantier. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.",
    specs: [],   // ← préciser aussi ce qui distingue la version "F" de la "P"
    images: [],
  },

  "SMP12P": {
    tagline: "La SJW-12 en version P.",
    description: "La Sonca SJW-12 P (déclinaison « P ») appartient à la série SJW-12, gamme de mini-pelles polyvalentes adaptées au terrassement courant. Importée en direct par CZN Machinery, garantie 2 ans, livraison dans toute la France.",
    specs: [],   // ← préciser ce qui distingue la version "P" de la "F"
    images: [],
  },

  "X-MP-XC25-2C": {
    tagline: "La plus capable de la gamme.",
    description: "La Xcavator XC25U-2C est la mini-pelle la plus performante de notre catalogue, destinée aux chantiers de terrassement les plus exigeants — BTP, terrassement, location. Sa puissance en fait l'outil de référence pour les professionnels qui ne veulent pas être limités. Importée en direct par CZN Machinery, garantie 2 ans, livraison France.",
    specs: [],
    images: [],
  },

};
