import React from 'react';
import ADogsJourney from './ADogsJourney';
import BlockCrusher from './BlockCrusher';
import BrosApothacary from './BrosApothacary';
import Createmates from './Createmates';
import LunchTime from './LunchTime';
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
      <h1>Hackathon Submissions</h1>
      <LunchTime />
      <BlockCrusher />
      <NotesForFriends />
    </div>
  );
};

export default Projects;
