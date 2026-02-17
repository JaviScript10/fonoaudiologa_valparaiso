// lib/siteConfig.ts
export const siteConfig = {
  name: "Cinthya López Suazo",
  title: "Fonoaudióloga en Valparaíso | Cinthya López Suazo",
  description:
    "Fonoaudióloga certificada en Valparaíso, Chile. Especialista en trastornos del lenguaje infantil, estimulación temprana, habla, voz y adultos mayores. Agenda tu hora hoy.",
  url: "https://www.cinthyalopezfonoaudiologa.cl",
  phone: "+56932376474",
  phoneFormatted: "+56 9 3237 6474",
  whatsapp: "56932376474",
  email: "cinthyaa.lopeeez@gmail.com",
  address: "Valparaíso, Región de Valparaíso, Chile",
  city: "Valparaíso",
  region: "Región de Valparaíso",
  country: "Chile",
  countryCode: "CL",
  postalCode: "2340000",
  latitude: -33.0472,
  longitude: -71.6127,
  university: "Universidad de Playa Ancha",
  specialty: "Fonoaudiología",
  instagram: "https://instagram.com/cinthya.fonoaudiologa",
  facebook: "https://facebook.com/cinthyalopezfonoaudiologa",
  ogImage: "/images/og-image.jpg",
  keywords: [
    "fonoaudióloga valparaíso",
    "fonoaudiología valparaíso",
    "terapia del habla valparaíso",
    "trastornos del lenguaje niños valparaíso",
    "fonoaudióloga infantil valparaíso",
    "estimulación temprana valparaíso",
    "fonoaudióloga chile",
    "retraso del lenguaje infantil",
    "terapia fonoaudiológica",
    "limpieza de oído valparaíso",
    "fonoaudióloga adultos mayores",
    "tartamudez tratamiento",
    "cinthya lópez fonoaudióloga",
  ],
};

