import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import Home from '.';

describe('Home component', () => {
  let container;
  let paths;
  let text;

  before(() => {
    container = shallow(<Home />);
    const navlinks = container.find('Link');
    paths = navlinks.map((node) => node.props().to);
    text = navlinks.map((node) => node.props().children.props.children);
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

  it('has a link to Skills at /Skills', () => {
    const textid = text.indexOf('Skills');
    const pathId = paths.indexOf('/Skills');
    expect(textid).to.not.equal(-1);
    expect(pathId).to.not.equal(-1);
    expect(textid).to.equal(pathId);
  });
});
