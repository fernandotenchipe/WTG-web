"use client";

import Image from "next/image";
import { useState } from "react";
import { sendToAppsScript, fileToBase64Payload } from "@/lib/sendToAppsScript";

export default function ProveedoresPage() {

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
      formType: "proveedor",
      nombreContacto: String(formData.get("nombreContacto") || ""),
      empresa: String(formData.get("empresa") || ""),
      correo: String(formData.get("correo") || ""),
      telefono: String(formData.get("telefono") || ""),
      ciudadBase: String(formData.get("ciudadBase") || ""),
      unidades: formData.getAll("unidades").map(String),
      servicios: formData.getAll("servicios").map(String),
      cobertura: formData.getAll("cobertura").map(String),
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


  const unitOptions = ["Nissan / Unidad ligera", "Camión 3.5", "Rabón", "Torton", "Caja de 53’"];
  const serviceOptions = [
    "General",
    "Thermo",
    "Hazmat",
    "Impo/Expo",
    "Ingreso a Aeropuertos",
    "Servicios Dedicados",
    "U.S. Domestic Freight Transportation",
    "Más",
  ];
  const coverageOptions = ["Nacional", "Internacional"];

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
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Nombre del contacto</span>
                <input
                  name="nombreContacto"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre completo"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Empresa o razón social</span>
                <input
                  name="empresa"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Nombre comercial"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-slate-700">Correo</span>
                <input
                  name="correo"
                  required
                  type="email"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="correo@empresa.com"
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
                <span className="text-sm font-semibold text-slate-700">Ciudad base de operación</span>
                <input
                  name="ciudadBase"
                  required
                  type="text"
                  className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                  placeholder="Monterrey, NL"
                />
              </label>

              <div className="md:col-span-2 grid gap-4 lg:grid-cols-3">
                <fieldset className="rounded-sm border border-slate-200 bg-slate-50 p-4">
                  <legend className="px-1 text-sm font-semibold text-slate-700">Tipo de unidad principal</legend>
                  <div className="mt-3 space-y-2">
                    {unitOptions.map((option) => (
                      <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                        <input
                          type="checkbox"
                          name="unidades"
                          value={option}
                          className="h-4 w-4 rounded border-slate-300 text-[var(--navy-900)] focus:ring-[var(--navy-800)]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="rounded-sm border border-slate-200 bg-slate-50 p-4">
                  <legend className="px-1 text-sm font-semibold text-slate-700">Servicios</legend>
                  <div className="mt-3 space-y-2">
                    {serviceOptions.map((option) => (
                      <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                        <input
                          type="checkbox"
                          name="servicios"
                          value={option}
                          className="h-4 w-4 rounded border-slate-300 text-[var(--navy-900)] focus:ring-[var(--navy-800)]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="rounded-sm border border-slate-200 bg-slate-50 p-4">
                  <legend className="px-1 text-sm font-semibold text-slate-700">Cobertura</legend>
                  <div className="mt-3 space-y-2">
                    {coverageOptions.map((option) => (
                      <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                        <input
                          type="checkbox"
                          name="cobertura"
                          value={option}
                          className="h-4 w-4 rounded border-slate-300 text-[var(--navy-900)] focus:ring-[var(--navy-800)]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Presentación de servicios en PDF
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <label
                    htmlFor="pdf-upload"
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
                    id="pdf-upload"
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
                  {submitStatus === "sending" ? "Enviando..." : "Enviar solicitud"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
