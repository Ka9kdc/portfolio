import React from 'react';
import { expect } from 'chai';
import { render } from 'react-dom';
import sinon from 'sinon';
import * as rrd from 'react-router-dom';

import Main from './Main';

import About from './About';

import { getExperience, mockAxios } from './index.spec';
import Projects from './Projects';

//these tests dont work right. they just pass even if i change the route or component spelling
describe.skip('Routes', () => {
  beforeEach(() => {
    sinon.stub(rrd, 'BrowserRouter').callsFake(({ childern }) => {
      return <div>{childern}</div>;
    });
    getExperience();
  });
  afterEach(() => {
    rrd.BrowserRouter.restore();
    mockAxios.restore();
  });
  it('renders <About /> at path /About', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/About']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );
    expect(document.body).to.contain(About);
  });
  it('renders <Projects /> at path /Projects', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <rrd.MemoryRouter initialEntries={['/Projects']}>
        <Main />
      </rrd.MemoryRouter>,
      root
    );
    expect(document.body).to.contain(Projects);
  });
});
