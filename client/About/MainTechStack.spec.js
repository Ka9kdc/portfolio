import { expect } from 'chai';
import {  mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import TechUsed from '../Projects/TechUsed';
import MainTechStack from './MainTechStack';

describe('main tech component', () => {
  let container;
  describe('shallow render', () => {
    before(() => {
      container = mount(<MemoryRouter initialEntries={["/About"]}><MainTechStack /></MemoryRouter>);
    });
    it('renders the tech used component', () => {
      expect(container.containsMatchingElement(<TechUsed />)).to.equal(true);
    });
    it('renders all the tech used component', () => {
      expect(container.find(TechUsed)).to.have.lengthOf(5);
    });
    it('renders a title', () => {
      expect(container.find('h2')).to.have.lengthOf(1);
      expect(container.find('h2').text()).to.be.equal('Main Tech Stack:');
    });
    it('renders a button', () => {
      expect(container.find('button')).to.have.lengthOf(1);
      expect(container.find('button').text()).to.be.equal(
        'See More Libraries Known'
      );
    });
    it('links t /Skills', () => {
      expect(container.find('Link')).to.have.lengthOf(1);
      expect(container.find('Link').props().to).to.be.equal('/Skills');
    });
    it('button is the chlid of link', () => {
      expect(container.find('Link').children()).to.have.lengthOf(1);
      expect(container.find('Link').childAt(0).props().children.type).to.equal('button');
      expect(container.find('Link').childAt(0).props().children.props.type).to.equal('button');
      expect(container.find('Link').childAt(0).props().children.props.children).to.equal(
        'See More Libraries Known'
      );
    });
  });
});
