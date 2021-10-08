import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';
import ContactForm from './ContactForm';
import Home from './Home';
import Projects from './Projects';
import SingleProject from './Projects/SingleProject';
import Publications from './Publications';
import Skills from './Skills';

const Routes = () => {
  return (
    <Switch>
      <Route path="/Project/:id" component={SingleProject} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Publications" component={Publications} />
      <Route path="/ContactMe" component={ContactForm} />
      <Route path="/About" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
