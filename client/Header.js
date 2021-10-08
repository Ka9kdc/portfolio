import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <nav id="navbar">
      <ul className={active ? 'menu active' : 'menu'}>
        <li className="logo">
          <h3 className="title">Kelsey Schroeder</h3>
        </li>
        <li className="item">
          <NavLink
            to="/"
            onClick={() => {
              setActive(!active);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/About"
            onClick={() => {
              setActive(!active);
            }}
          >
            About
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/Projects"
            onClick={() => {
              setActive(!active);
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/Skills"
            onClick={() => {
              setActive(!active);
            }}
          >
            Skills
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/Publications"
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
      </ul>
    </nav>
  );
};

export default Header;
