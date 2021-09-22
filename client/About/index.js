import React from 'react';
import Exprience from './Exprience';
import './About.css';
import Education from './Education';
import Summary from './Summary';
import ContactLinks from './Contact';

const About = () => {
  return (
    <>
      {/* <h1 className="section_title">About</h1> */}
      <h1 className="section_title">Kelsey Schroeder</h1>
      <div className="flex_wrap_row">
        <a href="#Experience">Experience</a>
        <a href="#Education">Education</a>
      </div>

      <Summary />
      <Exprience />
      <Education />
      <ContactLinks />
    </>
  );
};

export default About;
