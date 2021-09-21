import React from 'react';
import Exprience from './Exprience';
import './About.css';
import Education from './Education';

const About = () => {
  return (
    <>
      <h1 className="section_title">About</h1>
      <div>
        <a href="#Education">Education</a>
      </div>
      <Exprience />
      <Education />
    </>
  );
};

export default About;
