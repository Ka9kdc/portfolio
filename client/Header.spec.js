import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import Header from './Header';

describe('Header component', () => {
  let container;
  let paths;
  let text;
  before(() => {
    container = shallow(<Header />);
    const navlinks = container.find('NavLink');
    paths = navlinks.map((node) => node.props().to);
    text = navlinks.map((node) => node.props().children);
  });

  it('is a nav bar', () => {
    expect(container.find('nav')).to.have.lengthOf(1);
  });
  it('has a link to home at /', () => {
    const textid = text.indexOf('Home');
    const pathId = paths.indexOf('/');
    expect(textid).to.not.equal(-1);
    expect(pathId).to.not.equal(-1);
    expect(textid).to.equal(pathId);
  });
  it('has a link to about at /About', () => {
    const textid = text.indexOf('About');
    const pathId = paths.indexOf('/About');
    expect(textid).to.not.equal(-1);
    expect(pathId).to.not.equal(-1);
    expect(textid).to.equal(pathId);
  });
  it('has a link to Projects at /Projects', () => {
    const textid = text.indexOf('Projects');
    const pathId = paths.indexOf('/Projects');
    expect(textid).to.not.equal(-1);
    expect(pathId).to.not.equal(-1);
    expect(textid).to.equal(pathId);
  });
});
