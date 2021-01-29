import React from 'react';
import { Link } from 'react-router-dom';

const BrosApothacary = () => {
  return (
    <div className="flexbox_reverse">
      <div className="flexItem_project">
        <img
          src="images/smartmockups_kjkotk4z.png"
          alt="Mock up of the Bros Apothacary e-commerce store."
        />
      </div>
      <div className="flexItem_project">
        <div className="cloudHeader">
          <h2>Bros-Apothecary</h2>
        </div>
        <div className="cloudTitles">
          <div className="cloudLink">
            <Link to="http://bros-apothecary.herokuapp.com/">Deployed</Link>
          </div>
          <div className="cloudLink">
            <Link to="https://github.com/grace-shopper-team-c/grace-shopper">
              Github
            </Link>{' '}
          </div>
        </div>
        <div className="flexItem_project_text">
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
