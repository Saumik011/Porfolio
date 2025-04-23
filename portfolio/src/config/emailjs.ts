import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID (Public Key)
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || '');

export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  userId: process.env.REACT_APP_EMAILJS_USER_ID || ''
}; 