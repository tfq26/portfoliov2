import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../animations';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useThemeIcon } from '../hooks/useThemeIcon';

const ProjectCard = ({ project, index }) => {
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
        <div className="relative h-full bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-2xl overflow-hidden border border-indigo-800/50 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
          <div className="relative h-48 bg-gray-800 rounded-t-2xl overflow-hidden">
            {/* Project Icon (Top Left) */}
            {project.icon && (
              <div className="absolute top-3 left-3 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                <img 
                  src={themeIcon} 
                  alt={`${project.name} icon`} 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback to the original path if theme-specific icon is not found
                    if (project?.icon && e.target.src !== project.icon) {
                      e.target.src = project.icon;
                    }
                  }}
                />
              </div>
            )}
            
            {/* Preview Image */}
            <div 
              className="h-full w-full cursor-pointer"
              onClick={openModal}
            >
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
                <div className="w-full">
                  <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.shortDescription || project.description}
                  </p>
                  <button 
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center"
                    onClick={openModal}
                  >
                    View Details <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            <button 
              onClick={openModal}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              View Details
            </button>
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 flex space-x-2 z-10">
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
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
                    <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                        onClick={handleLinkClick}
                      >
                        <FiGithub className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        onClick={handleLinkClick}
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
                  <div className="text-gray-300 space-y-4">
                    {project.details || project.description}
                  </div>
                  
                  {project.features && (
                    <>
                      <h4 className="text-lg font-semibold text-white mt-6 mb-3">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
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
