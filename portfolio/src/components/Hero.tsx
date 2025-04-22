import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Full Stack Developer",
  "Software Developer",
  "Creative Developer"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50 - Math.random() * 30);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const currentRole = roles[currentRoleIndex];
    const updatedText = isDeleting
      ? currentRole.substring(0, text.length - 1)
      : currentRole.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentRole) {
      setIsDeleting(true);
      setDelta(500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setDelta(1);
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Saumik Keshari
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-300 mb-6">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>India</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>3+ years experience</span>
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-200 mb-12"
        >
          <span className="inline-block min-h-[2em]">
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-[2px] h-[1em] bg-yellow-400 ml-1"
            />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 