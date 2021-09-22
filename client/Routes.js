import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';

const Routes = () => {
  return (
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
