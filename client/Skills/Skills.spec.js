import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Skills from '.';
import TechUsed from '../Projects/TechUsed';
import librariesUsed from './LibrariesObject';
import MainTechStack from '../About/MainTechStack';

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
    it('has main tech stack', () => {
      expect(container.containsMatchingElement(<MainTechStack />)).to.equal(
        true
      );
    });
  });
  describe('libraries object', () => {
    const keys = Object.keys(librariesUsed);
    it('all have a logo url', () => {
      keys.forEach((tech) => {
        expect(librariesUsed[tech].logo).to.exist;
        expect(librariesUsed[tech].logo).to.have.length.greaterThan(0);
        expect(typeof librariesUsed[tech].logo).to.equal('string');
      });
    });
    it('all have a name', () => {
      keys.forEach((tech) => {
        expect(librariesUsed[tech].name).to.exist;
        expect(librariesUsed[tech].name).to.have.length.greaterThan(0);
        expect(typeof librariesUsed[tech].name).to.equal('string');
      });
    });
    it('all have a key', () => {
      keys.forEach((tech) => {
        expect(librariesUsed[tech].key).to.exist;
        expect(typeof librariesUsed[tech].key).to.equal('number');
      });
    });
    it('all have a transparent', () => {
      keys.forEach((tech) => {
        expect(librariesUsed[tech].transparent).to.exist;
        expect(typeof librariesUsed[tech].transparent).to.equal('boolean');
      });
    });
  });
});
