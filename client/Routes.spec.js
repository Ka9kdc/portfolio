import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import * as rrd from 'react-router-dom';

import Routes from './Routes';
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'

describe('Routes', () => {
  beforeEach(() => {
    sinon.stub(rrd, 'BrowserRouter').callsFake(({ childern }) => {
      return <div>{childern}</div>;
    });
  });
  afterEach(() => {
    rrd.BrowserRouter.restore();
  });
  it.only('renders <Home /> at path /', () => {
    const wrapper = shallow(
          <Routes />
    );
    let routes = wrapper.map(node => node.get(0).props)
    console.log(routes)
      console.log(wrapper.find(Home).map(node => node.get(0)))
    expect(wrapper.find(Home)).to.have.length(1);
    expect(wrapper.find(MemberPage)).to.have.length(0);
  });
  it.only('render <Projects /> at path /Projects', () => {
    const wrapper = shallow(
      <rrd.MemoryRouter initialEntries={['/Projects']}>
        <Routes />
      </rrd.MemoryRouter>
    );
    let routes = wrapper.map(node => node.get(0).props.history.location)
    console.log(routes)
    expect(wrapper.find(Projects)).to.have.length(1);
    expect(wrapper.find(Home)).to.have.length(0);
  });
  it('render <Skills /> at path /Skills', () => {
    const wrapper = mount(
      <rrd.MemoryRouter initialEntries={['/Skills']}>
        <Routes />
      </rrd.MemoryRouter>
    );

    expect(wrapper.find(Skills)).to.have.length(1);
    expect(wrapper.find(Home)).to.have.length(0);
  });
  it('render <About /> at path /About', () => {
    const wrapper = mount(
      <rrd.MemoryRouter initialEntries={['/']}>
        <Routes />
      </rrd.MemoryRouter>
    );
    expect(wrapper.find(About)).to.have.length(1);
    expect(wrapper.find(Home)).to.have.length(0);
  });
});
