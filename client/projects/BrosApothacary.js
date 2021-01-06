import React from 'react';
import { Link } from 'react-router-dom';

const BrosApothacary = () => {
  return (
    <div className="flexbox_reverse">
      <div className="flexItem">
        <img
          src="./smartmockups_kjkotk4z.png"
          alt="Mock up of the Bros Apothacary e-commerce store."
        />
      </div>
      <div className="flexItem">
        <div>
        <h2>Bros-Apothecary</h2>
        <h3>
          | <Link to="http://bros-apothecary.herokuapp.com/">Deployment</Link> |
          |{' '}
          <Link to="https://github.com/grace-shopper-team-c/grace-shopper">
            Github
          </Link>{' '}
          |
        </h3></div>
        <div>
          <p>
            A mock e-Commerce website selling your everyday (hu)man apothecary
            essentials.
          </p>
          <p>Built with Sequelize, Express, Node.js, React and Redux.</p>
        </div>
      </div>
    </div>
  );
};

export default BrosApothacary;
