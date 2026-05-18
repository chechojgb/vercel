import { useState, useEffect } from "react";

// Definimos la interfaz para las propiedades que recibe el componente desde Welcome.tsx
interface HeroSectionProps {
  activeRole: "fullstack" | "frontend" | "backend";
}

export default function HeroSection({ activeRole }: HeroSectionProps) {
  const [typedText, setTypedText] = useState("");

  // Roles que rotan en el efecto máquina de escribir
  const roles = [
    "Full Stack Developer",
    "Backend Engineer",
    "Frontend Developer",
    "API Architect",
    "Database Designer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const current = roles[currentRole];
      setTypedText(
        isDeleting
          ? current.substring(0, typedText.length - 1)
          : current.substring(0, typedText.length + 1),
      );
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
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
      className="hero relative z-20 flex min-h-screen items-center overflow-hidden bg-[#020617] px-4 pb-10 sm:px-6 lg:px-8"
      id="inicio"
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

      <div className="relative z-20 container mx-auto flex flex-col items-center justify-between py-12 lg:flex-row lg:py-0">
        {/* Left column */}
        <div className="relative mb-12 w-full lg:mb-0 lg:w-1/2">
          <h1 className="mb-8 text-5xl leading-tight font-bold lg:text-7xl">
            <span className="mb-2 block text-gray-300">Hola,</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Soy Sergio Ortiz
            </span>
          </h1>

          <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50">
            <i className="fas fa-terminal animate-bounce text-blue-400"></i>
            <span className="min-h-[28px] text-xl font-medium text-blue-400">
              {typedText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </div>

          <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-300/90 transition-colors duration-300 hover:text-white">
            {activeRole === "frontend" ? (
              <>
                Construyo interfaces{" "}
                <span className="font-semibold text-cyan-400">
                  modernas y accesibles
                </span>{" "}
                con <span className="font-semibold text-blue-400">React</span> y{" "}
                <span className="font-semibold text-violet-400">
                  TypeScript
                </span>
                . Me enfoco en rendimiento, experiencia de usuario y código
                limpio.
              </>
            ) : activeRole === "backend" ? (
              <>
                Diseño arquitecturas de servidor{" "}
                <span className="font-semibold text-cyan-400">
                  robustas y escalables
                </span>
                . Especializado en la creación de{" "}
                <span className="font-semibold text-blue-400">
                  APIs seguras
                </span>
                , optimización de consultas y modelado de datos.
              </>
            ) : (
              <>
                Construyo aplicaciones web completas de{" "}
                <span className="font-semibold text-cyan-400">
                  extremo a extremo
                </span>
                . Conecto lógica de servidor eficiente con interfaces de usuario
                interactivas, modernas y optimizadas.
              </>
            )}
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-6 sm:flex-row">
            <a
              href={`/certificate/CV-Sergio_Ortiz_Garzon_${activeRole === "frontend" ? "FE" : activeRole === "backend" ? "BE" : "FS"}.pdf`}
              download
              className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="block w-full rounded-[11px] bg-gray-900 px-8 py-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                <span className="flex items-center gap-2 font-medium text-white">
                  <i className="fas fa-download group-hover:animate-bounce"></i>
                  <span>Descargar CV</span>
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </span>
              </span>
            </a>

            <a
              href="#proyectos"
              className="group relative inline-flex items-center justify-center gap-3 rounded-xl border border-gray-600 p-0.5 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            >
              <span className="block w-full rounded-[11px] bg-gray-900/50 px-8 py-4 backdrop-blur-sm">
                <span className="flex items-center gap-2 font-medium text-gray-300 transition-colors group-hover:text-cyan-400">
                  <i className="fas fa-eye group-hover:animate-pulse"></i>
                  <span>Ver Proyectos</span>
                </span>
              </span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-base text-gray-200">Encuéntrame en</span>
            <div className="flex items-center gap-4">
              {socials.map(({ href, icon, alt, hover }) => (
                <a
                  key={alt}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border border-gray-700/50 bg-gray-800/50 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 ${hover}`}
                >
                  <img src={icon} alt={alt} className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats reactivos al rol */}
          <div className="mt-10 flex gap-8">
            <div className="group cursor-pointer text-center">
              <div className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                1+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">
                Años Exp
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                {activeRole === "frontend"
                  ? "10+"
                  : activeRole === "backend"
                    ? "5+"
                    : "15+"}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">
                {activeRole === "frontend"
                  ? "Componentes"
                  : activeRole === "backend"
                    ? "APIs creadas"
                    : "Proyectos"}
              </div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                100%
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300">
                Compromiso
              </div>
            </div>
          </div>
        </div>

        {/* Right column — Code block */}
        <div className="z-40 mt-12 flex w-full flex-col items-center justify-center gap-0 lg:mt-20 lg:w-1/2">
          <div className="group relative w-full max-w-2xl rounded-2xl bg-[#091121] shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/10">
            <div className="flex items-center justify-between rounded-t-2xl bg-gray-800 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500"></div>
                <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500"></div>
              </div>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <i className="fas fa-code text-blue-400"></i>
                <span className="transition-colors group-hover:text-blue-400">
                  {activeRole === "backend"
                    ? "sergio_backend.py"
                    : "sergio_dev.tsx"}
                </span>
              </span>
              <div className="w-12"></div>
            </div>

            <pre className="p-8 font-mono text-[0.85rem] leading-relaxed whitespace-pre-wrap text-green-400 md:p-10 md:text-base">
              {activeRole === "fullstack" &&
                `interface FullStackDeveloper {
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

              {activeRole === "frontend" &&
                `interface FrontendDeveloper {
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

              {activeRole === "backend" &&
                `class BackendDeveloper:
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

            <div className="absolute -right-4 -bottom-12 z-50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/images/linux.png"
                alt="Linux Penguin"
                className="h-36 animate-bounce drop-shadow-2xl md:h-40 lg:h-48"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute -top-16 -left-20 rounded-2xl rounded-bl-none bg-white px-4 py-2 text-sm font-medium text-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ¡Hola! 👋
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center gap-2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-blue-400">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-blue-400"></div>
        </div>
        <span className="text-sm text-gray-400">Sobre mi</span>
      </div>
    </section>
  );
}
