"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const metrics = [
    { value: "185+", label: "Unidades en flota activa" },
    { value: "22", label: "Anos de experiencia operativa" },
    { value: "48", label: "Estados con cobertura semanal" },
    { value: "310", label: "Operadores certificados" },
  ];

  const trustPoints = [
    {
      title: "Seguridad operacional",
      detail:
        "Protocolos de manejo defensivo, monitoreo en ruta y control estricto de horas de servicio.",
    },
    {
      title: "Certificaciones y cumplimiento",
      detail:
        "Cumplimiento para carga general, refrigerada y materiales peligrosos bajo normativa vigente.",
    },
    {
      title: "KPIs trazables",
      detail:
        "On-time delivery, tiempos de ciclo, incidencias por embarque y disponibilidad de equipo.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div
          className={`mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            isTop ? "py-5" : "py-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center justify-center rounded-sm bg-[var(--navy-900)] font-bold text-white transition-all duration-500 ${
                isTop ? "h-11 w-11 text-xl" : "h-10 w-10 text-lg"
              }`}
            >
              WTG
            </span>
            <div>
              <p
                className={`font-semibold tracking-wide transition-all duration-500 ${
                  isTop ? "text-[17px]" : "text-base"
                }`}
              >
                WTG Freight Lines
              </p>
              <p className="text-xs text-slate-600">Transporte terrestre de carga</p>
            </div>
          </div>
          <a
            href="#contacto"
            className={`rounded-sm bg-[var(--yellow-400)] font-semibold text-[var(--navy-900)] transition-all duration-500 hover:brightness-95 ${
              isTop ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm"
            }`}
          >
            Solicitar propuesta
          </a>
        </div>
      </header>

      <main>
        <section className="section-surface">
          <div
            className={`mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 py-16 transition-all duration-500 md:grid-cols-2 lg:px-10 ${
              isTop
                ? "lg:grid-cols-[0.84fr_1.16fr] lg:py-24"
                : "lg:grid-cols-[0.9fr_1.1fr] lg:py-20"
            }`}
          >
            <div className="animate-fade-up space-y-7">
              <p className="inline-flex rounded-sm border border-[var(--yellow-400)]/70 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
                Operacion de carga por carretera
              </p>
              <h1
                className={`leading-[0.95] font-bold text-[var(--navy-900)] transition-all duration-500 ${
                  isTop ? "text-6xl sm:text-7xl" : "text-5xl sm:text-6xl"
                }`}
              >
                Capacidad real en ruta para mover su carga con puntualidad.
              </h1>
              <p
                className={`max-w-xl text-slate-700 transition-all duration-500 ${
                  isTop ? "text-xl" : "text-lg"
                }`}
              >
                Flota propia, control operativo 24/7, cumplimiento normativo y trazabilidad desde la salida hasta la entrega final.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)]"
              >
                Solicitar propuesta
              </a>
            </div>
            <div
              className={`animate-reveal-right delay-100 relative w-full overflow-hidden rounded-sm border border-slate-200 bg-slate-200 shadow-xl transition-all duration-500 ${
                isTop
                  ? "aspect-[4/3] sm:aspect-[16/10] lg:-mr-8 lg:aspect-[16/9]"
                  : "aspect-[4/3] sm:aspect-[16/10] lg:-mr-4 lg:aspect-[16/10]"
              }`}
            >
              <Image
                src="/images/horizontal-1.jpeg"
                alt="Tracto camiones en autopista durante operacion de carga"
                fill
                className={`object-cover transition-all duration-700 ${
                  isTop ? "object-[center_56%] lg:scale-[1.02]" : "object-center"
                }`}
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-6 py-14 lg:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((item) => (
              <article
                key={item.label}
                className="animate-fade-up rounded-sm border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-4xl font-bold text-[var(--navy-900)]">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-navy">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] lg:px-10 lg:py-20">
            <div className="space-y-5 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Operaciones y control
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold sm:text-5xl">
                Coordinamos rutas, ventanas de carga y recursos criticos por corredor.
              </h2>
              <p className="text-base leading-relaxed text-slate-200">
                Nuestro centro de control operativo integra despacho, seguimiento satelital, control de permanencia en andenes y coordinacion con patios para minimizar tiempos muertos.
              </p>
              <p className="text-base leading-relaxed text-slate-200">
                Administramos ventanas de carga y descarga con secuencias de embarque, asignacion de tractores y planeacion de relevo para sostener continuidad en ruta.
              </p>
            </div>
            <div className="relative min-h-[480px] overflow-hidden rounded-sm border border-white/15 lg:min-h-[560px]">
              <Image
                src="/images/vertical-1.jpeg"
                alt="Operacion en patio logistico con personal de despacho"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 lg:px-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Servicios
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Soluciones de transporte para operaciones de alto volumen.
            </h2>
          </div>

          <article className="grid gap-8 rounded-sm border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="relative min-h-[320px] overflow-hidden rounded-sm lg:min-h-[380px]">
              <Image
                src="/images/horizontal-2.jpeg"
                alt="Trucks de carga en plataforma durante consolidacion"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-[var(--navy-900)]">
                Transporte nacional y cross-border
              </h3>
              <p className="text-slate-700">
                Cobertura nacional en esquemas FTL y LTL, mas cruces fronterizos con documentacion, inspeccion y coordinacion aduanal para mantener continuidad operativa.
              </p>
              <p className="text-slate-700">
                Movimientos de contenedores en rutas de puerto, transferencias a patio y entregas programadas con control de cita en terminal.
              </p>
            </div>
          </article>

          <article className="grid gap-8 rounded-sm border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="order-2 space-y-3 md:order-1">
              <h3 className="text-3xl font-bold text-[var(--navy-900)]">
                Refrigerado y materiales peligrosos
              </h3>
              <p className="text-slate-700">
                Equipos refrigerados con control de temperatura para alimentos, farmaceutica y productos sensibles, con registro de cadena de frio en cada tramo.
              </p>
              <p className="text-slate-700">
                Operacion HAZMAT con unidades habilitadas, senalizacion, hojas de seguridad y operadores con entrenamiento especifico para carga peligrosa.
              </p>
            </div>
            <div className="relative order-1 min-h-[320px] overflow-hidden rounded-sm md:order-2 lg:min-h-[380px]">
              <Image
                src="/images/horizontal-3.jpeg"
                alt="Unidad refrigerada y cisterna en plataforma de salida"
                fill
                className="object-cover object-center"
              />
            </div>
          </article>
        </section>

        <section className="section-navy">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="relative overflow-hidden rounded-sm border border-white/15">
              <div className="relative min-h-[420px] lg:min-h-[520px]">
                <Image
                  src="/images/horizontal-4.jpeg"
                  alt="Flota de tractocamiones alineada en base operativa"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,31,59,0.86)] via-[rgba(11,31,59,0.58)] to-transparent" />
              <div className="absolute inset-0 flex items-center px-6 py-8 lg:px-12">
                <div className="max-w-xl space-y-4 text-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                    Flota
                  </p>
                  <h2 className="text-4xl leading-[0.95] font-bold sm:text-5xl">
                    Capacidad de equipo para distintos perfiles de carga.
                  </h2>
                  <ul className="space-y-2 text-slate-100">
                    <li>Dry van para carga seca y distribucion nacional.</li>
                    <li>Refrigerado para productos perecederos y sensibles.</li>
                    <li>Portacontenedor para importacion y exportacion.</li>
                    <li>Unidades certificadas para mercancias peligrosas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Infraestructura y cobertura
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Red operativa para sostener rutas de alta exigencia.
            </h2>
            <p className="text-slate-700">
              Operamos corredores troncales, patios de resguardo y nodos de transferencia para asegurar disponibilidad de equipo en origen, transito y destino.
            </p>
            <p className="text-slate-700">
              Coordinamos cruces fronterizos, maniobras en patio y entregas en centros de distribucion con protocolos de acceso y control de ventana.
            </p>
          </div>
          <div className="relative min-h-[470px] overflow-hidden rounded-sm border border-slate-200 lg:min-h-[560px]">
            <Image
              src="/images/vertical-2.jpeg"
              alt="Patio logistico con andenes y unidades de carga"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="section-surface border-y border-slate-200">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
                Confianza
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
                Seguridad, cumplimiento y desempeno medible.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {trustPoints.map((item) => (
                <article
                  key={item.title}
                  className="animate-fade-up rounded-sm bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-2xl font-bold text-[var(--navy-900)]">{item.title}</h3>
                  <p className="mt-2 text-slate-700">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Galeria operativa
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Evidencia visual de operacion en ruta y patio.
            </h2>
          </div>
          <div className="mt-8 grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4 lg:auto-rows-[280px]">
            <article className="relative overflow-hidden rounded-sm border border-slate-200 md:col-span-3">
              <Image
                src="/images/horizontal-5.jpeg"
                alt="Convoy de carga en corredor nacional"
                fill
                className="object-cover object-center"
              />
            </article>
            <article className="relative overflow-hidden rounded-sm border border-slate-200 md:row-span-2">
              <Image
                src="/images/vertical-3.jpeg"
                alt="Maniobra de carga en zona de andenes"
                fill
                className="object-cover object-center"
              />
            </article>
            <article className="rounded-sm border border-dashed border-slate-300 bg-slate-50 p-6 md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
                Capacidad instalada
              </p>
              <p className="mt-2 text-slate-700">
                Flota, operadores, patios y control operativo conectados para mantener continuidad de suministro en operaciones criticas.
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="section-navy">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 py-16 lg:px-10 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
              Inicio de operacion
            </p>
            <h2 className="max-w-3xl text-4xl leading-[0.95] font-bold text-white sm:text-5xl">
              Hablemos de su proxima operacion.
            </h2>
            <p className="max-w-3xl text-slate-200">
              Compartan origen, destino, tipo de carga y frecuencia. Nuestro equipo operativo preparara una propuesta con capacidad, tiempos de transito y esquema de servicio.
            </p>
            <div>
              <a
                href="mailto:operaciones@wtgfreight.com"
                className="inline-flex rounded-sm bg-[var(--yellow-400)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95"
              >
                Solicitar propuesta
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>WTG Way To Go | Transporte de carga por carretera</p>
          <p>Centro de control operativo 24/7 | Cobertura nacional y cross-border</p>
        </div>
      </footer>
    </div>
  );
}
