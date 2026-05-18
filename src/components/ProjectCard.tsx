import  { useState } from "react";

// Interfaces para tipar la estructura de datos
interface Tag {
  name: string;
  class: string;
  icon?: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags?: Tag[];
  github?: string | null;
  route?: string | null;
  pageTitle?: string | null;
  himagelg?: string;
  himagexl?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags = [],
  github = null,
  route = null,
  pageTitle = null,
  himagelg = "auto",
  himagexl = "auto",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mapeo seguro de alturas para evitar interpolación de strings rota en el render de Tailwind
  const getLgHeightClass = (h: string) =>
    h === "70" ? "lg:h-70" : "lg:h-auto";
  const getXlHeightClass = (h: string) =>
    h === "70" ? "xl:h-70" : "xl:h-auto";

  return (
    <article
      className="group relative flex flex-col gap-8 md:flex-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de glow al hacer hover */}
      <div
        className={`absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Imagen + ventana navegador */}
      <div className="relative z-30 w-full md:w-1/2">
        <div className="relative h-64 min-h-[310px] w-full overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] sm:h-104 md:h-96 lg:h-104">
          {/* Efecto de reflexión en el escritorio */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

          {/* Iconos de escritorio al fondo */}
          <div className="absolute top-4 left-1 z-0 flex flex-col gap-5 text-center text-sm font-semibold text-gray-300">
            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
              <img
                src="/images/desk/carpeta-mac-48.png"
                alt="Files-mac"
                className="h-12 w-12"
              />
              <span>Proyectos</span>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
              <img
                src="/images/desk/notes_icon.svg"
                alt="Notes-mac"
                className="h-12 w-12"
              />
              <span>Notas</span>
            </div>
            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
              <img
                src="/images/desk/discord.png"
                alt="Discord"
                className="h-12 w-12"
              />
              <span>Discord</span>
            </div>
          </div>

          {/* Contenido ventana */}
          <div className="relative z-20 p-30 px-8 py-8">
            <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-gray-600/50 bg-gray-800 shadow-2xl">
              {/* Barra navegador mejorada */}
              <div className="flex items-center border-b border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3">
                <div className="mr-4 flex space-x-2">
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500 transition-transform hover:scale-110"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-400 transition-transform hover:scale-110"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500 transition-transform hover:scale-110"></div>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-600 bg-gray-900 px-4 py-2">
                  <i className="fas fa-lock text-xs text-green-400"></i>
                  <span className="truncate text-sm text-gray-300">
                    {pageTitle}
                  </span>
                  <span className="ml-auto cursor-pointer text-sm text-gray-500 transition-colors hover:text-white">
                    ×
                  </span>
                </div>
              </div>

              {/* Imagen principal con overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={`/${image}`}
                  alt={title}
                  className={`h-40 max-h-72 w-full object-cover transition duration-700 group-hover:scale-105 md:h-70 ${getLgHeightClass(himagelg)} ${getXlHeightClass(himagexl)}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>

          {/* Barra de tareas mejorada */}
          <div className="absolute bottom-0 h-14 w-full border-t border-gray-600/50 bg-gradient-to-t from-gray-800 to-gray-900"></div>
          <div className="absolute bottom-2 left-0 z-30 flex w-full items-center justify-center gap-6 px-4">
            <div className="flex items-center gap-6 rounded-xl border border-gray-600/50 bg-gray-800/80 px-6 py-2 backdrop-blur-sm">
              <img
                src="/images/desk/spotify.svg"
                alt="Spotify"
                className="h-6 w-6 transition-transform hover:scale-110"
              />
              <div className="relative">
                <img
                  src="/images/desk/safari.svg"
                  alt="Safari"
                  className="h-8 w-8 rounded-lg bg-blue-500/20 p-1 transition-transform hover:scale-110"
                />
                <div className="absolute -top-1 -right-1 h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
              </div>
              <img
                src="/images/desk/visual-studio-code.svg"
                alt="VSCode"
                className="h-6 w-6 transition-transform hover:scale-110"
              />
              <img
                src="/images/desk/app-store.svg"
                alt="App Store"
                className="h-6 w-6 transition-transform hover:scale-110"
              />
              <img
                src="/images/desk/gmail-icon.svg"
                alt="Gmail"
                className="h-6 w-6 transition-transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info del proyecto mejorada */}
      <div className="relative z-10 md:w-1/2 md:max-w-lg">
        <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
          {title}
        </h3>

        <ul className="mb-4 flex flex-wrap gap-2 pl-0">
          {tags.map((tag, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs backdrop-blur-sm transition-all duration-300 hover:scale-105 ${tag.class}`}
            >
              {tag.icon && (
                <img
                  src={`/${tag.icon}`}
                  alt={tag.name}
                  className="h-4 w-4 object-contain"
                />
              )}
              {tag.name}
            </li>
          ))}
        </ul>

        <p className="mb-6 leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-600/50 bg-gray-800/80 px-4 py-2 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:text-white"
            >
              <img
                src="/images/logos/github.svg"
                alt="Github"
                className="h-5 w-5"
              />
              <span>Código</span>
            </a>
          )}
          {route && (
            <a
              href={route}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-4 py-2 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <span className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
              <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover/btn:opacity-20"></span>
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-external-link-alt"></i>
                <span>Ver Proyecto</span>
              </span>
            </a>
          )}
        </div>

        {/* Indicador de interacción */}
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <i className="fas fa-mouse-pointer text-cyan-400"></i>
          <span>Haz click para explorar</span>
        </div>
      </div>
    </article>
  );
}
