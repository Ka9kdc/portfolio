import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Skills from '.';
import TechUsed from '../Projects/TechUsed';
import librariesUsed from './LibrariesObject';

describe('skills component', () => {
  let container;
  describe('shallow render', () => {
    before(() => {
      container = shallow(<Skills />);
    });
    it('has a h1 title', () => {
      expect(container.find('h1').text()).to.be.equal('Skills');
    });
    it('has 3 sections', () => {
      expect(container.find('article')).to.have.lengthOf(3);
      expect(container.find('h2')).to.have.lengthOf(3);
    });
    it('has a knowledgable section listed first', () => {
      expect(container.find('h2').first().text()).to.be.equal(
        'Comfortable Using:'
      );
    });
    it('has a played with section listed last', () => {
      expect(container.find('h2').last().text()).to.be.equal('Played With:');
    });
    it('has tech used components for the tech images', () => {
      expect(container.containsMatchingElement(<TechUsed />)).to.equal(true);
    });
    it('has tech used components for all tech in libraries used object', () => {
      expect(container.find(TechUsed)).to.have.lengthOf(
        Object.keys(librariesUsed).length
      );
    });
  });
});
