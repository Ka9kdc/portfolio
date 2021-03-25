import React from 'react';

const NotesForFriends = () => {
  return (
    <div className="flexbox">
      <div className="flexItem_project">
        {' '}
        <div className="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KF1bfWFr1vI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="submittion video for notes for friends"
          />
        </div>
      </div>
      <div className="flexItem_project">
        <div className="cloudHeader">
          <h2>Notes For Friends</h2>
        </div>
        <div className="cloudTitles">
          <div className="cloudLink">
            <a href="https://notes-with-friends.herokuapp.com/">Deployed</a>
          </div>
          <div className="cloudLink" style={{ marginTop: '-25px' }}>
            <a href="https://devpost.com/software/notes-for-friends">Devpost</a>{' '}
          </div>
          <div className="cloudLink">
            <a href="https://github.com/HKLT-Together-Hackaton/Notes-For-Friends">
              Github
            </a>
          </div>
        </div>
        <div className="flexItem_project_text">
          <p>Notes for Friends connects people via chat.</p>
          <p>
            Notes for Friends is a full-stack application built with Node.js,
            Express, React, Redux, and Sequelize. We also utilized bootstrap to
            help aid with front-end styling, and vanilla JS to tie in some fun
            add-on functionality.
          </p>
          <p>
            A three person built it over the course of 48 hours for TechTogether
            Seattle 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesForFriends;
