import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NightSky.css';

const Home = () => {
    const [animationPaused, setAnimationPaused] = useState(false)
  return (
    <div >
      <h1 className="section_title">Kelsey Schroeder</h1>
      <button type="button" className="find_out_more" onClick={() => setAnimationPaused(!animationPaused)} >{animationPaused ? "Start Animation" : "Stop Animation"}</button>
      <section className={animationPaused ? "plane_container paused" :"plane_container "}>
          <Link to="/about" className="plane" >
              <div>About</div>
          </Link>
          <Link to="/skills" className="down_screen plane">
              <div>skills</div>
          </Link>
          <Link to="/projects" className="plane">
              <div>Projects</div>
          </Link>
          </section>
      
      <section className="wrapper">
      <div className="moon">
        <div className="sphare" />
      </div>
      <div className={animationPaused ? "cloud-container paused" : "cloud-container"}>
        <div className="cloud big crawl" />
        <div className="cloud " />
        <div className="cloud medium sprint" />
        <div className="cloud running" />
        <div className="cloud big walk " />
        <div className="cloud medium" />
        <div className="cloud sprint" />
      </div>
      </section>
    </div>
  );
};

export default Home;
