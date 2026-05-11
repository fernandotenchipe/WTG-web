import Image from "next/image";

export default function ProveedoresPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-surface border-b border-slate-200/80">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="space-y-4">
            <a href="/" className="inline-flex text-sm font-semibold text-[var(--navy-900)] transition hover:text-[var(--yellow-400)]">
              ← Volver al inicio
            </a>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
              Únete al equipo
            </p>
            <h1 className="text-5xl leading-[0.95] font-bold text-[var(--navy-900)]">
              Registro de proveedores de transporte
            </h1>
            <p className="max-w-xl text-base text-slate-700">
              Si cuentas con unidad propia, documentación vigente y operación formal, queremos conocerte para integrarte a rutas activas y asignaciones programadas.
            </p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-sm border border-slate-200 bg-white">
            <Image
              src="/images/horizontal-2.jpeg"
              alt="Proveedores de transporte en operación"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4 rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--navy-900)]">Requisitos iniciales</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Unidad propia en condiciones operativas.</li>
              <li>Tarjeta de circulación y póliza vigentes.</li>
              <li>Documentación fiscal para facturación.</li>
              <li>Disponibilidad de ruta y tiempos de respuesta.</li>
              <li>Contacto administrativo y operativo.</li>
            </ul>
          </aside>

          <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-3xl font-bold text-[var(--navy-900)]">Solicitud para proveedores</h3>
            <p className="mt-2 text-slate-600">
              Completa tus datos y te contactaremos para validación documental y alta de proveedor.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Nombre del contacto</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre completo"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Empresa o razón social</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre comercial"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Correo</span>
                <input
                  type="email"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="correo@empresa.com"
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
                <span className="text-sm font-semibold text-slate-700">Tipo de unidad principal</span>
                <select className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]">
                  <option>Nissan / Unidad ligera</option>
                  <option>Camión 3.5</option>
                  <option>Rabón</option>
                  <option>Tortón</option>
                  <option>Caja de 53’</option>
                </select>
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Ciudad base de operación</span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Monterrey, NL"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Cobertura disponible</span>
                <textarea
                  rows={4}
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Rutas, estados o zonas que cubres"
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)]"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
