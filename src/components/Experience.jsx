import 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';

// PrimeReact Imports
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag'; // Using Tag for technologies

// Mock data (from your prompt)
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
  
  // Custom header function for the Card
  const getCardHeader = (exp) => (
    <div className="flex justify-between items-start mb-2">
        <div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-white mb-1">
                {exp.company}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.role}</p>
        </div>
        <div className="text-right">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/50 text-blue-100 rounded-full border border-indigo-500/30 whitespace-nowrap">
                {exp.period}
            </span>
            <p className="text-sm text-blue-500 dark:text-blue-400 mt-1">{exp.location}</p>
        </div>
    </div>
  );

  const getCardContent = (exp) => (
    <>
      <p className="text-gray-700 dark:text-gray-300 mb-4 border-b pb-4 border-gray-200 dark:border-gray-700">
        {exp.description}
      </p>
      
      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Key Contributions:</h4>
      <ul className="space-y-2 mb-4">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-400 mr-2 mt-1">▹</span>
            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{achievement}</span>
          </li>
        ))}
      </ul>

      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {/* Using PrimeReact Tag for technologies */}
        {exp.technologies.map((tech, i) => (
          <Tag 
            key={i} 
            value={tech}
            severity="info" // Default PrimeReact severity
            pt={{
              root: 'text-xs px-3 py-1 bg-indigo-600/50 text-blue-200 rounded-full', // Replicating your original tag style
              value: 'text-blue-200'
            }}
          />
        ))}
      </div>
    </>
  );

  return (
    <motion.section 
      id="experience"
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer(0.1, 0.2)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12" // Reduced margin to save height
          variants={fadeIn('up', 0.2)}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Experience Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              variants={fadeIn('up', 0.3 + index * 0.1)}
            >
              <Card
                title={getCardHeader(exp)}
                pt={{
                  // Replicating the original dark/blue card style
                  root: 'bg-white dark:bg-gray-800 rounded-xl p-6 border border-indigo-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/30 group-hover:scale-[1.01] overflow-hidden',
                  body: 'p-0',
                  content: 'p-0',
                  header: 'p-0 mb-4' // Custom header setup
                }}
              >
                {getCardContent(exp)}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;