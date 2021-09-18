import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './main';
// import Header from './Header';
// import Routes from './Routes';

describe.only('Main', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<Main />);
  });
  xit('renders header', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  xit('renders Routes', () => {
    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});
