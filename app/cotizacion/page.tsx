"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type UnitOption = {
  id: string;
  name: string;
  ratePerKm: number;
  image: string;
  detail: string;
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

  const selectedUnit = useMemo(
    () => units.find((unit) => unit.id === selectedUnitId) ?? units[0],
    [selectedUnitId],
  );

  const estimatedTotal = selectedUnit.ratePerKm * distanceKm;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-surface border-b border-slate-200/80">
        <div className="mx-auto w-full max-w-[1100px] space-y-4 px-6 py-10 lg:px-10">
          <a href="/" className="inline-flex text-sm font-semibold text-[var(--navy-900)] transition hover:text-[var(--yellow-400)]">
            ← Volver al inicio
          </a>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
            Cotización rápida
          </p>
          <h1 className="text-5xl leading-[0.95] font-bold text-[var(--navy-900)]">
            Estima tu costo por km en menos de 1 minuto.
          </h1>
          <p className="max-w-3xl text-base text-slate-700">
            Selecciona tipo de unidad, tipo de carga y distancia. El total se calcula con una tarifa base por kilómetro para darte un estimado inicial.
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
                          Tarifa base: ${unit.ratePerKm} MXN/km
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
            <p className="text-sm text-slate-700">
              Tarifa: <span className="font-semibold">${selectedUnit.ratePerKm} MXN/km</span>
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
              href="https://wa.me/+5281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--yellow-400)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95"
            >
              Solicitar cotización formal
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
