import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from './main';
import Header from './Header';
import Routes from './routes';


describe('Main', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<Main />);
  });
  it('renders header', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  it('renders Routes', () => {
    expect(wrapper.find(Routes)).to.have.lengthOf(1);
  });
});