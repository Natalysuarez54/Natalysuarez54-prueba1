import Image from "next/image";

const testimonials = [
  {
    name: "Sofía Ramírez",
    role: "Ingeniería en Diseño — ITESM",
    image: "https://picsum.photos/seed/sofia25/200/200",
    quote:
      "Gracias a University Discovery Tour pude visitar 5 universidades en un fin de semana. El asesor me ayudó a entender mis opciones y hoy estoy estudiando la carrera perfecta para mí.",
    stars: 5,
  },
  {
    name: "Andrés Mendoza",
    role: "Medicina — Universidad Anáhuac",
    image: "https://picsum.photos/seed/andres30/200/200",
    quote:
      "Antes del tour tenía mucha incertidumbre sobre si Medicina era para mí. Después de conocer los laboratorios y platicar con estudiantes de 3er año, supe que era mi camino.",
    stars: 5,
  },
  {
    name: "Valentina Cruz",
    role: "Administración de Empresas — IBERO",
    image: "https://picsum.photos/seed/valentina22/200/200",
    quote:
      "El paquete premium fue increíble. No solo fui a los tours, sino que recibí asesoría para mi examen de admisión y mi carta de motivos. ¡Fui aceptada en mi primera opción!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Historias reales de jóvenes que tomaron la mejor decisión con nuestra guía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={`Foto de ${t.name}`}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
