const stats = [
  { value: "500+", label: "Estudiantes orientados" },
  { value: "20+", label: "Universidades partner" },
  { value: "95%", label: "Tasa de satisfacción" },
  { value: "5", label: "Años de experiencia" },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Cifras que nos respaldan
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-200" />
              )}
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
