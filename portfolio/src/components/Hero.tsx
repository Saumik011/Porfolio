import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Full Stack Developer",
  "Software Developer"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50 - Math.random() * 30);

  const tick = useCallback(() => {
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
  }, [currentRoleIndex, isDeleting, text.length]);

  useEffect(() => {
    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section 
      id="home" 
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-0"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300"></div>
              <img
                src="/profile.jpg"
                alt="Saumik Keshari"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full flex flex-col justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 group">
                <span className="text-gray-300 hover:text-white transition-colors">I </span>
                <span className="text-gray-300 hover:text-white transition-colors">am </span>
                <motion.span 
                  className="inline-block bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent bg-[length:200%_100%] hover:via-yellow-300 transition-colors"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Saumik Keshari
                </motion.span>
              </h1>
              <div className="flex flex-col space-y-4 text-gray-300 text-base sm:text-lg mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center group hover:text-yellow-400 transition-colors">
                    <FaMapMarkerAlt className="mr-2 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">Bangalore, India</span>
                  </div>
                  <div className="flex items-center group hover:text-yellow-400 transition-colors">
                    <FaCalendarAlt className="mr-2 text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">2+ years experience</span>
                  </div>
                </div>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 text-center lg:text-left group"
            >
              <span className="inline-block min-h-[2em] group-hover:text-yellow-400 transition-colors">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-[1em] bg-yellow-400 ml-2 group-hover:bg-white"
                />
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 