import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { FaHammer } from "react-icons/fa6";
import { useThemeIcon } from '../hooks/useThemeIcon';
import { useTheme } from '../context/ThemeContext';

// PrimeReact Imports
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Galleria } from 'primereact/galleria'; 

// Swiper imports removed

const ProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const themeIcon = useThemeIcon(project?.icon);
  const themeImage = useThemeIcon(project?.image);
  
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);

  const openModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    
    // Mobile Check for Dialog sizing
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // --- Galleria Template Functions ---
  const itemTemplate = (item) => {
    const objectFitClass = 'object-contain';
    
    return (
      <img 
        src={item} 
        alt={project.name} 
        className={`block w-full h-full ${objectFitClass}`} 
        style={{ maxHeight: isMobile ? '70vh' : '40vh' }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img 
        src={item} 
        alt="Thumbnail" 
        className="w-full h-16 object-cover rounded border border-transparent hover:border-blue-500 transition-all" 
      />
    );
  };

  // --- Project Card Header (Image/Icon Area) ---
  const headerContent = (
    <div className="relative h-48 rounded-t-2xl overflow-hidden">
      {/* Project Icon */}
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
           {project.working && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full">
                <FaHammer className="w-2 h-2 text-white" />
                <span className="sr-only">In Progress</span>
              </span>
            )}
        </div>
      )}

      {/* Preview Image */}
      <div className="h-full w-full cursor-pointer" onClick={openModal}>
        <img
          src={themeImage || '/project-placeholder.jpg'}
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
          <p className="text-xs text-white">{project.shortDescription || project.description}</p>
        </div>
      </div>
    </div>
  );

  // --- Project Card Footer (Title/Button Area) ---
  const footerContent = (
    <div className="p-6 pt-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold dark:text-white text-blue-50">{project.name}</h3>
        {project.working && (
          <span className="text-xs text-blue-200">In Progress</span>
        )}
        <Button
          label="View Details →"
          link
          onClick={openModal}
          pt={{
            root: 'p-0 h-auto',
            label: 'text-sm font-medium transition-colors dark:text-blue-300 text-blue-200 hover:underline',
          }}
        />
      </div>
      {/* Technology Tags - added here to be visible outside the modal */}
      <div className="flex flex-wrap gap-2">
        {project.technologies?.slice(0, 4).map((tech, i) => (
          <Tag
            key={i}
            value={tech}
            pt={{
              root: `px-3 py-1 text-xs font-medium rounded-full ${
                theme === 'dark' ? 'bg-zinc-600 text-white' : 'bg-blue-100 text-blue-800'
              }`,
            }}
          />
        ))}
      </div>
    </div>
  );

  // --- Modal Content (Passed to Dialog) ---
  const modalContent = (
    <>
      {/* Image Carousel (Galleria) */}
      <div className="relative w-full bg-black/50">
        <Galleria
          value={images}
          responsiveOptions={[
            { breakpoint: '991px', numVisible: 4 },
            { breakpoint: '767px', numVisible: 3 },
            { breakpoint: '575px', numVisible: 2 }
          ]}
          numVisible={5}
          circular
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          showThumbnails
          className="galleria-project"
          showItemNavigators={false}
          pt={{
            root: 'w-full',
            content: 'bg-black/50 p-0',
            itemContainer: isMobile ? 'h-[25rem] sm:h-auto' : 'h-[30rem]', 
            thumbnailContainer: 'p-4',
          }}
        />
      </div>

      {/* Modal Content Details */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold dark:text-white text-blue-800">{project.name}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies?.map((tech, i) => (
                <Tag
                  key={i}
                  value={tech}
                  pt={{
                    root: `px-3 py-1 text-xs font-medium rounded-full ${
                      theme === 'dark' ? 'bg-zinc-600 text-white' : 'bg-blue-100 text-blue-800'
                    }`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {project.working && (
              <span className="text-md mt-6 text-blue-200">In Progress</span>
            )}
            {!project.working && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-colors ${
                  theme === 'dark'
                    ? 'text-blue-300 hover:text-blue-200'
                    : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <FiExternalLink className="mr-2" /> View Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center transition-colors mt-3 ${
                  theme === 'dark'
                    ? 'text-blue-300 hover:text-blue-200'
                    : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <FiGithub className="mr-2" /> View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none">
          <h3 className="text-xl font-semibold mb-4 dark:text-white text-blue-500">
            About This Project
          </h3>
          <p className="dark:text-blue-50 text-blue-900">{project.description}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative">
      <motion.div
        className="group cursor-pointer h-full"
        variants={fadeIn('up', 0.2 + index * 0.1)}
      >
        {/* PrimeReact Card for Project Display */}
        <Card
          header={headerContent}
          footer={footerContent}
          className="h-full"
          onClick={openModal}
          pt={{
            root: `relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl cursor-pointer ${
              theme === 'dark' ? 'bg-blue-950/70' : 'bg-blue-700'
            }`,
            header: 'p-0',
            body: 'p-0',
            content: 'p-0',
            footer: 'p-0',
          }}
        />
      </motion.div>

      {/* PrimeReact Dialog for Project Modal */}
      <Dialog
        header={project.name}
        visible={isModalOpen}
        onHide={closeModal}
        modal
        maximizable={!isMobile} 
        maximized={isMobile}    
        style={!isMobile ? { width: '50vw' } : {}}
        pt={{
          root: `relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
            theme === 'dark' ? 'bg-blue-950/70' : 'bg-blue-700'
          } shadow-2xl`,
          content: 'p-0',
          header: 'hidden',
          mask: 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4',
        }}
      >
        {/* Custom close button (with high-contrast background) */}
        <Button
          icon={<FiX className="w-6 h-6" />}
          onClick={closeModal}
          rounded
          text
          aria-label="Close modal"
          pt={{
            root: 'absolute top-4 right-4 z-20 p-2 rounded-full transition-colors ' +
                  'bg-black/50 backdrop-blur-sm border border-white/20 ' +
                  'text-gray-200 hover:text-white hover:bg-black/70',
          }}
        />
        {modalContent}
      </Dialog>
    </div>
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
    working: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;