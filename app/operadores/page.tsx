import Image from "next/image";

export default function OperadoresPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-surface border-b border-slate-200/80">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="space-y-4">
            <a href="/" className="inline-flex text-sm font-semibold text-[var(--navy-900)] transition hover:text-[var(--yellow-400)]">
              ← Volver al inicio
            </a>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
              Operadores
            </p>
            <h1 className="text-5xl leading-[0.95] font-bold text-[var(--navy-900)]">
              Postulación para operadores de transporte
            </h1>
            <p className="max-w-xl text-base text-slate-700">
              Buscamos operadores responsables, con documentación vigente y enfoque en seguridad para integrarse a nuestra operación nacional y cross-border.
            </p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-sm border border-slate-200 bg-white">
            <Image
              src="/images/vertical-1.jpeg"
              alt="Operador en monitoreo de ruta"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4 rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--navy-900)]">Perfil buscado</h2>
            <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2 md:gap-x-4 md:gap-y-2">
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Licencia federal vigente acorde al tipo de unidad.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Apto médico vigente.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Buenas referencias laborales y disponibilidad para validación de antecedentes.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Experiencia comprobable en carretera y manejo de carga.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Conocimiento de protocolos de seguridad, documentación y bitácoras.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Comunicación constante con centro de control y despacho.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Manejo responsable, preventivo y orientado al cuidado de la unidad.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Disponibilidad para viajes locales, foráneos o cross-border.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Actitud profesional con clientes, patios, aduanas y puntos de entrega.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Conocimiento de zonas restringidas.</li>
              <li className="rounded-sm bg-slate-50 px-3 py-2 leading-relaxed">Respuesta rápida ante adversidades en ruta.</li>
            </ul>
          </aside>

          <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-3xl font-bold text-[var(--navy-900)]">Registro de operador</h3>
            <p className="mt-2 text-slate-600">
              Déjanos tus datos y nuestro equipo de reclutamiento te contactará para el proceso de validación.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Nombre completo</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre y apellidos"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Teléfono</span>
                <input
                  type="tel"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="+52"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Correo</span>
                <input
                  type="email"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="correo@dominio.com"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Ciudad de residencia</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Monterrey, NL"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Visa estadounidense</span>
                <select className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]">
                  <option>Selecciona una opción</option>
                  <option>Sí</option>
                  <option>No</option>
                  <option>En proceso</option>
                </select>
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Tipo de licencia</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Federal B, E, etc."
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Años de experiencia</span>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="0"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Rutas o zonas dominadas</span>
                <textarea
                  rows={4}
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Estados, carreteras o zonas donde tienes experiencia"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)]"
                >
                  Enviar postulación
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
