import React, { useState, useRef, useEffect } from "react";

// Definimos los tipos admitidos basados en tu enrutador
interface AboutMeProps {
  activeRole: "fullstack" | "frontend" | "backend";
}

export default function AboutMe({ activeRole }: AboutMeProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Contenido dinámico para la tarjeta "¿Qué construyo?" según el rol
  const getQueConstruyoItems = () => {
    if (activeRole === "backend") {
      return [
        "APIs RESTful seguras y optimizadas",
        "Estructuras y modelado de bases de datos",
        "Sistemas de autenticación (JWT / Sanctum)",
        "Lógica de negocio y procesamiento en servidor",
      ];
    }
    if (activeRole === "fullstack") {
      return [
        "Aplicaciones web de extremo a extremo",
        "Integración nativa Cliente-Servidor",
        "Dashboards con persistencia de datos",
        "Sistemas SaaS y plataformas completas",
      ];
    }
    return [
      "UIs responsivas con React",
      "Design systems escalables",
      "SPAs y dashboards interactivos",
      "Animaciones y micro-interacciones",
    ];
  };

  // Contenido dinámico para la tarjeta "¿Cómo lo hago?" según el rol
  const getComoLoHagoItems = () => {
    if (activeRole === "backend") {
      return [
        "Laravel (PHP) + FastAPI (Python)",
        "Arquitectura limpia y controladores DRY",
        "ORMs (Eloquent / SQLAlchemy) & SQL",
        "Postman, Docker y testing de endpoints",
      ];
    }
    if (activeRole === "fullstack") {
      return [
        "React/Next.js + Laravel/FastAPI",
        "Consumo asíncrono y manejo de estados",
        "Bases de datos Relacionales y NoSQL",
        "Estandarización de código en todo el stack",
      ];
    }
    return [
      "React + TypeScript + Vite",
      "TailwindCSS + Framer Motion",
      "Código limpio y componentes DRY",
      "Performance y accesibilidad primero",
    ];
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-20 overflow-hidden bg-[#020617] px-6 py-28 text-white lg:px-8"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 hidden h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl lg:block"></div>
        <div className="absolute -bottom-20 -left-20 hidden h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl lg:block"></div>
        <div
          className="absolute top-40 -right-20 hidden h-64 w-64 animate-pulse rounded-full bg-teal-500/10 blur-3xl lg:block"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 hidden h-48 w-48 animate-pulse rounded-full bg-violet-500/10 blur-3xl lg:block"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-[minmax(0,auto)_1fr]">
        {/* Avatar con Badges Reactivos */}
        <div className="relative flex justify-center sm:pl-6 md:px-12 lg:justify-start">
          <div className="group relative">
            <img
              src="/images/yo.jpeg"
              alt="Sergio Ortiz Garzon"
              className="h-60 w-60 rounded-full border-4 border-cyan-400/20 object-cover drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400/40"
            />
            <div className="absolute -inset-4 -z-10 animate-pulse rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/30"></div>

            {/* Badge superior dinámico */}
            <div
              className="absolute -top-2 -right-2 animate-bounce rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-bold text-white shadow-lg"
              style={{ animationDuration: "2s" }}
            >
              <i className="fas fa-code mr-1"></i>
              {activeRole === "frontend"
                ? "Frontend"
                : activeRole === "backend"
                  ? "Backend"
                  : "Full Stack"}
            </div>

            {/* Badge inferior dinámico */}
            <div
              className="absolute -bottom-2 -left-2 animate-bounce rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg"
              style={{ animationDelay: "1s", animationDuration: "2s" }}
            >
              {activeRole === "frontend"
                ? "✨ React"
                : activeRole === "backend"
                  ? "⚡ APIs"
                  : "🚀 Next.js & Python"}
            </div>
          </div>
        </div>

        {/* Contenido de Texto Dinámico */}
        <div className="relative space-y-6 pl-0 sm:pl-6 md:px-12 lg:pl-40">
          <div
            className={`space-y-2 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
              <span className="text-sm font-medium text-gray-300">
                Sobre Mí
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl">
              Sobre mí
            </h2>
          </div>

          <div className="space-y-6">
            {activeRole === "frontend" && (
              <>
                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Soy{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-300">
                    Sergio Ortiz
                  </span>
                  , desarrollador frontend con pasión por crear interfaces
                  digitales rápidas, accesibles y visualmente impactantes. Mi
                  enfoque está en el ecosistema de{" "}
                  <span className="rounded bg-blue-400/10 px-2 py-1 font-semibold text-blue-400">
                    React
                  </span>{" "}
                  y{" "}
                  <span className="rounded bg-violet-400/10 px-2 py-1 font-semibold text-violet-400">
                    TypeScript
                  </span>
                  , donde construyo desde componentes reutilizables hasta
                  aplicaciones completas.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Me apasiona{" "}
                  <span className="font-semibold text-green-400">
                    el detalle visual
                  </span>
                  , la arquitectura limpia de componentes y la experiencia de
                  usuario. Diseño pensando en quien usa el producto: interfaces
                  intuitivas, responsivas y con animaciones que aporten valor,
                  no ruido.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Uso{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-400">
                    TailwindCSS
                  </span>{" "}
                  para estilos ágiles y consistentes,{" "}
                  <span className="rounded bg-orange-400/10 px-2 py-1 font-semibold text-orange-400">
                    Vite
                  </span>{" "}
                  para entornos de desarrollo ultrarrápidos y{" "}
                  <span className="rounded bg-pink-400/10 px-2 py-1 font-semibold text-pink-400">
                    Framer Motion
                  </span>{" "}
                  cuando la UI necesita cobrar vida.
                </p>
              </>
            )}

            {activeRole === "backend" && (
              <>
                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Soy{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-300">
                    Sergio Ortiz
                  </span>
                  , desarrollador backend orientado a la creación de soluciones
                  del lado del servidor robustas, eficientes y seguras. Mi
                  enfoque principal está en el desarrollo estructurado con
                  Frameworks como{" "}
                  <span className="rounded bg-blue-400/10 px-2 py-1 font-semibold text-blue-400">
                    Laravel (PHP)
                  </span>{" "}
                  y{" "}
                  <span className="rounded bg-violet-400/10 px-2 py-1 font-semibold text-violet-400">
                    FastAPI (Python)
                  </span>
                  , donde gestiono desde la lógica de negocio compleja hasta la
                  optimización de flujos de datos.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Me apasiona{" "}
                  <span className="font-semibold text-green-400">
                    el diseño de arquitecturas limpias
                  </span>
                  , el modelado de bases de datos relacionales y la creación de
                  endpoints intuitivos para un consumo de datos impecable. Me
                  enfoco en escribir código modular, aplicar patrones de diseño
                  correctos y garantizar la seguridad de la información mediante
                  middleware y enrutamiento protegido.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Uso{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-400">
                    PostgreSQL
                  </span>{" "}
                  y MySQL para el almacenamiento de datos persistentes, sistemas
                  de autenticación basados en tokens de seguridad para proteger
                  las APIs y herramientas como{" "}
                  <span className="rounded bg-orange-400/10 px-2 py-1 font-semibold text-orange-400">
                    Postman
                  </span>{" "}
                  para validar de manera rigurosa el rendimiento de cada
                  petición.
                </p>
              </>
            )}

            {activeRole === "fullstack" && (
              <>
                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Soy{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-300">
                    Sergio Ortiz
                  </span>
                  , desarrollador full stack con la capacidad de liderar y
                  estructurar aplicaciones web completas conectando de forma
                  fluida el mundo del cliente con el del servidor. Mi objetivo
                  es unificar interfaces dinámicas construidas en{" "}
                  <span className="rounded bg-blue-400/10 px-2 py-1 font-semibold text-blue-400">
                    React
                  </span>{" "}
                  con arquitecturas robustas en el backend estructuradas bajo
                  lenguajes como PHP o Python.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Me apasiona{" "}
                  <span className="font-semibold text-green-400">
                    la integración nativa de extremo a extremo
                  </span>
                  . Esto me permite diseñar bases de datos escalables, desplegar
                  APIs REST eficientes y consumirlas en el frontend asegurando
                  un flujo de datos asíncrono óptimo, el manejo correcto de
                  estados globales y una experiencia de usuario fluida y
                  transparente.
                </p>

                <p className="rounded-xl p-4 text-lg leading-relaxed text-gray-300 transition-all duration-300 hover:bg-white/5">
                  Combino el potencial de{" "}
                  <span className="rounded bg-cyan-400/10 px-2 py-1 font-semibold text-cyan-400">
                    Next.js / Vite
                  </span>{" "}
                  para estructurar interfaces interactivas con la robustez
                  lógica de backends modernos, garantizando que el diseño visual
                  impactante coexista con un servidor optimizado, rápido y
                  altamente escalable.
                </p>
              </>
            )}
          </div>

          {/* Tarjetas Interactivas Adaptables */}
          <div
            className={`grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            {/* Tarjeta 1 */}
            <div
              className="group cursor-pointer rounded-xl border border-cyan-400/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/10"
              onMouseEnter={() => setActiveCard("que-hago")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="mb-3 flex items-center gap-2 font-bold text-cyan-400 transition-colors group-hover:text-cyan-300">
                <i className="fas fa-layer-group group-hover:animate-bounce"></i>
                {activeRole === "backend"
                  ? "¿Qué diseño?"
                  : activeRole === "fullstack"
                    ? "¿Qué integro?"
                    : "¿Qué construyo?"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {getQueConstruyoItems().map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <i className="fas fa-check text-xs text-green-400"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta 2 */}
            <div
              className="group cursor-pointer rounded-xl border border-violet-400/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-500/10"
              onMouseEnter={() => setActiveCard("como-hago")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="mb-3 flex items-center gap-2 font-bold text-violet-400 transition-colors group-hover:text-violet-300">
                <i className="fas fa-cogs group-hover:animate-spin"></i>
                ¿Cómo lo hago?
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {getComoLoHagoItems().map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <i className="fas fa-star text-xs text-yellow-400"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center gap-2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-cyan-400"></div>
        </div>
        <span className="text-sm text-gray-400">Skills</span>
      </div>
    </section>
  );
}
