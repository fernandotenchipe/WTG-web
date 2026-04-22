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
      title: "Seguridad en ruta",
      detail:
        "Monitoreo satelital, geopercas de desvio, boton de alerta y protocolo de reaccion para eventos en carretera.",
    },
    {
      title: "Protocolos y cumplimiento",
      detail:
        "Check list pre-viaje, bitacora electronica, control de horas de servicio y validacion documental por embarque.",
    },
    {
      title: "KPIs de desempeno",
      detail:
        "98.2% de entregas a tiempo, 0.7% de incidencias por viaje y tiempo promedio de ciclo por corredor controlado semanalmente.",
    },
    {
      title: "Procesos internos auditables",
      detail:
        "Programa interno de capacitacion de operador, inspecciones de unidad y evaluacion mensual de cumplimiento en patio y ruta.",
    },
  ];

  const fleetUnits = [
    {
      type: "Tractocamion + caja seca 53 ft",
      capacity: "Hasta 26 toneladas utiles",
      use: "Carga seca de consumo, autopartes e industria",
      detail: "Operacion FTL nacional con control de cita, evidencia POD y seguimiento en tiempo real.",
    },
    {
      type: "Tractocamion refrigerado 53 ft",
      capacity: "22 a 24 toneladas con rango de -20 C a +8 C",
      use: "Alimentos, farmaceutica y producto sensible",
      detail: "Registro de temperatura por tramo, control de sellos y protocolo de cadena de frio.",
    },
    {
      type: "Portacontenedor 20/40 ft",
      capacity: "Contenedor completo de importacion y exportacion",
      use: "Movimiento puerto-patio-planta y cruce internacional",
      detail: "Coordinacion con terminal, ventana de retiro y devolucion con control de demoras.",
    },
    {
      type: "Unidad habilitada HAZMAT",
      capacity: "Segun clase de material y hoja de seguridad",
      use: "Quimicos regulados y carga peligrosa",
      detail: "Senalizacion, equipo de contencion y operador con entrenamiento especifico para mercancia peligrosa.",
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
                WTG | Way To Go
              </p>
              <p className="text-xs text-slate-600">Transporte terrestre de carga</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 md:flex">
            <a href="#inicio" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Nosotros
            </a>
            <a href="#servicios" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Servicios
            </a>
            <a href="#portafolio" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Portafolio
            </a>
            <a href="#blog" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Blog
            </a>
            <a href="#contacto" className="text-sm font-semibold text-slate-700 transition hover:text-[var(--navy-900)]">
              Contacto
            </a>
          </nav>
          <a
            href="#cotizacion"
            className={`rounded-sm bg-[var(--yellow-400)] font-semibold text-[var(--navy-900)] transition-all duration-500 hover:brightness-95 ${
              isTop ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm"
            }`}
          >
            Solicitar propuesta
          </a>
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
                WTG opera transporte de carga por carretera con flota propia, centro de control 24/7 y coordinacion puntual entre embarcador, patio y operador.
              </p>
              <p className="max-w-xl text-base text-slate-600">
                Planeamos cada viaje por corredor, ventana de carga y tipo de unidad para asegurar salida en tiempo, transito estable y entrega documentada en destino.
              </p>
              <a
                href="#cotizacion"
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

        <section id="nosotros" className="mx-auto w-full max-w-[1440px] space-y-8 px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Nosotros
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Empresa operativa enfocada en cumplimiento de ruta.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4 text-slate-700">
              <p>
                WTG inicio operaciones hace mas de dos decadas atendiendo rutas industriales de carga seca en el corredor centro-norte. Desde entonces ampliamos cobertura a operaciones dedicadas, cruces fronterizos y servicios especiales bajo control operativo continuo.
              </p>
              <p>
                Nuestro crecimiento no se baso en volumen comercial, sino en disciplina de ejecucion: puntualidad de salida, permanencia controlada en andenes, seguridad en ruta y comunicacion clara con cada cliente durante todo el viaje.
              </p>
              <p>
                Hoy operamos con procesos estandarizados para industria, alimentos, contenedores y materiales regulados, manteniendo trazabilidad documental y desempeno medible por corredor.
              </p>
            </div>
            <div className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--navy-900)]">Valores operativos</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>
                  <span className="font-semibold text-[var(--navy-900)]">Seguridad:</span> prevencion en ruta, control de fatiga y protocolos de reaccion.
                </li>
                <li>
                  <span className="font-semibold text-[var(--navy-900)]">Cumplimiento:</span> ejecucion conforme a ventana, cita y requerimientos del cliente.
                </li>
                <li>
                  <span className="font-semibold text-[var(--navy-900)]">Puntualidad:</span> medicion semanal de salida, transito y entrega por embarque.
                </li>
              </ul>
              <h4 className="mt-6 text-lg font-bold text-[var(--navy-900)]">Cobertura</h4>
              <p className="mt-2 text-slate-700">
                Operacion nacional con corredores industriales en Bajio, Norte, Occidente y Centro, ademas de esquema cross-border por Laredo, El Paso y Otay.
              </p>
            </div>
          </div>
        </section>

        <section className="section-navy">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] lg:px-10 lg:py-20">
            <div className="space-y-5 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Forma de operacion
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold sm:text-5xl">
                Planeacion de rutas, ventanas de carga y control operativo por turno.
              </h2>
              <p className="text-base leading-relaxed text-slate-200">
                Nuestro centro de control integra despacho, seguimiento satelital, permanencia en andenes y coordinacion con patios para reducir tiempos muertos y mantener continuidad.
              </p>
              <p className="text-base leading-relaxed text-slate-200">
                Operamos ventanas de carga y descarga con secuencia de embarque, asignacion de tractor y relevo por tramo para sostener puntualidad en rutas de alta demanda.
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>Planeacion diaria por corredor, distancia, restriccion y tipo de carga.</li>
                <li>Programacion por cita en origen y destino con control de tolerancias.</li>
                <li>Monitoreo de viaje en tiempo real con alertas por desvio o demora.</li>
                <li>Cierre de servicio con evidencia POD y retroalimentacion operativa.</li>
              </ul>
              <a
                href="#cotizacion"
                className="inline-flex items-center rounded-sm border border-[var(--yellow-400)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--yellow-400)] transition hover:bg-[var(--yellow-400)] hover:text-[var(--navy-900)]"
              >
                Solicitar cotizacion de ruta
              </a>
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

        <section id="servicios" className="mx-auto w-full max-w-[1440px] space-y-10 px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Servicios
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Transporte de carga para cadenas de suministro exigentes.
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
                <span className="font-semibold text-[var(--navy-900)]">Que incluye:</span> servicio FTL y LTL, recoleccion en planta, entrega con cita, seguimiento satelital y evidencia POD.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Como opera:</span> planeacion por corredor, asignacion de unidad y operador, control de tiempos en anden y coordinacion documental para cruces fronterizos.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Casos de uso:</span> industria automotriz, manufactura, bienes de consumo y reposicion de centros de distribucion.
              </p>
            </div>
          </article>

          <article className="grid gap-8 rounded-sm border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="order-2 space-y-3 md:order-1">
              <h3 className="text-3xl font-bold text-[var(--navy-900)]">
                Refrigerado y HAZMAT
              </h3>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Que incluye:</span> unidades refrigeradas con bitacora termica y unidades habilitadas para materiales peligrosos con equipo de seguridad.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Como opera:</span> parametrizacion de temperatura por viaje, inspeccion previa, checklist de seguridad y trazabilidad documental durante todo el trayecto.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Casos de uso:</span> alimentos perecederos, farmaceutica, quimicos regulados y suministro de planta continua.
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

          <article className="rounded-sm border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-3xl font-bold text-[var(--navy-900)]">Movimiento de contenedores</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Que incluye:</span> retiro y devolucion de contenedores 20/40 ft, transfer a patio y entrega en planta.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Como opera:</span> coordinacion con terminal, control de tiempo libre y programacion por ventana de descarga.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold text-[var(--navy-900)]">Casos de uso:</span> importacion de insumos, exportacion de producto terminado y abastecimiento industrial.
              </p>
            </div>
          </article>
        </section>

        <section id="flota" className="section-navy">
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
                  <p className="text-slate-100">
                    Unidad correcta, capacidad adecuada y procedimiento operativo definido para cada viaje.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {fleetUnits.map((unit) => (
                <article key={unit.type} className="rounded-sm border border-white/15 bg-white/5 p-5 text-slate-100">
                  <h3 className="text-2xl font-bold text-white">{unit.type}</h3>
                  <p className="mt-2 text-sm text-slate-200">
                    <span className="font-semibold text-white">Capacidad:</span> {unit.capacity}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    <span className="font-semibold text-white">Uso:</span> {unit.use}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    <span className="font-semibold text-white">Detalle operativo:</span> {unit.detail}
                  </p>
                </article>
              ))}
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
              Zonas de operacion activas en corredores industriales Bajio-Norte, Occidente-Centro y rutas de exportacion hacia frontera norte.
            </p>
            <p className="text-slate-700">
              Integramos patios de resguardo, centros operativos y nodos de transferencia para disponibilidad de equipo en origen, transito y destino.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>
                <span className="font-semibold text-[var(--navy-900)]">Rutas industriales:</span> automotriz, alimentos, consumo y manufactura pesada.
              </li>
              <li>
                <span className="font-semibold text-[var(--navy-900)]">Cruces fronterizos:</span> Laredo, El Paso y Otay con control documental previo.
              </li>
              <li>
                <span className="font-semibold text-[var(--navy-900)]">Patios:</span> pre-carga, consolidacion y relevo de operador por ventana operativa.
              </li>
            </ul>
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
            <div className="mt-8 grid gap-5 md:grid-cols-2">
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

        <section id="portafolio" className="mx-auto w-full max-w-[1440px] space-y-8 px-6 py-16 scroll-mt-24 lg:px-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
              Portafolio operativo
            </p>
            <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
              Casos reales de ejecucion en ruta.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--navy-900)]">Abasto industrial Bajio</h3>
              <p className="mt-2 text-slate-700">
                Programa diario de caja seca con 42 viajes semanales, entrega en cita y 99% de cumplimiento de ventana.
              </p>
            </article>
            <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--navy-900)]">Cadena de frio alimentaria</h3>
              <p className="mt-2 text-slate-700">
                Red refrigerada para centro-occidente con control de temperatura y trazabilidad por lote en entrega.
              </p>
            </article>
            <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--navy-900)]">Cross-border manufactura</h3>
              <p className="mt-2 text-slate-700">
                Cruces por Laredo con prevalidacion documental, transferencia en patio y continuidad de entrega en planta destino.
              </p>
            </article>
          </div>
        </section>

        <section id="blog" className="section-surface border-y border-slate-200 scroll-mt-24">
          <div className="mx-auto w-full max-w-[1440px] space-y-8 px-6 py-16 lg:px-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
                Blog tecnico
              </p>
              <h2 className="text-4xl leading-[0.95] font-bold text-[var(--navy-900)] sm:text-5xl">
                Practicas de transporte para operaciones de carga.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--navy-900)]">Ventanas de carga sin demoras</h3>
                <p className="mt-2 text-slate-700">
                  Como reducir tiempos en anden con secuencia de embarque, preregistro y confirmacion de cita.
                </p>
              </article>
              <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--navy-900)]">Control de temperatura en ruta</h3>
                <p className="mt-2 text-slate-700">
                  Puntos criticos para cadena de frio y acciones correctivas durante viajes refrigerados.
                </p>
              </article>
              <article className="rounded-sm border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--navy-900)]">Buenas practicas HAZMAT</h3>
                <p className="mt-2 text-slate-700">
                  Recomendaciones de documentacion, senalizacion y atencion a contingencias para carga peligrosa.
                </p>
              </article>
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
            <figure className="relative overflow-hidden rounded-sm border border-slate-200 md:col-span-3">
              <Image
                src="/images/horizontal-5.jpeg"
                alt="Convoy de carga en corredor nacional"
                fill
                className="object-cover object-center"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[rgba(11,31,59,0.72)] px-4 py-2 text-sm text-slate-100">
                Salida de convoy en corredor nacional con control de horario y seguimiento de viaje.
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-sm border border-slate-200 md:row-span-2">
              <Image
                src="/images/vertical-3.jpeg"
                alt="Maniobra de carga en zona de andenes"
                fill
                className="object-cover object-center"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-[rgba(11,31,59,0.72)] px-4 py-2 text-sm text-slate-100">
                Maniobra de carga en anden con inspeccion de unidad y liberacion documental.
              </figcaption>
            </figure>
            <article className="rounded-sm border border-dashed border-slate-300 bg-slate-50 p-6 md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--navy-800)]">
                Capacidad instalada
              </p>
              <p className="mt-2 text-slate-700">
                Flota, operadores, patios y control operativo conectados para sostener continuidad de suministro en operaciones criticas.
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="section-navy scroll-mt-24">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-20">
            <div className="space-y-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--yellow-400)]">
                Contacto
              </p>
              <h2 className="max-w-2xl text-4xl leading-[0.95] font-bold sm:text-5xl">
                Coordinemos su proxima operacion de transporte.
              </h2>
              <p className="max-w-xl text-slate-200">
                Comparta origen, destino y tipo de carga. El equipo operativo respondera con capacidad disponible, tiempos de transito y esquema de servicio.
              </p>
              <div className="space-y-3 rounded-sm border border-white/20 bg-white/5 p-5 text-slate-100">
                <p>
                  <span className="font-semibold text-white">Telefono:</span> +52 (81) 0000 0000
                </p>
                <p>
                  <span className="font-semibold text-white">Correo:</span> operaciones@wtgfreight.com
                </p>
                <p>
                  <span className="font-semibold text-white">Ubicacion:</span> Monterrey, Nuevo Leon, Mexico
                </p>
                <p>
                  <span className="font-semibold text-white">Horarios:</span> Lunes a Viernes 08:00 a 19:00 | Monitoreo 24/7 en ruta
                </p>
              </div>
            </div>

            <div id="cotizacion" className="rounded-sm border border-white/20 bg-white p-6 shadow-lg md:p-8">
              <h3 className="text-3xl font-bold text-[var(--navy-900)]">Formulario de cotizacion</h3>
              <p className="mt-2 text-slate-600">
                Complete los datos y un coordinador de trafico le contactara.
              </p>
              <form className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-semibold text-slate-700">Nombre</span>
                  <input
                    type="text"
                    name="nombre"
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Nombre completo"
                  />
                </label>
                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-semibold text-slate-700">Empresa</span>
                  <input
                    type="text"
                    name="empresa"
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Nombre de la empresa"
                  />
                </label>
                <label className="space-y-1 md:col-span-2">
                  <span className="text-sm font-semibold text-slate-700">Tipo de carga</span>
                  <input
                    type="text"
                    name="tipoCarga"
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Ejemplo: carga seca, refrigerado, contenedor, HAZMAT"
                  />
                </label>
                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-semibold text-slate-700">Origen</span>
                  <input
                    type="text"
                    name="origen"
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Ciudad o planta de carga"
                  />
                </label>
                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-semibold text-slate-700">Destino</span>
                  <input
                    type="text"
                    name="destino"
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Ciudad o centro de descarga"
                  />
                </label>
                <label className="space-y-1 md:col-span-2">
                  <span className="text-sm font-semibold text-slate-700">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={4}
                    className="w-full rounded-sm border border-slate-300 px-3 py-2 text-slate-800 outline-none transition focus:border-[var(--navy-800)]"
                    placeholder="Comparta frecuencia, volumen, requisitos de cita o comentarios adicionales"
                  />
                </label>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex rounded-sm bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--navy-800)]"
                  >
                    Enviar solicitud
                  </button>
                </div>
              </form>
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
