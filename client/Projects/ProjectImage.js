import React from 'react';

const ProjectImage = ({ project }) => {
  const count =
    ['video', 'gif'].filter((str) => project[str] && project[str].src).length +
    project.images.length;
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
      {project.images.map((image) => {
        if (image.src) {
          return <ImageDiv image={image} key={image.alt} />;
        }
        return null;
      })}
    </section>
  );
};

const ImageDiv = ({ image }) => (
  <div className="box white gif_frame">
    <img className="image_wrapper" src={`.././${image.src}`} alt={image.alt} />
  </div>
);

export default ProjectImage;
