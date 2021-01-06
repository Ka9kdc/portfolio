import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header component', () => {
  let navbar;
  before(() => {
    const wrapper = shallow(<Header />);
    navbar = wrapper.find('NavLink').map((node) => node.get(0).props);
  });
  it('renders a Home Link', () => {
    expect(navbar[0].children).to.be.equal('Home');
    expect(navbar[0].to).to.be.equal('/');
  });
  it('renders a About Link', () => {
    expect(navbar[1].children).to.be.equal('About');
    expect(navbar[1].to).to.be.equal('/About');
  });
  it('renders a Projects Link', () => {
    expect(navbar[2].children).to.be.equal('Projects');
    expect(navbar[2].to).to.be.equal('/Projects');
  });
  it('renders a Publications Link', () => {
    expect(navbar[3].children).to.be.equal('Publications');
    expect(navbar[3].to).to.be.equal('/Publications');
  });
  it('render a Skills Link', () => {
    expect(navbar[4].children).to.be.equal('Skills');
    expect(navbar[4].to).to.be.equal('/Skills');
  });

});
