import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';
import Projects from './Projects';

const Routes = () => {
  return (
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
