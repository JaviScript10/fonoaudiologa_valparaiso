import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, blogPosts } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog de Fonoaudiología en Valparaíso | Cinthya López",
  description:
    "Blog especializado en fonoaudiología: trastornos del lenguaje infantil, estimulación temprana, tartamudez, terapia de voz y consejos para padres. Escrito por fonoaudióloga en Valparaíso.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const categories = [
  { name: "Trastornos del lenguaje infantil", slug: "trastornos-del-lenguaje-infantil", icon: "🧒", count: 5 },
  { name: "Consejos para padres", slug: "consejos-para-padres", icon: "👨‍👩‍👧", count: 4 },
  { name: "Trastornos del habla", slug: "trastornos-del-habla", icon: "🗣️", count: 3 },
  { name: "Terapia para adultos", slug: "terapia-adultos", icon: "🤝", count: 3 },
  { name: "Estimulación temprana", slug: "estimulacion-temprana", icon: "🌱", count: 4 },
  { name: "Salud vocal", slug: "salud-vocal", icon: "🎙️", count: 2 },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-teal-50 pt-28 pb-16" aria-labelledby="blog-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-primary-700 font-medium" aria-current="page">Blog</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Recursos y Consejos
            </span>
            <h1 id="blog-hero" className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Blog de <span className="gradient-text">Fonoaudiología</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Recursos, consejos y artículos especializados sobre lenguaje, habla y comunicación. Escritos por Cinthya López Suazo, fonoaudióloga en Valparaíso.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Articles */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
              Artículos recientes
            </h2>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden card-hover"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Link
                        href={`/blog/${post.categorySlug}`}
                        className="text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 px-3 py-1 rounded-full transition-colors"
                      >
                        {post.category}
                      </Link>
                      <time
                        dateTime={post.date}
                        className="text-xs text-slate-400"
                        itemProp="datePublished"
                      >
                        {new Date(post.date).toLocaleDateString("es-CL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="text-xs text-slate-400">· {post.readTime} de lectura</span>
                    </div>
                    <h3
                      className="font-display text-xl font-bold text-slate-900 mb-3 hover:text-primary-700 transition-colors"
                      itemProp="headline"
                    >
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center text-white text-xs font-bold"
                          aria-hidden="true"
                        >
                          CL
                        </div>
                        <span className="text-sm text-slate-600" itemProp="author">
                          Cinthya López
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors"
                        aria-label={`Leer artículo: ${post.title}`}
                      >
                        Leer artículo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8" aria-label="Sidebar del blog">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Categorías</h3>
              <ul className="space-y-2" role="list">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/blog/${cat.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-primary-50 transition-colors group text-sm"
                    >
                      <span className="flex items-center gap-2 text-slate-700 group-hover:text-primary-700">
                        <span aria-hidden="true">{cat.icon}</span>
                        {cat.name}
                      </span>
                      <span className="text-xs text-slate-400 bg-slate-100 group-hover:bg-primary-100 group-hover:text-primary-600 px-2 py-0.5 rounded-full transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-primary-600 to-teal-600 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl mb-3" aria-hidden="true">👩‍⚕️</div>
              <h3 className="font-bold text-lg mb-2">¿Tienes dudas?</h3>
              <p className="text-primary-100 text-sm mb-5">
                Agenda una consulta con Cinthya y resuelve todas tus preguntas de forma personalizada.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%20Cinthya%2C%20leí%20tu%20blog%20y%20tengo%20algunas%20preguntas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                aria-label="Consultar por WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
