import React from 'react';
import './NightSky.css';

const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="section_title">Kelsey Schroeder</h1>
      <div className="moon">
        <div className="sphare" />
      </div>
      <div className="cloud-container">
        <div className="cloud big crawl" />
        <div className="cloud " />
        <div className="cloud medium sprint" />
        <div className="cloud running" />
        <div className="cloud big walk " />
        <div className="cloud medium" />
        <div className="cloud sprint" />
      </div>
    </div>
  );
};

export default Home;
