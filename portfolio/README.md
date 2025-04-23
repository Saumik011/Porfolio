# Saumik Keshari - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations and dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive UI**: 
  - Animated typing effect for role display
  - Hover effects on all interactive elements
  - Smooth scrolling navigation
  - Contact form with email integration
- **Sections**:
  - Hero section with dynamic role animation
  - Skills & Expertise with external documentation links
  - Project showcase with live demos and GitHub links
  - Work experience timeline
  - Contact form with EmailJS integration
- **Performance Optimized**: Fast loading and smooth transitions
- **Accessibility**: WCAG 2.1 compliant
- **Cross-browser Compatible**: Works on all modern browsers

## 🛠️ Technologies Used

- **Frontend Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Integration**: EmailJS
- **Build Tool**: Create React App
- **Version Control**: Git
- **Deployment**: [Your deployment platform]

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Saumik011/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Set up EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Update the credentials in `src/config/emailjs.ts`

5. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🔧 Configuration

### Email Setup
Update `src/config/emailjs.ts` with your EmailJS credentials:
```typescript
emailjs.init('YOUR_PUBLIC_KEY');

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  userId: 'YOUR_PUBLIC_KEY'
};
```

### Resume
Place your resume PDF in the `public` folder as `resume.pdf`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── profile.jpg
│   └── project-images/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   └── emailjs.ts
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## 🎨 Customization

### Updating Content
- Edit components in `src/components/` to update content
- Update images in `public/`
- Modify email template in EmailJS dashboard
- Update social media links in components

### Styling
- Tailwind classes for component styling
- Framer Motion for animations
- Custom transitions and hover effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: 320px and up
  - Tablet: 768px and up
  - Desktop: 1024px and up
  - Large Desktop: 1280px and up

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service

## 👤 Contact

- GitHub: [Saumik011](https://github.com/Saumik011)
- LinkedIn: [Saumik Keshari](https://www.linkedin.com/in/saumik-keshari/)
- Twitter: [@Saumik_Keshari](https://x.com/Saumik_Keshari)
- Email: saumikkeshari@gmail.com

## 📄 License

This project is licensed under the MIT License.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Code Quality

- Lint your code:
```bash
npm run lint
```

- Format your code:
```bash
npm run format
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Headless UI](https://headlessui.dev/)
- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/) 