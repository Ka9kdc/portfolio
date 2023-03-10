import React, { useState } from 'react';
import MainTechStack from '../About/MainTechStack';
import projectData, { projectsByDate } from './hackathonProjectData';
import ProjectDisplay from './ProjectDisplay';

const Projects = () => {
  const [listToDisplay, setList] = useState('');
  let projectsDisplayed = projectData;
  if (listToDisplay === 'mintbean') {
    projectsDisplayed = projectData.filter(
      (project) => project.org === 'Mintbean'
    );
  } else if (listToDisplay === 'Solo') {
    projectsDisplayed = projectData.filter((project) => project.solo);
  } else if (listToDisplay === 'team') {
    projectsDisplayed = projectData.filter((project) => !project.solo);
  } else if (listToDisplay === 'by Date') {
    projectsDisplayed = projectsByDate;
  }

  return (
    <article>
      <h1 className="section_title">My Projects</h1>
      <div className="find_out_more_container">
        <button
          type="button"
          className="find_out_more"
          onClick={() => setList('by Date')}
        >
          By Date
        </button>
        <button
          type="button"
          className="find_out_more"
          onClick={() => setList('mintbean')}
        >
          Mintbean
        </button>
        <button
          type="button"
          className="find_out_more"
          onClick={() => setList('Solo')}
        >
          Solo
        </button>
        <button
          type="button"
          className="find_out_more"
          onClick={() => setList('team')}
        >
          Team
        </button>
        <button
          type="button"
          className="find_out_more"
          onClick={() => setList('')}
        >
          All
        </button>
      </div>
      <section className="project_grid">
        {projectsDisplayed.map((project) => (
          <ProjectDisplay
            project={project}
            key={`${project.name}:${project.id}`}
          />
        ))}
      </section>
      <MainTechStack />
    </article>
  );
};

export default Projects;
