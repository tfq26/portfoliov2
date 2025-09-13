import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';

const experiences = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'ARGO Data',
    period: 'Jun 2025 - Aug 2025',
    location: 'Richardson, TX, USA',
    description: 'Software Engineering Intern working with EDMS (Early Detection & Monitoring Service) Team to support banking customer infrastructure',
    achievements: [
      'Enhanced and maintained internal .NET 3 web tools, fixing bugs, improving UI/UX, and optimizing performance',
      'Developed a Customer Map using MapLibre JS and .NET 3 with ASP, displaying 10,000+ customer office locations with real-time statuses',
      'Built an Alerts Dashboard in .NET 3 with ASP for monitoring production alerts by day, server, or cumulative totals',
      'Initiated development of a modern .NET 8 + Vue.js web tool with improved performance and enhanced UI/UX',
      'Improved reporting pages for better customer environment metrics and team performance insights'
    ],
    technologies: ['.NET', 'JavaScript', 'MapLibre', 'Vue.js', 'ASP.NET']
  }
];

const Experience = () => {
  return (
    <motion.section 
      id="experience"
      className="relative py-20 overflow-hidden "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer(0.1, 0.2)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn('up', 0.2)}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`mb-16 md:mb-24 relative group ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
              variants={fadeIn('up', 0.3 + index * 0.1)}
            >
              <div className="md:flex items-center justify-between">
                {/* Left side - Date and Company */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-3'}`}>
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600/50 text-blue-100 mb-3 border border-indigo-500/30">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                    {exp.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-white">{exp.company}</h3>
                  <p className="text-blue-500 dark:text-blue-400">{exp.location}</p>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center order-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-4 border-indigo-800 shadow-lg shadow-blue-500/20 z-10 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                </div>
                
                {/* Right side - Role and Details */}
                <div className={`mt-8 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <div className="bg-blue-700 backdrop-blur-sm rounded-xl p-6 border border-indigo-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/30 group-hover:scale-[1.02]">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
                      {exp.role}
                    </h4>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">▹</span>
                          <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-indigo-600/50 text-blue-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
