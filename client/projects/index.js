import React from 'react';
import ADogsJourney from './ADogsJourney';
import BrosApothacary from './BrosApothacary';
import Createmates from './Createmates';
import NotesForFriends from './NotesForFriends';
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
        <h1>
          Hackathon Submissions
        </h1>
        <NotesForFriends />
      
    </div>
  );
};

export default Projects;
