import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "5 Señales de Alerta de Retraso del Lenguaje en tu Hijo | Cinthya López",
  description:
    "Fonoaudióloga en Valparaíso explica las 5 señales de alerta más importantes que indican retraso del lenguaje en niños y cuándo consultar a un especialista.",
  keywords:
    "retraso del lenguaje infantil, señales alerta lenguaje niños, fonoaudióloga valparaíso, trastorno lenguaje niño",
  openGraph: {
    title: "5 Señales de Alerta de Retraso del Lenguaje en tu Hijo",
    description:
      "Conoce las señales más importantes que indican que tu hijo podría tener un retraso del lenguaje y cuándo consultar a una fonoaudióloga en Valparaíso.",
    type: "article",
    publishedTime: "2024-12-15",
    authors: ["Cinthya López Suazo"],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/senales-retraso-lenguaje-nino`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Señales de Alerta de Retraso del Lenguaje en tu Hijo",
  description:
    "Conoce las señales más importantes que indican retraso del lenguaje en niños y cuándo consultar a una fonoaudióloga.",
  author: {
    "@type": "Person",
    name: "Cinthya López Suazo",
    jobTitle: "Fonoaudióloga",
    url: `${siteConfig.url}/sobre-mi`,
  },
  publisher: {
    "@type": "Organization",
    name: "Cinthya López Suazo - Fonoaudióloga",
    url: siteConfig.url,
  },
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
  image: `${siteConfig.url}/images/retraso-lenguaje-nino.jpg`,
  url: `${siteConfig.url}/blog/senales-retraso-lenguaje-nino`,
  about: {
    "@type": "MedicalCondition",
    name: "Retraso del Lenguaje",
    alternateName: "Trastorno del desarrollo del lenguaje",
  },
};

export default function ArticleSeñalesRetraso() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20leí%20tu%20artículo%20sobre%20retraso%20del%20lenguaje%20y%20quisiera%20consultar%20sobre%20mi%20hijo/a.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-primary-600">Inicio</Link></li>
            <li aria-hidden="true"><span>/</span></li>
            <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
            <li aria-hidden="true"><span>/</span></li>
            <li className="text-primary-700 font-medium truncate" aria-current="page">5 Señales de Alerta...</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href="/blog/trastornos-del-lenguaje-infantil"
              className="text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 px-3 py-1 rounded-full transition-colors"
            >
              Trastornos del lenguaje infantil
            </Link>
            <time dateTime="2024-12-15" className="text-xs text-slate-400" itemProp="datePublished">
              15 de diciembre de 2024
            </time>
            <span className="text-xs text-slate-400">· 5 min de lectura</span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            itemProp="headline"
          >
            5 Señales de Alerta de Retraso del Lenguaje en tu Hijo
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed" itemProp="description">
            Como fonoaudióloga en Valparaíso, una de las preguntas más frecuentes que recibo de padres es: "¿Mi hijo habla poco para su edad?" Aquí te explico las señales más importantes que debes conocer.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mt-6 p-4 bg-primary-50 rounded-2xl">
            <div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center text-white font-bold"
              aria-hidden="true"
            >
              CL
            </div>
            <div>
              <p className="font-semibold text-slate-900" itemProp="author">Cinthya López Suazo</p>
              <p className="text-sm text-primary-600">Fonoaudióloga · Universidad de Playa Ancha · Valparaíso</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose-custom space-y-6 text-slate-700">

          <p className="text-lg">
            El <strong>desarrollo del lenguaje</strong> es uno de los hitos más importantes en la vida de un niño. Sin embargo, muchos padres no saben exactamente qué esperar en cada etapa, y esto puede generar mucha ansiedad. Lo más importante: <strong>la detección temprana es clave</strong> para un tratamiento exitoso.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
            <p className="text-yellow-800 font-semibold mb-1">⚠️ Importante</p>
            <p className="text-yellow-700 text-sm">
              Cada niño tiene su propio ritmo de desarrollo. Sin embargo, si identificas alguna de estas señales en tu hijo, lo más recomendable es consultar con una fonoaudióloga para realizar una evaluación profesional.
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            Señal #1: No dice palabras a los 12 meses
          </h2>
          <p>
            Alrededor del primer año de vida, la mayoría de los bebés ya pronuncia su primera palabra con significado: "mamá", "papá", "agua" o alguna aproximación. Si tu bebé llega al año sin haber dicho ninguna palabra con sentido, esto puede ser una señal de alerta temprana.
          </p>
          <p>
            Es normal que haya variación entre niños, pero si además ves que <strong>no señala con el dedo, no imita sonidos ni muestra interés por comunicarse</strong>, definitivamente es momento de consultar.
          </p>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            Señal #2: A los 2 años no une dos palabras
          </h2>
          <p>
            Entre los 18 y 24 meses, los niños suelen comenzar a combinar dos palabras: "más agua", "papá no", "perro grande". Si tu hijo tiene 2 años y solo dice palabras aisladas o tiene un vocabulario muy reducido (menos de 50 palabras), esto merece atención fonoaudiológica.
          </p>

          <div className="bg-primary-50 rounded-2xl p-6 my-6">
            <h3 className="font-semibold text-primary-900 mb-3">📊 Hitos del lenguaje esperados:</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { age: "12 meses", milestone: "1-2 palabras con significado" },
                { age: "18 meses", milestone: "10-20 palabras" },
                { age: "24 meses", milestone: "+50 palabras, frases de 2 palabras" },
                { age: "36 meses", milestone: "Frases de 3-4 palabras, extraños le entienden" },
              ].map((item) => (
                <div key={item.age} className="flex gap-3 items-start bg-white rounded-xl p-3">
                  <span className="font-bold text-primary-600 text-xs bg-primary-100 px-2 py-1 rounded-lg whitespace-nowrap">
                    {item.age}
                  </span>
                  <span className="text-slate-700">{item.milestone}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            Señal #3: Las personas fuera de la familia no le entienden a los 3 años
          </h2>
          <p>
            Alrededor de los 3 años, un extraño debería poder entender aproximadamente el <strong>75% de lo que dice tu hijo</strong>. Si solo los padres o cuidadores más cercanos logran entenderlo, es señal de que hay problemas de articulación o fonología que requieren evaluación.
          </p>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            Señal #4: Regresión en el lenguaje ya adquirido
          </h2>
          <p>
            Si tu hijo <strong>pierde habilidades del lenguaje que ya había adquirido</strong> —dejó de decir palabras que decía antes, dejó de responder a su nombre, o perdió interés en comunicarse— esto es una señal de alerta que requiere evaluación inmediata por un equipo profesional.
          </p>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            Señal #5: Dificultades para comprender instrucciones
          </h2>
          <p>
            El lenguaje no solo es lo que el niño <em>produce</em>, sino también lo que <em>comprende</em>. Si tu hijo de 2 años no entiende instrucciones simples como "ven aquí", "dame el vaso" o "busca tu zapato", puede haber un trastorno de la comprensión lingüística que también requiere intervención.
          </p>

          <h2 className="font-display text-2xl font-bold text-primary-800 mt-8 mb-4">
            ¿Qué hacer si identifico estas señales?
          </h2>
          <p>
            Lo primero es <strong>no entrar en pánico</strong>, pero sí actuar a tiempo. La intervención fonoaudiológica temprana tiene resultados mucho mejores que esperar a "ver si el niño se desarrolla solo". Como fonoaudióloga en Valparaíso, realizo evaluaciones completas del lenguaje y puedo orientarte sobre el mejor camino a seguir.
          </p>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-primary-600 to-teal-600 rounded-2xl p-7 text-white text-center mt-10">
            <div className="text-4xl mb-3" aria-hidden="true">🧒</div>
            <h3 className="font-display text-xl font-bold mb-2">¿Tienes dudas sobre el lenguaje de tu hijo?</h3>
            <p className="text-primary-100 text-sm mb-5">
              Contáctame por WhatsApp y agendamos una evaluación. La detección temprana marca la diferencia.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-6 py-3 rounded-xl transition-all"
              aria-label="Agendar evaluación por WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Evaluación
            </a>
          </div>

          {/* Related articles */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Artículos relacionados</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/estimulacion-lenguaje-bebe-0-12-meses" className="group">
                <div className="bg-primary-50 hover:bg-primary-100 rounded-xl p-5 transition-all duration-200">
                  <span className="text-xs text-primary-600 font-semibold">Consejos para padres</span>
                  <h4 className="font-semibold text-slate-900 mt-1 group-hover:text-primary-700 transition-colors">
                    Cómo Estimular el Lenguaje de tu Bebé de 0 a 12 Meses
                  </h4>
                </div>
              </Link>
              <Link href="/blog/tartamudez-que-es-tratamiento" className="group">
                <div className="bg-teal-50 hover:bg-teal-100 rounded-xl p-5 transition-all duration-200">
                  <span className="text-xs text-teal-600 font-semibold">Trastornos del habla</span>
                  <h4 className="font-semibold text-slate-900 mt-1 group-hover:text-teal-700 transition-colors">
                    Tartamudez: Qué Es, Causas y Tratamiento
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
