import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50 to-teal-50">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-4" aria-hidden="true">🩺</div>
        <h1 className="font-display text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe. Puede que haya sido movida o el enlace esté incorrecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
          >
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white hover:bg-primary-50 text-primary-700 font-semibold px-6 py-3 rounded-xl border border-primary-200 transition-all"
          >
            Contactar a Cinthya
          </Link>
        </div>
      </div>
    </div>
  );
}
