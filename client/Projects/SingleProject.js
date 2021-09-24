import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import projectData from './hackathonProjectData';

const SingleProject = () => {
  const id = useParams().id;
  const project = projectData[id];

  return (
    <article>
      <h1 className="section_title">{project.title}</h1>
      <section className="flex_wrap_row ">
        {project.links.map((link) => {
          return (
            <a
              href={link.url}
              key={`${link.name}:${link.url}`}
              className="find_out_more_contianer"
            >
              <button type="button" className="find_out_more">
                {link.name}
              </button>
            </a>
          );
        })}
      </section>
      <section className="center">
        <h3>Developed: {project.date}</h3>
        <h3>{project.solo ? 'Solo Project' : 'Team Project'}</h3>
        <h3>Developed with {project.org}</h3>
        {project.hackathon && <h3>Developed as part of a Hackathon</h3>}
      </section>
      <section className="center">
        {project.text.map((fact, idx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <p key={project.title + ':' + idx}>{fact}</p>;
        })}
      </section>
      <section>
        <p>Technologies Used for this project:</p>
        <div className="flex_wrap_row">
          {project.techUsed.map((tech) => (
            <p key={`${project.title}:${tech}`}>{tech}</p>
          ))}
        </div>
      </section>
      <section className="grid">
        {project.video && project.video.src && (
          <div className="video_wrapper box">
            <iframe
              src={project.video.src}
              title={project.video.title}
              className="responsive-iframe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {project.gif && project.gif.src && (
          <div className="video_wrapper box">
            <iframe
              src={project.gif.src}
              title={project.gif.title}
              className="responsive-iframe"
              frameBorder="0"
            />
          </div>
        )}
        {project.image.src && (
          <div className="box">
            <img
              className="image_wrapper"
              src={`.././${project.image.src}`}
              alt={project.image.alt}
            />
          </div>
        )}
      </section>
      <section className="flex_wrap_row">
        {projectData.map((otherProject) => {
          if (otherProject.id === project.id) {
            return null;
          }
          return (
            <Link
              to={`/Project/${otherProject.id}`}
              key={otherProject.id}
              className="find_out_more_container"
            >
              <button type="button" className="find_out_more">
                {otherProject.title}
              </button>
            </Link>
          );
        })}
      </section>
    </article>
  );
};

export default SingleProject;
