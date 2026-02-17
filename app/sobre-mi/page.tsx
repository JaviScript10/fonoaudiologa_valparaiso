import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mí - Cinthya López Suazo | Fonoaudióloga Valparaíso",
  description:
    "Conoce a Cinthya López Suazo, fonoaudióloga titulada de la Universidad de Playa Ancha, Valparaíso. Su formación, experiencia y filosofía de trabajo.",
  alternates: {
    canonical: `${siteConfig.url}/sobre-mi`,
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cinthya López Suazo",
  jobTitle: "Fonoaudióloga",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Playa Ancha",
    address: { "@type": "PostalAddress", addressLocality: "Valparaíso", addressCountry: "CL" },
  },
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Cinthya López Suazo - Fonoaudióloga",
    address: { "@type": "PostalAddress", addressLocality: "Valparaíso", addressCountry: "CL" },
  },
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: `${siteConfig.url}/sobre-mi`,
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20agendar%20una%20consulta.`;

export default function SobreMiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-teal-50 pt-28 pb-16" aria-labelledby="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-primary-700 font-medium" aria-current="page">Sobre Mí</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Fonoaudióloga · Valparaíso
              </span>
              <h1 id="about-hero" className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
                Hola, soy <span className="gradient-text">Cinthya López</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Fonoaudióloga titulada de la Universidad de Playa Ancha, apasionada por la comunicación humana y comprometida con el bienestar de cada paciente.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-green-200 transition-all duration-300"
                aria-label="Agendar cita con Cinthya por WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Cita
              </a>
            </div>

            <div className="flex justify-center">
              <div className="relative w-72 h-80">

                {/* FOTO PROFESIONAL */}
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/cinthya.lopez.png"
                    alt="Cinthya López Suazo - Fonoaudióloga en Valparaíso"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* TARJETA INFERIOR */}
                <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-lg p-3 text-center">
                  <p className="text-xs text-slate-500">Egresada</p>
                  <p className="text-sm font-bold text-primary-700">
                    U. de Playa Ancha
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia profesional */}
      <section className="py-20 bg-white" aria-labelledby="history-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="history-heading" className="font-display text-3xl font-bold text-slate-900 mb-6">
            Mi historia <span className="gradient-text">profesional</span>
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-5">
            <p>
              Desde pequeña siempre sentí fascinación por la forma en que los seres humanos nos comunicamos.
              El lenguaje, la voz, la forma en que las palabras construyen puentes entre personas... eso me llevó
              a estudiar <strong>Fonoaudiología en la Universidad de Playa Ancha</strong>, en nuestra querida Valparaíso.
            </p>
            <p>
              Durante mis años de formación, descubrí que mi vocación más profunda era ayudar a los niños a
              encontrar su voz, y a las familias a entender el proceso. Pero también me apasioné por la rehabilitación
              en adultos mayores, el trabajo vocal con docentes y la estimulación temprana.
            </p>
            <p>
              Hoy, con años de experiencia clínica, atiendo con el mismo entusiasmo del primer día. Cada paciente
              es un mundo único, con una historia particular, y mi misión es acompañarlos con <strong>ciencia,
                empatía y compromiso real</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Formación y Filosofía */}
      <section className="py-20 medical-pattern" aria-labelledby="formation-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Formación */}
            <div>
              <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Formación Académica
              </span>
              <h2 id="formation-heading" className="font-display text-3xl font-bold text-slate-900 mb-6">
                Preparación y <span className="gradient-text">certificaciones</span>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    year: "Titulación",
                    title: "Licenciatura en Fonoaudiología",
                    institution: "Universidad de Playa Ancha, Valparaíso",
                    icon: "🎓",
                  },
                  {
                    year: "Especialización",
                    title: "Trastornos del Lenguaje Infantil",
                    institution: "Formación continua y perfeccionamiento",
                    icon: "🧒",
                  },
                  {
                    year: "Actualización",
                    title: "Terapia de Deglución y Disfagia",
                    institution: "Formación basada en evidencia científica",
                    icon: "🏥",
                  },
                  {
                    year: "Miembro",
                    title: "Colegio de Fonoaudiólogos de Chile",
                    institution: "Ejercicio ético y regulado de la profesión",
                    icon: "📋",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-0.5">
                        {item.year}
                      </p>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filosofía */}
            <div>
              <span className="inline-block text-sm font-semibold text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Mi Filosofía
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Cómo trabajo <span className="gradient-text">contigo</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "❤️",
                    title: "Empatía y calidez",
                    desc: "Cada persona que llega a mi consulta trae consigo una historia. Mi primer compromiso es escucharte con genuino interés y sin juicios.",
                  },
                  {
                    icon: "🔬",
                    title: "Evidencia científica",
                    desc: "Todas mis intervenciones están basadas en la mejor evidencia científica disponible, adaptadas a las necesidades únicas de cada paciente.",
                  },
                  {
                    icon: "👨‍👩‍👧",
                    title: "Enfoque familiar",
                    desc: "Creo que la familia es parte fundamental del proceso terapéutico. Trabajo en conjunto con padres, cuidadores y entorno cercano.",
                  },
                  {
                    icon: "📈",
                    title: "Resultados medibles",
                    desc: "Establezco objetivos claros desde el inicio y hacemos seguimiento del progreso de forma continua y transparente.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">¿Quieres conocerme en persona?</h2>
          <p className="text-primary-100 mb-8">Agenda tu primera consulta y conversemos sobre cómo puedo ayudarte.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
            aria-label="Agendar primera consulta por WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agenda tu Primera Consulta
          </a>
        </div>
      </section>
    </>
  );
}
