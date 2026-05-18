import React, { useState, useRef, useEffect } from "react";

// Definimos los tipos admitidos basados en tu enrutador
interface AboutMeProps {
  activeRole: 'fullstack' | 'frontend' | 'backend';
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Contenido dinámico para la tarjeta "¿Qué construyo?" según el rol
  const getQueConstruyoItems = () => {
    if (activeRole === 'backend') {
      return [
        "APIs RESTful seguras y optimizadas",
        "Estructuras y modelado de bases de datos",
        "Sistemas de autenticación (JWT / Sanctum)",
        "Lógica de negocio y procesamiento en servidor",
      ];
    }
    if (activeRole === 'fullstack') {
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
    if (activeRole === 'backend') {
      return [
        "Laravel (PHP) + FastAPI (Python)",
        "Arquitectura limpia y controladores DRY",
        "ORMs (Eloquent / SQLAlchemy) & SQL",
        "Postman, Docker y testing de endpoints",
      ];
    }
    if (activeRole === 'fullstack') {
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
      className="relative bg-[#020617] text-white py-28 px-6 lg:px-8 overflow-hidden z-20"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute hidden lg:block -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block top-40 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute hidden lg:block bottom-20 left-1/3 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,auto)_1fr] gap-20 items-center relative z-20">

        {/* Avatar con Badges Reactivos */}
        <div className="relative flex justify-center lg:justify-start sm:pl-6 md:px-12">
          <div className="relative group">
            <img
              src="/images/yo.jpeg"
              alt="Sergio Ortiz Garzon"
              className="w-60 h-60 rounded-full drop-shadow-xl border-4 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500 group-hover:scale-105 object-cover"
            />
            <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-2xl animate-pulse -z-10 group-hover:bg-cyan-400/30 transition-all duration-500"></div>
            
            {/* Badge superior dinámico */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
              <i className="fas fa-code mr-1"></i>
              {activeRole === 'frontend' ? 'Frontend' : activeRole === 'backend' ? 'Backend' : 'Full Stack'}
            </div>

            {/* Badge inferior dinámico */}
            <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
              {activeRole === 'frontend' ? '✨ React' : activeRole === 'backend' ? '⚡ APIs' : '🚀 Next.js & Python'}
            </div>
          </div>
        </div>

        {/* Contenido de Texto Dinámico */}
        <div className="relative space-y-6 pl-0 sm:pl-6 md:px-12 lg:pl-40">

          <div className={`space-y-2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Sobre Mí</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Sobre mí
            </h2>
          </div>

          <div className="space-y-6">
            {activeRole === 'frontend' && (
              <>
                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Soy <span className="text-cyan-300 font-semibold bg-cyan-400/10 px-2 py-1 rounded">Sergio Ortiz</span>,
                  desarrollador frontend con pasión por crear interfaces digitales
                  rápidas, accesibles y visualmente impactantes. Mi enfoque está en el
                  ecosistema de{" "}
                  <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">React</span> y{" "}
                  <span className="text-violet-400 font-semibold bg-violet-400/10 px-2 py-1 rounded">TypeScript</span>,
                  donde construyo desde componentes reutilizables hasta aplicaciones completas.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Me apasiona <span className="text-green-400 font-semibold">el detalle visual</span>, la arquitectura limpia de componentes y
                  la experiencia de usuario. Diseño pensando en quien usa el producto: interfaces
                  intuitivas, responsivas y con animaciones que aporten valor, no ruido.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Uso <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-1 rounded">TailwindCSS</span> para estilos ágiles y consistentes,{" "}
                  <span className="text-orange-400 font-semibold bg-orange-400/10 px-2 py-1 rounded">Vite</span> para entornos de desarrollo ultrarrápidos y{" "}
                  <span className="text-pink-400 font-semibold bg-pink-400/10 px-2 py-1 rounded">Framer Motion</span> cuando la UI necesita cobrar vida.
                </p>
              </>
            )}

            {activeRole === 'backend' && (
              <>
                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Soy <span className="text-cyan-300 font-semibold bg-cyan-400/10 px-2 py-1 rounded">Sergio Ortiz</span>,
                  desarrollador backend orientado a la creación de soluciones del lado del servidor robustas, eficientes y seguras. Mi enfoque principal está en el desarrollo estructurado con Frameworks como{" "}
                  <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">Laravel (PHP)</span> y{" "}
                  <span className="text-violet-400 font-semibold bg-violet-400/10 px-2 py-1 rounded">FastAPI (Python)</span>, donde gestiono desde la lógica de negocio compleja hasta la optimización de flujos de datos.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Me apasiona <span className="text-green-400 font-semibold">el diseño de arquitecturas limpias</span>, el modelado de bases de datos relacionales y la creación de endpoints intuitivos para un consumo de datos impecable. Me enfoco en escribir código modular, aplicar patrones de diseño correctos y garantizar la seguridad de la información mediante middleware y enrutamiento protegido.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Uso <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-1 rounded">PostgreSQL</span> y MySQL para el almacenamiento de datos persistentes, sistemas de autenticación basados en tokens de seguridad para proteger las APIs y herramientas como{" "}
                  <span className="text-orange-400 font-semibold bg-orange-400/10 px-2 py-1 rounded">Postman</span> para validar de manera rigurosa el rendimiento de cada petición.
                </p>
              </>
            )}

            {activeRole === 'fullstack' && (
              <>
                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Soy <span className="text-cyan-300 font-semibold bg-cyan-400/10 px-2 py-1 rounded">Sergio Ortiz</span>,
                  desarrollador full stack con la capacidad de liderar y estructurar aplicaciones web completas conectando de forma fluida el mundo del cliente con el del servidor. Mi objetivo es unificar interfaces dinámicas construidas en{" "}
                  <span className="text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">React</span> con arquitecturas robustas en el backend estructuradas bajo lenguajes como PHP o Python.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Me apasiona <span className="text-green-400 font-semibold">la integración nativa de extremo a extremo</span>. Esto me permite diseñar bases de datos escalables, desplegar APIs REST eficientes y consumirlas en el frontend asegurando un flujo de datos asíncrono óptimo, el manejo correcto de estados globales y una experiencia de usuario fluida y transparente.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  Combino el potencial de <span className="text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-1 rounded">Next.js / Vite</span> para estructurar interfaces interactivas con la robustez lógica de backends modernos, garantizando que el diseño visual impactante coexista con un servidor optimizado, rápido y altamente escalable.
                </p>
              </>
            )}
          </div>

          {/* Tarjetas Interactivas Adaptables */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            {/* Tarjeta 1 */}
            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/10 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
              onMouseEnter={() => setActiveCard("que-hago")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                <i className="fas fa-layer-group group-hover:animate-bounce"></i>
                {activeRole === 'backend' ? '¿Qué diseño?' : activeRole === 'fullstack' ? '¿Qué integro?' : '¿Qué construyo?'}
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                {getQueConstruyoItems().map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <i className="fas fa-check text-green-400 text-xs"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarjeta 2 */}
            <div
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-violet-400/10 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-violet-500/10 group cursor-pointer"
              onMouseEnter={() => setActiveCard("como-hago")}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-violet-400 font-bold mb-3 flex items-center gap-2 group-hover:text-violet-300 transition-colors">
                <i className="fas fa-cogs group-hover:animate-spin"></i>
                ¿Cómo lo hago?
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                {getComoLoHagoItems().map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-white transition-colors">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <span className="text-gray-400 text-sm">Skills</span>
      </div>
    </section>
  );
}