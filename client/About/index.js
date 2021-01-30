import React, { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Hobbies from './Hobbies';
import Exprience from './Exprience';
import './About.css';

const About = () => {
  const [showList, setShowList] = useState('');
  console.log(showList);
  return (
    <div className="content">
      <div className={showList === '' ? '' : 'hidden'}>
        <h1>Kelsey Schroeder</h1>
        <p>
          I am a pilot and amateur radio operator who after taking on the
          challenge of updating her radio clubs website, has fallen in love with
          web development. Now I am a full stack developer specializing in
          Javascript who enjoys learning new technologies.
        </p>
      </div>
      <div>
        {/* <button type="button" onClick={() => setShowList('')}>{showList}</button> */}
      <div id="about_Buttons">
        <button type="button" onClick={() => setShowList('hobbies')}>
          Hobbies
        </button>
        <button type="button" onClick={() => setShowList('experience')}>
          Exprience
        </button>
        <button type="button" onClick={() => setShowList('education')}>
          Education
        </button>
        <button type="button" onClick={() => setShowList('contact')}>
          Contact
        </button>
      </div>
      </div>

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
