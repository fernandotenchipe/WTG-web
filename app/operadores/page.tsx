"use client";

import Image from "next/image";
import { useState } from "react";
import { sendToAppsScript, fileToBase64Payload } from "@/lib/sendToAppsScript";

export default function OperadoresPage() {

  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [pdfName, setPdfName] = useState<string>("");

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const pdfFile = formData.get("pdf") as File | null;

if (!pdfFile || pdfFile.size === 0) {
  throw new Error("Falta subir el PDF");
}

if (pdfFile.type !== "application/pdf") {
  throw new Error("Solo se permite PDF");
}

if (pdfFile.size > 8 * 1024 * 1024) {
  throw new Error("El PDF no debe pesar más de 8 MB");
}

const pdf = await fileToBase64Payload(pdfFile);

  setSubmitStatus("sending");

  try {
    await sendToAppsScript({
      formType: "operador",
      nombreCompleto: String(formData.get("nombreCompleto") || ""),
      telefono: String(formData.get("telefono") || ""),
      correo: String(formData.get("correo") || ""),
      ciudadResidencia: String(formData.get("ciudadResidencia") || ""),
      tipoUnidad: String(formData.get("tipoUnidad") || ""),
      transmision: String(formData.get("transmision") || ""),
      visaEstadounidense: String(formData.get("visaEstadounidense") || ""),
      tipoLicencia: String(formData.get("tipoLicencia") || ""),
      aniosExperiencia: String(formData.get("aniosExperiencia") || ""),
      rutasDominadas: String(formData.get("rutasDominadas") || ""),
      pdf,
    });

    form.reset();
    setPdfName("");
    setSubmitStatus("sent");
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  }
};

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
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Nombre completo</span>
                <input
                  name="nombreCompleto"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre y apellidos"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Teléfono</span>
                <input
                  name="telefono"
                  required
                  type="tel"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="+52"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Correo</span>
                <input
                  name="correo"
                  required
                  type="email"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="correo@dominio.com"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Ciudad de residencia</span>
                <input
                  name="ciudadResidencia"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Monterrey, NL"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">¿Qué tipo de unidad manejas?</span>
                <input
                  name="tipoUnidad"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Ej. Torton, Rabón, 3.5 toneladas"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">¿Qué transmisión manejas?</span>
                <input
                  name="transmision"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Ej. Manual, automática, semiautomática"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Visa estadounidense</span>
                <select
                  name="visaEstadounidense"
                  required
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]">
                  <option>Selecciona una opción</option>
                  <option>Sí</option>
                  <option>No</option>
                  <option>En proceso</option>
                </select>
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Tipo de licencia</span>
                <input
                  name="tipoLicencia"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Federal B, E, etc."
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Años de experiencia</span>
                <input
                  name="aniosExperiencia"
                  required
                  type="number"
                  min={0}
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="0"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Rutas o zonas dominadas</span>
                <textarea
                  name="rutasDominadas"
                  required
                  rows={4}
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Estados, carreteras o zonas donde tienes experiencia"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  CV en PDF
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <label
                    htmlFor="pdf-upload-operadores"
                    className="flex w-full items-center justify-between rounded-sm border border-slate-300 px-3 py-2 text-slate-800 bg-white cursor-pointer"
                  >
                    <span className={`truncate text-sm ${pdfName ? 'text-slate-800' : 'text-slate-500'}`}>
                      {pdfName || 'Examinar… Ningún archivo seleccionado.'}
                    </span>
                    <span className="ml-4 inline-flex items-center gap-2 rounded-sm bg-[var(--navy-900)] px-3 py-2 text-sm font-semibold text-white">
                      Seleccionar
                    </span>
                  </label>
                  <input
                    id="pdf-upload-operadores"
                    name="pdf"
                    type="file"
                    accept="application/pdf"
                    required
                    className="hidden"
                    onChange={(e) => {
                      const file = e.currentTarget.files && e.currentTarget.files[0];
                      setPdfName(file ? file.name : "");
                    }}
                  />
                </div>
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitStatus === "sending" ? "Enviando..." : "Enviar postulación"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[var(--navy-900)] mb-4">Unidades que manejamos</h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-12 w-16 overflow-hidden rounded-sm bg-slate-100">
                    <Image src="/images/nissan.png" alt="Nissan unidad ligera" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy-900)]">Nissan</p>
                    <p className="text-xs text-slate-600">Unidad ligera</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-12 w-16 overflow-hidden rounded-sm bg-slate-100">
                    <Image src="/images/3.5.png" alt="Unidad 3.5 toneladas" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy-900)]">3.5 toneladas</p>
                    <p className="text-xs text-slate-600">Carga ligera y media</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-12 w-16 overflow-hidden rounded-sm bg-slate-100">
                    <Image src="/images/rabon.png" alt="Unidad Rabón" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy-900)]">Rabón</p>
                    <p className="text-xs text-slate-600">Capacidad intermedia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-12 w-16 overflow-hidden rounded-sm bg-slate-100">
                    <Image src="/images/torton.png" alt="Unidad Torton" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy-900)]">Torton</p>
                    <p className="text-xs text-slate-600">Alta capacidad</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative h-12 w-16 overflow-hidden rounded-sm bg-slate-100">
                    <Image src="/images/53.png" alt="Caja seca 53 pies" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--navy-900)]">Caja seca 53’</p>
                    <p className="text-xs text-slate-600">Carga de mayor volumen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
