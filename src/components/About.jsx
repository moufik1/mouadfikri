import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from "../assets/3.png"

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: 'Frontend', items: ['React', 'Vue.js', 'TailwindCSS', 'JavaScript'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Express', 'Laravel'] },
    { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { name: 'Tools', items: ['Git', 'Wordpress', 'Figma'] }
  ];

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '2+' },
    { label: 'Technologies', value: '7+' },
    { label: 'Satisfied Clients', value: '2+' }
  ];

  return (
    <section id="about" className="py-22 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background Elements */}
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Über Mich
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Über Mich
              </h3>
              <div className="space-y-4 text-gray-300">
              <p>
                Getrieben von meiner Leidenschaft für ansprechende und benutzerfreundliche Web-Erlebnisse,
                bin ich ein <strong className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Anfänger Frontend-Entwickler</strong>, der darauf brennt, zu lernen und zu wachsen.
                Ich bin bestrebt, eine solide Grundlage in modernen Web-Technologien aufzubauen und innovative Ideen durch Code zum Leben zu erwecken.
              </p>
              <p>
                Mit einer soliden Grundlage in modernen Web-Technologien und einer Hingabe für sauberen Code,
                strebe ich danach, praktische Berufserfahrung mit strukturiertem Lernen durch
                das deutsche duale Ausbildungssystem zu verbinden.
              </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center p-4 w-full max-w-md mx-auto"
          >
          <div 
            className="relative w-full h-64 md:h-80 lg:h-96 rounded-full overflow-hidden shadow-lg"
            style={{
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(147, 51, 234, 0.3)',
            }}
          >
            <img
              src={AboutImg}
              alt="About me"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
        </motion.div>

        </div>

        {/* Stats Section */}
        
      </div>
    </section>
  );
};

export default About;