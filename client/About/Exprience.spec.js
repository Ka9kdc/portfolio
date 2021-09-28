import { expect } from 'chai';
import React from 'react';
import { mount, shallow } from 'enzyme';


import Exprience, { SingleJob } from './Exprience';
import workHistory from './JobData';

describe('Experince Component', () => {
  let container;
  const fakeJob = workHistory[0]

  describe('shallow render', () => {
    before(() => {
      container = shallow(<Exprience />);
    });

    it('renders an h1 cotaining experience', () => {
      const h1 = container.find('h1');
      expect(h1.text()).to.equal('Experience');
    });
    it('contains singlejob component', () => {
      expect(
        container.containsMatchingElement([<SingleJob key="Job#1" />])
      ).to.equal(true);
    });
  });
  describe('single Job', () => {
    before(() => {
      container = shallow(<SingleJob job={fakeJob} />);
    });

    it('should contain a jobTitle', () => {
      const title = container.find('h2');
      expect(title.text()).to.equal(fakeJob.JobTitle);
    });
    it('should contain a list of descriptions', () => {
      const description = container.find('li');
      expect(description).to.be.length(fakeJob.description.length);
      expect(description.at(0).text()).to.equal(fakeJob.description[0]);
    });
  });
  describe('mounted render', () => {
    before(() => {

      container = mount(<Exprience />);
    });

    it('renders 5 jobs', () => {
      const h2s = container.find('h2');
      expect(h2s.length).to.equal(workHistory.length);
      expect(h2s.first().text()).to.equal(fakeJob.JobTitle);
    });
    xit('should contain a list of descriptions', () => {
      const description = container.find('li');
      expect(description).to.be.length(fakeJob.description.length);
      expect(description.at(0).text()).to.equal(fakeJob.description[0]);
    });
  });
});
