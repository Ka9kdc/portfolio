import { expect } from 'chai';
import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { mockAxios, getExperience, fakeJob } from '../index.spec';
import sinon, { fake } from 'sinon';
import * as rrd from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import Exprience, { SingleJob } from './Exprience';


describe.only('Experince Component', () => {
  let container;


  describe('shallow render', () => {
    before(() => {
      container = shallow(<Exprience />);
    });
    after(() => {
      container = null;
    });
    it('renders an h1 cotaining experience', () => {
      const h1 = container.find('h1');
      expect(h1.text()).to.equal('Experience');
    });
    it('contains singlejob component', () => {
      expect(container.containsMatchingElement([<SingleJob />])).to.equal(true);
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
       getExperience()
container = mount(
          <Exprience />
            );
   })

    it('renders 5 jobs', () => {
      const h2s = container.find("h2")
      expect(h2s.length).to.equal(1)
      expect(h2s.text()).to.equal(fakeJob.JobTitle);
    });
    it('should contain a list of descriptions', () => {
        const description = container.find('li');
        expect(description).to.be.length(fakeJob.description.length);
        expect(description.at(0).text()).to.equal(fakeJob.description[0]);
      });
      it('makes an axois call', () => {
                const [getRequest] = mockAxios.history.get;
                expect(getRequest).to.not.equal(undefined);
                expect(getRequest.url).to.equal("/api/work")
            })
  });
});
