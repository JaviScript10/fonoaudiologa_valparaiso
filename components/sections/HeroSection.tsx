"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20quisiera%20agendar%20una%20cita%20de%20fonoaudiología%20en%20Valparaíso.`;

  return (
    <section
      className="relative min-h-[95vh] flex items-center hero-gradient overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-200/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-teal-200/30 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-warm-200/20 rounded-full blur-2xl" aria-hidden="true" />

      {/* Medical pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              ✅ Disponible para nuevos pacientes · Valparaíso
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-slide-up"
            >
              Fonoaudióloga en{" "}
              <span className="gradient-text">Valparaíso</span>
              <br />
              <span className="text-slate-700 text-3xl sm:text-4xl lg:text-5xl">
                que transforma vidas
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              Especialista en lenguaje infantil, estimulación temprana, habla y voz.{" "}
              <strong className="text-slate-800">
                Hola, soy Cinthya López Suazo
              </strong>
              , fonoaudióloga titulada de la Universidad de Playa Ancha, y estoy aquí para
              acompañarte en cada etapa de tu comunicación.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Titulada U. de Playa Ancha
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Atención niños y adultos
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Resultados comprobados
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-green-200 transition-all duration-300 hover:-translate-y-0.5 text-lg"
                aria-label="Agendar cita por WhatsApp con Cinthya López fonoaudióloga"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agenda tu Hora Gratis
              </a>
              <Link
                href="/servicios"
                className="flex items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-700 font-semibold px-8 py-4 rounded-2xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 hover:-translate-y-0.5 text-lg shadow-sm"
              >
                Ver Servicios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["MJ", "RC", "VM", "CF"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    aria-hidden="true"
                  >
                    {initials[0]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  <strong>+50 familias</strong> atendidas con éxito
                </p>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative hidden lg:flex justify-center items-center animate-fade-in animation-delay-400">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-primary-400 to-teal-500 p-1 shadow-2xl shadow-primary-200/50 animate-float">
                <div className="w-full h-full rounded-[22px] bg-white flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center mb-4 shadow-inner">
                    <span className="text-4xl" aria-hidden="true">👩‍⚕️</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-1">
                    Cinthya López
                  </h2>
                  <p className="text-sm text-primary-600 font-semibold mb-3">Fonoaudióloga</p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-teal-400 rounded mb-3" />
                  <p className="text-xs text-slate-500 mb-4">
                    Universidad de Playa Ancha<br/>Valparaíso, Chile
                  </p>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {[
                      { icon: "🧒", label: "Lenguaje Infantil" },
                      { icon: "🌱", label: "Estimulación" },
                      { icon: "🗣️", label: "Habla" },
                      { icon: "🎙️", label: "Voz" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-primary-50 rounded-xl px-2 py-2 text-xs text-primary-700 font-medium"
                      >
                        <span aria-hidden="true">{item.icon}</span> {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-hidden="true" />
                Disponible Hoy
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 shadow-xl px-4 py-3 rounded-xl text-left">
                <p className="text-xs text-slate-500">Próxima cita</p>
                <p className="text-sm font-bold text-slate-900">Esta semana</p>
                <p className="text-xs text-primary-600">Valparaíso</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
