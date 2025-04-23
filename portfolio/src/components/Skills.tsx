import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', url: 'https://reactjs.org' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', url: 'https://nodejs.org' },
      { name: 'Express', url: 'https://expressjs.com' },
      { name: 'Python', url: 'https://www.python.org' },
      { name: 'Django', url: 'https://www.djangoproject.com' },
      { name: 'SQL', url: 'https://www.postgresql.org' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', url: 'https://git-scm.com' },
      { name: 'Docker', url: 'https://www.docker.com' },
      { name: 'AWS', url: 'https://aws.amazon.com' },
      { name: 'Figma', url: 'https://www.figma.com' },
      { name: 'Agile', url: 'https://agilemanifesto.org' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800/80 group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-gray-300 flex items-center justify-between group/item hover:bg-gray-700/50 p-2 rounded-lg transition-all"
                  >
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 group-hover/item:scale-125 transition-transform"></span>
                      <span className="group-hover/item:text-white transition-colors">{skill.name}</span>
                    </div>
                    <a
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-all transform opacity-0 group-hover/item:opacity-100 hover:scale-110"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
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