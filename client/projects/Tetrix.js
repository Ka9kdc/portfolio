import React from 'react';
import MintbeanLogo from './MintbeanLogo';
import ProjectHeader from './projectheaders';

export default function Tetrix() {
  const project = {
    name: 'Tetrix',
    deployURL: 'https://ka9kdc.github.io/tetrix/',
    // submissionURL:
    //   'https://mintbean.io/meets/7c1ff845-3410-4b5c-8965-b80de1374d77/projects/2bdb4831-aa6e-4c9a-a6d8-b64fec1d2484',
    githubURL: 'https://github.com/Ka9kdc/tetrix',
  };
  return (
    <div className="flexbox">
      <div className="flexItem_project">
        <div className="cloudHeader">
          <h2>{project.name}</h2>
        </div>
        <ProjectHeader project={project} />
        <div className="flexItem_project_text">
          <p>
            This is a tetris Clone. In this version of Tetris the speed at which
            the blocks fall will increase as your level increases.
          </p>
          <p>
            The game was built over the course of one week for a Mintbean
            hire-a-thon in August 2021. The goal of the hire-a-thon was to build
            a 2D game without a game engine.
          </p>
          <p>
            In the game, there are seven types of blocks that will falling down
            one at a time. The blocks are in the shape of the letters: L, J, T,
            S, Z, I and O. All the blocks can be rotated and moved while
            falling, so you can control where they are placed.
          </p>
          <p>
            The goal is to a fill row with the falling blocks to clear the row
            and prevent your board from filling up. Everytime your clear five
            rows, your level will increase and the blocks will slowly start to
            fall faster. The game end when no more blocks can enter the board
            from the top.
          </p>
          <MintbeanLogo />
        </div>
      </div>
      <div className="flexItem_project">
        <div>
          <img
            style={{ width: '80%', height: 'auto' }}
            src="images/using/ezgif.com-gif-maker.gif"
            title="gif of tetris blocks rotating"
          />
        </div>
      </div>
    </div>
  );
}
