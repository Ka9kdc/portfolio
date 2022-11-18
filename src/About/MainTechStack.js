import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TechUsed from '../Projects/TechUsed';
import librariesUsed from '../Skills/LibrariesObject';

const MainTechStack = () => {
  const mainStack = ['React', 'Redux', 'Node', 'Postgres', 'Express'];
  const { pathname } = useLocation();

  return (
    <section className="logo_flex_row box  white">
      <h2 className="title">Main Tech Stack:</h2>
      {mainStack.map((tech) => {
        const { key, comfortLevel } = librariesUsed[tech];
        return <TechUsed tech={tech} key={key} className={comfortLevel} />;
      })}
      {pathname === '/Skills' ? null : (
        <Link to="/Skills">
          <button type="button" className="title find_out_more">
            See More Libraries Known
          </button>
        </Link>
      )}
    </section>
  );
};

export default MainTechStack;
