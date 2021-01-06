import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Hobbies from './Hobbies';
import Exprience from './Exprience';

const About = () => {
  return (
    <div>
      <h1>Kelsey Schroeder</h1>
      <p>I am a pilot and amateur radio operator who after taking on the challenge of updating her radio clubs website, has fallen in love with web development. Now I am a full stack developer specializing in Javascript who enjoys learning new technologies.</p>
      <Contact />
      <Exprience />
      <Education />
      <Hobbies />
    </div>
  );
};

export default About;
