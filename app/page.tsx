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

  const solutions = [
    {
      id: "general",
      name: "General",
      description: "Transporte para mercancía seca, industrial, comercial o palletizada.",
    },
    {
      id: "thermo",
      name: "Thermo",
      description: "Unidades para carga sensible a temperatura, sujeto a requerimiento operativo.",
    },
    {
      id: "hazmat",
      name: "Hazmat",
      description: "Transporte de materiales peligrosos bajo revisión documental, permisos y condiciones de seguridad.",
    },
    {
      id: "impoexpo",
      name: "Impo / Expo",
      description: "Gestión logística de carga para importación y exportación, coordinando el cruce fronterizo por las aduanas de Eagle Pass, Pharr, Laredo y Colombia.",
    },
    {
      id: "aeropuertos",
      name: "Carga aérea / Aeropuertos",
      description: "Recolección y entrega de carga en aeropuertos, coordinación de última milla aérea y conexión con operaciones urgentes o de comercio exterior.",
    },
    {
      id: "dedicado",
      name: "Servicio Dedicado",
      description: "Unidades asignadas para operaciones recurrentes, entregas críticas o movimientos que requieren mayor control y seguimiento.",
    },
  ];

  const fleetUnits = [
    {
      type: "Nissan / Unidad ligera",
      capacity: "Capacidad: 3,000 lb",
      image: "/images/nissan.png",
      alt: "Nissan de carga ligera para operación urbana y local",
      description:
        "Unidad de menor capacidad para operaciones que requieren agilidad, accesos reducidos o menor volumen de carga.",
    },
    {
      type: "3.5 toneladas",
      capacity: "Capacidad: 2.8 tons",
      image: "/images/3.5.png",
      alt: "Unidad de 3.5 toneladas para carga ligera y media",
      description:
        "Unidad versátil para operaciones de carga ligera o media, según volumen, peso y requerimiento del cliente.",
    },
    {
      type: "Rabón",
      capacity: "Capacidad: 8 tons",
      image: "/images/rabon.png",
      alt: "Unidad Rabón para operaciones de capacidad intermedia",
      description:
        "Unidad de capacidad intermedia para operaciones que requieren mayor espacio sin utilizar una unidad completa de mayor dimensión.",
    },
    {
      type: "Tortón",
      capacity: "Capacidad: 14 tons",
      image: "/images/torton.png",
      alt: "Unidad Torton para operaciones de mayor volumen y peso",
      description:
        "Unidad de mayor capacidad para operaciones que requieren más volumen, peso o espacio operativo.",
    },
    {
      type: "Caja seca 53’",
      capacity: "Capacidad: 42,000 lb",
      image: "/images/53.png",
      alt: "Caja seca de 53 pies para operación de alta capacidad",
      description:
        "Unidad de alta capacidad para operaciones que requieren mayor espacio de carga.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        {/* Top Bar */}
        <div className="border-b border-slate-200/50 bg-slate-50 px-6 py-2.5 text-xs font-semibold text-slate-600 lg:px-10">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-end gap-6">
            <a href="/proveedores" className="transition hover:text-[var(--navy-900)]">Únete al equipo</a>
            <a href="/operadores" className="transition hover:text-[var(--navy-900)]">Operadores</a>
            <a href="https://wa.me/+5281" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--yellow-400)] transition hover:text-[var(--navy-900)]">Urgencias / WhatsApp</a>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            isTop ? "py-5" : "py-4"
          }`}
        >
          <div className="flex min-w-0 items-center">
            <Image
              src="/images/negro%20camiones.png"
              alt="WTG | Way To Go"
              width={520}
              height={160}
              priority
              className={`h-auto w-[220px] object-contain transition-all duration-500 sm:w-[280px] lg:w-[340px] ${
                isTop ? "max-h-14 sm:max-h-16 lg:max-h-20" : "max-h-12 sm:max-h-14 lg:max-h-16"
              }`}
            />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#inicio" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Servicios
            </a>
            <a href="#flota" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Flota
            </a>
            <a href="#cobertura" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Cobertura
            </a>
            <a href="#seguridad" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Seguridad
            </a>
            <a href="#nosotros" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Nosotros
            </a>
            <a href="#contacto" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/+528130876945"
              target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-sm border border-[var(--yellow-400)]/50 px-3 py-2 text-xs font-semibold text-[var(--navy-900)] transition hover:bg-[var(--yellow-400)]/10 md:inline-flex"
            >
              💬 WhatsApp
            </a>
            <a
              href="/cotizacion"
              className={`rounded-sm bg-[var(--yellow-400)] font-semibold text-[var(--navy-900)] transition-all duration-500 hover:brightness-95 ${
                isTop ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm"
              }`}
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="section-surface scroll-mt-24">
          <div
            className={`mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 py-16 transition-all duration-500 md:grid-cols-2 lg:px-10 ${
              isTop
                ? "lg:grid-cols-[0.84fr_1.16fr] lg:py-24"
                : "lg:grid-cols-[0.9fr_1.1fr] lg:py-20"
            }`}
          >
            <div className="animate-fade-up space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--yellow-400)] mb-3">
                  OPERACIÓN DE CARGA POR CARRETERA
                </p>
                <h1
                  className={`leading-[0.95] font-bold text-[var(--navy-900)] transition-all duration-500 ${
                    isTop ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"
                  }`}
                >
                  Transporte de carga con respuesta rápida, seguimiento 24/7 y cobertura nacional e internacional.
                </h1>
              </div>
              <p
                className={`max-w-xl text-slate-700 transition-all duration-500 ${
                  isTop ? "text-lg" : "text-base"
                }`}
              >
                En WAYTOGO coordinamos transporte terrestre para carga general, refrigerada, Hazmat, ingreso a aeropuertos e importación/exportación, con atención directa desde la cotización hasta la entrega.
              </p>
              <div className="flex gap-3">
                <a
                  href="/cotizacion"
                  className="inline-flex items-center rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)]"
                >
                  Cotizar mi carga
                </a>
                <a
                  href="https://wa.me/+528130876945"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:bg-slate-50"
                >
                  💬 WhatsApp
                </a>
              </div>
              <p className="pt-2 text-sm font-semibold text-slate-600">
                Respuesta ágil, seguimiento operativo y atención directa durante todo el servicio.
              </p>
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
                alt="Camión WAYTOGO en operación de transporte de carga"
                fill
                className={`object-cover transition-all duration-700 ${
                  isTop ? "object-[center_56%] lg:scale-[1.02]" : "object-center"
                }`}
                priority
              />
            </div>
          </div>
        </section>

        <section id="servicios" className="section-navy scroll-mt-24">
          <div className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 lg:px-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Soluciones
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold text-white sm:text-5xl">
                Soluciones listas para su operación.
              </h2>
              <p className="text-lg text-slate-200">
                En WAYTOGO conectamos tu carga con la unidad correcta según ruta, tipo de mercancía y urgencia. Trabajamos servicios de carga general, refrigerada, Hazmat, dedicado e importación/exportación con seguimiento operativo desde la recolección hasta la entrega.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  key={solution.id}
                  className="flex h-full flex-col rounded-sm border border-white/15 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[var(--yellow-400)]/30"
                >
                  <h3 className="text-lg font-bold text-[var(--navy-900)]">{solution.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 flex-grow">{solution.description}</p>
                  {/* <a href="/cotizacion" className="mt-5 inline-flex text-sm font-semibold text-[var(--navy-900)] transition hover:text-[var(--yellow-400)]">Cotizar esta opción →</a> */}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="flota" className="mx-auto w-full px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">Flota</p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">La unidad correcta para cada tipo de carga</h2>
            <p className="text-lg text-slate-700">Validamos ruta, disponibilidad y tipo de unidad para que tu carga viaje con la capacidad adecuada desde la recolección hasta la entrega.</p>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
            {fleetUnits.map((unit) => (
              <div key={unit.type} className="flex flex-col items-center gap-3 bg-white p-4 text-center">
                <div className="w-full max-w-[220px]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={unit.image} alt={unit.alt} fill className="object-contain p-3 mix-blend-multiply" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[var(--navy-900)]">{unit.type}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--yellow-400)]">{unit.capacity}</p>
                <p className="text-sm text-slate-700">{unit.description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[900px] text-center">
            <p className="text-sm font-semibold text-slate-900">Podemos coordinar unidades para carga general,Hazmat, refrigerada, aeropuertos en plataformas, caja seca  y operaciones especiales, según validación operativa.</p>
            <div className="mt-6">
              <a href="/cotizacion" className="inline-flex items-center rounded-sm bg-[var(--yellow-400)] px-6 py-3 text-sm font-semibold text-[var(--navy-900)] transition hover:brightness-95">Cotizar mi carga</a>
            </div>
          </div>
        </section>

        <section id="cobertura" className="section-navy scroll-mt-24">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] lg:px-10 lg:py-20">
            <div className="space-y-5 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Cobertura
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold sm:text-5xl">
                Operación nacional e internacional con atención directa.
              </h2>
              <p className="text-base leading-relaxed text-slate-200">
                WAYTOGO opera rutas estratégicas según origen, destino y tipo de mercancía. Contamos con cobertura nacional consolidada y esquema cross-border por cruces fronterizos principales.
              </p>
              <ul className="space-y-3 text-base text-slate-200">
                <li>
                  <span className="font-semibold text-white">Cobertura nacional:</span> Operación diaria en corredores industriales, distribución y abastecimiento nacional.
                </li>
                <li>
                  <span className="font-semibold text-white">Cobertura internacional:</span> Cruces fronterizos coordinados con documentación previa y continuidad de entrega.
                </li>
                <li>
                  <span className="font-semibold text-white">Rutas estratégicas:</span> Corredores con demanda recurrente, operaciones dedicadas y servicios por ventana.
                </li>
                <li>
                  <span className="font-semibold text-white">Atención según operación:</span> Validación de mercancía, tipo de unidad, permisos y requisitos de seguridad.
                </li>
              </ul>
              <a
                href="/cotizacion"
                className="inline-flex items-center rounded-sm border border-[var(--yellow-400)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--yellow-400)] transition hover:bg-[var(--yellow-400)] hover:text-[var(--navy-900)]"
              >
                Consultar tu ruta
              </a>
            </div>
            <div className="relative min-h-[480px] overflow-hidden rounded-sm border border-white/15 lg:min-h-[560px]">
              <Image
                src="/images/vertical-2.jpeg"
                alt="Patio logístico con operaciones de carga y descarga"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section id="seguridad" className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Seguridad y confiabilidad
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
                Seguimiento 24/7 y validación en cada operación.
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Tu carga está monitoreada desde la recolección hasta la entrega con protocolos claros, documentación verificada y comunicación continua.
              </p>
            </div>
            <div className="relative hidden lg:block aspect-[4/3] overflow-hidden rounded-sm border border-slate-200 bg-white">
              <Image
                src="/images/vertical-1.jpeg"
                alt="Centro de control y monitoreo operativo 24/7"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <article className="flex h-full flex-col rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">Seguimiento operativo 24/7</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Monitoreo satelital en tiempo real, geoperímetros de desvío, alertas de evento y comunicación directa con conductor y coordinador de tráfico.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">Validación documental</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Revisión de documentación según tipo de carga, verificación de permisos para Hazmat, mercancía refrigerada o cruces fronterizos, antes de salida.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">Atención operativa</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Centro de control coordinando salida, tránsito y entrega. Respuesta rápida ante imprevistos, cambios de ruta o incidencias en carretera.
              </p>
            </article>
            <article className="flex h-full flex-col rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--navy-900)]">Comunicación durante servicio</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Actualizaciones periódicas de estado, aviso de llegada a destino, evidencia POD y cierre documentado para cada embarque.
              </p>
            </article>
          </div>
        </section>

        <section id="nosotros" className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Nosotros
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
                Coordinación profesional desde cotización hasta entrega.
              </h2>
            </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200">
                <Image
                  src="/images/vertical-3.jpeg"
                  alt="Equipo operativo y patio de WAYTOGO"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--navy-900)]">Operamos bajo</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>
                    <span className="font-semibold text-[var(--navy-900)]">Seguridad:</span> Monitoreo continuo y prevalidación documental.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--navy-900)]">Puntualidad:</span> Medición en salida, tránsito y entrega.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--navy-900)]">Atención:</span> Contacto directo durante todo el viaje.
                  </li>
                  <li>
                    <span className="font-semibold text-[var(--navy-900)]">Trazabilidad:</span> POD y retroalimentación documentada.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <span className="font-semibold text-[var(--navy-900)]">Quiénes somos:</span> WAYTOGO es una empresa de transporte terrestre con experiencia operativa en rutas nacionales e internacionales. Nos enfocamos en coordinación directa, respuesta rápida y seguimiento operativo desde la cotización hasta la entrega.
              </p>
              <p>
                <span className="font-semibold text-[var(--navy-900)]">Enfoque de servicio:</span> No operamos por volumen comercial, sino por disciplina de ejecución: puntualidad de salida, permanencia controlada en andenes, validación documental y comunicación clara con cada cliente durante todo el viaje.
              </p>
              <p>
                <span className="font-semibold text-[var(--navy-900)]">Coordinación operativa:</span> Conectamos tu carga con la unidad correcta, validando ruta, disponibilidad, tipo de mercancía y requisitos especiales para asegurar continuidad del suministro.
              </p>
              <p>
                <span className="font-semibold text-[var(--navy-900)]">Compromiso:</span> Tiempos de respuesta rápidos, seguimiento ininterrumpido y cierre documentado para cada operación.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="section-navy scroll-mt-24">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-20">
            <div className="space-y-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Contacto y cotización
              </p>
              <h2 className="max-w-2xl text-4xl leading-[0.95] font-bold sm:text-5xl">
                Coordinemos su próxima operación de transporte.
              </h2>
              <p className="max-w-xl text-slate-200">
                Comparta origen, destino y tipo de carga. El equipo operativo responderá con capacidad disponible, tiempos de tránsito y esquema de servicio.
              </p>
              <div className="space-y-3 rounded-sm border border-white/20 bg-white/5 p-5 text-slate-100">
                <p>
                  <span className="font-semibold text-white">Teléfono:</span> +52 (81) 3087 6945
                </p>
                <p>
                  <span className="font-semibold text-white">WhatsApp:</span> +52 (81) 3087 6945
                </p>
                <p>
                  <span className="font-semibold text-white">Correo:</span> operaciones@waytogo.com.mx
                </p>
                <p>
                  <span className="font-semibold text-white">Ubicación:</span> Gral. Escobedo, Nuevo León, México
                </p>
                <p>
                  <span className="font-semibold text-white">Atención:</span> Lunes a Viernes 08:00 a 19:00 | Monitoreo 24/7 en ruta
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-sm border border-white/20 bg-white/10 p-6 shadow-lg md:p-8">
              <h3 className="text-3xl font-bold text-white">Accesos rápidos</h3>
              <p className="text-slate-200">
                Selecciona el flujo que necesitas y te llevamos directo a la pantalla correcta.
              </p>
              <div className="grid gap-3">
                <a href="/cotizacion" className="rounded-sm border border-[var(--yellow-400)] bg-[var(--yellow-400)] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95">
                  Cotización rápida
                </a>
                <a href="/proveedores" className="rounded-sm border border-white/30 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:bg-slate-100">
                  Únete como proveedor
                </a>
                <a href="/operadores" className="rounded-sm border border-white/30 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:bg-slate-100">
                  Registro de operadores
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-10">
          <div className="relative overflow-hidden rounded-sm border border-slate-200 h-[280px] md:h-[380px]">
            <Image
              src="/images/horizontal-5.jpeg"
              alt="Última milla y entrega final de carga"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,31,59,0.8)] via-[rgba(11,31,59,0.5)] to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 py-8 lg:px-12">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-4xl leading-[0.95] font-bold text-white sm:text-5xl">
                  ¿Listo para optimizar tu operación de transporte?
                </h2>
                <p className="text-lg text-slate-100">
                  Contacta con nuestro equipo hoy y descubre cómo WAYTOGO puede mejorar tu continuidad de suministro.
                </p>
                <a
                  href="/cotizacion"
                  className="inline-flex items-center rounded-sm bg-[var(--yellow-400)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--navy-900)] transition hover:brightness-95"
                >
                  Solicitar cotización ahora
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-6 py-8 text-sm text-slate-600 md:grid-cols-3 lg:px-10">
          <div>
            <p className="font-semibold text-[var(--navy-900)]">WTG | Way To Go</p>
            <p className="mt-1">Transporte de carga por carretera nacional y cross-border.</p>
            <p className="mt-1">Monterrey, Nuevo Leon | +52 (81) 0000 0000</p>
            <p className="mt-1">operaciones@wtgfreight.com</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--navy-900)]">Navegacion</p>
            <div className="mt-2 space-y-1">
              <p><a href="#inicio" className="transition hover:text-[var(--navy-900)]">Inicio</a></p>
              <p><a href="#nosotros" className="transition hover:text-[var(--navy-900)]">Nosotros</a></p>
              <p><a href="#servicios" className="transition hover:text-[var(--navy-900)]">Servicios</a></p>
              <p><a href="#contacto" className="transition hover:text-[var(--navy-900)]">Contacto</a></p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[var(--navy-900)]">Aviso legal</p>
            <p className="mt-2">Aviso de privacidad y tratamiento de datos para solicitudes comerciales.</p>
            <a href="#" className="mt-1 inline-flex transition hover:text-[var(--navy-900)]">
              Consultar aviso de privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
