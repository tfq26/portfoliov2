import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations';
import Experience from './Experience';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    const heroRef = useRef(null);

    const projects = [
        {
            id: 1,
            name: 'Toros',
            description: 'A Pickleball tournament management system for organizing and tracking live tournaments.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/tfq26/toros',
            image: 'https://images.unsplash.com/photo-1621314724606-fbf4c4231613?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            demo: 'https://toros-demo.com',
            icon: '/bull-svgrepo-com-white.svg'
        },
        {
            id: 2,
            name: 'Libra',
            description: 'An AI-powered technology assistant for troubleshooting and answering questions.',
            technologies: ['Node.js', 'React', 'Google Gemini AI'],
            github: 'https://github.com/tfq26/libra',
            image: 'https://images.unsplash.com/photo-1755441172753-ac9b90dcd930?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            demo: 'https://libra-demo.com',
            icon: '/libra-svgrepo-com-white.svg'
        },
        {
            id: 3,
            name: 'Aries',
            description: 'A personal blog focusing on Cloud technology, AI, and web development.',
            technologies: ['Astro.js', 'React', 'Markdown'],
            image: 'https://images.unsplash.com/photo-1756965812897-3f4c2a6c242c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            github: 'https://github.com/tfq26/aries',
            demo: 'https://aries-blog.com',
            icon: '/aries-svgrepo-com-white.svg'
        }
    ];

    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 60 },
        { name: 'Java', level: 75 },
        { name: 'Azure', level: 70 },
        { name: 'C#', level: 70 },
    ];

    useEffect(() => {
        document.documentElement.style.setProperty('--nav-height', '4rem');
    }, []);

    // Scroll to section function - currently not used but kept for future reference
    // const scrollToSection = (id) => {
    //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            {/* Add padding to account for fixed navbar */}
            <div className="h-[var(--nav-height,4rem)]" />
            
            {/* Hero Section */}
            <motion.section 
                id="home"
                ref={heroRef}
                className="min-h-[calc(100vh-var(--nav-height,4rem))] flex flex-col justify-center items-center text-center px-4 py-12 md:py-20"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <div className="text-center lg:text-left">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi, I&apos;m <span className="text-blue-400">Taufeeq Ali</span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Full Stack Developer & Cloud Enthusiast
                    </motion.p>
                    <motion.div 
                        className="flex flex-wrap justify-center lg:justify-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a 
                            href="#contact"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                        >
                            Get In Touch
                        </a>
                        <a 
                            href="#projects"
                            className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors duration-300"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </div>
                <motion.div 
                    className="relative mt-12 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img 
                                src="/IMG_2260.JPG" 
                                alt="Taufeeq Ali" 
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500/30"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Skills Section */}
            <section 
                id="skills"
                className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    &quot;Everyone can code, a few can develop but only you can create something unique&quot;
                                </h1>
                                </motion.div>
                                
                                <p className="text-gray-300 text-lg">
                                    I&apos;m a passionate Full Stack Developer with expertise in building modern web applications. 
                                    With a strong foundation in JavaScript, React, and Node.js, I create efficient and 
                                    scalable solutions that deliver exceptional user experiences.
                                </p>
                                <p className="text-gray-300 text-lg">
                                    My journey in software development started with a curiosity for how things work, 
                                    which led me to pursue a career in technology. I&apos;m always eager to learn and 
                                    stay updated with the latest industry trends and best practices.
                                </p>
                            </motion.div>
                            
                            <div className="pt-4">
                                <a 
                                    href="/Software Development Resume 2025.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View My Resume
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-[url('/public/pattern.svg')] opacity-10 rounded-2xl"></div>
                            <h3 className="text-xl font-semibold text-white mb-6">My Skills</h3>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div 
                                                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section 
                id="experience"
                className="py-20 px-4"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                    </motion.div>
                    <Experience />
                </div>
            </section>

            {/* Projects Section */}
            <section 
                id="projects"
                className="py-20 px-4 bg-gray-50 dark:bg-gray-800/30"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section 
                id="contact"
                className="py-20 px-4"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Have a project in mind or want to chat? Feel free to reach out!
                        </p>
                    </motion.div>

                    <motion.form 
                        className="space-y-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    required 
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                required
                            ></textarea>
                        </div>
                        <div className="pt-2">
                            <button 
                                type="submit" 
                                className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img 
                                src="/wink-tongue-svgrepo-com.svg" 
                                alt="Logo" 
                                className="h-6 w-6"
                            />
                            <span className="text-gray-400">© {new Date().getFullYear()} Taufeeq Ali. All rights reserved.</span>
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a 
                                href="https://github.com/tfq26" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.565 9.565 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/taufeeq-ali-260366215" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a 
                                href="mailto:taufeeq2608@gmail.com" 
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <span className="sr-only">Email</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
