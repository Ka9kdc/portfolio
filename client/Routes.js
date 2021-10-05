import React from 'react';
import { Route, Switch } from 'react-router';
import About from './About';
import ContactForm from './ContactForm';
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
      <Route path="/" component={About} />
      {/* <Route path="/" /> */}
    </Switch>
  );
};

export default Routes;
