import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Definimos la interfaz para las propiedades que recibe el componente desde Welcome.tsx
interface HeroSectionProps {
  activeRole: 'fullstack' | 'frontend' | 'backend';
}

export default function HeroSection({ activeRole }: HeroSectionProps) {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  
  // Roles que rotan en el efecto máquina de escribir
  const roles = [
    "Full Stack Developer",
    "Backend Engineer",
    "Frontend Developer",
    "API Architect",
    "Database Designer"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const current = roles[currentRole];
      setTypedText(isDeleting
        ? current.substring(0, typedText.length - 1)
        : current.substring(0, typedText.length + 1)
      );
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };
    const timer = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRole, roles]);

  const socials = [
    {
      href: "https://github.com/chechojgb/",
      icon: "/images/logos/github.svg",
      alt: "GitHub",
      hover: "hover:border-gray-400/50",
    },
    {
      href: "https://www.linkedin.com/in/sergio-ortiz-garzon-092051316/",
      icon: "/images/logos/linkedin.svg",
      alt: "LinkedIn",
      hover: "hover:border-blue-400/50",
    },
    {
      href: "https://wa.me/573209925728?text=¡Hola%20Sergio!%20Vi%20tu%20portafolio%20y%20me%20encantó%20tu%20trabajo.%20¿Podemos%20conversar%20sobre%20un%20proyecto?",
      icon: "/images/logos/whatsapp.svg",
      alt: "WhatsApp",
      hover: "hover:border-green-400/50",
    },
    {
      href: "mailto:sergioortiz.03@live.com",
      icon: "/images/logos/gmail-icon.svg",
      alt: "Correo",
      hover: "hover:border-red-400/50",
    },
  ];

  return (
    <section
      className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 z-20 pb-10 bg-[#020617] overflow-hidden"
      id="inicio"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute hidden lg:block -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute hidden lg:block top-40 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute hidden lg:block bottom-20 left-1/3 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 relative z-20">

        {/* Left column */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">

        

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-gray-300 block mb-2">Hola,</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Soy Sergio Ortiz
            </span>
          </h1>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
            <i className="fas fa-terminal text-blue-400 animate-bounce"></i>
            <span className="text-xl text-blue-400 font-medium min-h-[28px]">
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-gray-300/90 leading-relaxed mb-12 max-w-xl hover:text-white transition-colors duration-300">
            {activeRole === 'frontend' ? (
              <>
                Construyo interfaces <span className="text-cyan-400 font-semibold">modernas y accesibles</span> con <span className="text-blue-400 font-semibold">React</span> y <span className="text-violet-400 font-semibold">TypeScript</span>. Me enfoco en rendimiento, experiencia de usuario y código limpio.
              </>
            ) : activeRole === 'backend' ? (
              <>
                Diseño arquitecturas de servidor <span className="text-cyan-400 font-semibold">robustas y escalables</span>. Especializado en la creación de <span className="text-blue-400 font-semibold">APIs seguras</span>, optimización de consultas y modelado de datos.
              </>
            ) : (
              <>
                Construyo aplicaciones web completas de <span className="text-cyan-400 font-semibold">extremo a extremo</span>. Conecto lógica de servidor eficiente con interfaces de usuario interactivas, modernas y optimizadas.
              </>
            )}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={`/certificate/CV-Sergio_Ortiz_Garzon_${activeRole === 'frontend' ? 'FE' : activeRole === 'backend' ? 'BE' : 'FS'}.pdf`}
              download
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400 transition-all duration-300">
                <span className="flex items-center gap-2 text-white font-medium">
                  <i className="fas fa-download group-hover:animate-bounce"></i>
                  <span>Descargar CV</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </span>
            </a>

            <a
              href="#proyectos"
              className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl border border-gray-600 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900/50 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-gray-300 group-hover:text-cyan-400 font-medium transition-colors">
                  <i className="fas fa-eye group-hover:animate-pulse"></i>
                  <span>Ver Proyectos</span>
                </span>
              </span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-gray-200 text-base">Encuéntrame en</span>
            <div className="flex items-center gap-4">
              {socials.map(({ href, icon, alt, hover }) => (
                <a
                  key={alt}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 ${hover}`}
                >
                  <img src={icon} alt={alt} className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats reactivos al rol */}
          <div className="flex gap-8 mt-10">
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">1+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">Años Exp</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {activeRole === 'frontend' ? '10+' : activeRole === 'backend' ? '5+' : '15+'}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">
                {activeRole === 'frontend' ? 'Componentes' : activeRole === 'backend' ? 'APIs creadas' : 'Proyectos'}
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">100%</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">Compromiso</div>
            </div>
          </div>
        </div>

        {/* Right column — Code block */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-0 mt-12 lg:mt-20 z-40">
          <div className="relative w-full bg-[#091121] rounded-2xl shadow-2xl max-w-2xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-500 group">

            <div className="flex items-center justify-between bg-gray-800 px-5 py-3 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
              </div>
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <i className="fas fa-code text-blue-400"></i>
                <span className="group-hover:text-blue-400 transition-colors">
                  {activeRole === 'backend' ? 'sergio_backend.py' : 'sergio_dev.tsx'}
                </span>
              </span>
              <div className="w-12"></div>
            </div>

            <pre className="p-8 md:p-10 text-green-400 text-[0.85rem] md:text-base leading-relaxed whitespace-pre-wrap font-mono">
              {activeRole === 'fullstack' && `interface FullStackDeveloper {
  name: string;
  architecture: string;
  frontend: string[];
  backend: string[];
  databases: string[];
}

const sergio: FullStackDeveloper = {
  name: "Sergio Ortiz",
  architecture: "Monoliths & REST APIs",
  frontend: ["React", "Next.js", "TailwindCSS"],
  backend: ["Laravel", "FastAPI", "Python"],
  databases: ["PostgreSQL", "MySQL"]
};`}

              {activeRole === 'frontend' && `interface FrontendDeveloper {
  name: string;
  role: string;
  stack: {
    core: string[];
    styling: string[];
    tools: string[];
  };
  passion: string;
}

const sergio: FrontendDeveloper = {
  name: "Sergio Ortiz",
  role: "Frontend Specialist",
  stack: {
    core: ["React", "TypeScript", "Next.js"],
    styling: ["TailwindCSS", "Framer Motion"],
    tools: ["Vite", "Git", "Figma"]
  },
  passion: "UI hermosa + código limpio ✨"
};`}

              {activeRole === 'backend' && `class BackendDeveloper:
    def __init__(self):
        self.name = "Sergio Ortiz"
        self.frameworks = ["Laravel", "FastAPI"]
        self.databases = ["PostgreSQL", "MySQL"]
        self.tools = ["Docker", "Git", "Postman"]
        
    def core_skills(self):
        return [
            "Diseño de APIs RESTful",
            "Autenticación Segura (JWT/Sanctum)",
            "Modelado de datos & ORMs"
        ]`}
            </pre>

            <div className="absolute -bottom-12 -right-4 z-50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <img
                src="/images/linux.png"
                alt="Linux Penguin"
                className="h-36 md:h-40 lg:h-48 animate-bounce drop-shadow-2xl"
                style={{ animationDuration: '3s' }}
              />
              <div className="absolute -top-16 -left-20 bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ¡Hola! 👋
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <span className="text-gray-400 text-sm">Sobre mi</span>
      </div>

    </section>
  );
}