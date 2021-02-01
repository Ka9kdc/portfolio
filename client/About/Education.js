import React, { useState } from 'react';

const Education = (props) => {
  return (
    <div
      className={props.showList === 'Education' ? 'about_education' : 'hidden'}
    >
      <div className="about_education_place">
        <div>
          <img
            src="images/GraceHopperAcademyLogo.png"
            alt="Grace Hopper Program Logo"
          />
          <br />
          <br />
          <img
            src="images/fullstack-academy-logo-color-on-white.png"
            alt="Fullstack Logo"
          />
        </div>
        <div>
          <h3>Grace Hopper Program at Fullstack Academy of Code</h3>
          <h4>October 2020</h4>
          <p>Certification in JavaScript Web Development</p>
          <p>
            Fullstack Academy is a top-ranked software development school based
            in New York City. A full-time immersive program covers a broad
            curriculum centered on full-stack JavaScript. Topics taught include
            Node.js, React, Express, SQL databases, advanced HTML & CSS, and CS
            fundamentals.
          </p>
          <p>
            Fullstack Academy's Educational structure is project based and
            outcome-driven, with a strong focus on teaching best practices and
            building functional projects.
          </p>
        </div>
      </div>
      <div className="about_education_place">
        <div>
          <img
            src="images/SIUSportLogo.png"
            alt="Southern Illinios University Carbondale Logo"
          />
        </div>
        <div>
          <h3>Southern Illinois University Carbondale</h3>
          <h4>March 2015</h4>
          <p>Bachelor of Science in Aviation Management</p>
          <p> Associate of Applied Sciences in Aviation Flight</p>
          <p> Minor in German</p>
          <p> Magna Cum Laude</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
