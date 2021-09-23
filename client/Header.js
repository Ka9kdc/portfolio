import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </nav>
  );
};

export default Header;
