import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function handleDarkMode(evt) {
    evt.preventDefault();
    // eslint-disable-next-line no-undef
    const body = document.getElementsByTagName('body')[0];
    if (darkMode) {
      body.className = 'lightMode';
      setDarkMode(false);
    } else {
      body.className = '';
      setDarkMode(true);
    }
  }

  return (
    <nav id="navbar">
      <ul className={active ? 'menu active' : 'menu'}>
        <li className="logo">
          <h3 className="title">Kelsey Schroeder</h3>
        </li>
        <li className="item">
          <NavLink
            to="/portfolio/"
            onClick={() => {
              setActive(!active);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/portfolio/About"
            onClick={() => {
              setActive(!active);
            }}
          >
            About
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/portfolio/Projects"
            onClick={() => {
              setActive(!active);
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/portfolio/Skills"
            onClick={() => {
              setActive(!active);
            }}
          >
            Skills
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/portfolio/Publications"
            onClick={() => {
              setActive(!active);
            }}
          >
            Publications
          </NavLink>
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
        <li className="item">
          <button
            type="button"
            onClick={handleDarkMode}
            className="find_out_more"
          >
            {!darkMode ? (
              <i className="fas fa-moon" />
            ) : (
              <i className="fas fa-sun" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
