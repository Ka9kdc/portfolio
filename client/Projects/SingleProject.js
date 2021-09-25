import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import projectData from './hackathonProjectData';
import ProjectImage from './ProjectImage';
import TechUsed from './TechUsed';

const SingleProject = () => {
  const projectId = useParams().id;
  const project = projectData[projectId];
  console.log(projectId);
  return (
    <article>
      <h1 className="section_title">{project.name}</h1>
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
          return <p key={project.name + ':' + idx}>{fact}</p>;
        })}
      </section>
      <section>
        <p>Technologies Used for this project:</p>
        <section  className="image_flex_row">
          {project.techUsed.map((tech) => (
            <TechUsed key={`${project.name}:${tech}`} tech={tech} />
          ))}
        </section>
      </section>
      <ProjectImage project={project} />
      <section className="flex_wrap_row">
        <h2>Other Projects:</h2>
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
                {otherProject.name}
              </button>
            </Link>
          );
        })}
      </section>
    </article>
  );
};

export default SingleProject;
