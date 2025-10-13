import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectDialog = ({ visible, onHide, project }) => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const images = project?.images || [project?.image];

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setLoading(true);
      setActiveIndex(0);
      setIsFullScreen(false);
    }
  }, [visible]);

  // Handlers
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const toggleFullScreen = () => setIsFullScreen((prev) => !prev);

  const itemTemplate = (item) => (
    <div className="relative group">
      <img
        src={item}
        alt="Project"
        style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover' }}
      />

      {/* Previous Button */}
      <button
        onClick={showPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={showNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
      >
        <ChevronRight size={24} />
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={toggleFullScreen}
        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
      >
        {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
    </div>
  );

  return (
    <Dialog
      header={project?.name || 'Project Details'}
      visible={visible}
      onHide={onHide}
      style={{ width: '90vw', maxWidth: '1000px' }}
      className="rounded-2xl overflow-hidden bg-gray-900"
      draggable={false}
      blockScroll={true}
      dismissableMask
      contentStyle={{
        maxHeight: '80vh',
        overflowY: 'auto',
        backgroundColor: 'var(--surface-ground)',
      }}
    >
      {/* Project Gallery */}
      <div
        className={`relative w-full mb-5 ${
          isFullScreen ? 'fixed inset-0 z-50 p-4 bg-gray-900' : ''
        }`}
      >
        {loading ? (
          <Skeleton height="350px" borderRadius="1rem" />
        ) : (
          <>
            <Galleria
              value={images}
              numVisible={1}
              circular
              showThumbnails={false}
              showIndicators={false}
              activeIndex={activeIndex}
              onItemChange={(e) => setActiveIndex(e.index)}
              item={itemTemplate}
              style={{ maxWidth: '100%' }}
              className="rounded-2xl"
            />
            {project.inProgress && (
              <Tag
                value="In Progress"
                severity="warning"
                className="absolute top-3 left-3 text-sm font-medium"
              />
            )}
          </>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-4 px-3 sm:px-5 pb-4">
        {loading ? (
          <Skeleton width="40%" height="2rem" />
        ) : (
          <p className="text-gray-300 leading-relaxed">{project.shortDescription}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} width="6rem" height="2rem" borderRadius="1rem" />
              ))
            : project.technologies.map((tech, i) => (
                <Tag
                  key={i}
                  value={tech}
                  className="bg-blue-500 text-white border-none px-3 py-1 rounded-xl"
                />
              ))}
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-white mb-2">About This Project</h3>
          {loading ? (
            <>
              <Skeleton width="90%" />
              <Skeleton width="80%" />
              <Skeleton width="85%" />
            </>
          ) : (
            <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
          )}
        </div>

        {!loading && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.demo && (
              <Button
                icon={<ExternalLink size={16} />}
                label="Live Demo"
                className="p-button-text text-blue-400 hover:text-blue-300"
                onClick={() => window.open(project.demo, '_blank')}
              />
            )}
            {project.github && (
              <Button
                icon={<Github size={16} />}
                label="GitHub"
                className="p-button-text text-blue-400 hover:text-blue-300"
                onClick={() => window.open(project.github, '_blank')}
              />
            )}
          </div>
        )}
      </div>
    </Dialog>
  );
};

ProjectDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
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
    inProgress: PropTypes.bool,
  }).isRequired,
};

export default ProjectDialog;
