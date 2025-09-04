import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Documents = () => {
  const [hoveredDoc, setHoveredDoc] = useState(null);

  const documents = [
    {
      id: 1,
      title: 'Lebenslauf',
      description: 'Mein professioneller Lebenslauf mit Arbeitserfahrung und Fähigkeiten',
      type: 'PDF',
      downloadUrl: '/documents/Lebenslauf.pdf',
      icon: '📄',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Akademische Ausbildung',
      description: "Bachelor-Abschluss und Diplome",
      type: 'PDF',
      downloadUrl: '/documents/Akademische_Ausbildung.pdf',
      icon: '🎓',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Zertifizierungen',
      description: 'Sammlung meiner professionellen Zertifizierungen',
      type: 'PDF',
      downloadUrl: '/documents/Zertifizierungen.pdf',
      icon: '🏆',
      color: 'from-amber-500 to-red-500'
    },
    {
      id: 4,
      title: 'Deutsch Zertifikat',
      description: 'Mein Deutsch-Sprachzertifikat',
      type: 'PDF',
      downloadUrl: '/documents/Deutsch_Zertifikat.pdf',
      icon: '📑',
      color: 'from-yellow-500 to-red-600'
    }
  ];

  const handleDownload = async (url) => {
    try {
      // Get the base URL for production
      const baseUrl = window.location.origin;
      const fullUrl = `${baseUrl}${url}`;

      // For mobile devices
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        window.location.href = fullUrl;
        return;
      }

      // For desktop browsers
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = url.split('/').pop(); // Get filename from URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download fehlgeschlagen:', error);
      // Fallback to direct navigation
      window.location.href = url;
    }
  };

  return (
    <section id="dokumente" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Dokumente & Unterlagen
          </h2>
          <p className="text-gray-400 text-lg">Zugriff auf meine professionellen Dokumente und Zertifikate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredDoc(doc.id)}
              onHoverEnd={() => setHoveredDoc(null)}
              className="relative group"
            >
              <motion.div
                className={`h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                  hover:border-transparent transition-all duration-300 relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300`} />

                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredDoc === doc.id ? 1.1 : 1 }}
                  className="text-5xl mb-6"
                >
                  {doc.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  {doc.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {doc.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${doc.color} 
                    bg-opacity-10 text-white`}>
                    {doc.type}
                  </span>
                  <button
                    onClick={() => handleDownload(doc.downloadUrl)}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      handleDownload(doc.downloadUrl);
                    }}
                    className={`relative z-10 bg-gradient-to-r ${doc.color} px-4 py-2 rounded-xl 
                      flex items-center gap-2 text-sm font-medium shadow-lg 
                      active:scale-95 transition-transform duration-150`}
                  >
                    <span>Herunterladen</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;