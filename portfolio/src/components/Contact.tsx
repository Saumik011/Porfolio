import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-darker">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              >
                <FaEnvelope className="w-5 h-5 mr-3" />
                your.email@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5 mr-3" />
                github.com/yourusername
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5 mr-3" />
                linkedin.com/in/yourusername
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5 mr-3" />
                twitter.com/yourusername
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-lighter dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-lighter dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-lighter dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 