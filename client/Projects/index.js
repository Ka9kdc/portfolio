import React from 'react';
import projectData from './hackathonProjectData';
import ProjectDisplay from './ProjectDisplay';

import './Projects.css';

const Projects = () => {
  return (
    <article>
      <h1 className="section_title">My Projects</h1>
      <section className="project_grid">
        {projectData.map((project) => {
          return <ProjectDisplay project={project} key={project.name} />;
        })}
      </section>
    </article>
  );
};

export default Projects;
