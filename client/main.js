import React from 'react';

import Header from './Header';
import Routes from './Routes';

import Projects from './projects';

// import './main.css';

const Main = () => {
  return (
    <div>
      {/* removeLater */}
      <Projects />


      <Header />
      <Routes />

    </div>
  );
};

export default Main;
