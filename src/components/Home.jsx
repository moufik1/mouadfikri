import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/aboutt.png';


const Home = () => {
  const text = "Hi, I'm";
  const name = "Mouad Fikri";

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="startseite" className="min-h-screen flex items-center bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
              <h2 className="text-xl font-medium">Herzlich willkommen in meinem Portfolio</h2>
            </motion.div>

            <motion.div className="space-y-2">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold"
                {...fadeInUp}
              >
                {text}{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {name}
                </span>
              </motion.h1>
              
              <motion.h2 
  className="text-2xl md:text-3xl text-gray-400"
  {...fadeInUp}
  transition={{ delay: 0.2 }}
>
  Kaufmann im E-Commerce
</motion.h2>
</motion.div>

<motion.p 
  className="text-gray-400 text-lg max-w-lg"
  {...fadeInUp}
  transition={{ delay: 0.3 }}
>
  Spezialisiert auf die Gestaltung digitaler Handelserlebnisse und Online-Shop-Systeme. 
  Experte für E-Commerce-Plattformen, Online-Marketingstrategien und kundenorientierte 
  Verkaufsprozesse im digitalen Handel.
</motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projekte"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projekte ansehen
              </motion.a>
              <motion.a
                href="#kontakt"
                className="px-8 py-3 border border-blue-500 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Auf geht's!
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex gap-6 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { href: "https://github.com/moufik1", icon: "github" },
                { href: "https://www.linkedin.com/in/mouadfikri/", icon: "linkedin" },
                { href: "mailto:mouadfikri0@gmail.com", icon: "email" }
              ].map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="sr-only">{social.icon}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === "github" && (
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    )}
                    {social.icon === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {social.icon === "email" && (
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="block order-1 md:order-2 mt-8 md:mt-0"
          >
            <div className="relative w-full h-[220px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-48 h-48 md:w-80 md:h-96 relative cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-blue-500/30"
                    style={{
                      boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(147, 51, 234, 0.3)',
                      objectPosition: 'center 68%' /* Adjust this to control cropping position */
                    }}
                    whileHover={{ 
                      rotate: 3,
                      boxShadow: '0 0 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(147, 51, 234, 0.4)'
                    }}
                    loading="eager"
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
                    whileHover={{ opacity: 0 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;