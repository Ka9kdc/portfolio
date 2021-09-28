import React from 'react';
import librariesUsed from '../LibrariesObject';

const TechUsed = ({ tech, className }) => {
  let name = tech.split('.')[0];
  const techImg = librariesUsed[name];

  return (
    <div className={className ? className : ''}>
      {techImg && techImg.logo ? (
        <img src={`.././${techImg.logo}`} alt={`${tech} logo`} />
      ) : (
        <p className="title">{tech}</p>
      )}
    </div>
  );
};

export default TechUsed;
