import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../animations';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useThemeIcon } from '../hooks/useThemeIcon';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const themeIcon = useThemeIcon(project?.icon || '');

  const openModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="group cursor-pointer h-full"
        variants={fadeIn('up', 0.2 + index * 0.1)}
      >
        <div
          className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl
            dark:bg-blue-950/70 bg-blue-700`}
        >
          <div className="relative h-48 rounded-t-2xl overflow-hidden ">
            {/* Project Icon (Top Left) */}
            {project.icon && (
              <div className="absolute top-3 left-3 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src={themeIcon}
                  alt={`${project.name} icon`}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    if (project?.icon && e.target.src !== project.icon) {
                      e.target.src = project.icon;
                    }
                  }}
                />
              </div>
            )}

            {/* Preview Image */}
            <div className="h-full w-full cursor-pointer" onClick={openModal}>
              <img
                src={useThemeIcon(project.image) || '/project-placeholder.jpg'}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  if (e.target.src !== project.image) {
                    e.target.src = project.image || '/project-placeholder.jpg';
                  }
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="p-8">
                  <p className="mb-4 text-xs text-white">
                    {project.shortDescription || project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold dark:text-white text-blue-50">{project.name}</h3>
              <button
                onClick={openModal}
                className={`text-sm font-medium transition-colors dark:text-blue-300 text-blue-200`}
              >
                View Details →
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              className={`relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-blue-50/40 dark:bg-blue-950/70`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white hover:bg-zinc-600 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                  src={project.image || '/project-placeholder.jpg'}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {project.name}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            theme === 'dark'
                              ? 'bg-zinc-600 text-white'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center transition-colors ${
                          theme === 'dark'
                            ? 'text-blue-300 hover:text-blue-200'
                            : 'text-blue-600 hover:text-blue-500'
                        }`}
                        onClick={handleLinkClick}
                      >
                        <FiExternalLink className="mr-2" /> View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center transition-colors ${
                          theme === 'dark'
                            ? 'text-blue-300 hover:text-blue-200'
                            : 'text-blue-600 hover:text-blue-500'
                        }`}
                        onClick={handleLinkClick}
                      >
                        <FiGithub className="mr-2" /> View on GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3
                    className={`text-xl font-semibold mb-4 dark:text-white text-blue-500`}
                  >
                    About This Project
                  </h3>
                  <div
                    className={`space-y-4 dark:text-blue-50 text-blue-500`}
                  >
                    {project.description}
                  </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold mb-4 dark:text-blue-50 text-blue-500`}
                      >
                        Project Links
                      </h4>
                      <div className="space-y-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center transition-colors text-blue-500`}
                          >
                            <FiExternalLink className="mr-2" /> View Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center transition-colors text-blue-500`}
                          >
                            <FiGithub className="mr-2" /> View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    description: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;
