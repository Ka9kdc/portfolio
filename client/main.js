import React from 'react';

import Header from './Header';
import Routes from './Routes';

import './mobile.css';
import './main.css';
import Top from './Other/Top';

const Main = () => {
  return (
    <>
      <Header />
      <Routes />
      <Top />
    </>
  );
};

export default Main;
