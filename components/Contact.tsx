"use client";

import { useState } from "react";

const programOptions = [
  "Tour Virtual",
  "Tour Presencial",
  "Paquete Premium",
  "No estoy seguro/a aún",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Contáctanos
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Da el primer paso hacia tu futuro universitario
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Regístrate hoy y uno de nuestros asesores te contactará en menos de 24 horas para
              diseñar tu experiencia personalizada.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  label: "Correo electrónico",
                  value: "hola@universitydiscoverytour.com",
                  icon: (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Teléfono / WhatsApp",
                  value: "+52 55 1234 5678",
                  icon: (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  label: "Cobertura",
                  value: "Ciudad de México y todo el país",
                  icon: (
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{item.label}</div>
                    <div className="text-white/60 text-sm mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">¡Solicitud recibida!</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Un asesor se pondrá en contacto contigo en menos de 24 horas.
                  Revisa tu bandeja de entrada.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Solicita información gratuita
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+52 55 0000 0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Ciudad
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Ciudad de México"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Programa de interés
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Selecciona un programa</option>
                      {programOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      ¿En qué podemos ayudarte?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tus intereses, carrera que te llama la atención, dudas..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-sm shadow-lg"
                  >
                    Enviar solicitud →
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Sin spam. Tu información está protegida. Respuesta en menos de 24 hrs.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
