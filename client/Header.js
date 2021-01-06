import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuClass, setMenuClass] = useState('header');

  function showOrHideMenu() {
    if (menuClass === 'header') {
      setMenuClass('header responsive');
    } else {
      setMenuClass('header');
    }
  }

  return (
    <div className={menuClass}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Publications">Publications</NavLink>
        <NavLink to="/Skills">Skills</NavLink>
      </nav>
      <h1>Kelsey Schroeder</h1>
      <button className="nav_icon" onClick={() => showOrHideMenu()}>
        menu
      </button>
    </div>
  );
};

export default Header;
