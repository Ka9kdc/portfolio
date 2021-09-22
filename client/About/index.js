import React from 'react';
import Exprience from './Exprience';
import './About.css';
import Education from './Education';
import Summary from './Summary';

const About = () => {
  return (
    <>
      <h1 className="section_title">About</h1>

      <Summary />
      <Exprience />
      <Education />
    </>
  );
};

export default About;
