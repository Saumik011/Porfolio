import * as React from 'react';
import { motion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import 'animate.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-darker"
    >
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </motion.div>
  );
}

export default App; 