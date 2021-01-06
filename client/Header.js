import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Publications">Publications</NavLink>
        <NavLink to="/Skills">Skills</NavLink>
      </nav>
      <h1>Kelsey Schroeder</h1>
    </div>
  );
};

export default Header;
