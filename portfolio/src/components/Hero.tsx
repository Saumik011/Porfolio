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
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-screen">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center px-2 group"
          >
            <div className="relative w-full overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300"></div>
              <img
                src="/profile.jpg"
                alt="Saumik Keshari"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full flex flex-col justify-center -ml-4 lg:-ml-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 whitespace-nowrap group">
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
              <div className="flex flex-col items-center space-y-4 text-gray-300 text-lg mb-4 ml-[4.5rem]">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center group hover:text-yellow-400 transition-colors">
                    <FaMapMarkerAlt className="mr-2 text-xl group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">Bangalore, India</span>
                  </div>
                  <div className="flex items-center group hover:text-yellow-400 transition-colors">
                    <FaCalendarAlt className="mr-2 text-xl group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">2+ years experience</span>
                  </div>
                </div>
                <div className="flex space-x-6 justify-center">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl lg:text-3xl text-white mb-16 text-center group"
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