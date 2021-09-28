import React from 'react';
import librariesUsed from './LibrariesObject';
import TechUsed from '../Projects/TechUsed';
import './Skills.css';

const Skills = () => {
  const libraries = Object.keys(librariesUsed);
  const comfortable = libraries.filter(
    (tech) => librariesUsed[tech].comfortLevel === 'comfortable'
  );
  const okayWith = libraries.filter(
    (tech) => librariesUsed[tech].comfortLevel === 'okay_with'
  );
  const playedWith = libraries.filter(
    (tech) => librariesUsed[tech].comfortLevel === 'played_with'
  );

  return (
    <div>
      <h1 className="section_title">Skills</h1>
      <section id="skills">
        <article className="box white">
          <h2 className="title">Comfortable Using:</h2>
          <section className="rows">
            {comfortable.map((tech) => {
              const { key, comfortLevel } = librariesUsed[tech];
              return (
                <TechUsed tech={tech} key={key} className={comfortLevel} />
              );
            })}
          </section>
        </article>
        <article className="box white">
          <h2 className="title">Okay Using:</h2>
          <section className="rows">
            {okayWith.map((tech) => {
              const { key, comfortLevel } = librariesUsed[tech];
              return (
                <TechUsed tech={tech} key={key} className={comfortLevel} />
              );
            })}
          </section>
        </article>
        <article className="box white">
          <h2 className="title">Played With:</h2>
          <section className="rows">
            {playedWith.map((tech) => {
              const { key, comfortLevel } = librariesUsed[tech];
              return (
                <TechUsed tech={tech} key={key} className={comfortLevel} />
              );
            })}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Skills;
