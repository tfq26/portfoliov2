import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tag } from 'primereact/tag';
import { Skeleton } from 'primereact/skeleton';
import { ExternalLink, Github, X } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectDialog = ({ visible, onHide, project }) => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback for projects with a single 'image' prop instead of an 'images' array
  const images = project?.images && project.images.length > 0 ? project.images : [project?.image];

  // Reset loading state and image index when the dialog is opened/closed
  useEffect(() => {
    if (visible) {
      // Simulate loading time for a better user experience
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    } else {
      // Reset state when dialog is hidden
      setLoading(true);
      setActiveIndex(0);
    }
  }, [visible]);
  
  // Prevent body scroll when the dialog is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  if (!visible) return null;
  
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  
  const modalVariants = {
    hidden: { y: "50px", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { y: "50px", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onHide}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-xl dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700"
          >
            {/* --- Header & Close Button --- */}
            <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{project?.name}</h2>
              <button
                onClick={onHide}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </header>

            {/* --- Main Content --- */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 overflow-y-auto">
              {/* Left Column: Gallery */}
              <div className="md:col-span-3">
                <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                  {loading ? (
                    <Skeleton className="w-full h-full !rounded-xl" />
                  ) : (
                    <img
                      src={images[activeIndex]}
                      alt={`${project.name} screenshot ${activeIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* Thumbnails */}
                <div className="flex gap-2">
                  {loading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="w-1/4 h-16 !rounded-lg" />
                    ))
                  ) : (
                    images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-1/4 overflow-hidden rounded-lg outline-none ring-offset-2 ring-offset-white dark:ring-offset-slate-800 focus-visible:ring-2 ${
                          activeIndex === i ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-16 object-cover" />
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-2 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {loading ? (
                    Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} width="5rem" height="1.75rem" className="!rounded-full" />)
                  ) : (
                    project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
                        {tech}
                      </span>
                    ))
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">About this project</h3>
                {loading ? (
                    <div className="space-y-2">
                        <Skeleton width="100%" height="1rem" />
                        <Skeleton width="100%" height="1rem" />
                        <Skeleton width="75%" height="1rem" />
                    </div>
                ) : (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {project.description}
                    </p>
                )}

                {/* --- Action Buttons --- */}
                {!loading && (
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors">
                                <Github size={16} /> GitHub
                            </a>
                        )}
                    </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    demo: PropTypes.string,
    github: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

// Default props in case a null project is passed while the dialog is closing
ProjectDialog.defaultProps = {
  project: {
    id: 'default',
    name: 'Loading...',
    description: 'Loading project details...',
    technologies: [],
    images: [],
  },
};

export default ProjectDialog;