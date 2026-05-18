import  { useState } from "react";
import {
  ExternalLink,
  Download,
  CheckCircle2,
  Star,
  Award,
  Eye,
  X,
  Info,
} from "lucide-react";


export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const certifications = [
    {
      id: 1,
      title: "React Meta",
      issuer: "Meta",
      date: "2026",
      credentialId: "KZ2HNGDF0HO2",
      level: "Specialization",
      skills: ["React", "JavaScript", "Components", "Hooks", "JSX"],
      image: "/certificate/React-Meta_page-0001.jpg",
      url: "https://www.coursera.org/account/accomplishments/specialization/KZ2HNGDF0GO2",
      category: "Frontend",
      featured: true,
      pdf: "/certificate/React-Meta.pdf",
    },
    {
      id: 2,
      title: "Advanced React",
      issuer: "Coursera",
      date: "2025",
      credentialId: "QGQMK1JVTNCY",
      level: "advance",
      skills: ["React", "JavaScript", "Components", "Hooks", "JSX"],
      image: "/certificate/Coursera-Advance-React_page-0001.jpg",
      url: "https://www.coursera.org/account/accomplishments/verify/QGQMK1JVTNCY",
      category: "Frontend",
      featured: true,
      pdf: "/certificate/Coursera-Advance-React.pdf",
    },
    {
      id: 3,
      title: "React Basics & Fundamentals",
      issuer: "Coursera",
      date: "2025",
      credentialId: "7b034d9955146562bbfff3df8a108d31",
      level: "Básico",
      skills: ["React", "JavaScript", "Components", "Hooks", "JSX"],
      image: "/certificate/Coursera-React-Basic.jpg",
      url: "https://coursera.org/share/7b034d9955146562bbfff3df8a108d31",
      category: "Frontend",
      pdf: "/certificate/Coursera-React-Basic.pdf",
    },
    {
      id: 4,
      title: "Laravel Framework Master",
      issuer: "Udemy",
      date: "2025",
      credentialId: "UC-f136b091-a4ea-4869-b8d2-55b5dc034fbd",
      level: "Avanzado",
      skills: ["Laravel", "PHP", "Eloquent", "MVC", "Blade"],
      image: "/certificate/Laravel-udemy.jpg",
      url: "https://www.udemy.com/certificate/UC-f136b091-a4ea-4869-b8d2-55b5dc034fbd/",
      category: "Backend",
      featured: false,
      pdf: "/certificate/Laravel-udemy.pdf",
    },
    {
      id: 5,
      title: "Linux Systems Administration",
      issuer: "SENA",
      date: "2023",
      credentialId: "9216002714030CC1000624464C",
      level: "Intermedio",
      skills: ["Linux", "Bash", "Servers", "Terminal", "Administration"],
      image: "/certificate/linux-sena_page.jpg",
      url: "https://certificados.sena.edu.co/CertificadoDigital/com.sena.consultacer",
      category: "DevOps",
      featured: false,
      pdf: "/certificate/linux-sena.pdf",
    },
    {
      id: 6,
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
      pdf: "/certificate/python-sena.pdf",
    },
  ];

  const handleImageError = (certId: number) =>
    setImageErrors((prev) => ({ ...prev, [certId]: true }));

  const openModal = (index: number) => {
    setSelectedCert(index);
    setIsModalOpen(true);
  };

  const handleDownload = async () => {
    try {
      const pdfPath = certifications[selectedCert].pdf;
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `certificado-${certifications[selectedCert].credentialId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(certifications[selectedCert].pdf, "_blank");
    }
  };

  return (
    <section
      id="certificaciones"
      className="relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0a1126] py-20"
    >
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-cyan-500/5 blur-3xl"></div>
        <div
          className="absolute -right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-violet-500/5 blur-3xl"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="group mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 transition-colors group-hover:bg-green-400"></div>
            <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
              Credenciales Verificadas
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Mis{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300/80">
            Formación continua en React, frontend moderno y herramientas del
            ecosistema web
          </p>
        </div>

        {/* Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {cert.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-medium text-amber-300">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    Destacado
                  </span>
                </div>
              )}

              {/* Cert image */}
              <div
                className="relative aspect-video cursor-pointer overflow-hidden bg-gray-900"
                onClick={() => openModal(index)}
              >
                {!imageErrors[cert.id] ? (
                  <img
                    src={cert.image}
                    alt={`Certificado ${cert.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(cert.id)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="p-8 text-center">
                      <Award className="mx-auto mb-4 h-16 w-16 text-cyan-400/50 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-sm text-gray-400">{cert.title}</p>
                      <p className="mt-2 text-xs text-gray-500">
                        Click para ver
                      </p>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 font-medium text-white">
                    <Eye className="h-5 w-5" />
                    Ver certificado
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="flex-1 pr-2 text-sm leading-tight font-semibold text-white">
                    {cert.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-500/20 px-2 py-1 text-xs text-cyan-400">
                    {cert.category}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    {cert.issuer}
                  </span>
                  <span>{cert.date}</span>
                  <span className="text-amber-400">{cert.level}</span>
                </div>

                <p className="mb-3 truncate font-mono text-xs text-gray-500">
                  #{cert.credentialId}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="rounded border border-gray-600/50 bg-gray-700/50 px-2 py-1 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="rounded border border-gray-600/50 bg-gray-700/50 px-2 py-1 text-xs text-gray-400">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(index)}
                    className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/20 hover:text-cyan-400"
                  >
                    <Eye className="h-4 w-4" />
                    Ver
                  </button>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600/50 bg-gray-700/50 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-green-400/30 hover:bg-green-500/20 hover:text-green-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-700/50 bg-gray-900 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-medium text-gray-300">
                  {certifications[selectedCert].title}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(90vh-80px)] overflow-auto p-6">
              <div className="mb-6 rounded-xl border border-gray-700/50 bg-gray-900 p-4">
                <div className="flex justify-center">
                  {!imageErrors[certifications[selectedCert].id] ? (
                    <img
                      src={certifications[selectedCert].image}
                      alt={`Certificado ${certifications[selectedCert].title}`}
                      className="max-h-[500px] max-w-full rounded-lg object-contain"
                      onError={() =>
                        handleImageError(certifications[selectedCert].id)
                      }
                    />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="text-center">
                        <Award className="mx-auto mb-4 h-20 w-20 text-cyan-400/30" />
                        <p className="text-lg text-gray-400">
                          Imagen no disponible
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          {certifications[selectedCert].title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                    <Info className="h-5 w-5 text-cyan-400" />
                    Información del Certificado
                  </h4>
                  <div className="space-y-3">
                    {[
                      [
                        "Emisor",
                        certifications[selectedCert].issuer,
                        "text-white",
                      ],
                      [
                        "Fecha",
                        certifications[selectedCert].date,
                        "text-white",
                      ],
                      [
                        "ID",
                        certifications[selectedCert].credentialId,
                        "text-cyan-400 font-mono",
                      ],
                      [
                        "Nivel",
                        certifications[selectedCert].level,
                        "text-amber-400",
                      ],
                    ].map(([label, value, cls]) => (
                      <div
                        key={label}
                        className="flex justify-between border-b border-gray-700/30 py-2"
                      >
                        <span className="text-gray-400">{label}:</span>
                        <span className={`font-medium ${cls}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    Habilidades Validadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {certifications[selectedCert].skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-cyan-400/20 bg-gray-700/50 px-3 py-2 text-sm font-medium text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4 border-t border-gray-700/50 pt-6">
                <a
                  href={certifications[selectedCert].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <ExternalLink className="h-4 w-4" />
                  Verificar en Sitio Oficial
                </a>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-600/50 bg-gray-700/50 px-6 py-4 font-semibold text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-white"
                >
                  <Download className="h-4 w-4" />
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
