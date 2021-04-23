import React from 'react';
import MintbeanLogo from './MintbeanLogo';
import ProjectHeader from './projectheaders';

export default function BlockCrusher() {
  const project =  {
    name: "Block Crusher",
    deployURL: "https://ka9kdc.github.io/BlockCrusherPuzzleGame/",
    submissionURL: "",
    githubURL: "https://github.com/Ka9kdc/BlockCrusherPuzzleGame",
}
  return (
    <div className="flexbox">
      <div className="flexItem_project">
      <div className="cloudHeader">
        <h2>{project.name}</h2>
      </div>
       <ProjectHeader project={project} />
        <div className="flexItem_project_text">
          <p>Block Crusher is a candy crush style puzzle game</p>
          <p>
            The game was built over the course of one week for a Mintbean
            Learn-a-thon in March 2021. The goal of the learn-a-thon was to
            build a browser turn-based puzzle game.
          </p>
          <p>
            The idea for this game came to me after solving the candy crush algo
            on leetcode. Having already solved how to clear the board of
            matching tiles after a player moves. It was not that big of a leap
            to implement the game board and allow for a player to move tiles
            around.
          </p>
          <p>
            The goal of the game is to clear the board and reach a target score.
            I created several levels with an increasing variety of colored tiles
            and columns to clear. As columns clear and tiles become visable,
            empty columns will disappear from the game board. This allows for
            continuing game play by elimiting empty tiles that can not be
            traded. Another feature I implented was a randomize button. Clicking
            the button with randomly reassign the visable tiles to the bottom
            rows allowing for more tiles to fall down on to the game board.
          </p>
         <MintbeanLogo />
        </div>
      </div>
      <div className="flexItem_project">
        <div>
          <iframe
            width="360"
            height="360"
            frameBorder="0"
            src="https://imgflip.com/embed/5305ji"
            title="gif of block crusher game play"
          />
        </div>
      </div>
    </div>
  );
}
