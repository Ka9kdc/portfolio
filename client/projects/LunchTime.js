import React from 'react';
import MintbeanLogo from './MintbeanLogo';
import ProjectHeader from './projectheaders';

const LunchTime = () => {
  const project = {
    name: 'Lunch Time',
    deployURL: 'https://lunchtime-62b9b.web.app/',
    submissionURL:
      'https://mintbean.io/meets/1210c780-f910-4511-aec8-a364420f8333/projects/6f615a06-d879-48c1-9775-2480cb8578e0',
    githubURL: 'https://github.com/Cwlowe/Lunch_time',
  };
  return (
    <div className="flexbox_reverse">
      <div className="flexItem_project">
        <div className="cloudHeader">
          <h2>{project.name}</h2>
        </div>
        <ProjectHeader project={project} />
        <div className="flexItem_project_text">
          <p>
            In April 2021, Leslie Meng, Calvin Lowe and I built Lunch Time as
            part of the Mintbean and StepZen weeklong learn-a-thon. The goal of
            the project was to make a web application using graphql and the
            StepZen API.
          </p>
          <p>
            Lunch Time is a web application that will tell a user if they can
            afford to buy lunch and still pay all of their bills before their
            next paycheck. Lunch Time was build using nextjs, graphql, StepZen,
            reactjs and materialui .
          </p>
          <p>
            One interesting thing, I learned this week is that you can use
            google sheets as your database. Once we got the google sheet
            connected to our code using StepZen, It was really easy to add new
            rows and fix errors in our data.
          </p>
        </div>
        <MintbeanLogo />
      </div>
      <div className="flexItem_project">
        <div className="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xh6DzVkeUH8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default LunchTime;
