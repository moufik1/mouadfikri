import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import posSystemImage from '../assets/POS_System.jpeg';
import coffeeReservation from '../assets/Coffe_Booking.jpeg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('alle');

  const projects = [
    {
      id: 1,
      title: 'Kaffeehaus Kassensystem',
      category: 'app',
      description: 'Ein modernes Point-of-Sale-System für Kaffeehäuser mit Bestellverwaltung, Inventarverfolgung und Verkaufsberichten. Entwickelt mit benutzerfreundlicher Oberfläche für Baristas.',
      technologies: ['Python', 'CustomTkinter', 'SQL Lite'],
      image: posSystemImage,
      github: 'https://github.com/moufik1/coffee-pos',
      live: 'https://coffee-pos-demo.example.com'
    },
    {
      id: 2,
      title: 'Kaffeehaus Reservierungssystem',
      category: 'web',
      description: 'Eine intuitive Webplattform für Tischreservierungen in Kaffeehäusern mit Echtzeit-Verfügbarkeit, Buchungsverwaltung und automatischem Bestätigungssystem.',
      technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'EmailJS'],
      image: coffeeReservation,
      github: 'https://github.com/moufik1/Openspacee',
      live: 'https://coffee-reservation.example.com'
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'alle' ? true : project.category === activeFilter
  );

  return (
    <section id="projekte" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 p-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Meine Projekte
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie meine neuesten Arbeiten und Nebenprojekte
          </p>
          
          <div className="flex justify-center gap-4 mt-10">
            {['alle', 'web', 'app'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === 'alle' ? 'Alle' : filter === 'web' ? 'Web' : 'App'}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full">
                      {project.category === 'web' ? 'Web' : 'App'}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      Code ansehen
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
                    >
                      Live Demo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;