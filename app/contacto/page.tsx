import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - Fonoaudióloga en Valparaíso | Cinthya López",
  description:
    "Contáctate con Cinthya López Suazo, fonoaudióloga en Valparaíso. Agenda tu hora por WhatsApp, email o formulario. Atención en Valparaíso, Chile.",
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto - Cinthya López Fonoaudióloga Valparaíso",
  url: `${siteConfig.url}/contacto`,
  mainEntity: {
    "@type": "MedicalBusiness",
    name: "Cinthya López Suazo - Fonoaudióloga",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valparaíso",
      addressRegion: "Región de Valparaíso",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  },
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20agendar%20una%20cita%20de%20fonoaudiología.`;
  const googleMapsUrl = `https://maps.google.com/?q=-33.0472,-71.6127`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-teal-50 pt-28 pb-16" aria-labelledby="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-primary-700 font-medium" aria-current="page">Contacto</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Hablemos
            </span>
            <h1 id="contact-hero" className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Agenda tu <span className="gradient-text">primera consulta</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Estoy aquí para ayudarte. Contáctame por WhatsApp, email o completa el formulario y te responderé a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: Contact options */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
                Formas de <span className="gradient-text">contactarme</span>
              </h2>

              {/* WhatsApp CTA - Primary */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-green-200 transition-all duration-300 hover:-translate-y-0.5 mb-4 group"
                aria-label="Contactar por WhatsApp, forma más rápida"
              >
                <div className="w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">WhatsApp · Forma más rápida</p>
                  <p className="text-green-100 text-sm">{siteConfig.phoneFormatted}</p>
                  <p className="text-green-100 text-xs mt-1">Respuesta en menos de 1 hora</p>
                </div>
                <svg className="w-6 h-6 ml-auto opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Other contact options */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-primary-300 p-5 rounded-2xl transition-all duration-200 hover:shadow-md group"
                  aria-label={`Llamar al ${siteConfig.phoneFormatted}`}
                >
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Teléfono</p>
                    <p className="text-xs text-slate-500">{siteConfig.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-primary-300 p-5 rounded-2xl transition-all duration-200 hover:shadow-md group"
                  aria-label={`Enviar email a ${siteConfig.email}`}
                >
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 text-sm">Email</p>
                    <p className="text-xs text-slate-500 truncate">{siteConfig.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horarios de atención
              </h3>
              <div className="space-y-2 text-sm" role="list">
                {[
                  { day: "Lunes a Viernes", hours: "09:00 - 18:00" },
                  { day: "Sábados", hours: "Consultar disponibilidad" },
                  { day: "WhatsApp", hours: "Respuesta rápida todos los días" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0" role="listitem">
                    <span className="text-slate-600">{item.day}</span>
                    <span className="font-medium text-slate-900">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-4xl mb-2" aria-hidden="true">📍</div>
                  <p className="font-bold text-primary-800">Valparaíso</p>
                  <p className="text-primary-600 text-sm">Región de Valparaíso, Chile</p>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-end justify-center pb-4"
                  aria-label="Ver en Google Maps"
                >
                  <span className="bg-white text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                    Ver en Google Maps →
                  </span>
                </a>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">📍 Ubicación:</strong> Valparaíso, Región de Valparaíso, Chile.
                  La dirección exacta se entrega al agendar tu cita.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                Envíame un mensaje
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Completa el formulario y te respondo a la brevedad.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
