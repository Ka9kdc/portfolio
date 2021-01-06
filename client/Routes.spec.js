import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { render } from 'react-dom';
import sinon from 'sinon';
import * as rrd from 'react-router-dom';

import Main from './Main';
import Home from './Home';
import Projects from './projects';
import Skills from './Skills';
import About from './About';

describe('Routes', () => {
  beforeEach(() => {
    sinon.stub(rrd, 'BrowserRouter').callsFake(({ childern }) => {
      return <div>{childern}</div>;
    });
  });
  afterEach(() => {
    rrd.BrowserRouter.restore();
  });
  it('renders <Home /> at path /', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );
    expect(document.body).to.contain(Home);
    expect(document.body).to.not.contain(Projects);
  });
  it('render <Projects /> at path /Projects', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/Projects']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );
    expect(document.body).to.contain(Projects);
    expect(document.body).to.not.contain(Home);
  });
  it('render <Skills /> at path /Skills', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/Skills']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );

    expect(document.body).to.contain(Skills);
    expect(document.body).to.not.contain(Home);
  });
  it('render <About /> at path /About', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );
    expect(document.body).to.contain(About);
    expect(document.body).to.not.contain(Home);
  });
});
