import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('app')
);
