import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  return (
    <Redirect to="/About" />
    // <div>
    //   <h1>Kelsey Schroeder</h1>
    // </div>
  );
};

export default Home;
