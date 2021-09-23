import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';
import Projects from './Projects';
import SingleProject from './Projects/SingleProject';

const Routes = () => {
  return (
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Project/:id" component={SingleProject} />
      <Route path="/Projects" component={Projects} />
      <Route path="/" />
    </Switch>
  );
};

export default Routes;
