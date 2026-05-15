"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type UnitOption = {
  id: string;
  name: string;
  ratePerKm: number;
  image: string;
  detail: string;
};

type DetailedQuoteFormState = {
  nombre: string;
  apellido: string;
  telefonoOficina: string;
  celular: string;
  correoEmpresarial: string;
  nombreEmpresa: string;
  origen: string;
  destino: string;
  material: string;
  detalleCarga: string;
};

const units: UnitOption[] = [
  {
    id: "nissan",
    name: "Nissan / Unidad ligera",
    ratePerKm: 28,
    image: "/images/nissan.png",
    detail: "Ideal para entregas urbanas y rutas cortas.",
  },
  {
    id: "camion35",
    name: "Camión 3.5",
    ratePerKm: 30,
    image: "/images/3.5.png",
    detail: "Buena opción para carga ligera y media.",
  },
  {
    id: "rabon",
    name: "Rabón",
    ratePerKm: 35,
    image: "/images/rabon.png",
    detail: "Capacidad intermedia para rutas regionales.",
  },
  {
    id: "torton",
    name: "Tortón",
    ratePerKm: 39,
    image: "/images/torton.png",
    detail: "Mayor capacidad para carga pesada.",
  },
  {
    id: "caja53",
    name: "Caja de 53’",
    ratePerKm: 45,
    image: "/images/53.png",
    detail: "Alta capacidad para operaciones de volumen.",
  },
];

const cargoTypes = [
  "Carga general",
  "Refrigerada",
  "Hazmat",
  "Importación / Exportación",
  "Carga aérea / Aeropuertos",
  "Servicio dedicado",
];

