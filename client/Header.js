import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Kelsey Schroeder</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Skills">Skills</NavLink>
        <NavLink to="/About">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
