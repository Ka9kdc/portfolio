import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router';

import About from './About';
import Projects from './Projects';
import SingleProject from './Projects/SingleProject';
import Routes from './Routes';
import Skills from './Skills';

describe('Routes', () => {
  let pathMap;
  before(() => {
    const wrapper = shallow(<Routes />);
    pathMap = wrapper.find(Route).reduce((pathMa, route) => {
      const routeProps = route.props();
      pathMa[routeProps.path] = routeProps.component;
      return pathMa;
    }, {});
  });

  it('renders <About /> at path /About', () => {
    expect(pathMap['/About']).to.be.equal(About);
  });
  it('renders <Projects /> at path /Projects', () => {
    expect(pathMap['/Projects']).to.be.equal(Projects);
  });
  it('renders <SingleProjects /> at path /Project/:id', () => {
    expect(pathMap['/Project/:id']).to.be.equal(SingleProject);
  });
  it('renders <Skills /> at path /Skills', () => {
    expect(pathMap['/Skills']).to.be.equal(Skills);
  });
});
