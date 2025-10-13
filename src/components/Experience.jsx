import 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

// Mock data for experience
const experiences = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'ARGO Data',
    period: 'Jun 2025 - Aug 2025',
    location: 'Richardson, TX',
    description: 'As a Software Engineering Intern on the Early Detection & Monitoring Service (EDMS) team, I supported critical infrastructure for major banking customers.',
    achievements: [
      'Enhanced and maintained internal tools using .NET 3 and ASP, focusing on bug fixes, UI/UX improvements, and performance optimization.',
      'Developed a Customer Map with MapLibre.js to visualize over 10,000 customer office locations with real-time status indicators.',
      'Built a comprehensive Alerts Dashboard for monitoring production alerts, filterable by day, server, or cumulative totals.',
      'Initiated the migration of a legacy tool to a modern stack (.NET 8 + Vue.js) to improve performance and user experience.',
      'Improved data reporting pages to provide clearer metrics on customer environments and team performance.'
    ],
    technologies: ['.NET', 'ASP.NET', 'JavaScript', 'Vue.js', 'MapLibre']
  }
];

const Experience = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* The vertical timeline bar */}
      <div 
        className="absolute left-3 top-5 h-[calc(100%-2rem)] w-0.5 bg-slate-200 dark:bg-slate-700" 
        aria-hidden="true" 
      />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          className="relative pl-10"
          variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
        >
          {/* The dot on the timeline */}
          <div className="absolute left-3 top-5 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">{exp.period}</p>
          </div>

          <p className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-4">
            {exp.company} &bull; {exp.location}
          </p>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {exp.description}
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span 
                key={tech} 
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-500/10 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;