// 📁 /produit-data.es.js — EL ÚNICO ARCHIVO A EDITAR para el contenido de las fichas (español).
// Axonaut proporciona nombre / precio / stock. Aquí: tagline, intro, sections, specs, fotos.
// Clave = referencia Axonaut (product_code).
//
// FOTOS: coloca los archivos en el repo en /images/... y luego lista las rutas.
// SPECS : agrupadas -> [{ group, rows:[{label,value}] }]  (o simple [{label,value}]).

module.exports = {

  // ───────────────────────── SONCA SJW-06 ─────────────────────────
  "SMPSJW06": {
    tagline: `Microexcavadora ultracompacta, transportable con permiso B.`,
    intro: `La miniexcavadora SJW-06 es la microexcavadora más compacta de la gama SONCA, con solo 700 mm de anchura y 660 kg. Se cuela por todas partes: portones de jardín, pasos estrechos, patios interiores. Equipada con el motor Longxin G300FD Euro 5 de 8,5 CV, ofrece potencia suficiente para los trabajos de movimiento de tierras ligero, el paisajismo y la excavación de zanjas.`,
    stats: [
      { value: "660 kg", label: "Peso operativo" },
      { value: "Puesto abierto", label: "Tipo de cabina" },
      { value: "8,5 CV", label: "Potencia del motor" },
      { value: "1,09 m", label: "Profundidad de excavación" },
    ],
    sections: [
      { title: "Compacta, ligera y de transporte sencillo",
        body: `La SJW-06 pesa solo 660 kg, lo que la hace transportable en un simple remolque con un vehículo de permiso B. Su chasis compacto y sus orugas de 150 mm ofrecen estabilidad y maniobrabilidad sobre todo tipo de suelos. El puesto de conducción abierto garantiza una visibilidad total de 360° (canopy disponible como opción).`,
        features: [
          { title: "Transportable con permiso B", text: "Con 660 kg, se carga en un remolque estándar. No se necesita ningún permiso especial para el transporte." },
          { title: "Puesto de conducción abierto", text: "Visibilidad óptima de 360° y mandos ergonómicos accesibles, incluso en espacios reducidos." },
          { title: "Orugas todoterreno", text: "Orugas de caucho de 150 mm para una buena adherencia sin dañar céspedes ni superficies frágiles." },
        ] },
      { title: "Sistema hidráulico eficiente y preciso",
        body: `El sistema hidráulico utiliza una bomba Gear 3+3 que entrega 21,6 L/min a 16 MPa. Este caudal generoso para esta clase de máquina asegura movimientos fluidos y precisos de la pluma, el balancín y el cazo. El depósito hidráulico de 11,4 L garantiza una autonomía de trabajo cómoda.`,
        features: [
          { title: "Bomba Gear 3+3", text: "Bomba de engranajes de doble flujo que asegura un caudal de 21,6 L/min para movimientos simultáneos fluidos." },
          { title: "Presión de 16 MPa", text: "Fuerza de excavación de 3,5 kN en el balancín, suficiente para excavar en la mayoría de los suelos habituales." },
          { title: "Mantenimiento simplificado", text: "Acceso fácil a los puntos de mantenimiento, intervalos de mantenimiento espaciados para reducir los costes." },
        ] },
      { title: "Para particulares y profesionales por igual",
        body: `Elección ideal tanto para los particulares que realizan ellos mismos sus obras (jardín, terraza, piscina desmontable, zanjas) como para los paisajistas y profesionales que intervienen en espacios reducidos. Su facilidad de transporte y su sencillez de uso la convierten en una microexcavadora accesible para todos.`,
        features: [
          { title: "Ideal para paisajismo", text: "Parterres, zanjas de riego, cimientos de muretes, plantación de árboles: simplifica los trabajos penosos hechos a mano." },
          { title: "Precio imbatible + garantía de 2 años", text: "Desde 4.125 € sin IVA, garantía de piezas de 24 meses y servicio posventa con sede en Francia con stock de piezas de repuesto." },
          { title: "Accesorios específicos", text: "Enganche rápido, cazo de limpieza, diente ripper, pulgar de manipulación, rastrillo: adapta la máquina a tus necesidades." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso operativo", value: "660 kg" },
        { label: "Longitud total", value: "2.287 mm" },
        { label: "Anchura total", value: "700 mm" },
        { label: "Altura total", value: "1.350 mm" },
        { label: "Anchura de la oruga", value: "150 mm" },
        { label: "Anchura del cazo estándar", value: "300 mm" },
        { label: "Tipo de cabina", value: "Puesto abierto (canopy opcional)" },
      ]},
      { group: "Dimensiones de trabajo", rows: [
        { label: "Profundidad de excavación máx.", value: "1.091 mm" },
        { label: "Profundidad de excavación vertical máx.", value: "1.018 mm" },
        { label: "Altura de excavación máx.", value: "2.114 mm" },
        { label: "Altura de descarga máx.", value: "1.386 mm" },
        { label: "Radio de excavación horizontal máx.", value: "2.254 mm" },
        { label: "Fuerza de excavación (balancín)", value: "3,5 kN" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "Longxin G300FD" },
        { label: "Potencia", value: "6,8 kW (8,5 CV)" },
        { label: "Energía", value: "Gasolina Euro 5" },
        { label: "Bomba hidráulica", value: "Gear Pump 3+3" },
        { label: "Caudal de la bomba", value: "21,6 L/min" },
        { label: "Presión del sistema", value: "16 MPa" },
        { label: "Depósito de combustible", value: "6 L" },
        { label: "Depósito hidráulico", value: "11,4 L" },
      ]},
      { group: "Traslación y orugas", rows: [
        { label: "Velocidad de traslación", value: "1,5 km/h" },
        { label: "Velocidad de giro", value: "9,5 rpm" },
        { label: "Orugas", value: "150 × 72 × 34" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-06/sjw-06-profil.webp",       alt: "Miniexcavadora Sonca SJW-06, vista lateral con cazo a la derecha" },
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-avant.webp",    alt: "Miniexcavadora Sonca SJW-06, vista 3/4 delantera" },
      { src: "/images/SONCA/SJW-06/sjw-06-3-4-arriere.webp",  alt: "Sonca SJW-06, vista 3/4 trasera" },
      { src: "/images/SONCA/SJW-06/sjw-06-bras-leve.webp",    alt: "Sonca SJW-06 con la pluma levantada" },
      { src: "/images/SONCA/SJW-06/sjw-06-arriere-droit.webp",alt: "Sonca SJW-06, vista trasera derecha" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 F ─────────────────────────
  "SMPSJW12F": {
    tagline: `Miniexcavadora de 1,2 t con pluma orientable de serie.`,
    intro: `La SONCA SJW-12 F es la miniexcavadora de 1,2 toneladas polivalente con pluma orientable de serie. Esta función permite alcanzar ángulos imposibles con una pluma fija e intervenir en zonas de difícil acceso sin reposicionar la máquina. Con su anchura de un metro y su radio de giro reducido, se desenvuelve con facilidad en espacios reducidos: la herramienta ideal para el movimiento de tierras y el acondicionamiento residencial. Motor KOOP KD192F de 10 CV refrigerado por aire. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1,00 m", label: "Anchura total" },
      { value: "10 CV", label: "Potencia del motor" },
      { value: "1,65 m", label: "Profundidad de excavación" },
      { value: "1,49 m", label: "Radio de giro" },
    ],
    sections: [
      { title: "Pluma orientable de serie",
        body: `La pluma orientable permite alcanzar ángulos inaccesibles con una pluma fija y aumenta considerablemente la zona de trabajo sin desplazar la máquina. El capó del motor protege los latiguillos hidráulicos para una mayor longevidad y un mantenimiento simplificado.`,
        features: [
          { title: "Maniobrabilidad excepcional", text: "Intervención eficaz en todas las zonas de difícil acceso, sin reposicionar la máquina." },
          { title: "Capó protector del motor", text: "Protege eficazmente los latiguillos hidráulicos de los elementos exteriores para una mayor durabilidad." },
          { title: "Motor KOOP de 10 CV", text: "Motor KOOP KD192F refrigerado por aire, equilibrio entre potencia, fiabilidad y facilidad de mantenimiento." },
        ] },
      { title: "Compacta y manejable",
        body: `Con una anchura de solo 1 metro y un radio de giro mínimo de 1.490 mm en la parte delantera, la SJW-12 F se desenvuelve con facilidad alrededor de los obstáculos en los espacios más reducidos, maximizando al mismo tiempo la productividad en las obras residenciales.`,
        features: [
          { title: "Anchura de 1 metro", text: "Pasa por accesos estrechos y portones de jardín estándar." },
          { title: "Giro de 1.490 mm", text: "Navegación precisa alrededor de los obstáculos, ideal en entorno residencial." },
          { title: "Cazo de 40 cm incluido", text: "Entregada lista para usar en los trabajos de movimiento de tierras habituales." },
        ] },
    ],
    // Specs confirmadas para la versión F. Puedes completarlas con su ficha técnica completa.
    specs: [
      { group: "Características generales", rows: [
        { label: "Anchura total", value: "1.000 mm" },
        { label: "Anchura del cazo", value: "400 mm" },
      ]},
      { group: "Dimensiones de trabajo", rows: [
        { label: "Profundidad de excavación máx.", value: "1.650 mm" },
        { label: "Radio de giro mín. (delantero)", value: "1.490 mm" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KOOP KD192F" },
        { label: "Potencia", value: "10 CV" },
        { label: "Refrigeración", value: "Aire" },
        { label: "Energía", value: "Diésel Euro 5" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-avant-droit.webp",    alt: "Miniexcavadora Sonca SJW-12 F con pluma orientable, vista delantera derecha" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-arriere-gauche.webp",  alt: "SJW-12 F trasera izquierda" },
      { src: "/images/SONCA/SJW-12-F/Mini-pelle-sonca-sjw-12-f-moteur.webp",          alt: "SJW-12 F, capó del motor" },
    ],
  },

  // ───────────────────────── SONCA SJW-12 P ─────────────────────────
  "SMPSJW12P": {
    tagline: `La 1,2 t con pluma orientable, acabados de gama alta.`,
    intro: `La SONCA SJW-12 P es la versión más completa de la gama compacta de 1,2 toneladas: pluma orientable, acabados cuidados y joysticks hidráulicos integrados en los reposabrazos del asiento para una ergonomía y una precisión óptimas. Su radio de giro de 1.490 mm y su anchura de un metro permiten desenvolverse en los espacios más reducidos. Destinada a los particulares exigentes y a las obras residenciales cuidadas, combina rendimiento técnico y estética. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.015 kg", label: "Peso operativo" },
      { value: "1,00 m", label: "Anchura total" },
      { value: "10 CV", label: "Potencia del motor" },
      { value: "1,65 m", label: "Profundidad de excavación" },
    ],
    sections: [
      { title: "Pluma orientable y acabados cuidados",
        body: `La SJW-12 P se distingue por su pluma orientable y sus acabados de calidad. El sistema de orientación reforzado ofrece maniobrabilidad y precisión en todos los espacios reducidos, mientras que el capó estético del motor protege el conjunto de los componentes.`,
        features: [
          { title: "Pluma orientable reforzada", text: "Sistema de orientación duradero y preciso para trabajar en los espacios más reducidos." },
          { title: "Joysticks integrados", text: "Mandos hidráulicos integrados en los reposabrazos del asiento para una ergonomía óptima." },
          { title: "Motor KOOP optimizado", text: "Motor KOOP KD192F, equilibrio entre potencia, fiabilidad y facilidad de mantenimiento." },
        ] },
      { title: "Compacta y precisa",
        body: `Con un radio de giro mínimo de 1.490 mm y una anchura de solo 1 metro, la SJW-12 P se desplaza con gran precisión alrededor de los obstáculos. Ideal para jardines, patios interiores y acondicionamientos residenciales cuidados.`,
        features: [
          { title: "Anchura de 1 metro", text: "Acceso facilitado a espacios reducidos y pasos estrechos." },
          { title: "Giro de 1.490 mm", text: "Navegación ultraprecisa alrededor de los obstáculos." },
          { title: "Pack completo", text: "Entregada con cazo de 40 cm, canopy, caja de herramientas y filtros." },
        ] },
      { title: "Sistema hidráulico optimizado",
        body: `El sistema hidráulico, reforzado para soportar la pluma orientable, conserva una gran precisión. La bomba Tianjin de 20 L y el cazo de movimiento de tierras de 40 cm aseguran movimientos fluidos y perfectamente controlados, incluso durante las maniobras de orientación.`,
        features: [
          { title: "Bomba Tianjin de 20 L", text: "Caudal generoso para movimientos fluidos y una buena productividad." },
          { title: "Cazo de 40 cm reforzado", text: "Incluido, dimensionado para los trabajos de movimiento de tierras habituales." },
          { title: "Opción de pulgar manipulador", text: "Dispositivo opcional en el balancín, para agarrar todo tipo de materiales." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso operativo", value: "1.015 kg" },
        { label: "Fuerza de excavación", value: "1.200 kg" },
        { label: "Longitud total", value: "2.200 mm" },
        { label: "Anchura total", value: "1.000 mm" },
        { label: "Altura total", value: "2.240 mm" },
        { label: "Anchura de las zapatas", value: "170 mm" },
        { label: "Anchura del cazo", value: "400 mm" },
        { label: "Altura de vía", value: "320 mm" },
      ]},
      { group: "Dimensiones de trabajo", rows: [
        { label: "Profundidad de excavación máx.", value: "1.650 mm" },
        { label: "Altura de excavación máx.", value: "2.580 mm" },
        { label: "Altura de descarga máx.", value: "1.750 mm" },
        { label: "Radio de excavación a nivel del suelo", value: "2.500 mm" },
        { label: "Radio de rotación máx.", value: "1.100 mm" },
        { label: "Radio de giro mín. (delantero)", value: "1.490 mm" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KOOP KD192F" },
        { label: "Potencia", value: "10,3 / 11,7 CV" },
        { label: "Régimen nominal", value: "3.600 rpm" },
        { label: "Cilindrada", value: "499 cc" },
        { label: "Energía", value: "Diésel Euro 5" },
        { label: "Refrigeración", value: "Aire" },
        { label: "Tipo de motor", value: "Monocilíndrico" },
        { label: "Consumo", value: "275–280 g/kWh" },
        { label: "Bomba hidráulica", value: "Tianjin" },
        { label: "Caudal de la bomba", value: "20 L" },
        { label: "Depósito de combustible", value: "5,5 L" },
      ]},
    ],
    images: [
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-avant-droit.webp",   alt: "Miniexcavadora Sonca SJW-12 P con pluma orientable, vista delantera derecha" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-arriere-gauche.webp",alt: "SJW-12 P trasera izquierda, sistema hidráulico" },
      { src: "/images/SONCA/SJW-12-P/Mini-pelle-sonca-sjw-12-p-moteur.webp",        alt: "SJW-12 P, capó del motor y acabados" },
    ],
  },

  // ───────────────────────── SONCA SJW-18 PRO ─────────────────────────
  "SMPSJW18PRO": {
    tagline: `Miniexcavadora de 1,8 t, el buen equilibrio tamaño/potencia.`,
    intro: `La SONCA SJW-18 PRO es una miniexcavadora de 1,8 toneladas polivalente, diseñada para las obras de movimiento de tierras más exigentes sin dejar de ser fácilmente transportable. Robusta y confortable, admite una amplia gama de accesorios. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1,8 t", label: "Fuerza de excavación" },
      { value: "24 CV", label: "Potencia del motor" },
      { value: "1.271 kg", label: "Peso operativo" },
      { value: "2,2 m", label: "Profundidad de excavación" },
    ],
    sections: [
      { title: "Diseño reforzado para uso intensivo",
        body: "Motor Laidong 385 reforzado de 24 CV y bomba hidráulica Shimadzu de alta durabilidad: una excavadora de 1,8 toneladas con componentes reforzados para las obras más exigentes (construcción, obra pública, movimiento de tierras intensivo).",
        features: [
          { title: "Motor Laidong 385", text: "24 CV tricilíndrico refrigerado por líquido, componentes endurecidos para un funcionamiento continuo." },
          { title: "Bomba Shimadzu 25 l/min", text: "Cilindros sobredimensionados y juntas de alta resistencia para una durabilidad máxima." },
          { title: "Capacidades de excavación", text: "Altura de excavación de 2,9 m y profundidad de 2,2 m mantenidas incluso en uso intensivo." },
        ] },
      { title: "Estructura ultrarrobusta",
        body: "Chasis de acero de alta resistencia, puntos de pivote reforzados y anchura de 1,1 m que conserva la maniobrabilidad ofreciendo al mismo tiempo una mayor estabilidad.",
        features: [
          { title: "Chasis reforzado", text: "Acero de alta resistencia, soldaduras reforzadas y protecciones adicionales." },
          { title: "Pack pro completo", text: "Cazo de 40 cm, canopy, caja de herramientas y kit de mantenimiento incluidos." },
          { title: "Depósitos", text: "Combustible 10 L, hidráulico 16 L." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Fuerza de excavación", value: "1.800 kg" },
        { label: "Longitud total", value: "2.250 mm" },
        { label: "Anchura total", value: "1.100 mm" },
        { label: "Altura total", value: "2.200 mm" },
        { label: "Longitud de la pluma", value: "2.560 mm" },
        { label: "Anchura de la vía", value: "230 mm" },
        { label: "Longitud de la vía", value: "1.500 mm" },
        { label: "Peso operativo", value: "1.271 kg" },
        { label: "Anchura del cazo", value: "400 mm" },
      ]},
      { group: "Dimensiones de trabajo", rows: [
        { label: "Altura de excavación máx.", value: "2.900 mm" },
        { label: "Altura de descarga máx.", value: "2.400 mm" },
        { label: "Profundidad de excavación máx. a nivel del suelo", value: "2.200 mm" },
        { label: "Radio de excavación máx. a nivel del suelo", value: "2.600 mm" },
        { label: "Radio de rotación máx.", value: "1.190 mm" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "Laidong 385 reforzado" },
        { label: "Potencia", value: "24 CV" },
        { label: "Energía", value: "Diésel Euro 5" },
        { label: "Refrigeración", value: "Líquido" },
        { label: "Tipo de motor", value: "Tricilíndrico reforzado" },
        { label: "Bomba hidráulica", value: "Shimadzu" },
        { label: "Caudal de la bomba", value: "25 l/min" },
        { label: "Depósito de combustible", value: "10 L" },
        { label: "Depósito hidráulico", value: "16 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-profil.webp",  alt: "Miniexcavadora Sonca SJW-18 PRO, vista lateral con cazo a la derecha" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-avant.webp",   alt: "Miniexcavadora Sonca SJW-18 PRO, vista delantera" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-moteur.webp",  alt: "Sonca SJW-18 PRO motor" },
      { src: "/images/SJW-18-PRO/mini-pelle-sonca-sjw-18-pro-pedales.webp", alt: "Sonca SJW-18 PRO pedales y mandos" },
    ],
  },

  // ───────────────────────── SONCA SJW-25 ─────────────────────────
  "SMPSJW25": {
    tagline: `Miniexcavadora de 2,5 t para los grandes trabajos.`,
    intro: `La SONCA SJW-25 es la más potente de las miniexcavadoras Sonca con sus 2,5 toneladas: mayor profundidad de excavación y superior fuerza de arranque para afrontar las obras de movimiento de tierras más ambiciosas. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "2,5 t", label: "Fuerza de excavación" },
      { value: "29 CV", label: "Potencia del motor" },
      { value: "1.725 kg", label: "Peso operativo" },
      { value: "2,6 m", label: "Profundidad de excavación" },
    ],
    sections: [
      { title: "Vías variables y motor Changchai de 29 CV",
        body: "Sistema exclusivo de ajuste de la anchura de las orugas (1080-1520 mm) para pasar por accesos estrechos y luego estabilizarse en terreno difícil. Motor Changchai 390 de 29 CV refrigerado por líquido, fiable y sobrio.",
        features: [
          { title: "Vías variables 1080-1520 mm", text: "Orugas estrechas para los pasos, anchas para la máxima estabilidad." },
          { title: "Motor Changchai 390", text: "29 CV (20 kW), 4 tiempos refrigerado por líquido, Euro 5." },
          { title: "Pluma orientable", text: "Alcanza las zonas de difícil acceso sin reposicionar la máquina." },
        ] },
      { title: "Maniobrabilidad y motor de traslación protegido",
        body: "Radio de giro trasero reducido a 756 mm y motor de traslación plano integrado en el chasis, protegido de los impactos para una mayor durabilidad en terrenos difíciles.",
        features: [
          { title: "Radio trasero de 756 mm", text: "Maniobra en los espacios más reducidos." },
          { title: "Motor de traslación protegido", text: "Integrado en el chasis, a resguardo de los obstáculos." },
          { title: "Opción de pulgar manipulador", text: "Dispositivo de 225 mm para agarrar madera, hormigón, rocas." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Fuerza de excavación", value: "2.500 kg" },
        { label: "Longitud total", value: "2.700 mm" },
        { label: "Anchura total", value: "1.300 mm" },
        { label: "Altura total", value: "2.550 mm" },
        { label: "Anchura de las zapatas", value: "250 mm" },
        { label: "Anchura del cazo", value: "420 mm" },
        { label: "Longitud de la vía", value: "1.800 mm" },
        { label: "Altura de la vía", value: "320 mm" },
        { label: "Peso operativo", value: "1.725 kg" },
      ]},
      { group: "Dimensiones de trabajo", rows: [
        { label: "Altura de excavación máx.", value: "3.400 mm" },
        { label: "Altura de descarga máx.", value: "2.673 mm" },
        { label: "Profundidad de excavación máx.", value: "2.600 mm" },
        { label: "Radio de giro trasero", value: "756 mm" },
        { label: "Radio de excavación máx.", value: "4.163 mm" },
        { label: "Vías variables", value: "1.080 - 1.520 mm" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "Changchai 390" },
        { label: "Potencia", value: "29 CV (20 kW)" },
        { label: "Energía", value: "Diésel Euro 5" },
        { label: "Refrigeración", value: "Líquido" },
        { label: "Depósito de combustible", value: "12 L" },
        { label: "Depósito hidráulico", value: "18 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-profil.webp",          alt: "Miniexcavadora Sonca SJW-25, vista lateral con cazo a la derecha" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-3-4-avant.webp",      alt: "Miniexcavadora Sonca SJW-25, vista 3/4 delantera" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-cabine-joysticks.webp", alt: "Sonca SJW-25 cabina y joysticks" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-leviers-pedales.webp",  alt: "Sonca SJW-25 palancas y pedales" },
      { src: "/images/SJW-25/mini-pelle-sonca-sjw-25-moteur.webp",           alt: "Sonca SJW-25 motor" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12JS ─────────────────────────
  "XMP-XC-12-JS": {
    tagline: `Miniexcavadora de 1,2 t, manejable y resistente.`,
    intro: `La XCAVATOR XC12JS es una miniexcavadora de 1,2 toneladas compacta y manejable, pensada para el movimiento de tierras y el acondicionamiento en espacios reducidos. Fiable y fácil de manejar. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-vue-avant.webp",             alt: "Miniexcavadora Xcavator XC12JS vista delantera" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-bras-excavation-etendu.webp", alt: "Xcavator XC12JS con la pluma de excavación extendida" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-siege-cabine.webp",          alt: "Xcavator XC12JS asiento y puesto de conducción" },
      { src: "/images/XCAVATOR/XC12js/FOND/mini-pelle-xcavator-xc12js-moteur.webp",                alt: "Xcavator XC12JS motor" },
    ],
  },

  // ───────────────────────── XCAVATOR XC12S ─────────────────────────
  "XMP-XC-12-S": {
    tagline: `Miniexcavadora de 1,2 t polivalente.`,
    intro: `La XCAVATOR XC12S es una miniexcavadora de 1,2 toneladas polivalente, ideal para los particulares y profesionales que buscan una máquina compacta y eficiente para el movimiento de tierras habitual. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant.webp",            alt: "Miniexcavadora Xcavator XC12S vista delantera" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-vue-avant-gauche.webp",     alt: "Xcavator XC12S vista delantera izquierda" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-avant-droit.webp",   alt: "Xcavator XC12S perfil delantero derecho" },
      { src: "/images/XCAVATOR/XC12S/FOND/mini-pelle-xcavator-xc12s-profil-droit-excavation.webp", alt: "Xcavator XC12S excavando" },
    ],
  },

  // ───────────────────────── XCAVATOR XC18S PRO ─────────────────────────
  "XMP-XC-18-PRO": {
    tagline: `Miniexcavadora de 1,8 t, rendimiento y confort.`,
    intro: `La XCAVATOR XC18S PRO es una miniexcavadora de 1,8 toneladas que combina potencia hidráulica y confort de conducción para las obras de movimiento de tierras intensivas. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-avant.webp",                 alt: "Miniexcavadora Xcavator XC18S PRO vista delantera" },
      { src: "/images/XCAVATOR/XC18PRO/mini-pelle-xcs-18-pro-vue-profil-droit.webp",          alt: "Xcavator XC18S PRO perfil derecho" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-vue-ensemble.webp",  alt: "Xcavator XC18S PRO vista de conjunto" },
      { src: "/images/XCAVATOR/XC18PRO/FOND/mini-pelle-xcavator-xc18spro-moteur.webp",        alt: "Xcavator XC18S PRO motor" },
    ],
  },

  // ───────────────────────── XCAVATOR XC25S (CANOPY) ─────────────────────────
  "XMP-XC-25-S-C": {
    tagline: `Miniexcavadora de 2,5 t con canopy de serie.`,
    intro: `La XCAVATOR XC25S es una miniexcavadora de 2,5 toneladas equipada con un techo de protección canopy de serie. Diseñada para los grandes trabajos de movimiento de tierras, combina potencia, estabilidad y seguridad del operador. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [],
    images: [
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-avant-droite.webp",       alt: "Miniexcavadora Xcavator XC25S vista delantera derecha" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-gauche.webp",          alt: "Xcavator XC25S perfil izquierdo" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-vue-arriere-droite.webp",     alt: "Xcavator XC25S vista trasera derecha" },
      { src: "/images/XCAVATOR/XC25S/FOND/mini-pelle-xcavator-xc25s-profil-droit-excavation.webp", alt: "Xcavator XC25S excavando" },
    ],
  },

  // ───────────── XCAVATOR XC06S & XC25U-2C — claves corregidas, fotos por aportar ─────────────
  "XMP-XC06S": {
    tagline: `Miniexcavadora compacta de gama de entrada.`,
    intro: `La XCAVATOR XC06S es una miniexcavadora compacta de gama de entrada, pensada para el movimiento de tierras ligero y el acondicionamiento exterior. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ sin URL proporcionada — fotos próximamente
  },

  "XMP-XC25-2C": {
    tagline: `Miniexcavadora de 2,5 t, la más capaz de la gama.`,
    intro: `La XCAVATOR XC25U-2C es una de las miniexcavadoras más eficientes del catálogo, destinada a las obras de movimiento de tierras exigentes. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [], sections: [], specs: [], images: [],  // ⚠ sin URL proporcionada — fotos próximamente
  },

  // ───────────────────────── SONCA SJ-08EL (dúmper) ─────────────────────────
  "SMTSJ08EL": {
    tagline: `Minidúmper de orugas, gran capacidad.`,
    intro: `El SONCA SJ-08EL es un minidúmper de orugas con caja basculante, diseñado para transportar tierra, escombros y materiales por los terrenos más difíciles. Su gran capacidad lo convierte en un aliado de las obras de evacuación y acondicionamiento. Importado directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "800 kg", label: "Peso operativo" },
      { value: "0,22 m³", label: "Capacidad de la caja" },
      { value: "10 CV", label: "Potencia del motor" },
      { value: "1,75 m", label: "Altura de basculamiento" },
    ],
    sections: [
      { title: "Motor diésel de 10 CV y orugas todoterreno",
        body: "Motor KD292F diésel de 10 CV (306 cc) con arranque eléctrico y orugas robustas para transportar cargas pesadas por terrenos accidentados, embarrados o en pendiente de hasta 20°.",
        features: [
          { title: "Motor KD292F de 10 CV", text: "306 cc, arranque eléctrico, par elevado." },
          { title: "Orugas robustas", text: "Estabilidad y adherencia en todo tipo de terrenos, pendiente de 20°." },
          { title: "Caja de 0,22 m³", text: "Volumen total de 0,26 m³, altura de basculamiento de 1,75 m." },
        ] },
      { title: "Compacto, telescópico y de fácil mantenimiento",
        body: "Formato de 1,98 × 0,87 × 1,68 m y diseño telescópico para los espacios reducidos. Diseño sin capó que facilita el acceso a los componentes y el mantenimiento.",
        features: [
          { title: "Dimensiones compactas", text: "1,98 m × 0,87 m × 1,68 m, 2 velocidades (2,1-4,2 km/h)." },
          { title: "Refrigerador de aceite", text: "Disipación térmica optimizada para el uso intensivo." },
          { title: "Mantenimiento simplificado", text: "Depósito hidráulico de 7 L, acceso facilitado a los componentes." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso operativo", value: "800 kg" },
        { label: "Longitud de la máquina", value: "1.982 mm" },
        { label: "Anchura de la máquina", value: "870 mm" },
        { label: "Altura de la máquina", value: "1.680 mm" },
        { label: "Distancia entre centros de orugas", value: "620 mm" },
        { label: "Dimensiones de la caja", value: "1235 × 730 × 590 mm" },
        { label: "Capacidad de subida", value: "20°" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Volumen de la caja", value: "0,26 m³" },
        { label: "Capacidad de carga", value: "0,22 m³" },
        { label: "Altura de elevación y basculamiento", value: "1.750 mm" },
        { label: "Velocidad de traslación", value: "2,1 - 4,2 km/h" },
        { label: "Número de velocidades", value: "2 velocidades" },
        { label: "Sistema de traslación", value: "Orugas" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KD292F Diésel 10 CV" },
        { label: "Cilindrada", value: "306 cc" },
        { label: "Potencia", value: "10 CV" },
        { label: "Energía", value: "Diésel" },
        { label: "Arranque", value: "Eléctrico" },
        { label: "Depósito de combustible", value: "5,3 L" },
        { label: "Depósito hidráulico", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-droit.webp",   alt: "Minidúmper Sonca SJ-08EL perfil delantero derecho" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-profil-avant-deplie.webp",  alt: "Sonca SJ-08EL con la caja desplegada" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-moteur.webp",               alt: "Sonca SJ-08EL motor" },
      { src: "/images/SJ-08EL/mini-tombereau-sonca-sj-08el-manettes.webp",             alt: "Sonca SJ-08EL mandos" },
    ],
  },

  // ───────────────────────── SONCA SJ-05E (dúmper) ─────────────────────────
  "SMTSJ05E": {
    tagline: `Minidúmper de orugas compacto.`,
    intro: `El SONCA SJ-05E es un minidúmper de orugas compacto con caja basculante, ideal para transportar materiales en espacios reducidos y sobre suelos blandos. Manejable y resistente. Importado directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "500 kg", label: "Carga máxima" },
      { value: "0,22 m³", label: "Capacidad de la caja" },
      { value: "6,5 CV", label: "Potencia del motor" },
      { value: "0,95 m", label: "Radio de giro" },
    ],
    sections: [
      { title: "Ultracompacto y manejable",
        body: "Minidúmper de 500 kg de carga con un radio de giro excepcional de 0,95 m. Motor KD292F diésel de 6,5 CV (200 cc) con doble arranque manual y eléctrico.",
        features: [
          { title: "Motor KD292F de 6,5 CV", text: "200 cc, arranque manual y eléctrico." },
          { title: "Radio de giro de 0,95 m", text: "Agilidad máxima en los espacios estrechos." },
          { title: "Orugas de caucho", text: "Carga de 500 kg, pendiente franqueable de 20°." },
        ] },
      { title: "Velocidad variable e hidráulica Northern",
        body: "Dos velocidades (1,7 / 3,5 km/h) y válvula de mando multidireccional Northern Hydraulics para maniobras precisas y controladas.",
        features: [
          { title: "2 velocidades", text: "1,7 / 3,5 km/h según las necesidades de la obra." },
          { title: "Mando Northern", text: "Maniobrabilidad precisa y mayor seguridad." },
          { title: "Depósito hidráulico de 7 L", text: "Movimientos fluidos incluso en uso intensivo." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso", value: "500 kg" },
        { label: "Longitud total", value: "1.517 mm" },
        { label: "Anchura total", value: "870 mm" },
        { label: "Altura total", value: "1.278 mm" },
        { label: "Radio de giro mín.", value: "950 mm" },
        { label: "Distancia entre centros de orugas", value: "520 mm" },
        { label: "Altura libre al suelo mín.", value: "85 mm" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Capacidad de carga máx.", value: "500 kg" },
        { label: "Volumen de carga de la caja", value: "0,22 m³" },
        { label: "Dimensiones de la caja", value: "1040 × 730 × 590 mm" },
        { label: "Pendiente máx. franqueable", value: "20°" },
        { label: "Velocidad de marcha", value: "1,7 / 3,5 km/h" },
        { label: "Número de velocidades", value: "2 velocidades" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KD292F Diésel 6,5 CV" },
        { label: "Potencia", value: "6,5 CV" },
        { label: "Cilindrada", value: "200 cc" },
        { label: "Energía", value: "Diésel" },
        { label: "Peso del motor", value: "16 kg" },
        { label: "Arranque", value: "Manual y eléctrico" },
        { label: "Depósito de combustible", value: "3,1 L" },
        { label: "Depósito hidráulico", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-profil-gauche.webp",       alt: "Minidúmper Sonca SJ-05E perfil izquierdo" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-biais-arriere-droit.webp", alt: "Sonca SJ-05E vista sesgada trasera derecha" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-chenilles.webp",           alt: "Sonca SJ-05E orugas" },
      { src: "/images/SJ-05E/mini-tombereau-sonca-sj-05e-moteur.webp",              alt: "Sonca SJ-05E motor" },
    ],
  },

  // ───────────────────────── SONCA SJ-05EL (dúmper) ─────────────────────────
  "SMTSJ05EL": {
    tagline: `Minidúmper de orugas, caja elevable.`,
    intro: `El SONCA SJ-05EL es un minidúmper de orugas con caja elevable, para descargar en altura (remolque, big-bag, contenedor). Compacto y todoterreno, facilita la evacuación de materiales en obra. Importado directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "500 kg", label: "Carga máxima" },
      { value: "0,15 m³", label: "Capacidad de la caja" },
      { value: "10 CV", label: "Potencia del motor" },
      { value: "1,35 m", label: "Altura de descarga" },
    ],
    sections: [
      { title: "Dúmper telescópico de 10 CV",
        body: "Minidúmper telescópico con motor KD292F diésel de 10 CV, caja de 0,15 m³ (volumen total de 0,22 m³) y capacidad de 500 kg para un transporte eficiente en obra.",
        features: [
          { title: "Motor KD292F de 10 CV", text: "Diésel, arranque eléctrico, 2 velocidades (1,7-3,5 km/h)." },
          { title: "Sistema telescópico", text: "Altura de descarga de 1,35 m, ideal en espacios reducidos." },
          { title: "Caja de 0,15 m³", text: "Volumen total de 0,22 m³, carga de 500 kg." },
        ] },
      { title: "Todoterreno y de fácil mantenimiento",
        body: "Orugas para una tracción estable en suelos accidentados, embarrados o resbaladizos. Capó del motor con gran ángulo de apertura para un mantenimiento diario simplificado.",
        features: [
          { title: "Tracción en todos los terrenos", text: "Orugas, pendiente franqueable de 20°." },
          { title: "Mantenimiento facilitado", text: "Capó de gran apertura, refrigerador de aceite." },
          { title: "Compacto", text: "1,57 m × 0,87 m × 1,66 m, radio de giro de 0,95 m." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso operativo", value: "500 kg" },
        { label: "Peso neto", value: "430 kg" },
        { label: "Longitud de la máquina", value: "1.566 mm" },
        { label: "Anchura de la máquina", value: "870 mm" },
        { label: "Altura de la máquina", value: "1.660 mm" },
        { label: "Radio de giro mín.", value: "950 mm" },
        { label: "Distancia entre centros de orugas", value: "520 mm" },
        { label: "Altura libre al suelo mín.", value: "85 mm" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Capacidad de carga máx.", value: "500 kg" },
        { label: "Capacidad de carga de la caja", value: "0,15 m³" },
        { label: "Volumen total de la caja", value: "0,22 m³" },
        { label: "Dimensiones de la caja", value: "1040 × 730 × 590 mm" },
        { label: "Altura de descarga", value: "1.350 mm" },
        { label: "Capacidad de pendiente", value: "20°" },
        { label: "Velocidad", value: "1,7 - 3,5 km/h" },
        { label: "Número de velocidades", value: "2 velocidades" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KD292F Diésel 10 CV" },
        { label: "Potencia", value: "10 CV" },
        { label: "Energía", value: "Diésel" },
        { label: "Arranque", value: "Eléctrico" },
        { label: "Refrigeración", value: "Aire" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-avant-droit.webp",  alt: "Minidúmper Sonca SJ-05EL perfil delantero derecho" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit.webp",        alt: "Sonca SJ-05EL perfil derecho" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-profil-droit-releve.webp", alt: "Sonca SJ-05EL con la caja elevada" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-moteur.webp",              alt: "Sonca SJ-05EL motor" },
      { src: "/images/SJ-05EL/mini-tombereau-sonca-sj-05el-manettes.webp",            alt: "Sonca SJ-05EL mandos" },
    ],
  },

  // ───────────────────────── SONCA SJ-05M (dúmper) ─────────────────────────
  "SMTSJ05M": {
    tagline: `Minidúmper de orugas manejable.`,
    intro: `El SONCA SJ-05M es un minidúmper de orugas con caja basculante, pensado para la maniobrabilidad y la sencillez de uso en las obras pequeñas y medianas. Importado directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "500 kg", label: "Carga máxima" },
      { value: "0,22 m³", label: "Capacidad de la caja" },
      { value: "6,5 CV", label: "Potencia del motor" },
      { value: "0,95 m", label: "Radio de giro" },
    ],
    sections: [
      { title: "El dúmper esencial, sencillo y fiable",
        body: "Versión esencial del minidúmper: motor KD292F diésel de 6,5 CV (200 cc), una velocidad de 1,7 km/h y un radio de giro de 0,95 m. Capacidad de carga de 500 kg para el transporte por terrenos difíciles.",
        features: [
          { title: "Motor KD292F de 6,5 CV", text: "200 cc, arranque manual, prestaciones constantes." },
          { title: "Radio de giro de 0,95 m", text: "Se cuela en los lugares de difícil acceso." },
          { title: "Orugas de caucho", text: "Carga de 500 kg, pendiente franqueable de 20°." },
        ] },
      { title: "Caja compacta y transmisión Northern",
        body: "Caja de 1040 × 730 × 590 mm (0,22 m³) y transmisión hidráulica Northern Hydraulics reconocida por su robustez y su precisión.",
        features: [
          { title: "Caja de 0,22 m³", text: "Grava, tierra, piedras, compost transportados sin esfuerzo." },
          { title: "Transmisión Northern", text: "Maniobras fluidas y controladas, mayor durabilidad." },
          { title: "Depósito hidráulico de 7 L", text: "Movimientos fluidos para una eficiencia máxima." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso", value: "400 kg" },
        { label: "Longitud total", value: "1.517 mm" },
        { label: "Anchura total", value: "870 mm" },
        { label: "Altura total", value: "1.278 mm" },
        { label: "Radio de giro mín.", value: "950 mm" },
        { label: "Distancia entre centros de orugas", value: "520 mm" },
        { label: "Altura libre al suelo mín.", value: "85 mm" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Capacidad de carga máx.", value: "500 kg" },
        { label: "Volumen de carga de la caja", value: "0,22 m³" },
        { label: "Dimensiones de la caja", value: "1040 × 730 × 590 mm" },
        { label: "Pendiente máx. franqueable", value: "20°" },
        { label: "Velocidad de marcha", value: "1,7 km/h" },
        { label: "Número de velocidades", value: "1 velocidad" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KD292F Diésel 6,5 CV" },
        { label: "Potencia", value: "6,5 CV" },
        { label: "Cilindrada", value: "200 cc" },
        { label: "Energía", value: "Diésel" },
        { label: "Arranque", value: "Manual" },
        { label: "Depósito de combustible", value: "3,1 L" },
        { label: "Depósito hidráulico", value: "7 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-vue-ensemble.webp", alt: "Minidúmper Sonca SJ-05M vista de conjunto" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-chenilles.webp",    alt: "Sonca SJ-05M orugas" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-moteur.webp",       alt: "Sonca SJ-05M motor" },
      { src: "/images/SJ-05-EM/mini-tombereau-sonca-sj-05m-manettes.webp",     alt: "Sonca SJ-05M mandos" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 W (cargadora) ─────────────────────────
  "SMCSJ460W": {
    tagline: `Minicargadora sobre ruedas, compacta y potente.`,
    intro: `El SONCA SJ-460 W es una minicargadora articulada sobre ruedas, ideal para la manipulación, la carga y los trabajos de acondicionamiento. Compacta, se cuela por todas partes y admite numerosos accesorios (cazo, horquillas…). Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.000 kg", label: "Peso total" },
      { value: "400 kg", label: "Carga máxima" },
      { value: "0,12 m³", label: "Capacidad del cazo" },
      { value: "2,45 m", label: "Altura de elevación" },
    ],
    sections: [
      { title: "Motor KOOP de 23 CV y sistema sobre ruedas",
        body: "Motor KOOP bicilíndrico de 23 CV (639 cc) Euro 5 y ruedas 18×8.5×8 que ofrecen una excelente adherencia y una movilidad rápida en terrenos variados, regulares o accidentados.",
        features: [
          { title: "Motor KOOP bicilíndrico", text: "23 CV, 639 cc, 3600 rpm, norma Euro 5." },
          { title: "Sistema sobre ruedas", text: "Ruedas 18×8.5×8 para una movilidad fluida y rápida." },
          { title: "Cazo de 0,12 m³", text: "Carga máx. de 400 kg, altura de trabajo de 2,45 m." },
        ] },
      { title: "Compacta e hidráulica eficiente",
        body: "Formato de 2,2 × 1,1 × 1,28 m para los espacios reducidos, con un sistema hidráulico de 17-21 Bar y una fuerza de elevación de 4,5 kN.",
        features: [
          { title: "Dimensiones compactas", text: "2,2 m × 1,1 m × 1,28 m, altura libre al suelo de 150 mm." },
          { title: "Fuerza de elevación de 4,5 kN", text: "Altura de descarga de 1,51 m." },
          { title: "Ángulos de trabajo", text: "Inclinación de 38°, apertura de 82°, descarga de 34°." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso total", value: "1.000 kg" },
        { label: "Altura de la máquina", value: "1.280 mm" },
        { label: "Longitud total", value: "1.680 mm" },
        { label: "Longitud con cazo estándar", value: "2.206 mm" },
        { label: "Anchura", value: "1.100 mm" },
        { label: "Anchura del cazo", value: "1.000 mm" },
        { label: "Batalla", value: "850 mm" },
        { label: "Altura libre al suelo", value: "150 mm" },
        { label: "Dimensiones de las ruedas", value: "18×8.5×8" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Carga máxima", value: "400 kg" },
        { label: "Capacidad del cazo", value: "0,12 m³" },
        { label: "Fuerza de elevación máx.", value: "4,5 kN" },
        { label: "Velocidad máxima", value: "0 - 6 km/h" },
        { label: "Altura de trabajo máx.", value: "2.450 mm" },
        { label: "Altura de descarga máx.", value: "1.510 mm" },
        { label: "Ángulo de inclinación (posición baja)", value: "38°" },
        { label: "Ángulo de apertura (posición alta)", value: "82°" },
        { label: "Ángulo máx. de descarga", value: "34°" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KOOP bicilíndrico" },
        { label: "Potencia nominal", value: "23 CV" },
        { label: "Cilindrada", value: "639 cc" },
        { label: "Velocidad nominal", value: "3.600 rpm" },
        { label: "Norma del motor", value: "Euro 5" },
        { label: "Presión", value: "17 - 21 Bar" },
        { label: "Depósito de combustible", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-profil.webp",             alt: "Minicargadora Sonca SJ-460 W perfil" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-biais.webp",              alt: "Sonca SJ-460 W vista sesgada" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-moteur.webp",             alt: "Sonca SJ-460 W motor" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-panneau-de-controle.webp",alt: "Sonca SJ-460 W panel de control" },
      { src: "/images/SJW460W/mini-chargeur-sonca-sj-460-w-radiateur.webp",          alt: "Sonca SJ-460 W radiador" },
    ],
  },

  // ───────────────────────── SONCA SJ-460 T (cargadora de orugas) ─────────────────────────
  "SMCSJ460T": {
    tagline: `Minicargadora de orugas, todoterreno.`,
    intro: `El SONCA SJ-460 T es la versión de orugas de la minicargadora compacta: mejor motricidad y estabilidad en suelos blandos o difíciles, para la manipulación y la carga en todo tipo de terrenos. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.000 kg", label: "Peso total" },
      { value: "400 kg", label: "Carga máxima" },
      { value: "0,12 m³", label: "Capacidad del cazo" },
      { value: "30 %", label: "Pendiente franqueable" },
    ],
    sections: [
      { title: "Orugas todoterreno y motor KOOP de 23 CV",
        body: "Versión de orugas de la cargadora compacta: orugas de 720 mm (18×72) para una adherencia excepcional en suelos blandos, embarrados o accidentados, con una pendiente franqueable del 30 %.",
        features: [
          { title: "Motor KOOP bicilíndrico", text: "23 CV, 639 cc, 3600 rpm, Euro 5." },
          { title: "Orugas de 720 mm", text: "Adherencia máxima, pendiente franqueable del 30 %." },
          { title: "Cazo de 0,12 m³", text: "Carga máx. de 400 kg, altura de trabajo de 2,45 m." },
        ] },
      { title: "Compacta y resistente",
        body: "Formato de 2,2 × 1,1 × 1,28 m y componentes robustos para los espacios estrechos y las obras exigentes, con hidráulica de 17-21 Bar y fuerza de elevación de 4,5 kN.",
        features: [
          { title: "Dimensiones compactas", text: "2,2 m × 1,1 m × 1,28 m, altura libre al suelo de 150 mm." },
          { title: "Fuerza de elevación de 4,5 kN", text: "Altura de descarga de 1,51 m." },
          { title: "Robustez", text: "Componentes reforzados para una mayor longevidad." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso total", value: "1.000 kg" },
        { label: "Altura de la máquina", value: "1.280 mm" },
        { label: "Longitud total", value: "1.680 mm" },
        { label: "Longitud con cazo estándar", value: "2.206 mm" },
        { label: "Anchura", value: "1.100 mm" },
        { label: "Anchura de las orugas", value: "720 mm" },
        { label: "Tamaño de las orugas", value: "18×72" },
        { label: "Anchura del cazo", value: "1.000 mm" },
        { label: "Batalla", value: "850 mm" },
        { label: "Altura libre al suelo", value: "150 mm" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Carga máxima", value: "400 kg" },
        { label: "Capacidad del cazo", value: "0,12 m³" },
        { label: "Fuerza de elevación máx.", value: "4,5 kN" },
        { label: "Altura de trabajo máx.", value: "2.450 mm" },
        { label: "Altura de descarga máx.", value: "1.510 mm" },
        { label: "Ángulo de inclinación (posición baja)", value: "38°" },
        { label: "Ángulo de apertura (posición alta)", value: "82°" },
        { label: "Pendiente máx. franqueable", value: "30 %" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KOOP bicilíndrico" },
        { label: "Potencia nominal", value: "23 CV" },
        { label: "Cilindrada", value: "639 cc" },
        { label: "Velocidad nominal", value: "3.600 rpm" },
        { label: "Norma del motor", value: "Euro 5" },
        { label: "Presión", value: "17 - 21 Bar" },
        { label: "Depósito de combustible", value: "10 L" },
      ]},
    ],
    images: [
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-profil-leve.webp",         alt: "Minicargadora Sonca SJ-460 T con el cazo elevado" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-moteur.webp",              alt: "Sonca SJ-460 T motor" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-radiateur.webp",           alt: "Sonca SJ-460 T radiador" },
      { src: "/images/SJW460T/mini-chargeur-sonca-sj-460-t-tableau-de-commandes.webp",alt: "Sonca SJ-460 T cuadro de mandos" },
    ],
  },

  // ───────────────────────── SONCA SJ-490 W (cargadora) ─────────────────────────
  "SMCSJ490W": {
    tagline: `Minicargadora sobre ruedas, mayor potencia.`,
    intro: `El SONCA SJ-490 W es una minicargadora articulada sobre ruedas más potente, para los trabajos de manipulación y carga más intensivos sin dejar de ser compacta y manejable. Importada directamente por CZN Machinery, garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.100 kg", label: "Peso total" },
      { value: "250 kg", label: "Carga nominal" },
      { value: "0,12 m³", label: "Capacidad del cazo" },
      { value: "2,47 m", label: "Altura de elevación" },
    ],
    sections: [
      { title: "Motor KOOP de 15 kW y asiento del operador",
        body: "Cargadora sobre neumáticos con asiento integrado para el confort durante las sesiones prolongadas. Motor KOOP de 15 kW (639 cc) Euro 5 para una buena movilidad en todo tipo de terrenos.",
        features: [
          { title: "Motor KOOP de 15 kW", text: "639 cc, 3600 rpm, norma Euro 5." },
          { title: "Asiento del operador integrado", text: "Confort y ergonomía para las sesiones prolongadas." },
          { title: "Cazo de 0,12 m³", text: "Altura de trabajo de 2,47 m, descarga de 1,38 m." },
        ] },
      { title: "Compacta e hidráulica de 18 MPa",
        body: "Formato de 2,75 × 1,1 × 1,28 m con asiento, presión hidráulica nominal de 18 MPa y movilidad sobre neumáticos para una buena polivalencia.",
        features: [
          { title: "Dimensiones compactas", text: "2,75 m × 1,1 m × 1,28 m, altura libre al suelo de 170 mm." },
          { title: "Presión de 18 MPa", text: "Movimientos fluidos y reactivos." },
          { title: "Velocidad de 0-5,5 km/h", text: "Control preciso en todo tipo de terrenos." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Longitud sin cazo", value: "2.222 mm" },
        { label: "Longitud con cazo", value: "2.750 mm" },
        { label: "Anchura", value: "1.100 mm" },
        { label: "Altura", value: "1.280 mm" },
        { label: "Anchura del cazo", value: "1.050 mm" },
        { label: "Distancia entre ruedas", value: "623 mm" },
        { label: "Altura libre al suelo", value: "170 mm" },
        { label: "Peso total", value: "1.100 kg" },
        { label: "Capacidad de carga nominal", value: "250 kg" },
      ]},
      { group: "Rendimiento de trabajo", rows: [
        { label: "Capacidad del cazo", value: "0,12 m³" },
        { label: "Altura de trabajo máx.", value: "2.466 mm" },
        { label: "Altura de descarga máx.", value: "1.382 mm" },
        { label: "Altura hasta el pivote del cazo", value: "1.877 mm" },
        { label: "Velocidad", value: "0 - 5,5 km/h" },
        { label: "Ángulo de inclinación (posición baja)", value: "20°" },
        { label: "Ángulo de apertura (posición alta)", value: "35°" },
      ]},
      { group: "Mecánica", rows: [
        { label: "Motor", value: "KOOP" },
        { label: "Potencia nominal", value: "15 kW" },
        { label: "Cilindrada", value: "639 cc" },
        { label: "Velocidad nominal", value: "3.600 rpm" },
        { label: "Norma del motor", value: "Euro 5" },
        { label: "Presión nominal", value: "18 MPa" },
        { label: "Depósito de combustible", value: "15 L" },
      ]},
    ],
    images: [
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-profil-droit-leve.webp", alt: "Minicargadora Sonca SJ-490 W con el cazo elevado" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-moteur.webp",            alt: "Sonca SJ-490 W motor" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-radiateur.webp",         alt: "Sonca SJ-490 W radiador" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-manettes.webp",          alt: "Sonca SJ-490 W mandos" },
      { src: "/images/SJ490W/mini-chargeur-sonca-sj-490-w-siege.webp",             alt: "Sonca SJ-490 W asiento" },
    ],
  },

  // ───────────────────────── REMOLQUE 1.5T (Temared MultiTransporter 3318 C) ─────────────────────────
  "REM-1.5T": {
    tagline: `Remolque de plataforma basculante de 1,5 T para máquinas y materiales.`,
    intro: `El remolque CZN de 1,5 T (Temared MultiTransporter 3318 C) es un remolque de plataforma polivalente para el transporte de minimáquinas, motos, quads y materiales. Plataforma de contrachapado antideslizante de 3,30 × 1,84 m, chasis de acero galvanizado atornillado y sistema basculante para una carga facilitada. MMA de 1.500 kg: ideal para transportar una microexcavadora o una minicargadora. Importado y garantizado por CZN Machinery, entrega en toda Francia.`,
    stats: [
      { value: "1.500 kg", label: "MMA" },
      { value: "1.160 kg", label: "Carga útil" },
      { value: "3,30 × 1,84 m", label: "Plataforma" },
      { value: "340 kg", label: "Peso en vacío" },
    ],
    sections: [
      { title: "Plataforma basculante, carga fácil",
        body: `El sistema basculante inclina la plataforma para cargar una máquina sin rampa externa. El piso de contrachapado impermeable y antideslizante de 3,30 m × 1,84 m acoge miniexcavadoras, motos, quads y material de obra.`,
        features: [
          { title: "Plataforma de 3,30 × 1,84 m", text: "Superficie generosa para las máquinas compactas y el material." },
          { title: "Contrachapado antideslizante", text: "Piso impermeable, robusto y seguro para el amarre." },
          { title: "Basculamiento integrado", text: "Inclinación de la plataforma para una carga sin rampa adicional." },
        ] },
      { title: "Chasis galvanizado, duradero",
        body: `Chasis de secciones de acero galvanizado atornilladas: resistencia a la corrosión y longevidad, incluso en uso intensivo y con cualquier condición meteorológica.`,
        features: [
          { title: "Acero galvanizado", text: "Protección anticorrosión para una vida útil prolongada." },
          { title: "Construcción atornillada", text: "Mantenimiento y sustitución de piezas simplificados." },
          { title: "MMA de 1.500 kg", text: "Remolcable con un vehículo y un permiso adecuados." },
        ] },
    ],
    specs: [
      { group: "Capacidades", rows: [
        { label: "MMA", value: "1.500 kg" },
        { label: "Carga útil", value: "~1.160 kg" },
        { label: "Peso en vacío", value: "~340 kg" },
      ]},
      { group: "Dimensiones", rows: [
        { label: "Longitud de la plataforma", value: "3.300 mm" },
        { label: "Anchura de la plataforma", value: "1.840 mm" },
      ]},
      { group: "Construcción", rows: [
        { label: "Chasis", value: "Acero galvanizado atornillado" },
        { label: "Plataforma", value: "Contrachapado impermeable antideslizante" },
        { label: "Tipo", value: "Basculante" },
      ]},
      { group: "Rodaje", rows: [
        { label: "Neumáticos", value: "185 R14C" },
      ]},
    ],
    option: { label: "Rueda de repuesto + soporte", desc: "Rueda 185 R14C + soporte de fijación completo", refs: ["REM-ROUE-185-R14C", "REM-SUPPORT-ROUE-DE-SECOURS-COMPLET"] },
    images: [
      { src: "/images/remorques/REM-1.5T/remorque-1-5t-avant.webp",   alt: "Remolque CZN Machinery de 1,5 T basculante, vista delantera 3/4" },
      { src: "/images/remorques/REM-1.5T/remorque-1-5t-arriere.webp", alt: "Remolque CZN de 1,5 T MultiTransporter, vista trasera" },
    ],
  },

  // ───────────────────────── REMOLQUE 2.7T (Temared Builder 3 2615/2 S) ─────────────────────────
  "REM-2.7T": {
    tagline: `Remolque de doble eje de 2,7 T para máquinas y cargas pesadas.`,
    intro: `El remolque CZN de 2,7 T (Temared Builder 3 2615/2 S) es un remolque robusto de chasis soldado para el transporte de miniexcavadoras, minicargadoras y materiales pesados. Plataforma de contrachapado antideslizante de 2,60 × 1,50 m, lanza en V reforzada, rueda jockey de plegado automático y rampa basculante para la carga de máquinas. MMA de 2.700 kg, doble eje. Importado y garantizado por CZN Machinery, entrega en Francia.`,
    stats: [
      { value: "2.700 kg", label: "MMA" },
      { value: "2.178 kg", label: "Carga útil" },
      { value: "2,60 × 1,50 m", label: "Plataforma" },
      { value: "Doble eje", label: "Configuración" },
    ],
    sections: [
      { title: "Diseñado para las cargas pesadas",
        body: `Chasis portante soldado de perfiles de acero cerrados: el remolque soporta el transporte de minimáquinas y de materiales muy pesados, hasta 2,7 toneladas de MMA.`,
        features: [
          { title: "Chasis soldado", text: "Perfiles de acero cerrados para una rigidez máxima." },
          { title: "Carga útil de ~2.178 kg", text: "Suficiente para transportar una miniexcavadora de 2 a 2,5 t." },
          { title: "Doble eje", text: "Estabilidad y reparto de carga en los trayectos largos." },
        ] },
      { title: "Carga de máquinas facilitada",
        body: `Rampa basculante y peldaño en los laterales para cargar una miniexcavadora o una minicargadora con seguridad. Lanza en V extremadamente robusta y rueda jockey de plegado automático.`,
        features: [
          { title: "Rampa basculante", text: "Subida de las máquinas con suavidad, muelles de asistencia a la elevación." },
          { title: "Lanza en V reforzada", text: "Robustez y buen comportamiento en carretera, soportes estabilizadores." },
          { title: "Piso antideslizante", text: "Contrachapado impermeable con clips de sujeción." },
        ] },
    ],
    specs: [
      { group: "Capacidades", rows: [
        { label: "MMA", value: "2.700 kg" },
        { label: "Carga útil", value: "~2.178 kg" },
        { label: "Peso en vacío", value: "~522 kg" },
      ]},
      { group: "Dimensiones", rows: [
        { label: "Longitud de la plataforma", value: "2.600 mm" },
        { label: "Anchura de la plataforma", value: "1.503 mm" },
      ]},
      { group: "Construcción", rows: [
        { label: "Chasis", value: "Acero soldado (perfiles cerrados)" },
        { label: "Plataforma", value: "Contrachapado impermeable antideslizante" },
        { label: "Lanza", value: "En V reforzada + rueda jockey de plegado automático" },
        { label: "Carga", value: "Rampa basculante" },
      ]},
      { group: "Rodaje", rows: [
        { label: "Ejes", value: "Doble eje" },
        { label: "Neumáticos", value: "195/50 R13C" },
        { label: "Patrón de pernos", value: "5 × 112" },
      ]},
    ],
    option: { label: "Rueda de repuesto + soporte", desc: "Rueda 195/50 R13C + soporte de fijación completo", refs: ["REM-ROUE-195/50", "REM-SUPPORT-ROUE-DE-SECOURS-COMPLET"] },
    images: [
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-avant.webp",          alt: "Remolque CZN Machinery de 2,7 T doble eje, vista delantera 3/4" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-face.webp",           alt: "Remolque CZN de 2,7 T Builder, vista frontal" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-arriere.webp",        alt: "Remolque CZN de 2,7 T, vista trasera" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-rampe.webp",          alt: "Remolque CZN de 2,7 T con la rampa basculante abierta" },
      { src: "/images/remorques/REM-2.7T/remorque-2-7t-arriere-fermee.webp", alt: "Remolque CZN de 2,7 T con la plataforma cerrada, vista trasera" },
    ],
  },

  // ───────────────────────── XCAVATOR XC13P (1,15 t) ─────────────────────────
  "XMPXC13P": {
    tagline: `Miniexcavadora de 1,15 t con pluma orientable — lo esencial con prestaciones, transportable con permiso B.`,
    intro: `La miniexcavadora Xcavator XC13P es la miniexcavadora de 1,15 toneladas de gama de entrada, ideal para los particulares y los profesionales. Con su peso en vacío de solo 1.150 kg, se transporta en un remolque estándar con un vehículo de permiso B. Su pluma orientable (swing boom) de serie permite excavar a lo largo de los muros y las vallas sin desplazar la máquina. Motorización Koop 192F monocilíndrica Euro 5, mando hidráulico con joystick (mando piloto) y techo de protección de 4 montantes (ROPS). Importada directamente por CZN Machinery: garantía del fabricante de 2 años, entrega en toda Francia.`,
    stats: [
      { value: "1.150 kg", label: "Peso en vacío" },
      { value: "Koop 192F", label: "Motor Euro 5" },
      { value: "Pluma orientable", label: "Swing boom de serie" },
      { value: "40 cm", label: "Cazo estándar" },
    ],
    sections: [
      { title: "Compacta y transportable con permiso B",
        body: `Con 1.150 kg en la balanza, la XC13P se carga en un remolque convencional remolcado por un vehículo de permiso B: sin convoy especial, sin camión pesado. Sus orugas de caucho cuidan los suelos frágiles (céspedes, pavimentos) al tiempo que aseguran la adherencia en terreno blando. La máquina ideal para los accesos estrechos, los jardines cerrados y las obras de reforma.`,
        features: [
          { title: "Transporte fácil", text: "1.150 kg: bastan un remolque estándar + permiso B. Carga por rampas, sin logística pesada." },
          { title: "Orugas de caucho", text: "Buen agarre en terreno blando sin dañar céspedes, terrazas y superficies delicadas." },
          { title: "Techo de 4 montantes (ROPS)", text: "Estructura de protección antivuelco homologada, para trabajar con seguridad." },
        ] },
      { title: "Pluma orientable e hidráulica lista para trabajar",
        body: `La pluma orientable (swing boom) pivota para excavar lo más cerca posible de los muros, cimientos y vallas sin reposicionar la máquina. El mando hidráulico con joystick (mando piloto) ofrece movimientos suaves y precisos. El motor de giro reforzado aporta un par superior para los trabajos más exigentes, y el pulgar hidráulico (pinza de clasificación) se entrega de serie.`,
        features: [
          { title: "Swing boom de serie", text: "Excave a lo largo de los muros y en el límite de la propiedad sin desplazar la máquina." },
          { title: "Pulgar hidráulico incluido", text: "Pinza de clasificación de serie para manipular piedras, tocones y escombros." },
          { title: "Pack de seguridad completo", text: "Parada de emergencia, asiento con detector de presencia, retrovisor y alarma de marcha atrás de serie." },
        ] },
      { title: "Para particulares y profesionales por igual",
        body: `Movimiento de tierras ligero, zanjas, paisajismo, cimientos de muretes, plantación: la XC13P elimina el penoso trabajo manual a un precio de gama de entrada. Garantía de 2 años, servicio posventa y stock de piezas en Francia. Plazo indicativo de entrega: de 20 a 25 días.`,
        features: [
          { title: "Polivalente", text: "Ideal para el jardín, la reforma y las pequeñas obras de movimiento de tierras." },
          { title: "Garantía de 2 años", text: "Garantía del fabricante de 24 meses, piezas de repuesto y servicio posventa con sede en Francia." },
          { title: "Accesorios opcionales", text: "Enganche rápido semiautomático, cazos específicos (20 cm con dientes, 100 cm de limpieza) disponibles como complemento." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso en vacío", value: "1.150 kg" },
        { label: "Cazo estándar", value: "40 cm" },
        { label: "Tren de rodaje", value: "Orugas de caucho" },
        { label: "Protección", value: "Techo de 4 montantes (ROPS)" },
        { label: "Plazo indicativo", value: "20 a 25 días" },
      ]},
      { group: "Motorización y mando", rows: [
        { label: "Motor", value: "Koop 192F – monocilíndrico" },
        { label: "Norma anticontaminación", value: "Euro 5" },
        { label: "Mando", value: "Hidráulico (joystick piloto)" },
        { label: "Pluma", value: "Orientable (swing boom)" },
        { label: "Motor de traslación", value: "Oculto – una sola velocidad" },
      ]},
      { group: "Equipamiento incluido", rows: [
        { label: "Cilindro en la parte superior de la pluma", value: "Sí" },
        { label: "Motor de giro", value: "Reforzado (par superior)" },
        { label: "Pulgar hidráulico", value: "Pinza de clasificación (de serie)" },
        { label: "Seguridad", value: "Pack de escape / parada de emergencia" },
        { label: "Confort y seguridad", value: "Asiento con detector de presencia, retrovisor, alarma de marcha atrás" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-profil-bras-deporte-deploye.webp", alt: "Miniexcavadora Xcavator XC13P 1,15 t, vista lateral con pluma orientable desplegada, cazo a la derecha" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-trois-quarts-avant-droite.webp",   alt: "Miniexcavadora Xcavator XC13P, vista tres cuartos delantera derecha, pluma orientable" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-trois-quarts-arriere-droite.webp", alt: "Miniexcavadora Xcavator XC13P, vista tres cuartos trasera derecha sobre orugas de caucho" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-vue-arriere-trois-quarts.webp",    alt: "Miniexcavadora Xcavator XC13P, vista trasera tres cuartos, pluma plegada" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-poste-conduite-toit-rops.webp",    alt: "Miniexcavadora Xcavator XC13P, puesto de conducción abierto y techo de protección de 4 montantes ROPS" },
      { src: "/images/XCAVATOR/XC13P/mini-pelle-xcavator-xc13p-vue-avant-bras-releve.webp",       alt: "Miniexcavadora Xcavator XC13P, vista frontal con la pluma levantada, cazo de 40 cm" },
    ],
  },

  // ───────────────────────── XCAVATOR XC15P (1,25 t) ─────────────────────────
  "XMPXC15P": {
    tagline: `Miniexcavadora de 1,25 t bicilíndrica — la polivalencia en obra.`,
    intro: `La miniexcavadora Xcavator XC15P es la miniexcavadora de 1,25 toneladas pensada para las obras polivalentes. Su motor Laidong KM385B bicilíndrico Euro 5 ofrece un plus de par y de suavidad, mientras que sus orugas 230 × 72 × 44 y su anchura de 1.160 mm aseguran estabilidad y paso por la mayoría de los accesos. Pluma orientable (swing boom) de serie, mando hidráulico con joystick (mando piloto) y techo de 4 montantes (ROPS). Importada directamente por CZN Machinery: garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.250 kg", label: "Peso en vacío" },
      { value: "Bicilíndrico", label: "Laidong KM385B Euro 5" },
      { value: "1.160 mm", label: "Anchura de la máquina" },
      { value: "Pluma orientable", label: "Swing boom de serie" },
    ],
    sections: [
      { title: "Motor bicilíndrico, más par",
        body: `El motor Laidong KM385B bicilíndrico Euro 5 aporta más par y suavidad que las motorizaciones monocilíndricas de la clase inferior. Resultado: movimientos más fluidos, un mejor comportamiento en carga y un confort de trabajo superior en las largas jornadas de obra.`,
        features: [
          { title: "Laidong KM385B", text: "Bicilíndrico Euro 5: par generoso y funcionamiento más suave que un monocilíndrico." },
          { title: "Orugas 230 × 72 × 44", text: "Anchura de zapata generosa para una buena estabilidad y una baja presión sobre el suelo." },
          { title: "Mando joystick piloto", text: "Pilotaje hidráulico preciso de la pluma, el balancín y el cazo." },
        ] },
      { title: "Compacta pero estable",
        body: `Con 1.160 mm de anchura, la XC15P pasa por la mayoría de los accesos ofreciendo al mismo tiempo un asiento estable. La pluma orientable (swing boom) permite excavar en el límite de un muro o de una valla. El pulgar hidráulico (pinza de clasificación) se entrega de serie para la clasificación y la manipulación.`,
        features: [
          { title: "Anchura de 1.160 mm", text: "Compromiso ideal entre estabilidad en el trabajo y paso por los accesos de obra." },
          { title: "Swing boom de serie", text: "Excavación lo más cerca posible de los obstáculos sin reposicionar la máquina." },
          { title: "Pulgar hidráulico incluido", text: "Pinza de clasificación de serie para piedras, tocones y escombros." },
        ] },
      { title: "Equipada y con garantía",
        body: `Cilindro en la parte superior de la pluma, motor de traslación oculto, pack de escape y parada de emergencia, asiento con detector de presencia, retrovisor y alarma de marcha atrás: la XC15P se entrega lista para trabajar. Garantía del fabricante de 2 años, servicio posventa y piezas en Francia. Plazo indicativo de entrega: unos 30 días.`,
        features: [
          { title: "Lista para usar", text: "Equipamiento de seguridad y de confort de serie, cazo de 40 cm incluido." },
          { title: "Garantía de 2 años", text: "Garantía de 24 meses, piezas de repuesto y servicio posventa con sede en Francia." },
          { title: "Accesorios opcionales", text: "Enganche rápido semiautomático, cazos de 20 cm con dientes y de 120 cm de limpieza disponibles como complemento." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso en vacío", value: "1.250 kg" },
        { label: "Anchura de la máquina", value: "1.160 mm" },
        { label: "Cazo estándar", value: "40 cm" },
        { label: "Orugas", value: "230 × 72 × 44" },
        { label: "Protección", value: "Techo de 4 montantes (ROPS)" },
        { label: "Plazo indicativo", value: "≈ 30 días" },
      ]},
      { group: "Motorización y mando", rows: [
        { label: "Motor", value: "Laidong KM385B – bicilíndrico" },
        { label: "Norma anticontaminación", value: "Euro 5" },
        { label: "Mando", value: "Hidráulico (joystick piloto)" },
        { label: "Pluma", value: "Orientable (swing boom)" },
        { label: "Motor de traslación", value: "Oculto – una sola velocidad" },
      ]},
      { group: "Equipamiento incluido", rows: [
        { label: "Cilindro en la parte superior de la pluma", value: "Sí" },
        { label: "Pulgar hidráulico", value: "Pinza de clasificación (de serie)" },
        { label: "Seguridad", value: "Pack de escape / parada de emergencia" },
        { label: "Confort y seguridad", value: "Asiento con detector de presencia, retrovisor, alarma de marcha atrás" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-profil-bras-deporte-deploye.webp", alt: "Miniexcavadora Xcavator XC15P 1,25 t, vista lateral con pluma orientable desplegada, cazo a la derecha" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-trois-quarts-avant-droite.webp",   alt: "Miniexcavadora Xcavator XC15P, vista tres cuartos delantera derecha" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-trois-quarts-arriere-droite.webp", alt: "Miniexcavadora Xcavator XC15P, vista tres cuartos trasera derecha" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-vue-arriere-trois-quarts.webp",    alt: "Miniexcavadora Xcavator XC15P, vista trasera tres cuartos, pluma plegada" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-poste-conduite-toit-rops.webp",    alt: "Miniexcavadora Xcavator XC15P, puesto de conducción y techo de 4 montantes ROPS" },
      { src: "/images/XCAVATOR/XC15P/mini-pelle-xcavator-xc15p-vue-avant-bras-releve.webp",       alt: "Miniexcavadora Xcavator XC15P, vista frontal con la pluma levantada" },
    ],
  },

  // ───────────────────────── XCAVATOR XC17 PRO V2 (1,45 t) ─────────────────────────
  "XMPXC17PROV2": {
    tagline: `Miniexcavadora de 1,45 t PRO — vía variable y 2 velocidades de traslación.`,
    intro: `La miniexcavadora Xcavator XC17 PRO V2 es la versión PRO de 1,45 toneladas, dotada de un tren de rodaje de vía variable (90 a 120 cm) y de una traslación de 2 velocidades. La vía se retrae para pasar por los accesos estrechos y luego se ensancha para una estabilidad máxima en el trabajo. Hidráulica avanzada (3.er circuito / hydraulic advance) para accionar los accesorios, motor Laidong KM385B bicilíndrico Euro 5, mando con joystick (mando piloto) y techo de 4 montantes (ROPS). Importada directamente por CZN Machinery: garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "1.450 kg", label: "Peso en vacío" },
      { value: "90–120 cm", label: "Vía variable" },
      { value: "2 velocidades", label: "Traslación" },
      { value: "3.er circuito", label: "Hidráulica avanzada" },
    ],
    sections: [
      { title: "Vía variable: estrecha para pasar, ancha para trabajar",
        body: `El tren de rodaje de vía variable se retrae a 90 cm para franquear los portones y los accesos más estrechos, y luego se ensancha hasta 120 cm para ofrecer una estabilidad máxima durante el movimiento de tierras. Una ventaja decisiva en las obras de entorno reducido donde el acceso y la estabilidad parecen incompatibles.`,
        features: [
          { title: "Chasis de 90–120 cm", text: "Pasa por los accesos estrechos plegado, trabaja con gran estabilidad una vez ensanchado." },
          { title: "Traslación de 2 velocidades", text: "Velocidad lenta para la precisión, velocidad rápida para los desplazamientos en la obra." },
          { title: "Motor de traslación oculto", text: "Mecanismo protegido de los impactos y las proyecciones para una mejor longevidad." },
        ] },
      { title: "Hidráulica avanzada y pluma orientable",
        body: `La XC17 PRO V2 incorpora un 3.er circuito hidráulico (hydraulic advance) para alimentar los accesorios hidráulicos (pulgar, barrena, etc.). El pulgar hidráulico (pinza de clasificación) se entrega de serie, y el cilindro en la parte superior de la pluma refuerza la precisión y la fuerza de excavación.`,
        features: [
          { title: "3.er circuito hidráulico", text: "Alimenta los accesorios hidráulicos: pulgar, barrena, martillo picador ligero…" },
          { title: "Pulgar hidráulico incluido", text: "Pinza de clasificación de serie para la clasificación y la manipulación." },
          { title: "Cilindro en la parte superior de la pluma", text: "Mejor visibilidad sobre el cazo y geometría de excavación optimizada." },
        ] },
      { title: "PRO, equipada y con garantía",
        body: `Pack de escape y parada de emergencia, asiento con detector de presencia, retrovisor y alarma de marcha atrás: la XC17 PRO V2 se entrega completa. Garantía del fabricante de 2 años, servicio posventa y piezas de repuesto en Francia. Plazo indicativo de entrega: unos 30 días.`,
        features: [
          { title: "Versión PRO", text: "Vía variable, 2 velocidades e hidráulica avanzada para los usuarios exigentes." },
          { title: "Garantía de 2 años", text: "Garantía de 24 meses, piezas y servicio posventa con sede en Francia." },
          { title: "Accesorios opcionales", text: "Enganche rápido semiautomático, cazos de 20 cm con dientes y de 120 cm de limpieza como complemento." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso en vacío", value: "1.450 kg" },
        { label: "Anchura de la máquina", value: "1.160 mm" },
        { label: "Vía variable", value: "90 – 120 cm" },
        { label: "Cazo estándar", value: "40 cm" },
        { label: "Orugas", value: "230 × 72 × 44" },
        { label: "Protección", value: "Techo de 4 montantes (ROPS)" },
        { label: "Plazo indicativo", value: "≈ 30 días" },
      ]},
      { group: "Motorización y mando", rows: [
        { label: "Motor", value: "Laidong KM385B – bicilíndrico" },
        { label: "Norma anticontaminación", value: "Euro 5" },
        { label: "Mando", value: "Hidráulico (joystick piloto)" },
        { label: "Hidráulica", value: "Avanzada — 3.er circuito (hydraulic advance)" },
        { label: "Traslación", value: "Motor oculto – 2 velocidades" },
      ]},
      { group: "Equipamiento incluido", rows: [
        { label: "Cilindro en la parte superior de la pluma", value: "Sí" },
        { label: "Tren ensanchable", value: "90 – 120 cm (vía variable)" },
        { label: "Pulgar hidráulico", value: "Pinza de clasificación (de serie)" },
        { label: "Seguridad", value: "Pack de escape / parada de emergencia" },
        { label: "Confort y seguridad", value: "Asiento con detector de presencia, retrovisor, alarma de marcha atrás" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-profil-godet-droite.webp",        alt: "Miniexcavadora Xcavator XC17 PRO V2 1,45 t, vista lateral costado derecho, cazo a la derecha, luz giratoria y techo ROPS" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-trois-quarts-avant-droite.webp",  alt: "Miniexcavadora Xcavator XC17 PRO V2, vista tres cuartos delantera derecha, pluma desplegada" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-trois-quarts-arriere-gauche.webp",alt: "Miniexcavadora Xcavator XC17 PRO V2, vista tres cuartos trasera izquierda" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-poste-conduite-toit-rops.webp",   alt: "Miniexcavadora Xcavator XC17 PRO V2, puesto de conducción y techo de protección de 4 montantes ROPS" },
      { src: "/images/XCAVATOR/XC17PROV2/mini-pelle-xcavator-xc17-pro-v2-vue-avant-bras-releve.webp",      alt: "Miniexcavadora Xcavator XC17 PRO V2, vista frontal con la pluma levantada" },
    ],
  },

  // ───────────────────────── XCAVATOR XC22 PRO V2 (2 t) ─────────────────────────
  "XMPXC22PROV2": {
    tagline: `Miniexcavadora de 2 t — la más robusta de la gama, hidráulica de 3 bombas.`,
    intro: `La miniexcavadora Xcavator XC22 PRO V2 es la miniexcavadora de 2 toneladas más robusta de la gama. Su sistema hidráulico de tres bombas ofrece potencia y fluidez para encadenar los movimientos simultáneos, mientras que la traslación de 2 velocidades y la vía variable (110 a 140 cm) la convierten en una máquina tan cómoda en los accesos estrechos como en las grandes obras de movimiento de tierras. Motor Laidong KM385B bicilíndrico Euro 5, pluma orientable (swing boom), mando con joystick hidráulico y techo de 4 montantes (ROPS). Importada directamente por CZN Machinery: garantía de 2 años, entrega en Francia.`,
    stats: [
      { value: "2.000 kg", label: "Peso en vacío" },
      { value: "3 bombas", label: "Hidráulica" },
      { value: "110–140 cm", label: "Vía variable" },
      { value: "2 velocidades", label: "Traslación" },
    ],
    sections: [
      { title: "Hidráulica de 3 bombas, potencia y fluidez",
        body: `El sistema hidráulico de tres bombas alimenta simultáneamente la pluma, el giro y la traslación sin pérdida de caudal. Los movimientos combinados permanecen fluidos y potentes, incluso en carga: una ventaja importante para la productividad en las obras de movimiento de tierras más exigentes.`,
        features: [
          { title: "Tres bombas", text: "Movimientos simultáneos fluidos y potentes, sin tirones, incluso bajo carga." },
          { title: "Traslación de 2 velocidades", text: "Precisión a baja velocidad, desplazamientos rápidos en la obra en velocidad alta." },
          { title: "Pluma orientable (swing boom)", text: "Excave en el límite de un muro y de una valla sin desplazar la máquina." },
        ] },
      { title: "Vía variable de 110–140 cm, estabilidad máxima",
        body: `El tren de rodaje ensanchable pasa de 110 cm (acceso) a 140 cm (trabajo) para ofrecer la mejor estabilidad de la gama durante las operaciones de excavación y de elevación. La máquina de 2 toneladas que no se arredra ante ninguna obra.`,
        features: [
          { title: "Chasis de 110–140 cm", text: "Plegado para el acceso, ensanchado para una estabilidad máxima en el trabajo." },
          { title: "2 toneladas robustas", text: "La máquina más capaz de la gama para el movimiento de tierras intensivo." },
          { title: "Motor de traslación oculto", text: "Protegido de los impactos y las proyecciones para una mayor fiabilidad." },
        ] },
      { title: "Equipada y con garantía",
        body: `Cilindro en la parte superior de la pluma, pulgar hidráulico (pinza de clasificación), pack de escape y parada de emergencia, asiento con detector de presencia, retrovisor y alarma de marcha atrás: la XC22 PRO V2 se entrega lista para trabajar. Garantía del fabricante de 2 años, servicio posventa y piezas en Francia. Plazo indicativo de entrega: unos 30 días.`,
        features: [
          { title: "Pulgar hidráulico incluido", text: "Pinza de clasificación de serie para piedras, tocones y escombros." },
          { title: "Garantía de 2 años", text: "Garantía de 24 meses, piezas de repuesto y servicio posventa con sede en Francia." },
          { title: "Accesorios opcionales", text: "Enganche rápido hidráulico, cazos de 20 cm con dientes y de 120 cm de limpieza disponibles como complemento." },
        ] },
    ],
    specs: [
      { group: "Características generales", rows: [
        { label: "Peso en vacío", value: "2.000 kg" },
        { label: "Vía variable", value: "110 – 140 cm" },
        { label: "Cazo estándar", value: "40 cm" },
        { label: "Protección", value: "Techo de 4 montantes (ROPS)" },
        { label: "Plazo indicativo", value: "≈ 30 días" },
      ]},
      { group: "Motorización y mando", rows: [
        { label: "Motor", value: "Laidong KM385B – bicilíndrico" },
        { label: "Norma anticontaminación", value: "Euro 5" },
        { label: "Hidráulica", value: "Tres bombas" },
        { label: "Mando", value: "Joystick hidráulico" },
        { label: "Pluma", value: "Orientable (swing boom)" },
        { label: "Traslación", value: "Motor oculto – 2 velocidades" },
      ]},
      { group: "Equipamiento incluido", rows: [
        { label: "Cilindro en la parte superior de la pluma", value: "Sí" },
        { label: "Tren ensanchable", value: "110 – 140 cm (vía variable)" },
        { label: "Pulgar hidráulico", value: "Pinza de clasificación (de serie)" },
        { label: "Seguridad", value: "Pack de escape / parada de emergencia" },
        { label: "Confort y seguridad", value: "Asiento con detector de presencia, retrovisor, alarma de marcha atrás" },
      ]},
    ],
    images: [
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-avant-droite-lame.webp", alt: "Miniexcavadora Xcavator XC22 PRO V2 2 t, vista tres cuartos delantera derecha con hoja niveladora" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-profil-gauche-bras-deploye.webp",     alt: "Miniexcavadora Xcavator XC22 PRO V2, perfil izquierdo con pluma orientable desplegada" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-arriere-droite.webp",    alt: "Miniexcavadora Xcavator XC22 PRO V2, vista tres cuartos trasera derecha" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-trois-quarts-arriere-gauche.webp",    alt: "Miniexcavadora Xcavator XC22 PRO V2, vista tres cuartos trasera izquierda" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-vue-arriere.webp",                    alt: "Miniexcavadora Xcavator XC22 PRO V2, vista trasera sobre orugas" },
      { src: "/images/XCAVATOR/XC22PROV2/mini-pelle-xcavator-xc22-pro-v2-vue-avant-lame.webp",                 alt: "Miniexcavadora Xcavator XC22 PRO V2, vista frontal con hoja niveladora y pluma levantada" },
    ],
  },

  // ───────────────────────── SONCA TRITURADORA FORESTAL (SMCBF) ─────────────────────────
  "SMCBF": {
    tagline: `Trituradora forestal radiocontrolada sobre orugas, motor KOOP de 15 CV diésel.`,
    intro: `La trituradora forestal Sonca es una máquina de orugas totalmente radiocontrolada, diseñada para desbrozar y triturar la vegetación allí donde el ser humano no puede —o no debería— intervenir: taludes, pendientes pronunciadas, terrenos baldíos, sotobosques y parques solares. Pilotada a distancia hasta 600 m, mantiene al operador alejado del peligro. Su motor diésel KOOP KD195F de 15 CV con arranque eléctrico acciona un rotor de corte flotante de 1.000 mm equipado con cuchillas de tipo mayal. Importada directamente por CZN Machinery: garantía de 24 meses y piezas de repuesto disponibles durante 10 años.`,
    stats: [
      { value: "1.000 mm", label: "Anchura de corte" },
      { value: "346 kg", label: "Peso neto" },
      { value: "15 CV", label: "Motor KOOP diésel" },
      { value: "600 m", label: "Alcance del radiocontrol" },
    ],
    sections: [
      {
        title: "Radiocontrolada hasta 600 m, con total seguridad",
        body: `El radiocontrol de largo alcance (hasta 600 m, incluido) permite trabajar lejos de las proyecciones y de las zonas peligrosas. El motor diésel KOOP con arranque eléctrico y el alternador integrado recargan automáticamente la batería de mando de 24 V en funcionamiento: sin recarga manual entre sesiones.`,
        features: [
          { title: "Radiocontrol incluido", text: "Alcance de larga distancia hasta 600 m, operador alejado del peligro." },
          { title: "Motor KOOP KD195F", text: "Monocilíndrico diésel de 15 CV, arranque eléctrico." },
          { title: "Recarga automática", text: "Alternador integrado, batería de mando de 24 V recargada en marcha." },
        ],
      },
      {
        title: "Corte flotante de 1.000 mm con cuchillas de tipo mayal",
        body: `El rotor de 1.000 mm está equipado con 20 juegos de cuchillas en Y suspendidas (40 piezas), eficaces sobre la hierba alta, las zarzas y los leñosos jóvenes. La altura de corte se ajusta manualmente de 20 a 200 mm, y el mecanismo flotante sigue el relieve del terreno para un corte uniforme sin escalpar el suelo.`,
        features: [
          { title: "Anchura de corte de 1.000 mm", text: "Altura ajustable de 20 a 200 mm (ajuste manual)." },
          { title: "Cuchillas de tipo mayal", text: "Cuchillas en Y suspendidas, 20 juegos / 40 piezas." },
          { title: "Mecanismo flotante", text: "El grupo de corte sigue el relieve para un corte homogéneo." },
        ],
      },
      {
        title: "Orugas todoterreno, especialista en pendientes",
        body: `Las orugas de caucho de 150 mm aseguran la adherencia en suelo blando, húmedo o accidentado. La máquina trabaja hasta 30° de pendiente (y se desplaza hasta 45°), con un rendimiento de aproximadamente 0,5 ha/h — ideal para el mantenimiento de taludes, huertos, parques y parques fotovoltaicos.`,
        features: [
          { title: "Orugas de 150 mm", text: "Adherencia y estabilidad en terrenos difíciles." },
          { title: "Pendientes pronunciadas", text: "Trabajo hasta 30°, desplazamiento hasta 45°." },
          { title: "Rendimiento ~0,5 ha/h", text: "Velocidad de traslación de 0 a 5 km/h." },
        ],
      },
    ],
    specs: [
      { group: "Corte", rows: [
        { label: "Anchura de corte", value: "1.000 mm" },
        { label: "Altura de corte", value: "20 – 200 mm (ajuste manual)" },
        { label: "Tipo de cuchillas", value: "Cuchillas en Y suspendidas (tipo mayal)" },
        { label: "Número de cuchillas", value: "20 juegos / 40 piezas" },
        { label: "Mecanismo", value: "Flotante (sigue el relieve)" },
      ]},
      { group: "Motor", rows: [
        { label: "Marca", value: "KOOP KD195F – monocilíndrico" },
        { label: "Potencia", value: "15 CV" },
        { label: "Energía", value: "Diésel" },
        { label: "Arranque", value: "Eléctrico" },
      ]},
      { group: "Traslación y prestaciones", rows: [
        { label: "Anchura de la oruga", value: "150 mm" },
        { label: "Velocidad de traslación", value: "0 – 5 km/h" },
        { label: "Pendiente máx. en trabajo", value: "30° (desplazamiento hasta 45°)" },
        { label: "Rendimiento", value: "≈ 0,5 ha/h (7,5 mu/h)" },
        { label: "Alcance del radiocontrol", value: "Hasta 600 m" },
      ]},
      { group: "Dimensiones y mando", rows: [
        { label: "Dimensiones (L × An × Al)", value: "1.560 × 1.170 × 820 mm" },
        { label: "Peso neto", value: "≈ 346 kg" },
        { label: "Modo de mando", value: "Radiocontrol" },
        { label: "Tensión de mando", value: "24 V" },
        { label: "Recarga", value: "Alternador integrado (automática en marcha)" },
      ]},
      { group: "Equipamiento y garantía", rows: [
        { label: "Mando a distancia de largo alcance", value: "Incluido (hasta 600 m)" },
        { label: "Cargador", value: "Incluido" },
        { label: "Kit de herramientas", value: "De regalo (destornillador, llaves, llaves Allen)" },
        { label: "Garantía", value: "24 meses" },
        { label: "Piezas de repuesto", value: "Disponibles durante 10 años" },
      ]},
    ],
    images: [
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-4.webp", alt: "Trituradora forestal radiocontrolada Sonca — vista 3/4 delantera, cabezal de trituración y motor KOOP" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-1.webp", alt: "Trituradora forestal radiocontrolada Sonca — vista 3/4 trasera sobre orugas" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-2.webp", alt: "Trituradora forestal radiocontrolada Sonca — vista de conjunto" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-3.webp", alt: "Trituradora forestal radiocontrolada Sonca — detalle del motor KOOP KD195F" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-5.webp", alt: "Trituradora forestal radiocontrolada Sonca — vista de perfil" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-6.webp", alt: "Trituradora forestal radiocontrolada Sonca — cabezal de corte y orugas" },
      { src: "/images/BROYEUR-FORESTIER/broyeur-forestier-czn-7.webp", alt: "Trituradora forestal radiocontrolada Sonca — vista de cerca del rotor de trituración" },
    ],
  },

  // ───────────────────────── SONCA TRITURADORA (CONC-SONCA) ─────────────────────────
  "CONC-SONCA": {
    tagline: `Trituradora de mandíbulas compacta sobre orugas, motor Koop diésel Euro 5.`,
    intro: `La trituradora de mandíbulas Sonca es una unidad de trituración compacta y móvil, montada sobre orugas, que recicla tus escombros directamente en la obra: hormigón, ladrillos, bloques, piedra y tierras de desmonte se transforman en árido reutilizable, sin costes de transporte ni de vertedero. Alimentación por tolva, mandos hidráulicos por palancas y motor diésel Koop KD1100F conforme a la norma Euro 5. Importada directamente por CZN Machinery: garantía de 24 meses. Especificaciones técnicas detalladas (capacidad, apertura de las mandíbulas, dimensiones) facilitadas bajo petición.`,
    stats: [
      { value: "Sobre orugas", label: "Móvil en obra" },
      { value: "Tolva", label: "Alimentación" },
      { value: "Diésel Euro 5", label: "Motorización" },
      { value: "24 meses", label: "Garantía" },
    ],
    sections: [
      {
        title: "Recicla tus escombros directamente en la obra",
        body: `En lugar de evacuar y comprar árido, tritura in situ tus residuos inertes —hormigón, ladrillos, bloques, piedra natural— y reutiliza el material como relleno, subbase o drenaje. Ahorras el transporte, el vertedero y la compra de materiales nuevos, al tiempo que reduces la huella de la obra.`,
        features: [
          { title: "Hormigón, ladrillo, piedra", text: "Transforma las tierras de desmonte inertes en árido reutilizable." },
          { title: "Ahorros inmediatos", text: "Menos transporte, menos vertedero, menos compra de árido." },
          { title: "Alimentación por tolva", text: "Carga sencilla con pala o cazo." },
        ],
      },
      {
        title: "Compacta, sobre orugas y autónoma",
        body: `Montada sobre orugas de caucho, la trituradora se desplaza lo más cerca posible de la zona de trabajo, incluso en los accesos estrechos. Los mandos hidráulicos por palancas gobiernan el desplazamiento y el funcionamiento, accionados por un motor diésel Koop KD1100F Euro 5 fiable y autónomo en el terreno.`,
        features: [
          { title: "Chasis sobre orugas", text: "Movilidad y estabilidad en suelo accidentado." },
          { title: "Mandos hidráulicos", text: "Pilotaje por palancas, manejo directo." },
          { title: "Motor Koop KD1100F", text: "Diésel, norma Euro 5." },
        ],
      },
    ],
    specs: [
      { group: "Motor", rows: [
        { label: "Marca", value: "Koop KD1100F" },
        { label: "Energía", value: "Diésel" },
        { label: "Norma", value: "Euro 5" },
      ]},
      { group: "Características generales", rows: [
        { label: "Tipo", value: "Trituradora de mandíbulas" },
        { label: "Movilidad", value: "Orugas de caucho" },
        { label: "Alimentación", value: "Tolva" },
        { label: "Mando", value: "Hidráulico por palancas" },
      ]},
      { group: "Garantía", rows: [
        { label: "Garantía", value: "24 meses" },
        { label: "Piezas de repuesto", value: "Disponibles" },
        { label: "Especificaciones completas", value: "Capacidad, apertura de las mandíbulas y dimensiones bajo petición" },
      ]},
    ],
    images: [
      { src: "/images/CONCASSEUR/concasseur-sonca-2.webp", alt: "Trituradora de mandíbulas Sonca — vista 3/4 sobre orugas con canaleta de evacuación" },
      { src: "/images/CONCASSEUR/concasseur-sonca-1.webp", alt: "Trituradora de mandíbulas Sonca — vista frontal, tolva de alimentación" },
      { src: "/images/CONCASSEUR/concasseur-sonca-3.webp", alt: "Trituradora de mandíbulas Sonca — vista de conjunto" },
      { src: "/images/CONCASSEUR/concasseur-sonca-4.webp", alt: "Trituradora de mandíbulas Sonca — vista lateral" },
      { src: "/images/CONCASSEUR/concasseur-sonca-5.webp", alt: "Trituradora de mandíbulas Sonca — detalle del chasis de orugas" },
      { src: "/images/CONCASSEUR/concasseur-sonca-6.webp", alt: "Trituradora de mandíbulas Sonca — mandos hidráulicos por palancas" },
      { src: "/images/CONCASSEUR/concasseur-sonca-7.webp", alt: "Trituradora de mandíbulas Sonca — bloque hidráulico y motor" },
      { src: "/images/CONCASSEUR/concasseur-sonca-8.webp", alt: "Trituradora de mandíbulas Sonca — vista de cerca de la mandíbula" },
    ],
  },

};
