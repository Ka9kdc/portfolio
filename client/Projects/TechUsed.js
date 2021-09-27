import React from 'react';
import librariesUsed from '../LibrariesObject';

const TechUsed = ({ tech }) => {
  let name = tech.split('.')[0];
  const techImg = librariesUsed[name];
  console.log(techImg, tech);
  return (
    <div>
      {techImg && techImg.logo ? (
        <img src={`.././${techImg.logo}`} alt={`${tech} logo`} />
      ) : (
        <p className="title">{tech}</p>
      )}
    </div>
  );
};

export default TechUsed;
