import React from 'react';
import './skills.css';
import librariesUsed from './data';

const Skills = () => {
  return (
    <div className="content">
      <h1>Skills and Libraries</h1>
      <div className="skills_flex_container">
        {librariesUsed.map((tech) =>
          tech.transparent ? (
            <div
              key={tech.key}
              className={`skills_flex_box ${tech.comfortLevel}`}
            >
              <img
                src="images/using/Clouds/394-3944151_white-cloud-day-1-clouds-sprite-png1.png"
                alt={`${tech.name} logo on a cloud`}
                className="skills_flex_background"
              />
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="logo_cloud"
              />
            </div>
          ) : (
            <div
              key={tech.key}
              className={`skills_flex_box ${tech.comfortLevel}`}
            >
              <img
                src="images/using/fatRedPlanePullingBanner.png"
                alt={`${tech.name} logo pulled by a banner plane`}
                className="skills_flex_background"
              />
              <img src={tech.logo} alt={`${tech.name} logo`} className="logo" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
