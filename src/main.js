import React from 'react';

import Header from './Header';
import AppRoutes from './Routes';

import './mobile.css';
import './main.css';
import Top from './Other/Top';

const Main = () => (
  <>
    <Header />
    <AppRoutes />
    <Top />
  </>
);

export default Main;
