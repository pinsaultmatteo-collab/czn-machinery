// 📁 /produit-data.en.js — THE ONLY FILE TO EDIT for product sheet content (English).
// Axonaut provides name / price / stock. Here: tagline, intro, sections, specs, photos.
// Key = Axonaut reference (product_code).
//
// PHOTOS: drop the files in the repo under /images/... then list the paths.
// SPECS : grouped -> [{ group, rows:[{label,value}] }]  (or simple [{label,value}]).

module.exports = {

  // ───────────────────────── SONCA SJW-06 ─────────────────────────
  "SMP06": {
    tagline: `Ultra-compact micro excavator, transportable on a category B licence.`,
    intro: `The SJW-06 mini excavator is the most compact micro excavator in the SONCA range, at just 700 mm wide and 660 kg. It slips in everywhere: garden gates, narrow passages, inner courtyards. Powered by the 8.5 hp Longxin G300FD Euro 5 engine, it offers ample power for light earthworks, landscaping and trench digging.`,
    stats: [
      { value: "660 kg", label: "Operating weight" },
      { value: "Open station", label: "Cab type" },
      { value: "8.5 hp", label: "Engine power" },
      { value: "1.09 m", label: "Digging depth" },
    ],
    sections: [
      { title: "Compact, lightweight and easy to transport",
        body: `The SJW-06 weighs just 660 kg, making it transportable on a simple trailer with a category B vehicle. Its compact chassis and 150 mm tracks deliver stability and manoeuvrability on all types of ground. The open operator station ensures full 360° visibility (canopy available as an option).`,
        features: [
          { title: "Transportable on a category B licence", text: "At 660 kg, it loads onto a standard trailer. No special licence required for transport." },
          { title: "Open operator station", text: "Optimal 360° visibility and ergonomic, accessible controls, even in tight spaces." },
          { title: "All-terrain tracks", text: "150 mm rubber tracks for good grip without damaging lawns and delicate surfaces." },
        ] },
      { title: "Powerful, precise hydraulic system",
        body: `The hydraulic system uses a Gear 3+3 pump delivering 21.6 L/min at 16 MPa. This generous flow rate for this class of machine ensures smooth, precise movements of the boom, dipper arm and bucket. The 11.4 L hydraulic tank guarantees comfortable working autonomy.`,
        features: [
          { title: "Gear 3+3 pump", text: "Dual-flow gear pump delivering 21.6 L/min for smooth simultaneous movements." },
          { title: "16 MPa pressure", text: "Digging force of 3.5 kN at the dipper arm, enough to dig into most common ground." },
          { title: "Simplified servicing", text: "Easy access to maintenance points and extended service intervals to reduce costs." },
        ] },
      { title: "For private individuals and professionals alike",
        body: `An ideal choice both for private individuals carrying out their own projects (garden, terrace, above-ground pool, trenches) and for landscapers and tradespeople working in confined spaces. Its ease of transport and simplicity of use make it a micro excavator accessible to everyone.`,
        features: [
          { title: "Ideal for landscaping", text: "Flower beds, irrigation trenches, low-wall foundations, tree planting: it takes the strain out of back-breaking manual work." },
          { title: "Unbeatable price + 2-year warranty", text: "From €4,125 excl. VAT, with a 24-month parts warranty and after-sales service based in France with spare-parts stock." },
          { title: "Dedicated attachments", text: "Quick hitch, ditching bucket, ripper tooth, grab thumb, rake: adapt the machine to your needs." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Operating weight", value: "660 kg" },
        { label: "Overall length", value: "2,287 mm" },
        { label: "Overall width", value: "700 mm" },
        { label: "Overall height", value: "1,350 mm" },
        { label: "Track width", value: "150 mm" },
        { label: "Standard bucket width", value: "300 mm" },
        { label: "Cab type", value: "Open station (canopy optional)" },
      ]},
      { group: "Working dimensions", rows: [
        { label: "Max. digging depth", value: "1,091 mm" },
        { label: "Max. vertical digging depth", value: "1,018 mm" },
        { label: "Max. digging height", value: "2,114 mm" },
        { label: "Max. dump height", value: "1,386 mm" },
        { label: "Max. horizontal digging reach", value: "2,254 mm" },
        { label: "Digging force (dipper arm)", value: "3.5 kN" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "Longxin G300FD" },
        { label: "Power", value: "6.8 kW (8.5 hp)" },
        { label: "Fuel", value: "Diesel Euro 5" },
        { label: "Hydraulic pump", value: "Gear Pump 3+3" },
        { label: "Pump flow rate", value: "21.6 L/min" },
        { label: "System pressure", value: "16 MPa" },
        { label: "Fuel tank", value: "6 L" },
        { label: "Hydraulic tank", value: "11.4 L" },
      ]},
      { group: "Travel & tracks", rows: [
        { label: "Travel speed", value: "1.5 km/h" },
        { label: "Slew speed", value: "9.5 rpm" },
        { label: "Tracks", value: "150 × 72 × 34" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-avant.webp",    alt: "Sonca SJW-06 mini excavator, front 3/4 view" },
      { src: "/images/SONCA/SJW-06/sjw-06-profil.webp",       alt: "Sonca SJW-06 side view" },
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-arriere.webp",  alt: "Sonca SJW-06, rear 3/4 view" },
      { src: "/images/SONCA/SJW-06/sjw-06-bras-leve.webp",    alt: "Sonca SJW-06 with boom raised" },
      { src: "/images/SONCA/SJW-06/sjw-06-arriere-droit.webp",alt: "Sonca SJW-06, right rear view" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 F ─────────────────────────
  "SMP12F": {
    tagline: `1.2 t mini excavator with offset boom as standard.`,
    intro: `The SONCA SJW-12 F is the versatile 1.2-tonne mini excavator with an offset boom as standard. This feature reaches angles impossible with a fixed boom and lets you work in hard-to-access areas without repositioning the machine. With its one-metre width and reduced tail swing radius, it moves easily through tight spaces — the ideal tool for earthworks and residential landscaping. Air-cooled 10 hp KOOP KD192F engine. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1.00 m", label: "Overall width" },
      { value: "10 hp", label: "Engine power" },
      { value: "1.65 m", label: "Digging depth" },
      { value: "1.49 m", label: "Tail swing radius" },
    ],
    sections: [
      { title: "Offset boom as standard",
        body: `The offset boom reaches angles inaccessible with a fixed boom and considerably increases the working area without moving the machine. The engine cover protects the hydraulic hoses for greater longevity and simpler maintenance.`,
        features: [
          { title: "Exceptional manoeuvrability", text: "Work efficiently in any hard-to-access area, without repositioning the machine." },
          { title: "Protective engine cover", text: "Effectively shields the hydraulic hoses from the elements for greater durability." },
          { title: "10 hp KOOP engine", text: "Air-cooled KOOP KD192F engine, balancing power, reliability and ease of maintenance." },
        ] },
      { title: "Compact and manoeuvrable",
        body: `With a width of just 1 metre and a minimum tail swing radius of 1,490 mm at the front, the SJW-12 F navigates easily around obstacles in the tightest spaces, while maximising productivity on residential sites.`,
        features: [
          { title: "1-metre width", text: "Passes through narrow accesses and standard garden gates." },
          { title: "1,490 mm tail swing", text: "Precise navigation around obstacles, ideal in residential settings." },
          { title: "40 cm bucket included", text: "Delivered ready to use for everyday earthworks." },
        ] },
    ],
    // Specs confirmed for the F version. You can complete it with its full technical data sheet.
    specs: [
      { group: "General specifications", rows: [
        { label: "Overall width", value: "1,000 mm" },
        { label: "Bucket width", value: "400 mm" },
      ]},
      { group: "Working dimensions", rows: [
        { label: "Max. digging depth", value: "1,650 mm" },
        { label: "Min. tail swing radius (front)", value: "1,490 mm" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KOOP KD192F" },
        { label: "Power", value: "10 hp" },
        { label: "Cooling", value: "Air" },
        { label: "Fuel", value: "Diesel Euro 5" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-avant-droit.webp",    alt: "Sonca SJW-12 F mini excavator with offset boom, front right view" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-biais-gauche.webp",    alt: "SJW-12 F angled left view" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-arriere-gauche.webp",  alt: "SJW-12 F left rear view" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-moteur.webp",          alt: "SJW-12 F engine cover" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 P ─────────────────────────
  "SMP12P": {
    tagline: `The 1.2 t with offset boom and premium finish.`,
    intro: `The SONCA SJW-12 P is the refined version of the compact 1.2-tonne range: offset boom, careful finish and hydraulic joysticks built into the seat armrests for optimal ergonomics and precision. Its 1,490 mm tail swing radius and one-metre width let it navigate the tightest spaces. Designed for demanding private individuals and well-finished residential sites, it combines technical performance with aesthetics. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1,015 kg", label: "Operating weight" },
      { value: "1.00 m", label: "Overall width" },
      { value: "10 hp", label: "Engine power" },
      { value: "1.65 m", label: "Digging depth" },
    ],
    sections: [
      { title: "Offset boom and careful finish",
        body: `The SJW-12 P stands out with its offset boom and quality finish. The reinforced offset system delivers manoeuvrability and precision in all tight spaces, while the stylish engine cover protects all the components.`,
        features: [
          { title: "Reinforced offset boom", text: "Durable, precise offset system for working in the tightest spaces." },
          { title: "Built-in joysticks", text: "Hydraulic controls built into the seat armrests for optimal ergonomics." },
          { title: "Optimised KOOP engine", text: "KOOP KD192F engine, balancing power, reliability and ease of maintenance." },
        ] },
      { title: "Compact and precise",
        body: `With a minimum tail swing radius of 1,490 mm and a width of just 1 metre, the SJW-12 P moves with great precision around obstacles. Ideal for gardens, inner courtyards and well-finished residential landscaping.`,
        features: [
          { title: "1-metre width", text: "Easier access to tight spaces and narrow passages." },
          { title: "1,490 mm tail swing", text: "Ultra-precise navigation around obstacles." },
          { title: "Complete pack", text: "Delivered with a 40 cm bucket, canopy, toolbox and filters." },
        ] },
      { title: "Optimised hydraulic system",
        body: `The hydraulic system, reinforced to handle the offset boom, retains great precision. The 20 L Tianjin pump and the 40 cm earthworks bucket ensure smooth, perfectly controlled movements, even during offset manoeuvres.`,
        features: [
          { title: "20 L Tianjin pump", text: "Generous flow rate for smooth movements and good productivity." },
          { title: "Reinforced 40 cm bucket", text: "Included, sized for everyday earthworks." },
          { title: "Optional grab thumb", text: "Optional device on the dipper arm to grab all types of material." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Operating weight", value: "1,015 kg" },
        { label: "Breakout force", value: "1,200 kg" },
        { label: "Overall length", value: "2,200 mm" },
        { label: "Overall width", value: "1,000 mm" },
        { label: "Overall height", value: "2,240 mm" },
        { label: "Track shoe width", value: "170 mm" },
        { label: "Bucket width", value: "400 mm" },
        { label: "Track gauge height", value: "320 mm" },
      ]},
      { group: "Working dimensions", rows: [
        { label: "Max. digging depth", value: "1,650 mm" },
        { label: "Max. digging height", value: "2,580 mm" },
        { label: "Max. dump height", value: "1,750 mm" },
        { label: "Ground-level digging reach", value: "2,500 mm" },
        { label: "Max. slew radius", value: "1,100 mm" },
        { label: "Min. tail swing radius (front)", value: "1,490 mm" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KOOP KD192F" },
        { label: "Power", value: "10.3 / 11.7 hp" },
        { label: "Rated speed", value: "3,600 rpm" },
        { label: "Displacement", value: "499 cc" },
        { label: "Fuel", value: "Diesel Euro 5" },
        { label: "Cooling", value: "Air" },
        { label: "Engine type", value: "Single-cylinder" },
        { label: "Consumption", value: "275–280 g/kWh" },
        { label: "Hydraulic pump", value: "Tianjin" },
        { label: "Pump flow rate", value: "20 L" },
        { label: "Fuel tank", value: "5.5 L" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-avant-droit.webp",   alt: "Sonca SJW-12 P mini excavator with offset boom, front right view" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-profil-gauche.webp", alt: "SJW-12 P left side view" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-arriere-gauche.webp",alt: "SJW-12 P left rear view, hydraulic system" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-moteur.webp",        alt: "SJW-12 P engine cover and finish" },
    ],
  },

  // ───────────────────────── SONCA SJW-18 PRO ─────────────────────────
  "SMP-SJW-18-PRO": {
    tagline: `1.8 t mini excavator, the right size-to-power balance.`,
    intro: `The SONCA SJW-18 PRO is a versatile 1.8-tonne mini excavator, built for more demanding earthworks while remaining easy to transport. Rugged and comfortable, it accepts a wide range of attachments. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1.8 t", label: "Breakout force" },
      { value: "24 hp", label: "Engine power" },
      { value: "1,271 kg", label: "Operating weight" },
      { value: "2.2 m", label: "Digging depth" },
    ],
    sections: [
      { title: "Reinforced design for intensive use",
        body: "Reinforced 24 hp Laidong 385 engine and high-durability Shimadzu hydraulic pump: a 1.8-tonne excavator with reinforced components for the most demanding sites (construction, civil engineering, intensive earthworks).",
        features: [
          { title: "Laidong 385 engine", text: "24 hp three-cylinder, liquid-cooled, hardened components for continuous operation." },
          { title: "Shimadzu pump 25 L/min", text: "Oversized rams and high-resistance seals for maximum durability." },
          { title: "Digging capabilities", text: "Digging height of 2.9 m and depth of 2.2 m maintained even in intensive use." },
        ] },
      { title: "Ultra-rugged structure",
        body: "High-strength steel chassis, reinforced pivot points and a 1.1 m width that preserves manoeuvrability while offering increased stability.",
        features: [
          { title: "Reinforced chassis", text: "High-strength steel, reinforced welds and additional protection." },
          { title: "Complete pro pack", text: "40 cm bucket, canopy, toolbox and maintenance kit included." },
          { title: "Tanks", text: "Fuel 10 L, hydraulic 16 L." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Breakout force", value: "1,800 kg" },
        { label: "Overall length", value: "2,250 mm" },
        { label: "Overall width", value: "1,100 mm" },
        { label: "Overall height", value: "2,200 mm" },
        { label: "Boom length", value: "2,560 mm" },
        { label: "Track gauge width", value: "230 mm" },
        { label: "Track length", value: "1,500 mm" },
        { label: "Operating weight", value: "1,271 kg" },
        { label: "Bucket width", value: "400 mm" },
      ]},
      { group: "Working dimensions", rows: [
        { label: "Max. digging height", value: "2,900 mm" },
        { label: "Max. dump height", value: "2,400 mm" },
        { label: "Max. ground-level digging depth", value: "2,200 mm" },
        { label: "Max. ground-level digging reach", value: "2,600 mm" },
        { label: "Max. slew radius", value: "1,190 mm" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "Laidong 385 reinforced" },
        { label: "Power", value: "24 hp" },
        { label: "Fuel", value: "Diesel Euro 5" },
        { label: "Cooling", value: "Liquid" },
        { label: "Engine type", value: "Reinforced three-cylinder" },
        { label: "Hydraulic pump", value: "Shimadzu" },
        { label: "Pump flow rate", value: "25 L/min" },
        { label: "Fuel tank", value: "10 L" },
        { label: "Hydraulic tank", value: "16 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-avant.webp",   alt: "Sonca SJW-18 PRO mini excavator, front view" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-profil.webp",  alt: "Sonca SJW-18 PRO side view" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-moteur.webp",  alt: "Sonca SJW-18 PRO engine" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-pedales.webp", alt: "Sonca SJW-18 PRO pedals and controls" },
    ],
  },

  // ───────────────────────── SONCA SJW-25 ─────────────────────────
  "SMP-SJW-25-": {
    tagline: `2.5 t mini excavator for heavy work.`,
    intro: `The SONCA SJW-25 is the most powerful of the Sonca mini excavators at 2.5 tonnes: greater digging depth and superior breakout force to tackle the most ambitious earthworks. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "2.5 t", label: "Breakout force" },
      { value: "29 hp", label: "Engine power" },
      { value: "1,725 kg", label: "Operating weight" },
      { value: "2.6 m", label: "Digging depth" },
    ],
    sections: [
      { title: "Variable track gauge and 29 hp Changchai engine",
        body: "Exclusive track-width adjustment system (1,080-1,520 mm) to pass through narrow accesses then stabilise on difficult ground. Liquid-cooled 29 hp Changchai 390 engine, reliable and economical.",
        features: [
          { title: "Variable gauge 1,080-1,520 mm", text: "Narrow tracks for passages, wide for maximum stability." },
          { title: "Changchai 390 engine", text: "29 hp (20 kW), 4-stroke, liquid-cooled, Euro 5." },
          { title: "Offset boom", text: "Reaches hard-to-access areas without repositioning the machine." },
        ] },
      { title: "Manoeuvrability and protected travel motor",
        body: "Reduced rear tail swing radius of 756 mm and a flat travel motor integrated into the chassis, protected from impacts for increased durability on difficult ground.",
        features: [
          { title: "Rear radius 756 mm", text: "Manoeuvres in the tightest spaces." },
          { title: "Protected travel motor", text: "Integrated into the chassis, sheltered from obstacles." },
          { title: "Optional grab thumb", text: "225 mm device to grab wood, concrete and rocks." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Breakout force", value: "2,500 kg" },
        { label: "Overall length", value: "2,700 mm" },
        { label: "Overall width", value: "1,300 mm" },
        { label: "Overall height", value: "2,550 mm" },
        { label: "Track shoe width", value: "250 mm" },
        { label: "Bucket width", value: "420 mm" },
        { label: "Track length", value: "1,800 mm" },
        { label: "Track gauge height", value: "320 mm" },
        { label: "Operating weight", value: "1,725 kg" },
      ]},
      { group: "Working dimensions", rows: [
        { label: "Max. digging height", value: "3,400 mm" },
        { label: "Max. dump height", value: "2,673 mm" },
        { label: "Max. digging depth", value: "2,600 mm" },
        { label: "Rear tail swing radius", value: "756 mm" },
        { label: "Max. digging reach", value: "4,163 mm" },
        { label: "Variable track gauge", value: "1,080 - 1,520 mm" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "Changchai 390" },
        { label: "Power", value: "29 hp (20 kW)" },
        { label: "Fuel", value: "Diesel Euro 5" },
        { label: "Cooling", value: "Liquid" },
        { label: "Fuel tank", value: "12 L" },
        { label: "Hydraulic tank", value: "18 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-3-4-avant.webp",      alt: "Sonca SJW-25 mini excavator, front 3/4 view" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-profil.webp",          alt: "Sonca SJW-25 mini excavator, side view" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-cabine-joysticks.webp", alt: "Sonca SJW-25 cab and joysticks" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-leviers-pedales.webp",  alt: "Sonca SJW-25 levers and pedals" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-moteur.webp",           alt: "Sonca SJW-25 engine" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12JS ─────────────────────────
  "XMP-XC-12-JS": {
    tagline: `1.2 t mini excavator, manoeuvrable and hard-wearing.`,
    intro: `The XCAVATOR XC12JS is a compact, manoeuvrable 1.2-tonne mini excavator, designed for earthworks and landscaping in tight spaces. Reliable and easy to handle. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-vue-avant.webp",             alt: "Xcavator XC12JS mini excavator, front view" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-bras-excavation-etendu.webp", alt: "Xcavator XC12JS with digging arm extended" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-siege-cabine.webp",          alt: "Xcavator XC12JS seat and operator station" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-moteur.webp",                alt: "Xcavator XC12JS engine" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12S ─────────────────────────
  "XMP-XC-12-S": {
    tagline: `Versatile 1.2 t mini excavator.`,
    intro: `The XCAVATOR XC12S is a versatile 1.2-tonne mini excavator, ideal for private individuals and tradespeople seeking a compact, high-performing machine for everyday earthworks. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant.webp",            alt: "Xcavator XC12S mini excavator, front view" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant-gauche.webp",     alt: "Xcavator XC12S front left view" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-avant-droit.webp",   alt: "Xcavator XC12S front right side view" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-droit-excavation.webp", alt: "Xcavator XC12S digging" },
    ],
  },

  // ───────────────────────── XCAVATOR XC18S PRO ─────────────────────────
  "XMP-XC-18-PRO": {
    tagline: `1.8 t mini excavator, performance and comfort.`,
    intro: `The XCAVATOR XC18S PRO is a 1.8-tonne mini excavator that combines hydraulic power with driving comfort for intensive earthworks. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-avant.webp",                 alt: "Xcavator XC18S PRO mini excavator, front view" },
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-profil-droit.webp",          alt: "Xcavator XC18S PRO right side view" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-vue-ensemble.webp",  alt: "Xcavator XC18S PRO overall view" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-moteur.webp",        alt: "Xcavator XC18S PRO engine" },
    ],
  },

  // ───────────────────────── XCAVATOR XC25S (CANOPY) ─────────────────────────
  "XMP-XC-25-S-C": {
    tagline: `2.5 t mini excavator with canopy as standard.`,
    intro: `The XCAVATOR XC25S is a 2.5-tonne mini excavator fitted with a protective canopy as standard. Designed for heavy earthworks, it combines power, stability and operator safety. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-avant-droite.webp",       alt: "Xcavator XC25S mini excavator, front right view" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-gauche.webp",          alt: "Xcavator XC25S left side view" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-arriere-droite.webp",     alt: "Xcavator XC25S right rear view" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-droit-excavation.webp", alt: "Xcavator XC25S digging" },
    ],
  },

  // ───────────── XCAVATOR XC06S & XC25U-2C — keys corrected, photos to be provided ─────────────
  "XMP-XC06S": {
    tagline: `Compact entry-level mini excavator.`,
    intro: `The XCAVATOR XC06S is a compact entry-level mini excavator, designed for light earthworks and outdoor landscaping. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ no URL provided — photos to come
  },

  "XMP-XC25-2C": {
    tagline: `2.5 t mini excavator, the most capable in the range.`,
    intro: `The XCAVATOR XC25U-2C is one of the most capable mini excavators in the catalogue, designed for demanding earthworks. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ no URL provided — photos to come
  },

  // ───────────────────────── SONCA SJ-08EL (dumper) ─────────────────────────
  "SMT-SJ-08EL": {
    tagline: `Tracked mini dumper, high capacity.`,
    intro: `The SONCA SJ-08EL is a tracked mini dumper with a tipping skip, designed to carry soil, rubble and materials over the most difficult terrain. Its large capacity makes it a valuable ally for clearance and landscaping sites. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "800 kg", label: "Operating weight" },
      { value: "0.22 m³", label: "Skip capacity" },
      { value: "10 hp", label: "Engine power" },
      { value: "1.75 m", label: "Tipping height" },
    ],
    sections: [
      { title: "10 hp diesel engine and all-terrain tracks",
        body: "10 hp KD292F diesel engine (306 cc) with electric start and rugged tracks to carry heavy loads over rough, muddy or sloping ground up to 20°.",
        features: [
          { title: "10 hp KD292F engine", text: "306 cc, electric start, high torque." },
          { title: "Rugged tracks", text: "Stability and grip on all terrain, 20° gradient." },
          { title: "0.22 m³ skip", text: "Total volume 0.26 m³, tipping height 1.75 m." },
        ] },
      { title: "Compact, telescopic and easy to service",
        body: "1.98 × 0.87 × 1.68 m format and telescopic design for confined spaces. Cover-free design giving easy access to components and servicing.",
        features: [
          { title: "Compact dimensions", text: "1.98 m × 0.87 m × 1.68 m, 2 speeds (2.1-4.2 km/h)." },
          { title: "Oil cooler", text: "Optimised heat dissipation for intensive use." },
          { title: "Simplified servicing", text: "7 L hydraulic tank, easy access to components." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Operating weight", value: "800 kg" },
        { label: "Machine length", value: "1,982 mm" },
        { label: "Machine width", value: "870 mm" },
        { label: "Machine height", value: "1,680 mm" },
        { label: "Distance between track centres", value: "620 mm" },
        { label: "Skip dimensions", value: "1235 × 730 × 590 mm" },
        { label: "Climbing capacity", value: "20°" },
      ]},
      { group: "Working performance", rows: [
        { label: "Skip volume", value: "0.26 m³" },
        { label: "Loading capacity", value: "0.22 m³" },
        { label: "Lift and tipping height", value: "1,750 mm" },
        { label: "Travel speed", value: "2.1 - 4.2 km/h" },
        { label: "Number of speeds", value: "2 speeds" },
        { label: "Travel system", value: "Tracks" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KD292F Diesel 10 hp" },
        { label: "Displacement", value: "306 cc" },
        { label: "Power", value: "10 hp" },
        { label: "Fuel", value: "Diesel" },
        { label: "Start", value: "Electric" },
        { label: "Fuel tank", value: "5.3 L" },
        { label: "Hydraulic tank", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-droit.webp",   alt: "Sonca SJ-08EL mini dumper, front right side view" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-deplie.webp",  alt: "Sonca SJ-08EL with skip deployed" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-moteur.webp",               alt: "Sonca SJ-08EL engine" },
    ],
  },

  // ───────────────────────── SONCA SJ-05E (dumper) ─────────────────────────
  "SMT-SJ-05E": {
    tagline: `Compact tracked mini dumper.`,
    intro: `The SONCA SJ-05E is a compact tracked mini dumper with a tipping skip, ideal for carrying materials in tight spaces and over soft ground. Manoeuvrable and hard-wearing. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "500 kg", label: "Maximum load" },
      { value: "0.22 m³", label: "Skip capacity" },
      { value: "6.5 hp", label: "Engine power" },
      { value: "0.95 m", label: "Turning radius" },
    ],
    sections: [
      { title: "Ultra-compact and manoeuvrable",
        body: "Mini dumper with a 500 kg load and an exceptional 0.95 m turning radius. 6.5 hp KD292F diesel engine (200 cc) with dual manual and electric start.",
        features: [
          { title: "6.5 hp KD292F engine", text: "200 cc, manual and electric start." },
          { title: "0.95 m turning radius", text: "Maximum agility in narrow spaces." },
          { title: "Rubber tracks", text: "500 kg load, climbable gradient 20°." },
        ] },
      { title: "Variable speed and Northern hydraulics",
        body: "Two speeds (1.7 / 3.5 km/h) and a Northern Hydraulics multi-directional control valve for precise, controlled manoeuvres.",
        features: [
          { title: "2 speeds", text: "1.7 / 3.5 km/h to suit the job." },
          { title: "Northern control", text: "Precise manoeuvrability and increased safety." },
          { title: "7 L hydraulic tank", text: "Smooth movements even in intensive use." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Weight", value: "500 kg" },
        { label: "Overall length", value: "1,517 mm" },
        { label: "Overall width", value: "870 mm" },
        { label: "Overall height", value: "1,278 mm" },
        { label: "Min. turning radius", value: "950 mm" },
        { label: "Track centre spacing", value: "520 mm" },
        { label: "Min. ground clearance", value: "85 mm" },
      ]},
      { group: "Working performance", rows: [
        { label: "Max. loading capacity", value: "500 kg" },
        { label: "Skip loading volume", value: "0.22 m³" },
        { label: "Skip dimensions", value: "1040 × 730 × 590 mm" },
        { label: "Max. climbable gradient", value: "20°" },
        { label: "Travel speed", value: "1.7 / 3.5 km/h" },
        { label: "Number of speeds", value: "2 speeds" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KD292F Diesel 6.5 hp" },
        { label: "Power", value: "6.5 hp" },
        { label: "Displacement", value: "200 cc" },
        { label: "Fuel", value: "Diesel" },
        { label: "Engine weight", value: "16 kg" },
        { label: "Start", value: "Manual and electric" },
        { label: "Fuel tank", value: "3.1 L" },
        { label: "Hydraulic tank", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-profil-gauche.webp",       alt: "Sonca SJ-05E mini dumper, left side view" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-biais-arriere-droit.webp", alt: "Sonca SJ-05E angled right rear view" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-chenilles.webp",           alt: "Sonca SJ-05E tracks" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-moteur.webp",              alt: "Sonca SJ-05E engine" },
    ],
  },

  // ───────────────────────── SONCA SJ-05EL (dumper) ─────────────────────────
  "SMT-SJ-05EL": {
    tagline: `Tracked mini dumper with high-lift skip.`,
    intro: `The SONCA SJ-05EL is a tracked mini dumper with a high-lift skip, for tipping at height (trailer, bulk bag, container). Compact and all-terrain, it makes clearing materials on site easier. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "500 kg", label: "Maximum load" },
      { value: "0.15 m³", label: "Skip capacity" },
      { value: "10 hp", label: "Engine power" },
      { value: "1.35 m", label: "Discharge height" },
    ],
    sections: [
      { title: "10 hp telescopic dumper",
        body: "Telescopic mini dumper with a 10 hp KD292F diesel engine, a 0.15 m³ skip (total volume 0.22 m³) and a 500 kg capacity for efficient on-site transport.",
        features: [
          { title: "10 hp KD292F engine", text: "Diesel, electric start, 2 speeds (1.7-3.5 km/h)." },
          { title: "Telescopic system", text: "Discharge height 1.35 m, ideal in tight spaces." },
          { title: "0.15 m³ skip", text: "Total volume 0.22 m³, 500 kg load." },
        ] },
      { title: "All-terrain and easy to service",
        body: "Tracks for stable traction on rough, muddy or slippery ground. Wide-opening engine cover for simplified daily maintenance.",
        features: [
          { title: "All-terrain traction", text: "Tracks, climbable gradient 20°." },
          { title: "Easier servicing", text: "Wide-opening cover, oil cooler." },
          { title: "Compact", text: "1.57 m × 0.87 m × 1.66 m, turning radius 0.95 m." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Operating weight", value: "500 kg" },
        { label: "Net weight", value: "430 kg" },
        { label: "Machine length", value: "1,566 mm" },
        { label: "Machine width", value: "870 mm" },
        { label: "Machine height", value: "1,660 mm" },
        { label: "Min. turning radius", value: "950 mm" },
        { label: "Distance between track centres", value: "520 mm" },
        { label: "Min. ground clearance", value: "85 mm" },
      ]},
      { group: "Working performance", rows: [
        { label: "Max. loading capacity", value: "500 kg" },
        { label: "Skip loading capacity", value: "0.15 m³" },
        { label: "Total skip volume", value: "0.22 m³" },
        { label: "Skip dimensions", value: "1040 × 730 × 590 mm" },
        { label: "Discharge height", value: "1,350 mm" },
        { label: "Gradient capacity", value: "20°" },
        { label: "Speed", value: "1.7 - 3.5 km/h" },
        { label: "Number of speeds", value: "2 speeds" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KD292F Diesel 10 hp" },
        { label: "Power", value: "10 hp" },
        { label: "Fuel", value: "Diesel" },
        { label: "Start", value: "Electric" },
        { label: "Cooling", value: "Air" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-avant-droit.webp",  alt: "Sonca SJ-05EL mini dumper, front right side view" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit.webp",        alt: "Sonca SJ-05EL right side view" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit-releve.webp", alt: "Sonca SJ-05EL with skip raised" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-moteur.webp",              alt: "Sonca SJ-05EL engine" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-manettes.webp",            alt: "Sonca SJ-05EL controls" },
    ],
  },

  // ───────────────────────── SONCA SJ-05M (dumper) ─────────────────────────
  "SMT-SJ-05M": {
    tagline: `Manoeuvrable tracked mini dumper.`,
    intro: `The SONCA SJ-05M is a tracked mini dumper with a tipping skip, designed for manoeuvrability and ease of use on small and medium-sized sites. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "500 kg", label: "Maximum load" },
      { value: "0.22 m³", label: "Skip capacity" },
      { value: "6.5 hp", label: "Engine power" },
      { value: "0.95 m", label: "Turning radius" },
    ],
    sections: [
      { title: "The essential dumper, simple and reliable",
        body: "The essential version of the mini dumper: 6.5 hp KD292F diesel engine (200 cc), a single 1.7 km/h speed and a 0.95 m turning radius. 500 kg load capacity for transport over difficult terrain.",
        features: [
          { title: "6.5 hp KD292F engine", text: "200 cc, manual start, consistent performance." },
          { title: "0.95 m turning radius", text: "Slips into hard-to-access spots." },
          { title: "Rubber tracks", text: "500 kg load, climbable gradient 20°." },
        ] },
      { title: "Compact skip and Northern transmission",
        body: "1040 × 730 × 590 mm skip (0.22 m³) and a Northern Hydraulics transmission renowned for its ruggedness and precision.",
        features: [
          { title: "0.22 m³ skip", text: "Gravel, soil, stones and compost carried effortlessly." },
          { title: "Northern transmission", text: "Smooth, controlled manoeuvres and increased durability." },
          { title: "7 L hydraulic tank", text: "Smooth movements for maximum efficiency." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Weight", value: "400 kg" },
        { label: "Overall length", value: "1,517 mm" },
        { label: "Overall width", value: "870 mm" },
        { label: "Overall height", value: "1,278 mm" },
        { label: "Min. turning radius", value: "950 mm" },
        { label: "Track centre spacing", value: "520 mm" },
        { label: "Min. ground clearance", value: "85 mm" },
      ]},
      { group: "Working performance", rows: [
        { label: "Max. loading capacity", value: "500 kg" },
        { label: "Skip loading volume", value: "0.22 m³" },
        { label: "Skip dimensions", value: "1040 × 730 × 590 mm" },
        { label: "Max. climbable gradient", value: "20°" },
        { label: "Travel speed", value: "1.7 km/h" },
        { label: "Number of speeds", value: "1 speed" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KD292F Diesel 6.5 hp" },
        { label: "Power", value: "6.5 hp" },
        { label: "Displacement", value: "200 cc" },
        { label: "Fuel", value: "Diesel" },
        { label: "Start", value: "Manual" },
        { label: "Fuel tank", value: "3.1 L" },
        { label: "Hydraulic tank", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-vue-ensemble.webp", alt: "Sonca SJ-05M mini dumper, overall view" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-chenilles.webp",    alt: "Sonca SJ-05M tracks" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-moteur.webp",       alt: "Sonca SJ-05M engine" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-manettes.webp",     alt: "Sonca SJ-05M controls" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 W (loader) ─────────────────────────
  "SMC-SJ-460W": {
    tagline: `Wheeled mini loader, compact and powerful.`,
    intro: `The SONCA SJ-460 W is an articulated wheeled mini loader, ideal for handling, loading and landscaping work. Compact, it slips in everywhere and accepts many attachments (bucket, forks and more). Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1,000 kg", label: "Total weight" },
      { value: "400 kg", label: "Maximum load" },
      { value: "0.12 m³", label: "Bucket capacity" },
      { value: "2.45 m", label: "Lift height" },
    ],
    sections: [
      { title: "23 hp KOOP engine and wheeled drive",
        body: "23 hp KOOP twin-cylinder engine (639 cc) Euro 5 and 18×8.5×8 wheels offering excellent grip and quick mobility on varied ground, smooth or rough.",
        features: [
          { title: "KOOP twin-cylinder engine", text: "23 hp, 639 cc, 3,600 rpm, Euro 5 standard." },
          { title: "Wheeled drive", text: "18×8.5×8 wheels for smooth, fast mobility." },
          { title: "0.12 m³ bucket", text: "Max load 400 kg, working height 2.45 m." },
        ] },
      { title: "Compact with high-performance hydraulics",
        body: "2.2 × 1.1 × 1.28 m format for tight spaces, with a 17-21 Bar hydraulic system and a 4.5 kN lifting force.",
        features: [
          { title: "Compact dimensions", text: "2.2 m × 1.1 m × 1.28 m, ground clearance 150 mm." },
          { title: "4.5 kN lifting force", text: "Discharge height 1.51 m." },
          { title: "Working angles", text: "Tilt 38°, opening 82°, dump 34°." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Total weight", value: "1,000 kg" },
        { label: "Machine height", value: "1,280 mm" },
        { label: "Overall length", value: "1,680 mm" },
        { label: "Length with standard bucket", value: "2,206 mm" },
        { label: "Width", value: "1,100 mm" },
        { label: "Bucket width", value: "1,000 mm" },
        { label: "Wheelbase", value: "850 mm" },
        { label: "Ground clearance", value: "150 mm" },
        { label: "Wheel dimensions", value: "18×8.5×8" },
      ]},
      { group: "Working performance", rows: [
        { label: "Maximum load", value: "400 kg" },
        { label: "Bucket capacity", value: "0.12 m³" },
        { label: "Max. lifting force", value: "4.5 kN" },
        { label: "Maximum speed", value: "0 - 6 km/h" },
        { label: "Max. working height", value: "2,450 mm" },
        { label: "Max. discharge height", value: "1,510 mm" },
        { label: "Tilt angle (lowered position)", value: "38°" },
        { label: "Opening angle (raised position)", value: "82°" },
        { label: "Max. dump angle", value: "34°" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KOOP twin-cylinder" },
        { label: "Rated power", value: "23 hp" },
        { label: "Displacement", value: "639 cc" },
        { label: "Rated speed", value: "3,600 rpm" },
        { label: "Engine standard", value: "Euro 5" },
        { label: "Pressure", value: "17 - 21 Bar" },
        { label: "Fuel tank", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-profil.webp",             alt: "Sonca SJ-460 W mini loader, side view" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-biais.webp",              alt: "Sonca SJ-460 W angled view" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-moteur.webp",             alt: "Sonca SJ-460 W engine" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-panneau-de-controle.webp",alt: "Sonca SJ-460 W control panel" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-radiateur.webp",          alt: "Sonca SJ-460 W radiator" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 T (tracked loader) ─────────────────────────
  "SMC-SJ-460T": {
    tagline: `Tracked mini loader, all-terrain.`,
    intro: `The SONCA SJ-460 T is the tracked version of the compact mini loader: better traction and stability on soft or difficult ground, for handling and loading on all terrain. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1,000 kg", label: "Total weight" },
      { value: "400 kg", label: "Maximum load" },
      { value: "0.12 m³", label: "Bucket capacity" },
      { value: "30 %", label: "Climbable gradient" },
    ],
    sections: [
      { title: "All-terrain tracks and 23 hp KOOP engine",
        body: "Tracked version of the compact loader: 720 mm tracks (18×72) for exceptional grip on soft, muddy or rough ground, with a climbable gradient of 30 %.",
        features: [
          { title: "KOOP twin-cylinder engine", text: "23 hp, 639 cc, 3,600 rpm, Euro 5." },
          { title: "720 mm tracks", text: "Maximum grip, climbable gradient of 30 %." },
          { title: "0.12 m³ bucket", text: "Max load 400 kg, working height 2.45 m." },
        ] },
      { title: "Compact and hard-wearing",
        body: "2.2 × 1.1 × 1.28 m format and rugged components for narrow spaces and demanding sites, with 17-21 Bar hydraulics and a 4.5 kN lifting force.",
        features: [
          { title: "Compact dimensions", text: "2.2 m × 1.1 m × 1.28 m, ground clearance 150 mm." },
          { title: "4.5 kN lifting force", text: "Discharge height 1.51 m." },
          { title: "Ruggedness", text: "Reinforced components for increased longevity." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Total weight", value: "1,000 kg" },
        { label: "Machine height", value: "1,280 mm" },
        { label: "Overall length", value: "1,680 mm" },
        { label: "Length with standard bucket", value: "2,206 mm" },
        { label: "Width", value: "1,100 mm" },
        { label: "Track width", value: "720 mm" },
        { label: "Track size", value: "18×72" },
        { label: "Bucket width", value: "1,000 mm" },
        { label: "Wheelbase", value: "850 mm" },
        { label: "Ground clearance", value: "150 mm" },
      ]},
      { group: "Working performance", rows: [
        { label: "Maximum load", value: "400 kg" },
        { label: "Bucket capacity", value: "0.12 m³" },
        { label: "Max. lifting force", value: "4.5 kN" },
        { label: "Max. working height", value: "2,450 mm" },
        { label: "Max. discharge height", value: "1,510 mm" },
        { label: "Tilt angle (lowered position)", value: "38°" },
        { label: "Opening angle (raised position)", value: "82°" },
        { label: "Max. climbable gradient", value: "30 %" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KOOP twin-cylinder" },
        { label: "Rated power", value: "23 hp" },
        { label: "Displacement", value: "639 cc" },
        { label: "Rated speed", value: "3,600 rpm" },
        { label: "Engine standard", value: "Euro 5" },
        { label: "Pressure", value: "17 - 21 Bar" },
        { label: "Fuel tank", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-profil-leve.webp",         alt: "Sonca SJ-460 T mini loader with bucket raised" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-moteur.webp",              alt: "Sonca SJ-460 T engine" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-radiateur.webp",           alt: "Sonca SJ-460 T radiator" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-tableau-de-commandes.webp",alt: "Sonca SJ-460 T control panel" },
    ],
  },

  // ───────────────────────── SONCA SJ-490 W (loader) ─────────────────────────
  "SMC-SJ-490W": {
    tagline: `Wheeled mini loader, stepped-up power.`,
    intro: `The SONCA SJ-490 W is a more powerful articulated wheeled mini loader, for more intensive handling and loading work while remaining compact and manoeuvrable. Imported directly by CZN Machinery, 2-year warranty, delivery across France.`,
    stats: [
      { value: "1,100 kg", label: "Total weight" },
      { value: "250 kg", label: "Rated load" },
      { value: "0.12 m³", label: "Bucket capacity" },
      { value: "2.47 m", label: "Lift height" },
    ],
    sections: [
      { title: "15 kW KOOP engine and operator seat",
        body: "Wheeled loader with a built-in seat for comfort during long sessions. 15 kW KOOP engine (639 cc) Euro 5 for good mobility on all terrain.",
        features: [
          { title: "15 kW KOOP engine", text: "639 cc, 3,600 rpm, Euro 5 standard." },
          { title: "Built-in operator seat", text: "Comfort and ergonomics for extended sessions." },
          { title: "0.12 m³ bucket", text: "Working height 2.47 m, discharge 1.38 m." },
        ] },
      { title: "Compact with 18 MPa hydraulics",
        body: "2.75 × 1.1 × 1.28 m format with seat, rated hydraulic pressure of 18 MPa and wheeled mobility for good versatility.",
        features: [
          { title: "Compact dimensions", text: "2.75 m × 1.1 m × 1.28 m, ground clearance 170 mm." },
          { title: "18 MPa pressure", text: "Smooth, responsive movements." },
          { title: "Speed 0-5.5 km/h", text: "Precise control on all terrain." },
        ] },
    ],
    specs: [
      { group: "General specifications", rows: [
        { label: "Length without bucket", value: "2,222 mm" },
        { label: "Length with bucket", value: "2,750 mm" },
        { label: "Width", value: "1,100 mm" },
        { label: "Height", value: "1,280 mm" },
        { label: "Bucket width", value: "1,050 mm" },
        { label: "Distance between wheels", value: "623 mm" },
        { label: "Ground clearance", value: "170 mm" },
        { label: "Total weight", value: "1,100 kg" },
        { label: "Rated load capacity", value: "250 kg" },
      ]},
      { group: "Working performance", rows: [
        { label: "Bucket capacity", value: "0.12 m³" },
        { label: "Max. working height", value: "2,466 mm" },
        { label: "Max. discharge height", value: "1,382 mm" },
        { label: "Height to bucket pivot", value: "1,877 mm" },
        { label: "Speed", value: "0 - 5.5 km/h" },
        { label: "Tilt angle (lowered position)", value: "20°" },
        { label: "Opening angle (raised position)", value: "35°" },
      ]},
      { group: "Drivetrain & engine", rows: [
        { label: "Engine", value: "KOOP" },
        { label: "Rated power", value: "15 kW" },
        { label: "Displacement", value: "639 cc" },
        { label: "Rated speed", value: "3,600 rpm" },
        { label: "Engine standard", value: "Euro 5" },
        { label: "Rated pressure", value: "18 MPa" },
        { label: "Fuel tank", value: "15 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-profil-droit-leve.webp", alt: "Sonca SJ-490 W mini loader with bucket raised" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-moteur.webp",            alt: "Sonca SJ-490 W engine" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-radiateur.webp",         alt: "Sonca SJ-490 W radiator" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-manettes.webp",          alt: "Sonca SJ-490 W controls" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-siege.webp",             alt: "Sonca SJ-490 W seat" },
    ],
  },

};
