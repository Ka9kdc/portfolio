import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Hobbies from './Hobbies';
import Exprience from './Exprience';
import './About.css';

const About = () => {
  return (
    <div className="content">
      <div>
        <h1>Kelsey Schroeder</h1>
        <p>
          I am a pilot and amateur radio operator who after taking on the
          challenge of updating her radio clubs website, has fallen in love with
          web development. Now I am a full stack developer specializing in
          Javascript who enjoys learning new technologies.
        </p>
      </div>
      <div className="flexbox">
        <Contact />
        <Exprience />
        <Education />
        <Hobbies />
      </div>
    </div>
  );
};

export default About;
