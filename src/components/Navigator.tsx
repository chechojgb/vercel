import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Award,
  Menu,
  LucideIcon,
} from "lucide-react";

// Definimos la interfaz para los elementos del menú
interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon; // Usamos el tipo nativo de Lucide para los íconos
}

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "about", label: "Sobre Mí", icon: User },
    { id: "tech", label: "Tecnologías", icon: Code },
    { id: "proyectos", label: "Proyectos", icon: Briefcase },
    { id: "certificaciones", label: "Certificados", icon: Award },
  ];

  // Efecto para detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Mapeamos los elementos capturando su tipo exacto HTMLElement o null
      const sections = menuItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-700/50 bg-gray-900/95 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-lg font-bold text-transparent text-white">
                Sergio
              </span>
            </div>

            {/* Menu Items - Desktop */}
            <div className="hidden items-center gap-1 md:flex">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 ${
                      activeSection === item.id
                        ? "border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg shadow-cyan-500/10"
                        : "border border-transparent text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    <IconComponent
                      className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                        activeSection === item.id
                          ? "text-cyan-400"
                          : "text-gray-400"
                      }`}
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700/50 bg-gray-800/50 text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-white md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="animate-fadeIn fixed top-20 right-4 left-4 z-50 rounded-2xl border border-gray-700/50 bg-gray-900/95 p-4 backdrop-blur-md md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                    activeSection === item.id
                      ? "border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400"
                      : "border border-transparent text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  <IconComponent
                    className={`h-4 w-4 ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Overlay para cerrar mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
