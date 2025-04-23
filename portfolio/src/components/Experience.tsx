import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Application Engineer',
    company: 'Axcend Automation',
    period: '2025 March - Present',
    description: [
      'Led development of enterprise-level applications',
      'Implemented CI/CD pipelines and automated testing',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Trainee Engineer',
    company: 'Axcend Automation',
    period: '2024 July - 2025 March',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with design team to implement UI/UX improvements',
      'Optimized application performance and reduced load times',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Axcend Automation',
    period: '2024 January - 2024 June',
    description: [
      'Built responsive websites using modern frameworks',
      'Worked with clients to implement feature requests',
      'Participated in agile development processes',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

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
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-gray-800/80 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 group-hover:text-gray-300 transition-colors hover:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Timeline dot */}
              <div className="absolute top-8 -left-4 md:left-auto md:right-0 transform md:translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 border-4 border-gray-900 shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-yellow-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 