import React from 'react';

const Education = () => {
  return (
    <article id="Education">
      <h1 className="section_title">Education</h1>
      <div className="grid">
        <Fullstack />
        <Southern />
      </div>
    </article>
  );
};

const Fullstack = () => {
  return (
    <section className="box">
      <div className="grid multi_img">
        <img
          src="images/GraceHopperAcademyLogo.png"
          alt="Grace Hopper Program Logo"
        />
        <img
          src="images/fullstack-academy-logo-color-on-white.png"
          alt="Fullstack Logo"
        />
      </div>
      <div className="title">
        <h2>Grace Hopper Program at Fullstack Academy of Code</h2>
        <h3>Graducated: October 2020</h3>
      </div>
      <p>Certification in JavaScript Web Development</p>
      <p>
        Fullstack Academy is a top-ranked software development school based in
        New York City. A full-time immersive program covers a broad curriculum
        centered on full-stack JavaScript. Topics taught include Node.js, React,
        Express, SQL databases, advanced HTML & CSS, and CS fundamentals.
      </p>
      <p>
        Fullstack Academy's Educational structure is project based and
        outcome-driven, with a strong focus on teaching best practices and
        building functional projects.
      </p>
    </section>
  );
};

//Add certificates to this section
const Southern = () => {
  return (
    <section className="box">
      <div className="grid multi_img">
        <img
          src="images/SIUSportLogo.png"
          alt="Southern Illinios University Carbondale Logo"
        />
      </div>
      <div className="title">
        <h2>Southern Illinois University Carbondale</h2>
        <h3>Graduated May 2015</h3>
      </div>
      <p>Bachelor of Science in Aviation Management</p>
      <p> Associate of Applied Sciences in Aviation Flight</p>
      <p> Minor in German</p>
      <p> Magna Cum Laude</p>
    </section>
  );
};

export default Education;
