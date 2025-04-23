import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Job Portal',
    description: 'A full-stack web application built with React and Node.js',
    image: '/job-portal.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Saumik011/Projects',
    demo: 'https://job-portal.com',
  },
  {
    title: 'Blog Website',
    description: 'A responsive Blog platform with payment integration',
    image: '/blog.png',
    technologies: ['React', 'Express', 'MySQL'],
    github: 'https://github.com/Saumik011/Blog',
    demo: 'https://tourismblog.com',
  },
  {
    title: 'Content Management Tool',
    description: 'A Content Management Tool with HTML, CSS, and Javascript',
    image: '/contentManagment.png',
    technologies: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Saumik011/Bharat-intern/tree/main/Content%20management%20tool',
    demo: 'https://contentManagementTool.com'
  },
  {
    title: 'Project Management Tool',
    description: 'A Project Management Tool with WebSocket integration',
    image: '/projectManagement.png',
    technologies: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/Saumik011/Bharat-intern/tree/main/Project%20management%20tool',
    demo: 'https://projectManagementTool.com'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm transition-all duration-300 hover:bg-yellow-400/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaExternalLinkAlt className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 