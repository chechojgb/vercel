import  { useState, useEffect, useRef } from "react";

interface TechStackProps {
  activeRole: "fullstack" | "frontend" | "backend";
}

interface Technology {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  category: string;
  roles: ("fullstack" | "frontend" | "backend")[]; // Filtro por rol
}

export default function TechStack({ activeRole }: TechStackProps) {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rotationInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Base de datos de tecnologías con mapeo de roles asignados
  const allTechnologies: Technology[] = [
    {
      name: "React",
      icon: "/images/logos/react.png",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/30",
      description:
        "Librería principal para construir interfaces de usuario interactivas mediante componentes reutilizables y eficientes.",
      category: "Core Frontend",
      roles: ["frontend", "fullstack"],
    },
    {
      name: "TypeScript",
      icon: "/images/logos/typescript.svg",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      description:
        "Tipado estático aplicado sobre JavaScript que optimiza la detección de errores en desarrollo y asegura la consistencia de datos.",
      category: "Lenguajes",
      roles: ["frontend", "fullstack", "backend"],
    },
    {
      name: "TailwindCSS",
      icon: "/images/logos/tailwind.png",
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-400/30",
      description:
        "Framework CSS utility-first que permite un diseño responsivo ágil, estructurado y altamente personalizado sin sobrecargar estilos.",
      category: "Estilos",
      roles: ["frontend", "fullstack"],
    },
    {
      name: "Next.js",
      icon: "/images/logos/nextjs.svg",
      color: "text-white",
      bgColor: "bg-white/5",
      borderColor: "border-white/20",
      description:
        "Framework empresarial de React para renderizado en el servidor (SSR) y generación de sitios estáticos (SSG) maximizando el SEO.",
      category: "Framework FE",
      roles: ["frontend", "fullstack"],
    },
    {
      name: "Laravel",
      icon: "/images/logos/laravel.svg", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description:
        "Framework robusto de PHP bajo patrón MVC orientado a la creación de APIs REST seguras, manejo de ORM (Eloquent) y enrutamiento protegido.",
      category: "Core Backend",
      roles: ["backend", "fullstack"],
    },
    {
      name: "FastAPI",
      icon: "/images/logos/Fastapi.svg", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-400/30",
      description:
        "Framework de alto rendimiento basado en Python para construir APIs asíncronas veloces aprovechando la validación nativa de Pydantic.",
      category: "Core Backend",
      roles: ["backend", "fullstack"],
    },
    {
      name: "Python",
      icon: "/images/logos/python.svg",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      description:
        "Lenguaje versátil e intuitivo utilizado para scripting backend, automatizaciones y manejo estructurado de lógica compleja.",
      category: "Lenguajes",
      roles: ["backend", "fullstack"],
    },
    {
      name: "MySQL",
      icon: "/images/logos/mysql.png", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      description:
        "Sistema de gestión de bases de datos relacionales ampliamente utilizado en la industria, destacado por su velocidad, confiabilidad y óptima integración en entornos de producción.",
      category: "Bases de Datos",
      roles: ["backend", "fullstack"],
    },
    {
      name: "Vite",
      icon: "/images/logos/vite.svg",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-400/30",
      description:
        "Herramienta de empaquetado ultrarrápida impulsada por esbuild que optimiza drásticamente el flujo de desarrollo en el entorno frontend.",
      category: "Herramientas",
      roles: ["frontend"],
    },
    {
      name: "Git",
      icon: "/images/logos/git.svg",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      description:
        "Sistema de control de versiones distribuido fundamental para mantener el historial de cambios y coordinar despliegues limpios.",
      category: "Herramientas",
      roles: ["frontend", "backend", "fullstack"],
    },
    {
      name: "Figma",
      icon: "/images/logos/figma.svg",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-400/30",
      description:
        "Plataforma de diseño colaborativa utilizada para maquetar prototipos de alta fidelidad y definir bases de UI/UX antes de codificar.",
      category: "Diseño",
      roles: ["frontend"],
    },
    {
      name: "JavaScript",
      icon: "/images/logos/javascript.svg",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/30",
      description:
        "Lenguaje base del ecosistema web. Dominio avanzado de asincronía, manipulación avanzada del DOM y eventos.",
      category: "Lenguajes",
      roles: ["frontend"],
    },
  ];

  // Filtramos las tecnologías en tiempo de ejecución según la ruta activa
  const technologies = allTechnologies.filter((tech) =>
    tech.roles.includes(activeRole),
  );

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

  // Controlar que la rotación se ajuste automáticamente si cambia el set de tecnologías filtradas
  useEffect(() => {
    if (
      technologies.length > 0 &&
      (!activeTech || !technologies.some((t) => t.name === activeTech))
    ) {
      setActiveTech(technologies[0].name);
    }
  }, [activeRole, technologies, activeTech]);

  useEffect(() => {
    if (autoRotate && isVisible && technologies.length > 0) {
      rotationInterval.current = setInterval(() => {
        setActiveTech((prev) => {
          const currentIndex = technologies.findIndex((t) => t.name === prev);
          const nextIndex = (currentIndex + 1) % technologies.length;
          return technologies[nextIndex]?.name || technologies[0].name;
        });
      }, 2500);
    }
    return () => {
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [autoRotate, isVisible, technologies]);

  const handleTechHover = (name: string) => {
    setAutoRotate(false);
    setActiveTech(name);
  };

  const handleTechLeave = () => {
    setAutoRotate(true);
  };

  const activeTechData = technologies.find((t) => t.name === activeTech);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative z-20 overflow-hidden bg-[#020617] px-6 py-28 text-white sm:px-8"
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

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — dynamic text */}
          <div
            className={`space-y-8 ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
                <span className="text-sm font-medium text-gray-300">
                  Tech Stack
                </span>
              </div>

              <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl">
                Tecnologías que uso
              </h2>
            </div>

            <div className="space-y-6">
              {activeRole === "frontend" && (
                <>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Cada herramienta de mi stack frontend está seleccionada
                    meticulosamente para construir interfaces de usuario de alta
                    fidelidad que sean{" "}
                    <span className="font-semibold text-emerald-400">
                      óptimas
                    </span>
                    ,{" "}
                    <span className="font-semibold text-amber-400">
                      modulares
                    </span>{" "}
                    y altamente integradas a estándares modernos.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Establezco la combinación de{" "}
                    <span className="font-semibold text-cyan-400">
                      React + TypeScript
                    </span>{" "}
                    como mi pilar de desarrollo, garantizando tipado estricto y
                    el uso avanzado de hooks para el control interactivo del
                    estado en el cliente.
                  </p>
                </>
              )}

              {activeRole === "backend" && (
                <>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Estructuro el entorno de servidor utilizando lenguajes y
                    frameworks preparados para soportar cargas concurrentes de
                    forma{" "}
                    <span className="font-semibold text-emerald-400">
                      eficiente
                    </span>
                    , garantizando que el backend sea{" "}
                    <span className="font-semibold text-amber-400">seguro</span>{" "}
                    y de fácil mantenimiento a largo plazo.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Utilizo la potencia combinada de frameworks maduros como{" "}
                    <span className="font-semibold text-cyan-400">Laravel</span>{" "}
                    junto a la asincronía asombrosa de{" "}
                    <span className="font-semibold text-violet-400">
                      FastAPI
                    </span>
                    , logrando adaptabilidad absoluta frente a requerimientos
                    lógicos diversos.
                  </p>
                </>
              )}

              {activeRole === "fullstack" && (
                <>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Consolido herramientas líderes de la industria que
                    garantizan una comunicación fluida a través de la red,
                    unificando el control de extremo a extremo bajo flujos de
                    trabajo{" "}
                    <span className="font-semibold text-emerald-400">
                      ágiles
                    </span>{" "}
                    y arquitecturas acopladas con precisión.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Domino con soltura el balance entre el diseño dinámico del
                    lado del cliente en{" "}
                    <span className="font-semibold text-cyan-400">
                      React/Next.js
                    </span>{" "}
                    y la gestión robusta de datos en backends estructurados con
                    bases de datos relacionales como{" "}
                    <span className="font-semibold text-violet-400">
                      PostgreSQL
                    </span>
                    .
                  </p>
                </>
              )}
            </div>

            {/* Active tech info */}
            {activeTech && activeTechData && (
              <div className="animate-fadeInUp rounded-xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={activeTechData.icon}
                    alt={activeTech}
                    className="h-8 w-8 object-contain"
                  />
                  <h3 className="text-xl font-bold text-cyan-400">
                    {activeTech}
                  </h3>
                  <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-400">
                    {activeTechData.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  {activeTechData.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-cyan-400">
                  <i
                    className="fas fa-sync-alt animate-spin"
                    style={{ animationDuration: "4s" }}
                  ></i>
                  <span className="text-xs text-gray-400">
                    Rotación {autoRotate ? "automática" : "pausada"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right — filtered tech grid */}
          <div
            className={`space-y-6 ${isVisible ? "animate-fadeInRight" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative cursor-pointer rounded-xl border p-4 backdrop-blur-sm transition-all duration-500 ${tech.bgColor} ${tech.borderColor} ${
                    activeTech === tech.name
                      ? "scale-105 bg-cyan-500/20 ring-2 ring-cyan-400"
                      : "hover:scale-105 hover:bg-white/5"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onMouseEnter={() => handleTechHover(tech.name)}
                  onMouseLeave={handleTechLeave}
                  onClick={() => {
                    setAutoRotate(false);
                    setActiveTech(tech.name);
                  }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`h-12 w-12 object-contain transition-all duration-300 ${
                          activeTech === tech.name
                            ? "scale-110 grayscale-0"
                            : "grayscale group-hover:scale-110 group-hover:grayscale-0"
                        }`}
                      />
                      <div
                        className={`absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 ${
                          activeTech === tech.name
                            ? "animate-pulse"
                            : "opacity-0"
                        }`}
                      ></div>
                    </div>
                    <span
                      className={`text-center text-sm font-medium transition-colors ${
                        activeTech === tech.name
                          ? tech.color
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <div
                  className={`h-2 w-2 rounded-full ${autoRotate ? "animate-pulse bg-green-400" : "bg-yellow-400"}`}
                ></div>
                <span className="text-sm text-gray-400">
                  {autoRotate ? "Rotando automáticamente" : "Selección manual"}
                </span>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className="ml-1 text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  <i
                    className={`fas ${autoRotate ? "fa-pause" : "fa-play"} text-xs`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center gap-2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-cyan-400"></div>
        </div>
        <span className="text-sm text-gray-400">Mis proyectos</span>
      </div>
    </section>
  );
}
