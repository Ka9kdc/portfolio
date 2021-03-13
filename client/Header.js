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
    <div>
      <nav className={menuClass}>
        {/* <h1>Kelsey Schroeder</h1> */}
        {/* <div>
          <NavLink to="/">Home</NavLink>
        </div> */}
        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        <div>
          <NavLink to="/Projects">Projects</NavLink>
        </div>
        {/* <div>
          <NavLink to="/Publications">Publications</NavLink>
        </div> */}
        <div>
          <NavLink to="/Skills">Skills</NavLink>
        </div>

        <button
          type="button"
          className="nav_icon"
          onClick={() => showOrHideMenu()}
        >
          Menu
        </button>
      </nav>
    </div>
  );
};

export default Header;
