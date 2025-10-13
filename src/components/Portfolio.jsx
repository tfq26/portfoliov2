import { useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import LazyLoad from '../utils/LazyLoad';

// PrimeReact Imports
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Card } from 'primereact/card';

// Lazy load components
const Experience = LazyLoad(() => import('./Experience'));
const ProjectCard = LazyLoad(() => import('./ProjectCard'));

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
      status: 'Updating',
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
      shortDescription: 'AI-powered tech assistant for troubleshooting & Q&A.',
    },
    {
      id: 3,
      name: 'Aries',
      description: 'Personal blog on Cloud, AI, and web development. It uses Astro.js, React, and Markdown to create a modern and responsive blog.',
      technologies: ['Astro.js', 'React', 'Markdown'],
      github: 'https://github.com/tfq26/aries',
      demo: 'https://aries-blog.com',
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

  const sectionBgClass = 'dark:bg-zinc-900 bg-blue-50';

  return (
    <div className={`${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        className={`min-h-screen flex flex-col justify-center items-center px-6 ${sectionBgClass}`}
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
          <Button
            label="Get In Touch"
            link
            pt={{
                root: 'px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white',
                label: 'text-white'
            }}
            onClick={() => window.location.href = '#contact'}
          />
          <Button
            label="View My Work"
            link
            pt={{
                root: 'px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10'
            }}
            onClick={() => window.location.href = '#projects'}
          />
        </div>
        <motion.div className="mt-12 text-center">
          <div className="relative inline-block">
            <img src="/IMG_2260.webp" alt="Taufeeq Ali" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500/30" />
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

      <section id="about" className={`py-20 px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto min-h-[calc(100vh-16rem)]">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">About Me</h2>
          <div className="grid lg:grid-cols-1 gap-12">

            {/* Skills Progress Card (PrimeReact Card) */}
            {/* About Me Card (PrimeReact Card) */}
            <Card
                className="dark:bg-gray-800 bg-blue-700 p-6 space-y-4 rounded-2xl p-card:rounded-2xl"
                pt={{
                    root: 'dark:bg-gray-800 bg-blue-700 rounded-lg p-6 space-y-4',
                    body: 'p-0',
                    content: 'p-0'
                }}
            >
              <p className="text-blue-100 dark:text-white mb-4 text-center text-2xl">
                I&apos;m a passionate Full Stack Developer with expertise in modern web apps using JavaScript, React, and Node.js.
                I am also a Cloud Enthusiast with expertise in Azure Cloud Services and AI.
                I enjoy learning new technologies and challenging myself with complex projects.
                While I&apos;m not coding, I enjoy cooking, playing video games, and playing pickleball and tennis. 
              </p>
            
              <a href="/Software Development Resume 2025.pdf" target="_blank" className="text-blue-100 dark:text-blue-400 hover:underline">
                View My Resume →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Spacer div (Replaced PrimeReact Divider) */}
      <div className={`h-8 w-full ${sectionBgClass}`} aria-hidden="true" />

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Skills</h2>
          <div className="grid lg:grid-cols-1 gap-12">

            {/* Skills Progress Card (PrimeReact Card) */}
            <Card
                className="dark:bg-gray-800 bg-sky-100 rounded-lg p-6 space-y-4"
                pt={{
                    root: 'dark:bg-gray-800 bg-sky-100 rounded-lg p-6 space-y-4',
                    body: 'p-0',
                    content: 'p-0',
                }}
                title="Skills Proficiency"
            >
              {skills.map((skill) => (
                // Added mb-6 for spacing between skill blocks, last:mb-0 removes margin on the last item
                <div key={skill.name} className="mb-6 last:mb-0">
                  <div className="flex justify-between text-sm text-blue-950 dark:text-white">
                    {/* Added mb-3 to space text from the bar */}
                    <span className="font-semibold mb-3">{skill.name}</span>
                    <span className="font-semibold mb-3">{skill.level}%</span>
                  </div>
                  <ProgressBar
                    value={skill.level}
                    showValue={false}
                    pt={{
                      root: 'w-full bg-gray-700 rounded-full h-2',
                      value: 'bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full',
                    }}
                  />
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      {/* Spacer div (Replaced PrimeReact Divider) */}
      <div className={`h-8 w-full ${sectionBgClass}`} aria-hidden="true" />

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto">
          <Experience />
        </div>
      </section>

      {/* Spacer div (Replaced PrimeReact Divider) */}
      <div className={`h-8 w-full ${sectionBgClass}`} aria-hidden="true" />

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Spacer div (Replaced PrimeReact Divider) */}
      <div className={`h-8 w-full ${sectionBgClass}`} aria-hidden="true" />

      {/* Footer */}
      <footer className={`py-12 ${sectionBgClass}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6 mb-6">
              <a 
                href="https://github.com/tfq26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/taufeeq-ali" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:taufeeq2608@gmail.com" 
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Built With</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Tailwind CSS, Framer Motion</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Hosting</h3>
                <p className="text-gray-600 dark:text-gray-300">Deployed on Vercel</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Attribution</h3>
                <p className="text-gray-600 dark:text-gray-300">Icons by Icons8</p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 w-full pt-6 mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Taufeeq Ali. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;