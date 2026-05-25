import { ReactNode } from "react";

interface Program {
  icon: ReactNode;
  name: string;
  description: string;
  features: string[];
  price: string;
  badge: string | null;
  cta: string;
}

const programs: Program[] = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    name: "Tour Virtual",
    description:
      "Explora las instalaciones, aulas y campus de las mejores universidades desde la comodidad de tu hogar.",
    features: [
      "Recorrido virtual 360°",
      "Sesión con estudiantes actuales",
      "Presentación de programas académicos",
      "Sesión de preguntas en vivo",
    ],
    price: "Desde $299 MXN",
    badge: null,
    cta: "Comenzar virtual",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    name: "Tour Presencial",
    description:
      "Vive la experiencia universitaria en persona. Recorre los campus, asiste a clases demo y conoce la comunidad.",
    features: [
      "Visita guiada al campus",
      "Clase demo con profesores",
      "Almuerzo en las instalaciones",
      "Kit de bienvenida exclusivo",
    ],
    price: "Desde $799 MXN",
    badge: "Más popular",
    cta: "Reservar visita",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    name: "Paquete Premium",
    description:
      "La experiencia completa: tours virtuales y presenciales, asesoría 1:1 y acompañamiento hasta tu inscripción.",
    features: [
      "Todo lo del plan presencial",
      "Asesoría vocacional personalizada",
      "Preparación de solicitudes",
      "Seguimiento post-tour garantizado",
    ],
    price: "Desde $1,899 MXN",
    badge: "Todo incluido",
    cta: "Quiero el paquete",
  },
];

export default function Services() {
  return (
    <section id="programas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Nuestros programas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Elige la experiencia que mejor se adapte a ti
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Desde exploraciones virtuales hasta acompañamiento completo. Tenemos el programa ideal
            para cada estudiante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const isPopular = program.badge === "Más popular";
            return (
              <div
                key={program.name}
                className={`relative rounded-2xl border p-8 flex flex-col transition-shadow hover:shadow-lg ${
                  isPopular
                    ? "border-primary shadow-lg"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {program.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${
                      isPopular ? "bg-primary" : "bg-accent"
                    }`}
                  >
                    {program.badge}
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    isPopular ? "bg-primary text-white" : "bg-gray-100 text-primary"
                  }`}
                >
                  {program.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm font-semibold text-gray-400 mb-4">{program.price}</div>

                <a
                  href="#contacto"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm text-center transition-colors ${
                    isPopular
                      ? "bg-primary text-white hover:bg-primary-light"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {program.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