export const services = [
  {
    id: "lenguaje-infantil",
    slug: "lenguaje-infantil",
    icon: "🧒",
    title: "Terapia del Lenguaje Infantil",
    shortDesc: "Evaluación y tratamiento de trastornos del lenguaje en niños.",
    description:
      "Evaluación y tratamiento integral de trastornos del lenguaje expresivo y comprensivo en niños. Trabajamos con retraso del lenguaje, dislalias, problemas de comprensión y vocabulario limitado.",
    benefits: [
      "Evaluación completa del desarrollo del lenguaje",
      "Plan terapéutico personalizado para tu hijo/a",
      "Técnicas lúdicas adaptadas a la edad",
      "Orientación y guía para los padres",
      "Seguimiento del progreso mensual",
    ],
    whoFor: "Niños de 1 a 12 años con dificultades en el desarrollo del lenguaje.",
    keywords: ["terapia lenguaje infantil valparaíso", "fonoaudióloga niños valparaíso"],
  },
  {
    id: "estimulacion-temprana",
    slug: "estimulacion-temprana",
    icon: "🌱",
    title: "Estimulación Temprana",
    shortDesc: "Potencia el desarrollo comunicativo de tu bebé desde los primeros meses.",
    description:
      "Programa especializado de estimulación del lenguaje y la comunicación para bebés y niños en etapa preescolar. Intervenimos de forma preventiva para potenciar el desarrollo natural de cada niño.",
    benefits: [
      "Estimulación sensorial y comunicativa",
      "Prevención de retrasos del desarrollo",
      "Actividades adaptadas por etapa evolutiva",
      "Talleres para padres y cuidadores",
      "Enfoque integral y lúdico",
    ],
    whoFor: "Bebés y niños de 0 a 3 años. Ideal como medida preventiva.",
    keywords: ["estimulación temprana valparaíso", "bebé lenguaje valparaíso"],
  },
  {
    id: "habla-articulacion",
    slug: "habla-articulacion",
    icon: "🗣️",
    title: "Habla y Articulación",
    shortDesc: "Corrección de dislalias, tartamudez y problemas de pronunciación.",
    description:
      "Diagnóstico y tratamiento de trastornos de la articulación, dislalias funcionales y orgánicas, tartamudez (disfemia) y otros problemas del habla en niños y adultos.",
    benefits: [
      "Evaluación de movilidad orofacial",
      "Ejercicios articulatorios específicos",
      "Técnicas para fluidez verbal",
      "Apoyo emocional y autoconfianza",
      "Resultados visibles desde la 1ª sesión",
    ],
    whoFor: "Niños y adultos con problemas de pronunciación, dislalias o tartamudez.",
    keywords: ["tartamudez tratamiento valparaíso", "dislalia fonoaudióloga valparaíso"],
  },
  {
    id: "adultos-mayores",
    slug: "adultos-mayores",
    icon: "🤝",
    title: "Terapia para Adultos Mayores",
    shortDesc: "Rehabilitación del lenguaje, voz y deglución en adultos mayores.",
    description:
      "Atención fonoaudiológica especializada para adultos mayores, incluyendo rehabilitación post-ACV, trastornos de deglución (disfagia), deterioro cognitivo leve y alteraciones de la voz.",
    benefits: [
      "Rehabilitación post-ACV y afasias",
      "Terapia de deglución segura",
      "Estimulación cognitiva y comunicativa",
      "Atención a domicilio disponible",
      "Coordinación con equipo médico familiar",
    ],
    whoFor: "Adultos mayores con secuelas de ACV, disfagia o deterioro cognitivo.",
    keywords: ["fonoaudióloga adultos mayores valparaíso", "disfagia tratamiento valparaíso"],
  },
  {
    id: "limpieza-oido",
    slug: "limpieza-oido",
    icon: "👂",
    title: "Higiene y Limpieza de Oído",
    shortDesc: "Procedimiento seguro para la extracción de cera y limpieza auditiva.",
    description:
      "Evaluación auditiva y procedimiento profesional de higiene del oído, incluyendo extracción de tapón de cera (cerumen) de forma segura, cómoda y eficaz.",
    benefits: [
      "Procedimiento rápido y sin dolor",
      "Mejora inmediata de la audición",
      "Uso de equipos médicos certificados",
      "Evaluación del canal auditivo completa",
      "Recomendaciones de higiene preventiva",
    ],
    whoFor: "Personas con sensación de taponamiento, zumbido o pérdida auditiva por cerumen.",
    keywords: ["limpieza de oído valparaíso", "extracción cera oído valparaíso"],
  },
  {
    id: "voz",
    slug: "voz",
    icon: "🎙️",
    title: "Terapia de Voz",
    shortDesc: "Evaluación y tratamiento de disfonías, nódulos y alteraciones vocales.",
    description:
      "Evaluación funcional de la voz y terapia para profesionales de la voz (docentes, cantantes, presentadores) y personas con disfonías, nódulos vocales u otras patologías de la voz.",
    benefits: [
      "Evaluación perceptual de la voz",
      "Higiene vocal personalizada",
      "Ejercicios de resonancia y proyección",
      "Técnicas de respiración fonatoria",
      "Seguimiento continuo del caso",
    ],
    whoFor: "Docentes, cantantes, profesionales de la voz y personas con disfonía.",
    keywords: ["terapia de voz valparaíso", "disfonía fonoaudióloga valparaíso"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "María José R.",
    role: "Mamá de Lucas, 4 años",
    content:
      "Cinthya es increíble. Mi hijo llegó casi sin hablar y hoy no para de contar historias. Su paciencia y profesionalismo son únicos. ¡Totalmente recomendada!",
    rating: 5,
    avatar: "MJ",
  },
  {
    id: 2,
    name: "Roberto C.",
    role: "Paciente adulto",
    content:
      "Después de mi ACV pensé que no volvería a hablar bien. La terapia con Cinthya me devolvió la comunicación y la confianza. Un trabajo excepcional.",
    rating: 5,
    avatar: "RC",
  },
  {
    id: 3,
    name: "Valentina M.",
    role: "Docente, 32 años",
    content:
      "Tenía nódulos vocales y ya no podía dar clases. En pocas semanas de terapia vocal, recuperé mi voz completamente. Muy profesional y empática.",
    rating: 5,
    avatar: "VM",
  },
  {
    id: 4,
    name: "Carlos & Sofía F.",
    role: "Padres de Ignacio, 2 años",
    content:
      "La estimulación temprana con Cinthya ha sido clave para el desarrollo de nuestro hijo. Aprendimos muchísimo como padres. Un servicio de primera.",
    rating: 5,
    avatar: "CF",
  },
];

export const blogPosts = [
  {
    slug: "senales-retraso-lenguaje-nino",
    category: "Trastornos del lenguaje infantil",
    categorySlug: "trastornos-del-lenguaje-infantil",
    title: "5 Señales de Alerta de Retraso del Lenguaje en tu Hijo",
    excerpt:
      "Conoce las señales más importantes que indican que tu hijo podría tener un retraso del lenguaje y cuándo consultar a una fonoaudióloga.",
    readTime: "5 min",
    date: "2024-12-15",
    keywords: ["retraso del lenguaje infantil", "señales alerta lenguaje niños"],
  },
  {
    slug: "estimulacion-lenguaje-bebe-0-12-meses",
    category: "Consejos para padres",
    categorySlug: "consejos-para-padres",
    title: "Cómo Estimular el Lenguaje de tu Bebé de 0 a 12 Meses",
    excerpt:
      "Actividades simples y efectivas que puedes hacer en casa para potenciar el desarrollo comunicativo de tu bebé desde los primeros días de vida.",
    readTime: "7 min",
    date: "2024-12-08",
    keywords: ["estimulación bebé lenguaje", "desarrollo comunicativo bebé"],
  },
  {
    slug: "tartamudez-que-es-tratamiento",
    category: "Trastornos del habla",
    categorySlug: "trastornos-del-habla",
    title: "Tartamudez: Qué Es, Causas y Tratamiento Fonoaudiológico",
    excerpt:
      "Todo lo que necesitas saber sobre la tartamudez (disfemia): sus causas, tipos, y cómo la fonoaudiología puede ayudar a mejorar la fluidez del habla.",
    readTime: "8 min",
    date: "2024-11-28",
    keywords: ["tartamudez tratamiento", "disfemia fonoaudiología"],
  },
];

export const faqData = [
  {
    q: "¿A partir de qué edad es recomendable llevar a mi hijo a fonoaudiología?",
    a: "Podemos intervenir desde los primeros meses de vida. Si tu hijo tiene 2 años y aún no dice palabras claras, o a los 3 años no forma frases, es importante consultar pronto. No esperes: la detección temprana es clave.",
  },
  {
    q: "¿Cómo es la primera sesión?",
    a: "La primera sesión dura aproximadamente 60 minutos. Realizamos una evaluación completa del lenguaje, habla, voz o área de consulta, conversamos sobre la historia clínica y al final entregamos un informe con los hallazgos y plan de tratamiento sugerido.",
  },
  {
    q: "¿Cuántas sesiones se necesitan?",
    a: "Depende de cada caso. Algunos pacientes muestran avances significativos en pocas semanas, otros requieren seguimiento más prolongado. En la evaluación inicial podemos darte una estimación más precisa para tu situación específica.",
  },
  {
    q: "¿Tienes atención a domicilio?",
    a: "Sí, según disponibilidad y ubicación dentro de Valparaíso. Contáctame por WhatsApp para coordinar los detalles y disponibilidad de agenda.",
  },
  {
    q: "¿Aceptas seguros de salud o Fonasa?",
    a: "Contáctame directamente por WhatsApp para consultar sobre convenios y medios de pago disponibles. Trabajamos con diversas opciones para facilitar el acceso a la atención.",
  },
];
