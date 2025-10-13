import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHammer } from 'react-icons/fa6';
import { useThemeIcon } from '../hooks/useThemeIcon';
import { useTheme } from '../context/ThemeContext';

// PrimeReact Imports
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

// Import the ProjectDialog component
import ProjectDialog from './ProjectDialog';

const ProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const themeIcon = useThemeIcon(project?.icon);
  const isExternalImage = Boolean(project?.image && project.image.startsWith?.('http'));
  const themeImage = isExternalImage ? project.image : useThemeIcon(project?.image);

  const getStatusSeverity = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'warning';
      case 'on hold':
        return 'danger';
      case 'planning':
        return 'info';
      default:
        return null;
    }
  };

  const openDialog = (e) => {
    e?.stopPropagation();
    setIsDialogOpen(true);
  };

  // Header (preview image)
  const headerContent = (
    <div className="relative rounded-t-2xl overflow-hidden group cursor-pointer" onClick={openDialog}>
      {project.icon && (
        <div className="absolute top-3 left-3 z-10 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg">
          <img
            src={themeIcon}
            alt={`${project.name} icon`}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              if (e.target.src !== project.icon) e.target.src = project.icon;
            }}
          />
          {project.working && (
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full">
              <FaHammer className="text-white text-[0.5rem]" />
            </span>
          )}
        </div>
      )}

      <img
        src={themeImage || '/project-placeholder.jpg'}
        alt={project.name}
        className="w-full h-64 sm:h-80 md:h-60 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/project-placeholder.jpg';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-xs text-white">{project.shortDescription || project.description}</p>
      </div>
    </div>
  );

  // Footer
  const footerContent = (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          {project.status && (
            <Tag
              value={project.status}
              severity={getStatusSeverity(project.status)}
              className="text-xs font-medium px-2 py-1 rounded-full"
            />
          )}
        </div>
        <Button
          label="Details →"
          link
          onClick={openDialog}
          pt={{
            root: 'p-0 h-auto',
            label: 'text-sm font-medium text-blue-300 hover:underline',
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies?.slice(0, 4).map((tech, i) => (
          <Tag
            key={i}
            value={tech}
            pt={{
              root: `px-3 py-1 text-xs font-medium rounded-full ${
                theme === 'dark' ? 'bg-zinc-800 text-blue-200' : 'bg-blue-200 text-blue-900'
              }`,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Card */}
      <motion.div className="group cursor-pointer h-full" variants={fadeIn('up', 0.2 + index * 0.1)}>
        <Card
          header={headerContent}
          footer={footerContent}
          className={`h-full rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl ${
            theme === 'dark' ? 'bg-zinc-900' : 'bg-blue-950'
          }`}
        />
      </motion.div>

      {/* Project Dialog */}
      <ProjectDialog
        visible={isDialogOpen}
        onHide={() => setIsDialogOpen(false)}
        project={project}
      />
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
    status: PropTypes.string,
    working: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
