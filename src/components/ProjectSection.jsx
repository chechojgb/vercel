import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 sm:px-8 overflow-hidden z-20"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute hidden lg:block -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block top-40 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute hidden lg:block bottom-20 left-1/3 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">Portafolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text pb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Interfaces modernas construidas con React, TypeScript y TailwindCSS
          </p>
        </div>

        <div className="flex flex-col gap-20">
          <ProjectCard
            pageTitle="App de aprendizaje social"
            image="images/projects/aprendizaje-social.jpeg"
            himagelg="70"
            himagexl="70"
            title="App de aprendizaje social — Reta a tus amigos"
            description="Plataforma educativa donde los usuarios pueden retar a sus amigos a quizzes y competir en lecciones. Muestra progreso por usuario con barras de avance y cantidad de lecciones completadas. Aprender es mejor juntos."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TypeScript", class: "bg-blue-700/20 text-blue-300 border border-blue-300/30", icon: "images/logos/typescript.svg" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
            ]}
          />

          <ProjectCard
            pageTitle="Zallar"
            image="images/projects/zallar.jpeg"
            himagelg="70"
            himagexl="70"
            title="Zallar — Del caos tecnológico al crecimiento real"
            description="Landing page para una agencia de software a medida con enfoque en soluciones digitales respaldadas por neurociencia. Incluye mockup de app móvil con métricas de progreso y desarrollo de MVPs en 2–6 semanas."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
              { name: "Vite", class: "bg-violet-500/20 text-violet-400 border border-violet-400/30", icon: "images/logos/vite.svg" },
            ]}
          />

          <ProjectCard
            pageTitle="Magic — English for Kids"
            image="images/projects/magic-kids.jpeg"
            himagelg="70"
            himagexl="70"
            title="Magic — Inglés para niños con mundos 3D"
            description="Plataforma de aprendizaje de inglés infantil con estética 3D colorida y personajes animados. Sustituye las flashcards tradicionales por mundos interactivos y juegos para hacer el aprendizaje entretenido."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TypeScript", class: "bg-blue-700/20 text-blue-300 border border-blue-300/30", icon: "images/logos/typescript.svg" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
            ]}
          />
          <ProjectCard
            pageTitle="TrackerOS"
            image="images/projects/trackerOS.png"
            himagelg="70"
            himagexl="70"
            title="Tracker OS — Productividad local con privacidad"
            description="Aplicación React + Python que analiza tus hábitos digitales de forma 100% local. Todo el procesamiento ocurre en tu dispositivo: sin servidores, sin telemetría. UI construida con React y TailwindCSS."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TypeScript", class: "bg-blue-700/20 text-blue-300 border border-blue-300/30", icon: "images/logos/typescript.svg" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
              { name: "Python", class: "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30", icon: "images/logos/python.svg" },
            ]}
            github="https://github.com/chechojgb/tracker-front-react"
            route="https://tracker-front-react.vercel.app"
          />

          <ProjectCard
            pageTitle="NexoAgents"
            image="images/projects/nexoAgents.png"
            himagelg="70"
            himagexl="70"
            title="NexoAgents — Dashboard de monitoreo en tiempo real"
            description="Dashboard React con visualización de datos en tiempo real para centros de contacto. Componentes reutilizables, estado global con React Context y diseño responsivo con TailwindCSS."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
              { name: "Vite", class: "bg-violet-500/20 text-violet-400 border border-violet-400/30", icon: "images/logos/vite.svg" },
            ]}
            github="https://github.com/chechojgb/FrontEstadoColas"
            route="https://portafolio.laravel.cloud/dashboardAZZU"
          />

          <ProjectCard
            pageTitle="Button Lovers"
            image="images/projects/ButtonLovers2.png"
            himagelg="70"
            himagexl="auto"
            title="B&A — Sistema de gestión con analytics"
            description="SPA en React con dashboard de estadísticas, control de inventario y CRUD completo. Interfaz construida con componentes modulares, TailwindCSS y visualizaciones de datos interactivas."
            tags={[
              { name: "React", class: "bg-blue-500/20 text-blue-400 border border-blue-400/30", icon: "images/logos/react.png" },
              { name: "TailwindCSS", class: "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30", icon: "images/logos/tailwind.png" },
              { name: "JavaScript", class: "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30", icon: "images/logos/javascript.svg" },
            ]}
            github="https://github.com/chechojgb/AZZU"
            route="https://portafolio.laravel.cloud/dashboardBL"
          />
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <i className="fas fa-rocket text-cyan-400 text-xl"></i>
            <span className="text-gray-300">¿Tienes un proyecto en mente?</span>
            <a
              href="https://wa.me/573209925728?text=¡Hola%20Sergio!%20Vi%20tu%20portafolio%20y%20me%20encantó%20tu%20trabajo.%20¿Podemos%20conversar%20sobre%20un%20proyecto?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:scale-105 transition-transform flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;