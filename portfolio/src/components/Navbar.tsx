import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-white">Saumik Keshari</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a>
            <a href="#skills" className="text-white hover:text-yellow-400 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-yellow-400 transition-colors">Projects</a>
            <a href="#experience" className="text-white hover:text-yellow-400 transition-colors">Experience</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 