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
      <div >
      <h2 style={{"fontSize": "5em", "textAlign": 'center', "marginBottom": "-1em"}}>Hackathon Submissions</h2>
      <NotesForFriends />
      </div>
    </div>
  );
};

export default Projects;
