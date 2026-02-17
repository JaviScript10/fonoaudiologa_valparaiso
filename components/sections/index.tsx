"use client";

// StatsSection
export function StatsSection() {
  const stats = [
    { value: "5+", label: "Años de experiencia", icon: "🏅" },
    { value: "200+", label: "Pacientes atendidos", icon: "❤️" },
    { value: "6", label: "Especialidades", icon: "🎯" },
    { value: "100%", label: "Compromiso contigo", icon: "⭐" },
  ];

  return (
    <section className="py-12 bg-white" aria-label="Estadísticas y logros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 card-hover"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
              <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ServicesOverview
import Link from "next/link";
import { siteConfig as config } from "@/lib/siteConfig";

type Service = {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDesc: string;
  whoFor: string;
};

export function ServicesOverview({ services }: { services: Service[] }) {
  const whatsappBase = `https://wa.me/${config.whatsapp}?text=Hola%20Cinthya%2C%20me%20interesa%20el%20servicio%20de%20`;

  return (
    <section className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Especialidades
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Servicios de{" "}
            <span className="gradient-text">Fonoaudiología</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Atención integral y personalizada para cada etapa de la vida, desde bebés hasta adultos mayores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl p-6 border border-slate-100 card-hover hover:border-primary-200 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-2xl shadow-sm group-hover:shadow-primary-100 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-base leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-teal-600 mt-0.5">{service.whoFor}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.shortDesc}</p>
              <a
                href={`${whatsappBase}${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary-600 font-semibold hover:text-primary-800 transition-colors group-hover:gap-2"
                aria-label={`Consultar por ${service.title} en WhatsApp`}
              >
                Consultar por WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-sm border border-primary-200"
          >
            Ver todos los servicios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// AboutPreview
export function AboutPreview() {
  return (
    <section className="py-20 medical-pattern" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-200 to-teal-200 flex items-center justify-center shadow-2xl shadow-primary-200/30">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4" aria-hidden="true">👩‍⚕️</div>
                  <p className="text-primary-700 font-semibold">Cinthya López Suazo</p>
                  <p className="text-primary-600 text-sm">Fonoaudióloga</p>
                </div>
              </div>

              {/* Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-600 rounded-2xl opacity-20 rotate-12" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-500 rounded-full opacity-20" aria-hidden="true" />

              {/* Credential badge */}
              <div className="absolute bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl" aria-hidden="true">🎓</span>
                  <span className="text-xs font-bold text-slate-900">U. de Playa Ancha</span>
                </div>
                <p className="text-xs text-slate-500">Licenciada en Fonoaudiología</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Sobre Mí
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-5"
            >
              Una fonoaudióloga{" "}
              <span className="gradient-text">comprometida</span>{" "}
              con tu bienestar
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              Soy Cinthya López Suazo, fonoaudióloga titulada de la <strong>Universidad de Playa Ancha</strong>, Valparaíso. Me especializo en el diagnóstico y tratamiento de trastornos del lenguaje, habla y voz tanto en niños como en adultos.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-7">
              Mi enfoque es <strong>integral, cercano y basado en la evidencia científica</strong>. Creo firmemente que cada persona tiene el derecho de comunicarse plenamente, y trabajo con dedicación para hacer eso posible.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Formación universitaria", value: "Universidad de Playa Ancha" },
                { label: "Enfoque", value: "Basado en evidencia científica" },
                { label: "Ubicación", value: "Valparaíso, Chile" },
                { label: "Atención", value: "Niños, jóvenes y adultos" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-200"
            >
              Conocer más sobre mí
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// TestimonialsSection
type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
};

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "Review",
      position: i + 1,
      reviewBody: t.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      itemReviewed: {
        "@type": "MedicalBusiness",
        name: "Cinthya López Suazo - Fonoaudióloga",
      },
    })),
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Testimonios
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Lo que dicen mis <span className="gradient-text">pacientes</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Familias y pacientes que han transformado su comunicación con nuestra ayuda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-1 mb-3" aria-label={`${t.rating} de 5 estrellas`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote
                className="text-sm text-slate-600 leading-relaxed mb-4"
                itemProp="reviewBody"
              >
                "{t.content}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center text-white text-xs font-bold"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900" itemProp="author">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQSection
import { faqData } from "@/lib/siteConfig";

export function FAQSection() {
  return (
    <section className="py-20 medical-pattern" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Preguntas Frecuentes
          </span>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Resolvemos tus <span className="gradient-text">dudas</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-primary-50 transition-colors">
                <span className="font-semibold text-slate-900 text-base pr-4">{item.q}</span>
                <svg
                  className="w-5 h-5 text-primary-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTASection
import { siteConfig } from "@/lib/siteConfig";

export function CTASection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20agendar%20una%20primera%20consulta%20de%20fonoaudiología.`;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-teal-600" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl mb-4" aria-hidden="true">🌟</div>
        <h2
          id="cta-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
        >
          Da el primer paso hoy
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          La comunicación es el puente que conecta a las personas. No esperes más para mejorar la tuya o la de tu familia. Agenda una consulta y empecemos juntos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
            aria-label="Agendar cita por WhatsApp"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar por WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/30 transition-all duration-300 hover:-translate-y-0.5 text-lg backdrop-blur-sm"
            aria-label="Enviar email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Email
          </a>
        </div>
        <p className="text-primary-200 text-sm mt-6">
          📍 Valparaíso, Chile · Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  );
}
