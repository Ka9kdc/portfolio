import React from 'react';
// import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => {
  return (
    <section className="box">
      {project.video ? (
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
      ) : project.gif ? (
        <div className="video_wrapper">
          <iframe
            src={project.gif.src}
            title={project.gif.title}
            className="responsive-iframe"
            frameBorder="0"
          />
        </div>
      ) : (
        <img
          className="image_wrapper"
          src={project.image.src}
          alt={project.image.alt}
        />
      )}

      <h2 className="project_title">{project.title}</h2>
      <p>
        Developed {project.hackathon && 'as a part of a Hackaton'} with{' '}
        {project.org} in {project.date}
      </p>
      <p>Technologies Used for this project:</p>
      <ul>
        {project.techUsed.map((tech) => (
          <li key={`${project.title}:${tech}`}>{tech}</li>
        ))}
      </ul>
      {/* <Link to={`/project/${project.title}`}> */}
      <button type="button">Find Out More</button>
      {/* </Link> */}
    </section>
  );
};

export default ProjectDisplay;
