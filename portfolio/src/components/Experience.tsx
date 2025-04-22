import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Led development of enterprise-level applications',
      'Implemented CI/CD pipelines and automated testing',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with design team to implement UI/UX improvements',
      'Optimized application performance and reduced load times',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: [
      'Built responsive websites using modern frameworks',
      'Worked with clients to implement feature requests',
      'Participated in agile development processes',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
              } md:w-1/2`}
            >
              <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 