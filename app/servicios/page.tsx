import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, services } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Servicios de Fonoaudiología en Valparaíso | Cinthya López",
  description:
    "Servicios de fonoaudiología en Valparaíso: lenguaje infantil, estimulación temprana, habla y articulación, adultos mayores, limpieza de oído y terapia de voz. Agenda hoy.",
  alternates: {
    canonical: `${siteConfig.url}/servicios`,
  },
  keywords: [
    "fonoaudiología valparaíso",
    "terapia lenguaje valparaíso",
    "estimulación temprana valparaíso",
    "limpieza oído valparaíso",
    "terapia voz valparaíso",
  ].join(", "),
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Fonoaudiología - Cinthya López Valparaíso",
  description: "Servicios de fonoaudiología especializados en Valparaíso, Chile",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.description,
      procedureType: "TherapeuticProcedure",
      howPerformed: s.description,
    },
  })),
};

export default function ServiciosPage() {
  const whatsappBase = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20me%20interesa%20el%20servicio%20de%20`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-teal-50 pt-28 pb-16" aria-labelledby="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-primary-700 font-medium" aria-current="page">Servicios</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Especialidades
            </span>
            <h1 id="services-hero" className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Servicios de <span className="gradient-text">Fonoaudiología</span> en Valparaíso
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atención profesional, personalizada y basada en evidencia científica para cada etapa de la vida. Desde bebés hasta adultos mayores, tengo el servicio que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" aria-label="Lista de servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-10 items-center rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-primary-50/50 to-teal-50/50"
                }`}
                itemScope
                itemType="https://schema.org/MedicalProcedure"
              >
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center text-3xl shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h2
                        className="font-display text-2xl font-bold text-slate-900"
                        itemProp="name"
                      >
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary-600 font-medium">{service.whoFor}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6" itemProp="description">
                    {service.description}
                  </p>
                  <a
                    href={`${whatsappBase}${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-green-200 transition-all duration-300"
                    aria-label={`Consultar sobre ${service.title} por WhatsApp`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Beneficios y qué incluye
                    </h3>
                    <ul className="space-y-3" role="list">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" aria-hidden="true">
                            ✓
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Dirigido a:</p>
                      <p className="text-sm text-slate-700">{service.whoFor}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-teal-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-primary-100 mb-8">Contáctame directamente y te explico cómo puedo ayudarte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20tengo%20una%20consulta%20sobre%20fonoaudiología.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-7 py-3.5 rounded-xl transition-all"
              aria-label="Contactar por WhatsApp"
            >
              Escribirme por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/30 transition-all"
            >
              Ver formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
