import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { emailConfig } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const sendEmail = async () => {
    setIsLoading(true);
    setError('');
    setShowConfirmation(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'saumikkeshari@gmail.com',
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.userId
      );

      setShowSuccessMessage(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setShowSuccessMessage(false), 5000);
    } catch (err) {
      console.error('Email error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg group hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
              Feel free to reach out to me for any questions or opportunities!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:saumikkeshari@gmail.com"
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-all transform hover:translate-x-2"
              >
                <FaEnvelope className="w-5 h-5 mr-3" />
                saumikkeshari@gmail.com
              </a>
              <a
                href="https://github.com/Saumik011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-all transform hover:translate-x-2"
              >
                <FaGithub className="w-5 h-5 mr-3" />
                github.com/Saumik011
              </a>
              <a
                href="https://www.linkedin.com/in/saumik-keshari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-all transform hover:translate-x-2"
              >
                <FaLinkedin className="w-5 h-5 mr-3" />
                linkedin.com/in/saumik-keshari
              </a>
              <a
                href="https://x.com/Saumik_Keshari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-all transform hover:translate-x-2"
              >
                <FaTwitter className="w-5 h-5 mr-3" />
                twitter.com/Saumik_Keshari
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all hover:border-yellow-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all hover:border-yellow-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all hover:border-yellow-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Send Message?</h3>
              <p className="text-gray-300 mb-6">Are you sure you want to send this message?</p>
              <div className="flex space-x-4">
                <button
                  onClick={sendEmail}
                  className="flex-1 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Yes, Send
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message Popup */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <span>Message sent successfully!</span>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact; 