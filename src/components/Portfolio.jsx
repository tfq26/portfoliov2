import { useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import LazyLoad from '../utils/LazyLoad';

// PrimeReact Imports
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

// Lazy load components
const Experience = LazyLoad(() => import('./Experience'));
const ProjectCard = LazyLoad(() => import('./ProjectCard'));

// --- Reusable Components for Consistency ---

// Section wrapper for consistent padding and spacing
const Section = ({ id, children }) => (
  <section id={id} className="w-full py-16 md:py-24 px-6">
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

// Standardized Section Title
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
    {children}
  </h2>
);

// --- Main Portfolio Component ---

const Portfolio = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);

  const projects = [
        {
      id: 1,
      name: 'Toros',
      description: `Pickleball tournament management system for organizing live events. It uses React, Node.js, MongoDB, and Express to create a modern and responsive web application. It also uses Azure Cloud Services and AI Foundry to securely store, process, and respond to user queries.`,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      working: true,
      github: 'https://github.com/tfq26/toros',
      image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613',
      images: ['/Toros.webp'],
      icon: '/bull-svgrepo-com-white.svg',
      status: 'In Development',
      shortDescription: 'Pickleball tournament management system for organizing live events.',
    },
    {
      id: 2,
      name: 'Libra',
      description: 'AI-powered tech assistant built to help users with troubleshooting and Q&A. It uses Azure Cloud Services and AI Foundry to securely store, process, and respond to user queries. Built with Vue.js for the frontend, the experience of using Libra should be simple, intuitive and engaging.',
      technologies: ['Vue.js', 'Azure AI Foundry', 'Firebase Auth', 'Azure Cosmos DB'],
      github: 'https://github.com/tfq26/libra',
      demo: 'https://libra-swart.vercel.app/',
      image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930',
      images: ['/libra1.webp', '/libra2.webp', '/libra3.webp'],
      icon: '/libra-svgrepo-com-white.svg',
      status: 'Launched',
      working: false,
      shortDescription: 'AI-powered tech assistant for troubleshooting & Q&A.',
    },
    {
      id: 3,
      name: 'Aries',
      description: 'Personal blog on Cloud, AI, and web development. It uses Astro.js, React, and Markdown to create a modern and responsive blog.',
      technologies: ['Astro.js', 'React', 'Markdown'],
      github: 'https://github.com/tfq26/aries',
      working: true,
      image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c',
      icon: '/aries-svgrepo-com-white.svg',
      status: 'In Development',
      shortDescription: 'Personal blog on Cloud, AI, and web development.',
    },
  ];

  const skills = [
    { name: 'React & Vue.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Java/Spring Boot', level: 75 },
    { name: 'Azure Cloud Services', level: 70 },
    { name: 'C#/.NET', level: 70 },
    { name: 'Gemini API', level: 80 },
    { name: 'HTML', level: 80 },
  ];

  // Base styles for social links
  const socialLinkClass = "bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors duration-300";

  return (
    // UPDATED: Added a subtle blue gradient for light mode. Dark mode remains the same.
    <div>
      
      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        // UPDATED: Made the background transparent to let the new gradient show through.
        className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-transparent"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
         <div className="relative mb-8">
            <img 
                src="/IMG_2260.webp" 
                alt="Taufeeq Ali" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-lg" 
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
              <a href="https://github.com/tfq26" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="GitHub">
                <FiGithub className="w-6 h-6 text-slate-900 dark:text-slate-200" />
              </a>
              <a href="https://linkedin.com/in/taufeeq-ali" target="_blank" rel="noopener noreferrer" className={socialLinkClass} aria-label="LinkedIn">
                <FiLinkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="mailto:taufeeq2608@gmail.com" className={socialLinkClass} aria-label="Email">
                <FiMail className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>

        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Taufeeq Ali</span>
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
          Full Stack Developer & Cloud Enthusiast crafting modern, scalable, and user-friendly web applications.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            label="Get In Touch"
            pt={{
                root: 'px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md',
            }}
            onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
          />
          <Button
            label="View My Work"
            pt={{
                root: 'px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 font-semibold',
            }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </motion.section>

      {/* About Section */}
      <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8 md:p-10">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Left Side: Text */}
            <div className="md:col-span-3">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I&apos;m a passionate Full Stack Developer with expertise in building modern web applications using JavaScript, React, and Node.js. As a Cloud Enthusiast, I have a strong command of Azure Cloud Services and AI integration. I enjoy learning new technologies and challenging myself with complex projects.
              </p>
              <a
                href="/Software Development Resume 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group"
              >
                View My Resume
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* Right Side: Hobbies */}
            <div className="md:col-span-2">
              <div className="bg-slate-100/70 dark:bg-slate-800 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">When I&apos;m not coding...</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="bg-blue-500/10 p-2 rounded-full"><IoGameControllerOutline className="w-6 h-6 text-blue-500" /></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Playing video games</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-blue-500/10 p-2 rounded-full"><span className="text-xl">🎾</span></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Pickleball & Tennis</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-blue-500/10 p-2 rounded-full"><span className="text-xl">🍳</span></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Cooking new recipes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-8 md:p-10 space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-md text-slate-700 dark:text-slate-200">{skill.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <ProgressBar
                value={skill.level}
                showValue={false}
                pt={{
                  root: 'h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full',
                  value: 'bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full',
                }}
              />
            </div>
          ))}
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle>Professional Journey</SectionTitle>
          <div className="p-8 md:p-10">
            <Experience />
          </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </Section>

      {/* Footer */}
      <footer id="footer-contact" className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let&apos;s Connect!</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg">
              I&apos;m currently seeking new opportunities. Feel free to reach out via email or connect with me on social media.
            </p>
            <div className="flex space-x-6 mb-8">
                <a href="https://github.com/tfq26" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                    <FiGithub className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/taufeeq-ali" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                    <FiLinkedin className="w-7 h-7" />
                </a>
                <a href="mailto:taufeeq2608@gmail.com" aria-label="Email" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                    <FiMail className="w-7 h-7" />
                </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Taufeeq Ali. All rights reserved.
            </p>
             <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                Built with React, Tailwind CSS & Framer Motion. Deployed on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;