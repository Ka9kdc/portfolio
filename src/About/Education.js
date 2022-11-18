import React from 'react';
import { EducationData } from './data';

const Education = () => (
  <article id="Education">
    <h1 className="section_title">Education</h1>
    <div className="grid">
      {EducationData.map((ed) => (
        <Institute ed={ed} key={ed.place} />
      ))}
    </div>
  </article>
);

export const Institute = ({ ed }) => (
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
      <p key={`${ed.place}:${idx}`} className="center">
        {point}
      </p>
    ))}
  </section>
);

export default Education;
