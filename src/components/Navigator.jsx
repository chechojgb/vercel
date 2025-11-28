import React, { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, Award, Menu } from "lucide-react";

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "about", label: "Sobre Mí", icon: User },
    { id: "tech", label: "Tecnologías", icon: Code },
    { id: "proyectos", label: "Proyectos", icon: Briefcase },
    { id: "certificaciones", label: "Certificados", icon: Award }
  ];

  // Efecto para detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 py-3" 
          : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sergio
              </span>
            </div>

            {/* Menu Items - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 shadow-lg shadow-cyan-500/10"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 group-hover:scale-110 transition-transform ${
                      activeSection === item.id ? "text-cyan-400" : "text-gray-400"
                    }`} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-cyan-400/30 transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 z-50 md:hidden bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 p-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-400"
                  }`} />
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