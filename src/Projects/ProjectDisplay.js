import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDisplay = ({ project }) => (
  <section className="box white">
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
    ) : (
      <img
        className="image_wrapper"
        src={project.images[0].src}
        alt={project.images[0].alt}
      />
    )}

    <h2 className="project_title">{project.name}</h2>
    <p>
      Developed {project.hackathon && 'as a part of a Hackaton'} with{' '}
      {project.org} in {project.date}
    </p>
    <p>Technologies Used for this project:</p>
    <ul>
      {project.techUsed.map((tech) => (
        <li key={`${project.name}:${tech}`}>{tech}</li>
      ))}
    </ul>
    <Link to={`/portfolio/Project/${project.id}`} className="find_out_more_container">
      <button type="button" className="find_out_more">
        Find Out More
      </button>
    </Link>
  </section>
);

export default ProjectDisplay;
