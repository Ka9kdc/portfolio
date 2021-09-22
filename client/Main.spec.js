import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './main';
import Header from './Header';
import Routes from './Routes';

describe('Main', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<Main />);
  });
  it('containers header and routers', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Header key="3" />,
        <Routes key="2" />,
      ])
    ).to.equal(true);
  });
  it('renders header', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  it('renders Routes', () => {
    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});
