import React, { useState } from 'react';

const Education = () => {
  const [showList, setShowList] = useState('hidden');

  function showOrHide() {
    if (showList === 'hidden') {
      setShowList('');
    } else {
      setShowList('hidden');
    }
  }
  return (
    <div className="flexItem">
      <button type='button' onClick={showOrHide}><h2>Education</h2></button>
      <div className={showList}>
        <div>
          <div>
            <img
              src="images/GraceHopperLongLogo.jpeg"
              alt="Grace Hopper Program Logo"
            />
            <img
              src="images/fullstack-academy-logo-color-on-white.png"
              alt="Fullstack Logo"
            />
          </div>
          <div>
            <h3>Grace Hopper Program at Fullstack Academy of Code</h3>
            <h4>August 2020 - October 2020</h4>
            <p>
              Fullstack Academy is a top-ranked software development school
              based in New York City. A full-time immersive program covers a
              broad curriculum centered on full-stack JavaScript. Topics taught
              include Node.js, React, Express, SQL & NoSQL databases, advanced
              HTML & CSS, and CS fundamentals.
            </p>
            <p>
              Fullstack Academy's educational structure is project based and
              outcome-driven, with a strong focus on teaching best practices and
              building functional projects.
            </p>
          </div>
        </div>
        <div>
          <img
            src="images/SIUSportLogo.png"
            alt="Southern Illinios University Carbondale Logo"
          />
          <div>
            <h3>Southern Illinois University Carbondale</h3>
            <h4>August 2010 - March 2015</h4>
            <p>
              Bachelor of Science in Aviation Management, Associate of Applied
              Sciences in Aviation Flight, Minor in German, Magna Cum Laude
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
