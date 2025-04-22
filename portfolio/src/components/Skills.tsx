import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'SQL'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Figma', 'Agile'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 