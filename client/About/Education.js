import React from 'react';

//Add certificates to SIU
export const EducationData = [
  {
    images: [
      {
        src: 'images/GraceHopperAcademyLogo.png',
        alt: 'Grace Hopper Program Logo',
      },
      {
        src: 'images/fullstack-academy-logo-color-on-white.png',
        alt: 'Fullstack Logo',
      },
    ],
    place: 'Grace Hopper Program at Fullstack Academy of Code',
    graduated: 'October 2020',
    description: [
      'Certification in Javascript Web Development',
      'Fullstack Academy is a top-ranked software development school based in New York City. A full-time immersive program covers a broad curriculum centered on full-stack Javascript. Topics taught include Node.js, React, Express, SQL databases, advanced HTML & CSS, and CS fundamentals.',
      "Fullstack Academy's Educational structure is project based and outcome-driven, with a strong focus on teaching best practices and building functional projects.",
    ],
  },
  {
    images: [
      {
        src: 'images/SIUSportLogo.png',
        alt: 'Southern Illinios University Carbondale Logo',
      },
      {
        src: 'images/siuAviationPLane.png',
        alt: 'Southern Illinios University Aviation Logo',
      },
    ],
    place: 'Southern Illinois University Carbondale',
    graduated: 'May 2015',
    description: [
      'Bachelor of Science in Aviation Management',
      'Associate of Applied Sciences in Aviation Flight',
      'Minor in German',
      'Magna Cum Laude',
    ],
  },
];

const Education = () => {
  return (
    <article id="Education">
      <h1 className="section_title">Education</h1>
      <div className="grid">
        {EducationData.map((ed) => {
          return <Institute ed={ed} key={ed.place} />;
        })}
      </div>
    </article>
  );
};

export const Institute = ({ ed }) => {
  return (
    <section className="box white">
      <div className="grid multi_img">
        {ed.images.map((image) => (
          <img src={image.src} alt={image.alt} key={image.alt} />
        ))}
      </div>
      <div className="title">
        <h2>{ed.place}</h2>
        <h3>Graduated: {ed.graduated}</h3>
      </div>
      {ed.description.map((point, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={`${ed.place}:${idx}`} className="center">{point}</p>
      ))}
    </section>
  );
};

export default Education;
