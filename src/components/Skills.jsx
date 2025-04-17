import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML/CSS', level: 90, color: '#FF6B6B' },
        { name: 'JavaScript', level: 85, color: '#4ECDC4' },
        { name: 'React', level: 85, color: '#45B7D1' },
        { name: 'Vue.js', level: 80, color: '#42B883' },
        { name: 'Tailwind CSS', level: 85, color: '#38BDF8' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80, color: '#68A063' },
        { name: 'Python', level: 75, color: '#3776AB' },
        { name: 'Express.js', level: 80, color: '#000000' },
        { name: 'RESTful APIs', level: 85, color: '#FF5733' },
        { name: 'GraphQL', level: 20, color: '#E535AB' }
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🔧',
      skills: [
        { name: 'MongoDB', level: 80, color: '#4DB33D' },
        { name: 'PostgreSQL', level: 30, color: '#336791' },
        { name: 'Git', level: 85, color: '#F05032' },
        { name: 'Wordpress', level: 85, color: '#2496ED' },
        { name: 'AWS', level: 10, color: '#FF9900' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
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
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              onHoverStart={() => setSelectedCategory(index)}
              onHoverEnd={() => setSelectedCategory(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <motion.span
                        className="text-sm font-medium text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: selectedCategory === index ? 1 : 0 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          ease: "easeOut",
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 pt-4 border-t border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedCategory === index ? 1 : 0.5 }}
              >
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ 
                        backgroundColor: `${skill.color}20`,
                        color: skill.color 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;