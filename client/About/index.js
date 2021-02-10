import React, { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Hobbies from './Hobbies';
import Exprience from './Exprience';
import './About.css';

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
      <div id="button_row">
        <button
          type="button"
          onClick={() => setShowList('')}
          className={showList !== '' ? 'about_Section_Name' : 'hidden'}
        >
          {showList || "placeholder for section title"}
        </button>
        <div
          className={
            showList !== ''
              ? 'about_Buttons smallHeader'
              : 'about_Buttons limit_padding'
          }
        >
          {showList !== 'Experience' ? (
            <button type="button" onClick={() => setShowList('Experience')}>
              <img
                src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
                alt="dark-cloud button for Experience"
              />
              <h2>Experience</h2>
            </button>
          ) : (
            ''
          )}
          {showList !== 'Education' ? (
            <button type="button" onClick={() => setShowList('Education')}>
              <img
                src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
                alt="dark-cloud button for Education"
              />
              <h2>Education</h2>
            </button>
          ) : (
            ''
          )}
          {showList !== 'Hobbies' ? (
            <button type="button" onClick={() => setShowList('Hobbies')}>
              <img
                src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
                alt="dark-cloud button for hobbies"
              />
              <h2>Hobbies</h2>
            </button>
          ) : (
            ''
          )}
          {showList !== 'Contact' ? (
            <button type="button" onClick={() => setShowList('Contact')}>
              <img
                src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
                alt="dark-cloud button for Contact"
              />
              <h2>Contact</h2>
            </button>
          ) : (
            ''
          )}
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
