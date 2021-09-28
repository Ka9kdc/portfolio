import React from 'react';

const ProjectImage = ({ project }) => {
  const count = ['video', 'gif', 'image'].filter(
    (str) => project[str] && project[str].src
  ).length;
  return (
    <section className={count !== 1 ? 'grid' : 'soloBox'}>
      {project.video && project.video.src && (
        <div className="box white">
          <div className="video_wrapper">
            <iframe
              src={project.video.src}
              title={project.video.title}
              className="responsive-iframe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {project.gif && project.gif.src && (
        <div className="box white">
          <div className="video_wrapper">
            <iframe
              src={
                project.name === 'Tetrix'
                  ? `.././${project.gif.src}`
                  : project.gif.src
              }
              title={project.gif.title}
              className="responsive-iframe"
              frameBorder="0"
            />
          </div>
        </div>
      )}
      {project.image.src && (
        <div className="box white">
          <img
            className="image_wrapper"
            src={`.././${project.image.src}`}
            alt={project.image.alt}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectImage;
