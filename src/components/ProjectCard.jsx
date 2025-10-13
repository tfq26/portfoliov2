import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHammer } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { useThemeIcon } from '../hooks/useThemeIcon';

// PrimeReact Imports
import { Tag } from 'primereact/tag';

// Import the ProjectDialog component
import ProjectDialog from './ProjectDialog';

const ProjectCard = ({ project, index }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const themeIcon = useThemeIcon(project?.icon);
  const isExternalImage = Boolean(project?.image && project.image.startsWith?.('http'));
  const themeImage = isExternalImage ? project.image : useThemeIcon(project?.image);

  // This function maps project status to a PrimeReact severity for the Tag component
  const getStatusSeverity = (status) => {
    switch (status?.toLowerCase()) {
      case 'launched':
      case 'completed':
        return 'success';
      case 'updating':
      case 'in development':
        return 'warning';
      case 'on hold':
        return 'danger';
      case 'planning':
        return 'info';
      default:
        // Use a neutral/default style if status is not recognized
        return null; 
    }
  };

  const openDialog = () => setIsDialogOpen(true);

  return (
    <>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:-translate-y-1"
      >
        {/* --- Image Header --- */}
        <div className="relative cursor-pointer" onClick={openDialog}>
          {project.icon && (
            <div className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900/20 backdrop-blur-sm dark:bg-white/10">
              <img
                src={project.icon}
                alt={`${project.name} icon`}
                className="h-8 w-8 object-contain"
              />
            </div>
          )}
          {project.status === 'In Development' && (
             <div className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 shadow-lg" title="Actively being updated">
                <FaHammer className="h-4 w-4 text-white" />
            </div>
          )}

          <img
            src={themeImage || '/project-placeholder.jpg'}
            alt={project.name}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/project-placeholder.jpg';
            }}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* --- Content Body --- */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-1 flex-col">
            <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                {project.status && (
                    <Tag
                        value={project.status}
                        severity={getStatusSeverity(project.status)}
                        className="text-xs font-semibold"
                    />
                )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies?.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* --- Footer Actions --- */}
        <div className="border-t border-slate-200 p-4 dark:border-slate-700">
            <button
                onClick={openDialog}
                className="inline-flex w-full items-center justify-center font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
                View Details
                <FiArrowUpRight className="ml-1 h-4 w-4" />
            </button>
        </div>
      </motion.div>

      {/* Project Dialog */}
      <ProjectDialog
        visible={isDialogOpen}
        onHide={() => setIsDialogOpen(false)}
        project={project}
      />
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    demo: PropTypes.string,
    github: PropTypes.string,
    description: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    working: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;