export default function CotizacionPage() {
  const [selectedUnitId, setSelectedUnitId] = useState(units[0].id);
  const [distanceKm, setDistanceKm] = useState(500);
  const [cargoType, setCargoType] = useState(cargoTypes[0]);
  const [isDetailedModalOpen, setIsDetailedModalOpen] = useState(false);
  const [detailedQuoteForm, setDetailedQuoteForm] = useState<DetailedQuoteFormState>({
    nombre: "",
    apellido: "",
    telefonoOficina: "",
    celular: "",
    correoEmpresarial: "",
    nombreEmpresa: "",
    origen: "",
    destino: "",
    material: "",
    detalleCarga: "",
  });

  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) ?? units[0],
    [selectedUnitId],
  );

  const estimatedTotal = selectedUnit.ratePerKm * distanceKm;
  const tollEstimate = Math.round(estimatedTotal * 0.08);
  const handlingEstimate = cargoType === "Hazmat" ? 1800 : cargoType === "Refrigerada" ? 1200 : cargoType === "Importación / Exportación" ? 1500 : 900;
  const waitingEstimate = Math.round(distanceKm * 1.5);
  const detailedEstimate = estimatedTotal + tollEstimate + handlingEstimate + waitingEstimate;
  const currencyFormatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });

  const updateDetailedQuoteField = (field: keyof DetailedQuoteFormState, value: string) => {
    setDetailedQuoteForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleDetailedQuoteSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = `Cotización detallada - ${detailedQuoteForm.nombreEmpresa || detailedQuoteForm.nombre || "Nuevo prospecto"}`;
    const mailBody = [
      "Cotización detallada",
      "",
      `Nombre: ${detailedQuoteForm.nombre} ${detailedQuoteForm.apellido}`,
      `Teléfono de oficina: ${detailedQuoteForm.telefonoOficina}`,
      `Celular: ${detailedQuoteForm.celular}`,
      `Correo empresarial: ${detailedQuoteForm.correoEmpresarial}`,
      `Nombre de la empresa: ${detailedQuoteForm.nombreEmpresa}`,
      `Origen: ${detailedQuoteForm.origen}`,
      `Destino: ${detailedQuoteForm.destino}`,
      `Material a cargar: ${detailedQuoteForm.material}`,
      `Peso y dimensiones / pallets: ${detailedQuoteForm.detalleCarga}`,
      "",
      `Unidad de referencia: ${selectedUnit.name}`,
      `Tipo de carga de referencia: ${cargoType}`,
      `Distancia de referencia: ${distanceKm} km`,
      `Estimado referencial: ${currencyFormatter.format(detailedEstimate)}`,
      `Detalle: tarifa base ${currencyFormatter.format(estimatedTotal)}, peajes ${currencyFormatter.format(tollEstimate)}, maniobras ${currencyFormatter.format(handlingEstimate)}, espera ${currencyFormatter.format(waitingEstimate)}`,
    ].join("\n");

    const mailtoLink = `mailto:ventas1@waytogo.com.mx?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.open(mailtoLink, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-surface border-b border-slate-200/80">
        <div className="mx-auto w-full max-w-[1100px] space-y-4 px-6 py-10 lg:px-10">
          <Link href="/" className="inline-flex text-sm font-semibold text-[var(--navy-900)] transition hover:text-[var(--yellow-400)]">
            ← Volver al inicio
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
            Cotización rápida
          </p>
          <h1 className="text-5xl leading-[0.95] font-bold text-[var(--navy-900)]">
            Estima tu costo por km en menos de 1 minuto.
          </h1>
          <p className="max-w-3xl text-base text-slate-700">
            Selecciona tipo de unidad, tipo de carga y distancia.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-6 py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <label className="text-sm font-semibold text-slate-700">Tipo de carga</label>
              <select
                value={cargoType}
                onChange={(event) => setCargoType(event.target.value)}
                className="mt-2 w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
              >
                {cargoTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700">Unidad</p>
              <div className="grid gap-3">
                {units.map((unit) => {
                  const isSelected = unit.id === selectedUnit.id;

                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => setSelectedUnitId(unit.id)}
                      className={`grid w-full items-center gap-3 rounded-sm border p-3 text-left transition sm:grid-cols-[88px_1fr] ${
                        isSelected
                          ? "border-[var(--navy-900)] bg-slate-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="relative mx-auto h-16 w-20 sm:mx-0">
                        <Image
                          src={unit.image}
                          alt={unit.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-bold text-[var(--navy-900)]">{unit.name}</p>
                        <p className="text-sm text-slate-600">{unit.detail}</p>
                        <p className="text-sm font-semibold text-[var(--yellow-400)]">
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="distancia" className="text-sm font-semibold text-slate-700">
                  Distancia (km)
                </label>
                <span className="rounded-full bg-[var(--navy-900)] px-3 py-1 text-sm font-semibold text-white">
                  {distanceKm} km
                </span>
              </div>
              <input
                id="distancia"
                type="range"
                min={50}
                max={2000}
                step={10}
                value={distanceKm}
                onChange={(event) => setDistanceKm(Number(event.target.value))}
                className="w-full accent-[var(--navy-900)]"
              />
              <input
                type="number"
                min={1}
                value={distanceKm}
                onChange={(event) => setDistanceKm(Math.max(1, Number(event.target.value) || 0))}
                className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                placeholder="Distancia en km"
              />
            </div>
          </div>

          <aside className="h-fit space-y-4 rounded-sm border border-[var(--navy-900)]/20 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
              Resumen
            </p>
            <h2 className="text-2xl leading-tight font-bold text-[var(--navy-900)]">
              {selectedUnit.name}
            </h2>
            <p className="text-sm text-slate-700">
              Tipo de carga: <span className="font-semibold">{cargoType}</span>
            </p>
            <p className="text-sm text-slate-700">
              Distancia: <span className="font-semibold">{distanceKm} km</span>
            </p>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm uppercase tracking-wider text-slate-500">Total estimado</p>
              <p className="text-4xl font-bold text-[var(--navy-900)]">
                ${estimatedTotal.toLocaleString("es-MX")} MXN
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Estimado referencial. Puede variar por peajes, maniobras, tiempos de espera, ventana de carga y condiciones de operación.
            </p>
            <a
              href="https://wa.me/+528130876945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--yellow-400)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95"
            >
              Solicitar cotización formal
            </a>
            <button
              type="button"
              onClick={() => setIsDetailedModalOpen(true)}
              className="inline-flex w-full items-center justify-center rounded-sm border border-[var(--navy-900)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:bg-slate-50"
            >
              Ver cotización detallada
            </button>
          </aside>
        </div>
      </section>

      {isDetailedModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(11,31,59,0.72)] px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detalle-cotizacion-title"
          onClick={() => setIsDetailedModalOpen(false)}
        >
          <div
            className="relative mt-4 w-full max-w-5xl overflow-hidden rounded-sm bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--yellow-400)]">
                    Cotización formal
                  </p>
                  <h2 id="detalle-cotizacion-title" className="mt-2 text-3xl font-bold text-[var(--navy-900)]">
                    Formulario detallado para enviar por correo
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-600">
                    Completa los campos y envía la solicitud al correo operativo con toda la información necesaria para cotizar de forma precisa.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDetailedModalOpen(false)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-[var(--navy-900)]"
                  aria-label="Cerrar modal"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <form onSubmit={handleDetailedQuoteSubmit} className="grid gap-6 px-6 py-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Nombre</span>
                    <input
                      value={detailedQuoteForm.nombre}
                      onChange={(event) => updateDetailedQuoteField("nombre", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Escribe tu nombre"
                      required
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Apellido</span>
                    <input
                      value={detailedQuoteForm.apellido}
                      onChange={(event) => updateDetailedQuoteField("apellido", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Escribe tu apellido"
                      required
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Número de teléfono</span>
                    <input
                      value={detailedQuoteForm.telefonoOficina}
                      onChange={(event) => updateDetailedQuoteField("telefonoOficina", event.target.value)}
                      type="tel"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Teléfono de oficina (Extensión)"
                      required
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Número de celular</span>
                    <input
                      value={detailedQuoteForm.celular}
                      onChange={(event) => updateDetailedQuoteField("celular", event.target.value)}
                      type="tel"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Teléfono celular"
                      required
                    />
                  </label>
                  <label className="space-y-1 md:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">Correo empresarial</span>
                    <p className="text-xs text-slate-500">No gmail, outlook, hotmail, yahoo, etc.</p>
                    <input
                      value={detailedQuoteForm.correoEmpresarial}
                      onChange={(event) => updateDetailedQuoteField("correoEmpresarial", event.target.value)}
                      type="email"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Escriba su correo"
                      required
                    />
                  </label>
                  <label className="space-y-1 md:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">Nombre de la empresa</span>
                    <input
                      value={detailedQuoteForm.nombreEmpresa}
                      onChange={(event) => updateDetailedQuoteField("nombreEmpresa", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Escribe el nombre de empresa"
                      required
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Dirección exacta de origen</span>
                    <p className="text-xs text-slate-500">Agregar información completa</p>
                    <input
                      value={detailedQuoteForm.origen}
                      onChange={(event) => updateDetailedQuoteField("origen", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Estado, ciudad, calle, número y Código Postal."
                      required
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-sm font-semibold text-slate-800">Dirección exacta de destino</span>
                    <p className="text-xs text-slate-500">Estado, ciudad, calle, número y Código Postal.</p>
                    <input
                      value={detailedQuoteForm.destino}
                      onChange={(event) => updateDetailedQuoteField("destino", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Especifique destino"
                      required
                    />
                  </label>
                  <label className="space-y-1 md:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">Material a cargar</span>
                    <input
                      value={detailedQuoteForm.material}
                      onChange={(event) => updateDetailedQuoteField("material", event.target.value)}
                      type="text"
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="Ejemplo: Piezas Automotrices"
                      required
                    />
                  </label>
                  <label className="space-y-1 md:col-span-2">
                    <span className="text-sm font-semibold text-slate-800">Especifica peso y dimensiones de carga y pallets</span>
                    <textarea
                      value={detailedQuoteForm.detalleCarga}
                      onChange={(event) => updateDetailedQuoteField("detalleCarga", event.target.value)}
                      rows={4}
                      className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                      placeholder="14 Pallets Estándar, 9 ton, Pallet 1.10 x 2.00 x 1.20"
                      required
                    />
                  </label>
                </div>

                <div className="rounded-sm border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p className="font-semibold text-[var(--navy-900)]">Referencia de la cotización rápida</p>
                  <p className="mt-2">Unidad: {selectedUnit.name}</p>
                  <p>Tipo de carga: {cargoType}</p>
                  <p>Distancia: {distanceKm} km</p>
                  <p>Total referencial: {currencyFormatter.format(detailedEstimate)}</p>
                </div>
              </div>

              <aside className="space-y-4 rounded-sm border border-[var(--navy-900)]/15 bg-[rgba(11,31,59,0.03)] p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                  Resumen operativo
                </p>
                <div className="space-y-2 rounded-sm border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  <p><span className="font-semibold text-[var(--navy-900)]">Unidad:</span> {selectedUnit.name}</p>
                  <p><span className="font-semibold text-[var(--navy-900)]">Carga:</span> {cargoType}</p>
                  <p><span className="font-semibold text-[var(--navy-900)]">Ruta:</span> {distanceKm} km</p>
                  <p><span className="font-semibold text-[var(--navy-900)]">Referencia:</span> {currencyFormatter.format(detailedEstimate)}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Al enviar esta solicitud, el equipo operativo recibirá el detalle completo para validar capacidad, tiempos y condiciones antes de emitir la cotización formal.
                </p>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--yellow-400)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95"
                >
                  Enviar cotización al correo
                </button>
                <button
                  type="button"
                  onClick={() => setIsDetailedModalOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-sm border border-slate-300 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-50"
                >
                  Cancelar
                </button>
              </aside>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
