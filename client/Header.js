import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState(false);

  console.log(active);
  return (
    <nav id="navbar" className="faded">
      <ul className={active ? 'menu active' : 'menu'}>
        <li className="logo">
          <h3 className="title">Kelsey Schroeder</h3>
        </li>
        <li className="item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="item">
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li className="item">
          <NavLink to="/Skills">Skills</NavLink>
        </li>
        <li
          className="toggle"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
