import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Projects from './projects';
import Skills from './Skills';
import About from './About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Skills" component={Skills} />
      <Route path="/About" component={About} />
    </Switch>
  );
};

export default Routes;
