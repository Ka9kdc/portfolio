import React from 'react';
import ADogsJourney from './ADogsJourney';
import BrosApothacary from './BrosApothacary';
import Createmates from './Createmates';
import './Projects.css';

const Projects = () => {
  return (
    <div className="content">
      <div id="projectTitle">
        <h1>Projects</h1>
      </div>
      <Createmates />
      <ADogsJourney />
      <BrosApothacary />
    </div>
  );
};

export default Projects;
