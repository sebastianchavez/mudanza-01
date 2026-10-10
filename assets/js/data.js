/* =========================================
   DATA.JS - Datos mockeados del template
   Empresa: Mudanzas Express
   Moneda: CLP (Pesos Chilenos)
   ========================================= */

/* ============ HELPER: Formatear CLP ============ */
const formatCLP = (num) => {
  return '$' + Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const EMPRESA = {
  nombre: "Mudanzas Express",
  slogan: "Tu mudanza, sin complicaciones",
  telefono: "+56 2 2345 6789",
  whatsapp: "+56 9 1234 5678",
  whatsappLink: "https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n",
  email: "info@mudanzasexpress.cl",
  emailCotizaciones: "cotizaciones@mudanzasexpress.cl",
  direccion: "Av. Apoquindo 4711, Las Condes, Santiago, Chile",
  coordenadas: { lat: -33.4103, lng: -70.5713 },
  horarios: {
    lunes: "8:00 - 20:00",
    martes: "8:00 - 20:00",
    miercoles: "8:00 - 20:00",
    jueves: "8:00 - 20:00",
    viernes: "8:00 - 20:00",
    sabado: "9:00 - 14:00",
    domingo: "Cerrado"
  },
  redes: {
    facebook: "https://facebook.com/mudanzasexpress",
    instagram: "https://instagram.com/mudanzasexpress",
    twitter: "https://twitter.com/mudanzasexpress",
    linkedin: "https://linkedin.com/company/mudanzasexpress",
    youtube: "https://youtube.com/mudanzasexpress"
  },
  fundacion: 2009,
  rating: 4.9,
  reviews: 1248
};

/* ============ SERVICIOS ============ */
const SERVICIOS = [
  {
    id: "local",
    icono: "truck",
    titulo: "Mudanza Local",
    resumen: "Mudanzas dentro de la misma ciudad en el mismo día.",
    descripcion: "Realizamos mudanzas dentro de la ciudad y alrededores con total garantía. Nuestro equipo se encarga de todo: embalaje, carga, transporte, descarga y colocación.",
    incluye: [
      "Visita previa gratuita",
      "Material de embalaje incluido",
      "Personal uniformado",
      "Seguro básico de mercancía",
      "Montaje y desmontaje de muebles"
    ],
    desde: 89900,
    imagen: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&auto=format&fit=crop&q=70"
  },
  {
    id: "nacional",
    icono: "map",
    titulo: "Mudanza Nacional",
    resumen: "Traslados a cualquier punto de la península con plazos garantizados.",
    descripcion: "Cobertura completa en todo Chile continental. Nos encargamos del transporte puerta a puerta con seguimiento en tiempo real.",
    incluye: [
      "Transporte puerta a puerta",
      "Seguimiento GPS en tiempo real",
      "Seguro ampliado de mercancía",
      "Plazo de entrega garantizado",
      "Asesor personalizado"
    ],
    desde: 349900,
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=70"
  },
  {
    id: "embalaje",
    icono: "package",
    titulo: "Embalaje Profesional",
    resumen: "Protección total para tus objetos más delicados.",
    descripcion: "Servicio especializado en embalaje de objetos frágiles, obras de arte, electrónica y todo lo que requiera un cuidado especial.",
    incluye: [
      "Cajas reforzadas",
      "Material acolchado especial",
      "Vajilla protegida individualmente",
      "Etiquetado por habitación",
      "Inventario detallado"
    ],
    desde: 49900,
    imagen: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&auto=format&fit=crop&q=70"
  },
  {
    id: "guardamuebles",
    icono: "warehouse",
    titulo: "Guardamuebles",
    resumen: "Almacenamiento seguro por días, meses o años.",
    descripcion: "Nuestras instalaciones cuentan con vigilancia 24/7, control de humedad y temperatura, y acceso restringido para total tranquilidad.",
    incluye: [
      "Vigilancia 24/7",
      "Climatización controlada",
      "Seguro incluido",
      "Acceso cuando lo necesites",
      "Sin permanencia mínima"
    ],
    desde: 19900,
    imagen: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=70"
  },
  {
    id: "oficinas",
    icono: "building",
    titulo: "Mudanza de Oficinas",
    resumen: "Minimizamos el tiempo de inactividad de tu empresa.",
    descripcion: "Planificamos la mudanza de tu oficina en fines de semana o días festivos para que no pierdas productividad. Equipo especializado en IT y mobiliario corporativo.",
    incluye: [
      "Planificación previa",
      "Mobiliario corporativo",
      "Equipos informáticos",
      "Servidores y rack",
      "Gestión de residuos"
    ],
    desde: 399900,
    imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=70"
  },
  {
    id: "especial",
    icono: "star",
    titulo: "Transporte Especial",
    resumen: "Pianos, obras de arte, antigüedades y objetos de gran valor.",
    descripcion: "Equipo especializado en el transporte de objetos delicados, pesados o de gran valor. Camiones con suspensión neumática y personal con formación específica.",
    incluye: [
      "Personal especializado",
      "Camión con suspensión neumática",
      "Caja fuerte portátil",
      "Seguro a todo riesgo",
      "Informe de estado"
    ],
    desde: 149900,
    imagen: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=70"
  }
];

/* ============ POR QUÉ ELEGIRNOS ============ */
const VENTAJAS = [
  { icono: "shield-check", titulo: "Seguro incluido", texto: "Todas nuestras mudanzas incluyen seguro de mercancía hasta $60.000.000." },
  { icono: "clock", titulo: "Puntualidad", texto: "Cumplimos los plazos pactados. Si nos retrasamos, te devolvemos el 10%." },
  { icono: "users", titulo: "Equipo profesional", texto: "Personal uniformado, formado y con experiencia contrastada." },
  { icono: "tag", titulo: "Precios cerrados", texto: "Sin sorpresas. El presupuesto que te damos es el precio final." },
  { icono: "truck", titulo: "Flota propia", texto: "Más de 25 vehículos propios, modernos y perfectamente equipados." },
  { icono: "headphones", titulo: "Atención 24/7", texto: "Estamos disponibles todos los días para resolver cualquier incidencia." }
];

/* ============ ESTADÍSTICAS ============ */
const ESTADISTICAS = [
  { numero: "15+", etiqueta: "Años de experiencia" },
  { numero: "5.200+", etiqueta: "Clientes satisfechos" },
  { numero: "98%", etiqueta: "Tasa de satisfacción" },
  { numero: "24/7", etiqueta: "Atención al cliente" }
];

/* ============ TESTIMONIOS ============ */
const TESTIMONIOS = [
  {
    nombre: "María García",
    ciudad: "Santiago",
    foto: "https://i.pravatar.cc/150?img=1",
    estrellas: 5,
    texto: "Increíble servicio. Se encargaron de absolutamente todo y mis muebles llegaron sin un solo rasguño. Repetiré sin duda."
  },
  {
    nombre: "Carlos Rodríguez",
    ciudad: "Valparaíso",
    foto: "https://i.pravatar.cc/150?img=12",
    estrellas: 5,
    texto: "Mudanza de oficina completa en un fin de semana. El lunes a las 9:00 ya estábamos operativos. Profesionalidad total."
  },
  {
    nombre: "Laura Martínez",
    ciudad: "Concepción",
    foto: "https://i.pravatar.cc/150?img=5",
    estrellas: 5,
    texto: "Tenía un piano de cola y estaba muy preocupada. Lo transportaron con un cuidado exquisito. 100% recomendables."
  },
  {
    nombre: "Javier López",
    ciudad: "Antofagasta",
    foto: "https://i.pravatar.cc/150?img=8",
    estrellas: 5,
    texto: "El precio fue exactamente el presupuestado, sin extras de última hora. El equipo fue amable y muy rápido."
  }
];

/* ============ EQUIPO ============ */
const EQUIPO = [
  {
    nombre: "Antonio Sánchez",
    cargo: "Director General",
    foto: "https://i.pravatar.cc/400?img=14",
    bio: "Fundador de la empresa con más de 20 años en el sector logístico."
  },
  {
    nombre: "Patricia Ruiz",
    cargo: "Jefa de Logística",
    foto: "https://i.pravatar.cc/400?img=23",
    bio: "Coordina cada mudanza para que todo salga a la perfección."
  },
  {
    nombre: "David Moreno",
    cargo: "Atención al Cliente",
    foto: "https://i.pravatar.cc/400?img=15",
    bio: "Tu primer contacto. Siempre dispuesto a ayudarte."
  },
  {
    nombre: "Cristina Vega",
    cargo: "Coordinadora de Operaciones",
    foto: "https://i.pravatar.cc/400?img=44",
    bio: "Experta en mudanzas complejas y objetos de valor."
  }
];

/* ============ HISTORIA ============ */
const HISTORIA = {
  fundacion: 2009,
  titulo: "Una empresa familiar que se convirtió en referente",
  parrafos: [
    "Mudanzas Express nació en 2009 en un pequeño galpón de Santiago con una sola furgoneta y un objetivo claro: ofrecer un servicio de mudanzas diferente, más cercano, más profesional y totalmente transparente.",
    "Quince años después, contamos con una flota de más de 25 vehículos, un equipo de 40 profesionales y hemos realizado más de 5.000 mudanzas en todo Chile, sin perder nunca la cercanía y el trato personal que nos caracteriza.",
    "Hoy somos referente en el sector gracias a nuestra apuesta por la formación continua de nuestro equipo, la incorporación constante de tecnología y, sobre todo, por escuchar a cada cliente y adaptar el servicio a sus necesidades reales."
  ]
};

/* ============ MISIÓN, VISIÓN, VALORES ============ */
const MVV = [
  {
    tipo: "Misión",
    icono: "target",
    texto: "Hacer que cada mudanza sea una experiencia sencilla, segura y sin estrés, cuidando los bienes y la confianza de nuestros clientes."
  },
  {
    tipo: "Visión",
    icono: "eye",
    texto: "Ser la empresa de mudanzas de referencia en Chile, reconocida por nuestra calidad, innovación y compromiso con el cliente."
  },
  {
    tipo: "Valores",
    icono: "heart",
    texto: "Compromiso, transparencia, profesionalidad, respeto y cuidado. Estos son los pilares que guían cada uno de nuestros servicios."
  }
];

/* ============ GALERÍA ============ */
const GALERIA = [
  { url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&auto=format&fit=crop&q=70", categoria: "local", titulo: "Mudanza local Santiago" },
  { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=70", categoria: "nacional", titulo: "Transporte nacional" },
  { url: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&auto=format&fit=crop&q=70", categoria: "embalaje", titulo: "Embalaje profesional" },
  { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=70", categoria: "oficinas", titulo: "Mudanza oficina corporativa" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=70", categoria: "oficinas", titulo: "Desmontaje mobiliario" },
  { url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=70", categoria: "especial", titulo: "Transporte piano" },
  { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=70", categoria: "local", titulo: "Mudanza residencial" },
  { url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=70", categoria: "local", titulo: "Carga de camión" },
  { url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=70", categoria: "embalaje", titulo: "Cajas embaladas" },
  { url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=70", categoria: "embalaje", titulo: "Protección cristalería" },
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=70", categoria: "nacional", titulo: "Ruta nacional" },
  { url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&auto=format&fit=crop&q=70", categoria: "especial", titulo: "Transporte de arte" }
];

const CATEGORIAS_GALERIA = [
  { id: "todas", nombre: "Todas" },
  { id: "local", nombre: "Local" },
  { id: "nacional", nombre: "Nacional" },
  { id: "oficinas", nombre: "Oficinas" },
  { id: "embalaje", nombre: "Embalaje" },
  { id: "especial", nombre: "Especial" }
];

/* ============ PRECIOS ============ */
const PLANES = [
  {
    nombre: "Estudio",
    icono: "home",
    precio: 89900,
    descripcion: "Ideal para departamentos pequeños, estudios o habitaciones individuales",
    destacado: false,
    caracteristicas: [
      { texto: "Hasta 30 m²", incluido: true },
      { texto: "1-2 habitaciones", incluido: true },
      { texto: "Embalaje básico", incluido: true },
      { texto: "Personal (2 personas)", incluido: true },
      { texto: "Seguro básico", incluido: true },
      { texto: "Montaje de muebles", incluido: true },
      { texto: "Embalaje especializado", incluido: false },
      { texto: "Guardamuebles", incluido: false }
    ]
  },
  {
    nombre: "Hogar",
    icono: "house",
    precio: 199900,
    descripcion: "La opción más popular para familias y departamentos medianos",
    destacado: true,
    caracteristicas: [
      { texto: "Hasta 90 m²", incluido: true },
      { texto: "3-4 habitaciones", incluido: true },
      { texto: "Embalaje completo", incluido: true },
      { texto: "Personal (3-4 personas)", incluido: true },
      { texto: "Seguro ampliado", incluido: true },
      { texto: "Montaje de muebles", incluido: true },
      { texto: "Embalaje especializado", incluido: true },
      { texto: "1 mes guardamuebles gratis", incluido: true }
    ]
  },
  {
    nombre: "Premium",
    icono: "crown",
    precio: 449900,
    descripcion: "Servicio VIP sin preocupaciones para casas y grandes volúmenes",
    destacado: false,
    caracteristicas: [
      { texto: "Sin límite de m²", incluido: true },
      { texto: "Viviendas completas", incluido: true },
      { texto: "Embalaje premium", incluido: true },
      { texto: "Personal (5+ personas)", incluido: true },
      { texto: "Seguro a todo riesgo", incluido: true },
      { texto: "Montaje y limpieza", incluido: true },
      { texto: "Embalaje especializado", incluido: true },
      { texto: "3 meses guardamuebles", incluido: true }
    ]
  }
];

/* ============ FAQ ============ */
const FAQ = [
  {
    pregunta: "¿Cuánto cuesta una mudanza?",
    respuesta: "El precio depende de varios factores: volumen de los objetos, distancia, servicios adicionales, fecha y accesibilidad. Realizamos una visita o videollamada gratuita para darte un presupuesto cerrado y sin sorpresas."
  },
  {
    pregunta: "¿Con cuánta antelación debo reservar?",
    respuesta: "Recomendamos reservar con al menos 2 semanas de antelación, aunque podemos adaptarnos a mudanzas urgentes en 24-48h según disponibilidad."
  },
  {
    pregunta: "¿Qué incluye el seguro?",
    respuesta: "Todas las mudanzas incluyen un seguro básico de mercancía. Opcionalmente puedes ampliar a un seguro a todo riesgo que cubre el 100% del valor declarado de tus bienes."
  },
  {
    pregunta: "¿Puedo embalar yo mismo mis cosas?",
    respuesta: "Por supuesto. Si lo prefieres, puedes embalar tus pertenencias y nosotros nos encargamos del transporte, carga y descarga. Eso sí, no nos haremos responsables de objetos mal embalados."
  },
  {
    pregunta: "¿Realizáis mudanzas internacionales?",
    respuesta: "Sí, trabajamos con partners en toda Europa para ofrecer mudanzas internacionales con gestión de aduanas incluida."
  },
  {
    pregunta: "¿Qué pasa si se rompe algo?",
    respuesta: "En caso de daños, abrimos automáticamente una incidencia. Nuestro seguro cubre los desperfectos según las condiciones contratadas. La tasa de incidencia es inferior al 0,5%."
  },
  {
    pregunta: "¿Hacéis mudanzas en fin de semana?",
    respuesta: "Sí, especialmente para oficinas y empresas. Para particulares también podemos adaptarnos sin coste adicional."
  },
  {
    pregunta: "¿Ofrecéis servicio de guardamuebles?",
    respuesta: "Sí, nuestras instalaciones en Santiago y Valparaíso ofrecen almacenamiento climatizado y vigilado 24/7 con tarifas mensuales muy competitivas."
  }
];
