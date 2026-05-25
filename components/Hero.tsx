import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
              Early Bird 2025 — Cupos limitados
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-6">
              Descubre tu{" "}
              <span className="text-primary">universidad ideal</span>{" "}
              antes de decidir
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-xl">
              Visita más de 20 universidades de élite, recibe orientación personalizada
              y toma la decisión más importante de tu vida con total confianza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contacto"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-center shadow-lg"
              >
                Registrarme ahora
              </a>
              <a
                href="#programas"
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors text-center"
              >
                Ver programas →
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {["Sin costo de orientación", "Proceso 100% guiado", "Resultados garantizados"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[440px] lg:h-[560px] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/universitycampus/800/600"
                alt="Estudiantes explorando campus universitario"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-500 mt-1">Estudiantes orientados</div>
            </div>

            <div className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs font-semibold text-gray-700">4.9/5</div>
              <div className="text-xs text-gray-500">satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
