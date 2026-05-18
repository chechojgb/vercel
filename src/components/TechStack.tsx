import React, { useState, useEffect, useRef } from "react";

interface TechStackProps {
  activeRole: 'fullstack' | 'frontend' | 'backend';
}

interface Technology {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  category: string;
  roles: ('fullstack' | 'frontend' | 'backend')[]; // Filtro por rol
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
      description: "Librería principal para construir interfaces de usuario interactivas mediante componentes reutilizables y eficientes.",
      category: "Core Frontend",
      roles: ['frontend', 'fullstack']
    },
    {
      name: "TypeScript",
      icon: "/images/logos/typescript.svg",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      description: "Tipado estático aplicado sobre JavaScript que optimiza la detección de errores en desarrollo y asegura la consistencia de datos.",
      category: "Lenguajes",
      roles: ['frontend', 'fullstack', 'backend']
    },
    {
      name: "TailwindCSS",
      icon: "/images/logos/tailwind.png",
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-400/30",
      description: "Framework CSS utility-first que permite un diseño responsivo ágil, estructurado y altamente personalizado sin sobrecargar estilos.",
      category: "Estilos",
      roles: ['frontend', 'fullstack']
    },
    {
      name: "Next.js",
      icon: "/images/logos/nextjs.svg",
      color: "text-white",
      bgColor: "bg-white/5",
      borderColor: "border-white/20",
      description: "Framework empresarial de React para renderizado en el servidor (SSR) y generación de sitios estáticos (SSG) maximizando el SEO.",
      category: "Framework FE",
      roles: ['frontend', 'fullstack']
    },
    {
      name: "Laravel",
      icon: "/images/logos/laravel.svg", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "Framework robusto de PHP bajo patrón MVC orientado a la creación de APIs REST seguras, manejo de ORM (Eloquent) y enrutamiento protegido.",
      category: "Core Backend",
      roles: ['backend', 'fullstack']
    },
    {
      name: "FastAPI",
      icon: "/images/logos/Fastapi.svg", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-400/30",
      description: "Framework de alto rendimiento basado en Python para construir APIs asíncronas veloces aprovechando la validación nativa de Pydantic.",
      category: "Core Backend",
      roles: ['backend', 'fullstack']
    },
    {
      name: "Python",
      icon: "/images/logos/python.svg",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      description: "Lenguaje versátil e intuitivo utilizado para scripting backend, automatizaciones y manejo estructurado de lógica compleja.",
      category: "Lenguajes",
      roles: ['backend', 'fullstack']
    },
    {
      name: "MySQL",
      icon: "/images/logos/mysql.png", // Asegúrate de tener este icono en tu carpeta publica
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      description: "Sistema de gestión de bases de datos relacionales ampliamente utilizado en la industria, destacado por su velocidad, confiabilidad y óptima integración en entornos de producción.",
      category: "Bases de Datos",
      roles: ['backend', 'fullstack']
    },
    {
      name: "Vite",
      icon: "/images/logos/vite.svg",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-400/30",
      description: "Herramienta de empaquetado ultrarrápida impulsada por esbuild que optimiza drásticamente el flujo de desarrollo en el entorno frontend.",
      category: "Herramientas",
      roles: ['frontend']
    },
    {
      name: "Git",
      icon: "/images/logos/git.svg",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      description: "Sistema de control de versiones distribuido fundamental para mantener el historial de cambios y coordinar despliegues limpios.",
      category: "Herramientas",
      roles: ['frontend', 'backend', 'fullstack']
    },
    {
      name: "Figma",
      icon: "/images/logos/figma.svg",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-400/30",
      description: "Plataforma de diseño colaborativa utilizada para maquetar prototipos de alta fidelidad y definir bases de UI/UX antes de codificar.",
      category: "Diseño",
      roles: ['frontend']
    },
    {
      name: "JavaScript",
      icon: "/images/logos/javascript.svg",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/30",
      description: "Lenguaje base del ecosistema web. Dominio avanzado de asincronía, manipulación avanzada del DOM y eventos.",
      category: "Lenguajes",
      roles: ['frontend']
    },
  ];

  // Filtramos las tecnologías en tiempo de ejecución según la ruta activa
  const technologies = allTechnologies.filter(tech => tech.roles.includes(activeRole));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Controlar que la rotación se ajuste automáticamente si cambia el set de tecnologías filtradas
  useEffect(() => {
    if (technologies.length > 0 && (!activeTech || !technologies.some(t => t.name === activeTech))) {
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
      className="relative bg-[#020617] py-28 px-6 sm:px-8 text-white overflow-hidden z-20"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute hidden lg:block -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block top-40 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute hidden lg:block bottom-20 left-1/3 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* Left — dynamic text */}
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">Tech Stack</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Tecnologías que uso
              </h2>
            </div>

            <div className="space-y-6">
              {activeRole === 'frontend' && (
                <>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Cada herramienta de mi stack frontend está seleccionada meticulosamente para construir interfaces de usuario de alta fidelidad que sean <span className="text-emerald-400 font-semibold">óptimas</span>, <span className="text-amber-400 font-semibold">modulares</span> y altamente integradas a estándares modernos.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Establezco la combinación de <span className="text-cyan-400 font-semibold">React + TypeScript</span> como mi pilar de desarrollo, garantizando tipado estricto y el uso avanzado de hooks para el control interactivo del estado en el cliente.
                  </p>
                </>
              )}

              {activeRole === 'backend' && (
                <>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Estructuro el entorno de servidor utilizando lenguajes y frameworks preparados para soportar cargas concurrentes de forma <span className="text-emerald-400 font-semibold">eficiente</span>, garantizando que el backend sea <span className="text-amber-400 font-semibold">seguro</span> y de fácil mantenimiento a largo plazo.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Utilizo la potencia combinada de frameworks maduros como <span className="text-cyan-400 font-semibold">Laravel</span> junto a la asincronía asombrosa de <span className="text-violet-400 font-semibold">FastAPI</span>, logrando adaptabilidad absoluta frente a requerimientos lógicos diversos.
                  </p>
                </>
              )}

              {activeRole === 'fullstack' && (
                <>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Consolido herramientas líderes de la industria que garantizan una comunicación fluida a través de la red, unificando el control de extremo a extremo bajo flujos de trabajo <span className="text-emerald-400 font-semibold">ágiles</span> y arquitecturas acopladas con precisión.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Domino con soltura el balance entre el diseño dinámico del lado del cliente en <span className="text-cyan-400 font-semibold">React/Next.js</span> y la gestión robusta de datos en backends estructurados con bases de datos relacionales como <span className="text-violet-400 font-semibold">PostgreSQL</span>.
                  </p>
                </>
              )}
            </div>

            {/* Active tech info */}
            {activeTech && activeTechData && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 animate-fadeInUp">
                <div className="flex items-center gap-3 mb-3">
                  <img src={activeTechData.icon} alt={activeTech} className="h-8 w-8 object-contain" />
                  <h3 className="text-xl font-bold text-cyan-400">{activeTech}</h3>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {activeTechData.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeTechData.description}</p>
                <div className="flex items-center gap-2 mt-3 text-cyan-400 text-sm">
                  <i className="fas fa-sync-alt animate-spin" style={{ animationDuration: '4s' }}></i>
                  <span className="text-xs text-gray-400">Rotación {autoRotate ? 'automática' : 'pausada'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right — filtered tech grid */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`relative group p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${tech.bgColor} ${tech.borderColor} ${
                    activeTech === tech.name
                      ? 'scale-105 ring-2 ring-cyan-400 bg-cyan-500/20'
                      : 'hover:scale-105 hover:bg-white/5'
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
                            ? 'grayscale-0 scale-110'
                            : 'grayscale group-hover:grayscale-0 group-hover:scale-110'
                        }`}
                      />
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 ${
                        activeTech === tech.name ? 'animate-pulse' : 'opacity-0'
                      }`}></div>
                    </div>
                    <span className={`text-sm font-medium text-center transition-colors ${
                      activeTech === tech.name ? tech.color : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className={`w-2 h-2 rounded-full ${autoRotate ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`}></div>
                <span className="text-sm text-gray-400">
                  {autoRotate ? 'Rotando automáticamente' : 'Selección manual'}
                </span>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1"
                >
                  <i className={`fas ${autoRotate ? 'fa-pause' : 'fa-play'} text-xs`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <span className="text-gray-400 text-sm">Mis proyectos</span>
      </div>
    </section>
  );
}