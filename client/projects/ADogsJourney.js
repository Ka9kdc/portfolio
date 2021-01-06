import React from 'react';
import { Link } from 'react-router-dom';

const ADogsJourney = () => {
  return (
    <div className="flexbox">
      <div className="flexItem">
        <img
          src="./smartmockups_kjkmxumj.png"
          alt="Mock up of the A Dog's Journey Game"
        />
      </div>
      <div className="flexItem">
        <h2>A Dog's Journey</h2>
        <h3>
          |{' '}
          <Link to="https://kmschroeder91.medium.com/building-a-game-with-three-js-f5796ecf15cf">
            Medium
          </Link>{' '}
          | | <Link to="https://github.com/Ka9kdc/aDogsJourney">Github</Link> |
        </h3>
        <div>
          <p>
            A simple 3D browser game built with Three.js where the player moves
            a dog around the field collecting dog bones and avoid obstacles.
          </p>
          <p>
            This was a 4 day hackathon style project, where I had to learn a new
            piece of technology.
          </p>
          <p>
            Along with building the game, I wrote an article on how to build the
            game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ADogsJourney;
