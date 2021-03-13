import React, { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Hobbies from './Hobbies';
import Exprience from './Exprience';
import './About.css';
import ButtonRow from './ButtonRow';

const About = () => {
  const [showList, setShowList] = useState('');

  return (
    <div className="content">
      <div className={showList === '' ? 'about_Header' : 'hidden'}>
        <div>
          <img src="images/using/kelsey.png" alt="head shot of Kelsey" />
        </div>
        <div>
          <h1>Kelsey Schroeder</h1>
          <p>
            I am a pilot and amateur radio operator who after taking on the
            challenge of updating her radio clubs website, has fallen in love
            with web development. Now I am a full stack developer specializing
            in Javascript who enjoys learning new technologies.
          </p>
        </div>
      </div>
      <ButtonRow showList={showList} setShowList={setShowList} />

      <div>
        <Contact showList={showList} />
        <Exprience showList={showList} />
        <Education showList={showList} />
        <Hobbies showList={showList} />
      </div>
    </div>
  );
};

export default About;
