import React, { useState } from "react";
import { ExternalLink, Download, CheckCircle2, Start, Award, Maximize, Shield, Calendar, Eye, X, Info  } from "lucide-react";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const certifications = [
    {
      id: 1,
      title: "React Basics & Fundamentals",
      issuer: "Coursera",
      date: "2025",
      credentialId: "7b034d9955146562bbfff3df8a108d31",
      level: "Básico",
      skills: ["React", "JavaScript", "Components", "Hooks", "JSX"],
      image: "/certificate/Coursera-React-Basic.jpg",
      url: "https://coursera.org/share/7b034d9955146562bbfff3df8a108d31",
      category: "Frontend",
      featured: true,
      pdf: "/certificate/Coursera-React-Basic.pdf",
    },
    {
      id: 2,
      title: "Laravel Framework Master", 
      issuer: "Udemy",
      date: "2025",
      credentialId: "UC-f136b091-a4ea-4869-b8d2-55b5dc034fbd",
      level: "Avanzado",
      skills: ["Laravel", "PHP", "Eloquent", "MVC", "Blade"],
      image: "/certificate/Laravel-udemy.jpg",
      url: "https://www.udemy.com/certificate/UC-f136b091-a4ea-4869-b8d2-55b5dc034fbd/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      category: "Backend",
      featured: true,
      pdf: "/certificate/Coursera-React-Basic.pdf",
    },
    {
      id: 3,
      title: "Linux Systems Administration",
      issuer: "SENA",
      date: "2023", 
      credentialId: "9216002714030CC1000624464C",
      level: "Intermedio",
      skills: ["Linux", "Bash", "Servers", "Terminal", "Administration"],
      image: "/certificate/linux-sena_page.jpg",
      url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
      category: "DevOps",
      featured: true,
      pdf: "/certificate/Coursera-React-Basic.pdf",
    },
    {
      id: 4,
      title: "Python Programming",
      issuer: "SENA",
      date: "2023",
      credentialId: "9216002870911CC1000624464C",
      level: "Intermedio", 
      skills: ["Python", "Automation", "Scripting", "OOP", "APIs"],
      image: "/certificate/python-sena.jpg",
      url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
      category: "Backend",
      featured: false,
      pdf: "/certificate/Coursera-React-Basic.pdf",
    }
  ];

  const handleImageError = (certId) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  const openModal = (index) => {
    setSelectedCert(index);
    setIsModalOpen(true);
  };

  const handleDownload = async () => {
  try {
    const pdfPath = certifications[selectedCert].pdf;
    const response = await fetch(pdfPath);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `certificado-${certifications[selectedCert].credentialId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error descargando PDF:', error);
    // Fallback: abrir en nueva pestaña
    window.open(certifications[selectedCert].pdf, '_blank');
  }
};

  return (
    <section id="certificaciones" className="py-20 bg-gradient-to-b from-[#020617] to-[#0a1126] relative overflow-hidden">
      
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse group-hover:bg-green-400 transition-colors"></div>
            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
              Credenciales Verificadas
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-300">Mis </span>
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>

          <p className="text-lg text-gray-300/80 max-w-2xl mx-auto leading-relaxed">
            Certificaciones profesionales que validan mis habilidades técnicas y conocimiento especializado
          </p>
        </div>

        {/* Grid de certificados - Diseño tipo galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Badge destacado */}
              {cert.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    Destacado
                  </span>
                </div>
              )}

              {/* Imagen del certificado */}
              <div 
                className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden"
                onClick={() => openModal(index)}
              >
                {!imageErrors[cert.id] ? (
                  // Imagen real
                  <img
                    src={cert.image}
                    alt={`Certificado ${cert.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(cert.id)}
                  />
                ) : (
                  // Fallback si la imagen no carga
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="text-center p-8">
                      <Award className="w-16 h-16 text-cyan-400/50 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-gray-400 text-sm">Certificado {cert.title}</p>
                      <p className="text-gray-500 text-xs mt-2">Click para ver</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay de hover */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-black/50 rounded-full p-4 border border-cyan-400/50">
                      <Maximize className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex-1 pr-4">
                    {cert.title}
                  </h3>
                  <span className="px-2 py-1 rounded-lg text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                    {cert.level}
                  </span>
                </div>

                <p className="text-cyan-400 font-medium text-sm mb-4 flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </span>
                  <span className="font-mono text-xs bg-gray-700/50 px-2 py-1 rounded">
                    {cert.credentialId}
                  </span>
                </div>

                {/* Skills como tags pequeños */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 rounded text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs bg-gray-700/50 text-gray-400 border border-gray-600/50">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Acciones */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(index)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-cyan-500/20 border border-gray-600/50 hover:border-cyan-400/30 text-gray-300 hover:text-cyan-400 py-2 px-3 rounded-lg text-sm transition-all duration-300 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    Ver
                  </button>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-700/50 hover:bg-green-500/20 border border-gray-600/50 hover:border-green-400/30 text-gray-300 hover:text-green-400 py-2 px-3 rounded-lg text-sm transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal para ver certificado en grande */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn " onClick={() => setIsModalOpen(false)}>
          <div className="bg-gray-800 rounded-2xl border border-gray-700/50 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header del modal */}
            <div className="flex items-center justify-between bg-gray-900 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-medium">
                  {certifications[selectedCert].title}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 overflow-auto max-h-[calc(90vh-80px)]">
              {/* Imagen grande del certificado */}
              <div className="bg-gray-900 rounded-xl border border-gray-700/50 p-4 mb-6">
                <div className="flex justify-center">
                  {!imageErrors[certifications[selectedCert].id] ? (
                    <img
                      src={certifications[selectedCert].image}
                      alt={`Certificado ${certifications[selectedCert].title}`}
                      className="max-w-full max-h-[500px] rounded-lg object-contain"
                      onError={(e) => {
                        handleImageError(certifications[selectedCert].id);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700/50 flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-certificate text-8xl text-cyan-400/30 mb-4"></i>
                        <p className="text-gray-400 text-lg">Imagen no disponible</p>
                        <p className="text-gray-500 text-sm mt-2">
                          {certifications[selectedCert].title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Información detallada */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-cyan-400" />
                    Información del Certificado
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-700/30">
                      <span className="text-gray-400">Emisor:</span>
                      <span className="text-white font-medium">{certifications[selectedCert].issuer}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-700/30">
                      <span className="text-gray-400">Fecha:</span>
                      <span className="text-white font-medium">{certifications[selectedCert].date}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-700/30">
                      <span className="text-gray-400">ID:</span>
                      <span className="text-cyan-400 font-mono">{certifications[selectedCert].credentialId}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-700/30">
                      <span className="text-gray-400">Nivel:</span>
                      <span className="text-amber-400 font-medium">{certifications[selectedCert].level}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Habilidades Validadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {certifications[selectedCert].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 rounded-lg bg-gray-700/50 text-cyan-400 border border-cyan-400/20 font-medium text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Acciones del modal */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700/50">
                <a
                  href={certifications[selectedCert].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verificar en Sitio Oficial
                </a>
                <button 
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-3 bg-gray-700/50 border border-gray-600/50 text-gray-300 font-semibold py-4 px-6 rounded-xl hover:border-cyan-400/30 hover:text-white transition-all duration-300"
                    >
                    <Download className="w-4 h-4" />
                    Descargar PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}