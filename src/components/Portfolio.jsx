import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations';
import Experience from './Experience';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Portfolio = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('YOUR_AZURE_FUNCTION_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setFormStatus((prev) => ({ ...prev, submitted: false })), 5000);
    } catch (err) {
      setFormStatus({ submitting: false, submitted: false, error: err.message });
    }
  };

  const projects = [
    {
      id: 1,
      name: 'Toros',
      description: 'Pickleball tournament management system for organizing live events.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/tfq26/toros',
      demo: 'https://toros-demo.com',
      image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613',
      icon: '/bull-svgrepo-com-white.svg',
    },
    {
      id: 2,
      name: 'Libra',
      description: 'AI-powered tech assistant for troubleshooting & Q&A.',
      technologies: ['Node.js', 'React', 'Google Gemini AI'],
      github: 'https://github.com/tfq26/libra',
      demo: 'https://libra-demo.com',
      image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930',
      icon: '/libra-svgrepo-com-white.svg',
    },
    {
      id: 3,
      name: 'Aries',
      description: 'Personal blog on Cloud, AI, and web development.',
      technologies: ['Astro.js', 'React', 'Markdown'],
      github: 'https://github.com/tfq26/aries',
      demo: 'https://aries-blog.com',
      image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c',
      icon: '/aries-svgrepo-com-white.svg',
    },
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 60 },
    { name: 'Java', level: 75 },
    { name: 'Azure', level: 70 },
    { name: 'C#', level: 70 },
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-6 dark:bg-zinc-900 bg-blue-50"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white text-blue-800">
          Hi, I&apos;m <span className="text-blue-500">Taufeeq Ali</span>
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-blue-600 mb-8">
          Full Stack Developer & Cloud Enthusiast
        </motion.p>
        <div className="flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            Get In Touch
          </a>
          <a href="#projects" className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10">
            View My Work
          </a>
        </div>
        <motion.div className="mt-12 text-center">
          <div className="relative inline-block">
            <img src="/IMG_2260.JPG" alt="Taufeeq Ali" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500/30" />
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <a 
                href="https://github.com/tfq26" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6 text-blue-800" />
              </a>
              <a 
                href="https://linkedin.com/in/taufeeq-ali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6 text-blue-700" />
              </a>
              <a 
                href="mailto:taufeeq2608@gmail.com" 
                className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 dark:bg-zinc-900 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="dark:bg-gray-800 bg-blue-700 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-blue-50">About Me</h3>
              <p className="text-blue-100 dark:text-white mb-4">
                I&apos;m a passionate Full Stack Developer with expertise in modern web apps using JavaScript, React, and Node.js.
              </p>
              <a href="/Software Development Resume 2025.pdf" target="_blank" className="text-blue-100 dark:text-blue-400 hover:underline">
                View My Resume →
              </a>
            </div>
            <div className="dark:bg-gray-800 bg-sky-100 rounded-lg p-6 space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm text-blue-950 dark:text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 dark:bg-zinc-900 bg-blue-50`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-blue-800">Professional Experience</h2>
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-blue-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-blue-800">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 dark:bg-zinc-900 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-blue-800">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="p-3 rounded bg-white text-gray-900" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-3 rounded bg-white text-gray-900" />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 rounded bg-white text-gray-900" />
            <textarea name="message" rows="4" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded bg-white text-gray-900"></textarea>
            <button type="submit" disabled={formStatus.submitting} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus.submitted && <p className="text-green-400">Message sent successfully!</p>}
            {formStatus.error && <p className="text-red-400">{formStatus.error}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 dark:border-blue-700 text-center dark:bg-zinc-900">
        <p className="text-gray-400 dark:text-white">&copy; {new Date().getFullYear()} Taufeeq Ali. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
