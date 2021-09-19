import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { mockAxios} from '../index.spec';
import About from '.';
import Exprience, { SingleJob } from './Exprience';

describe('About Component', () => {
  let container;
  describe('shallow render', () => {
    before(() => {
      container = shallow(<About />);
    });
    it('contains a title', () => {
      expect(container.find('h1').text()).to.be.equal('About');
    });
    it('contains Expriences', () => {
      expect(
        container.containsMatchingElement([<Exprience key="5" />])
      ).to.equal(true);
    });
    it('contains Expriences', () => {
      expect(container.find(Exprience)).to.have.lengthOf(1);
    });
  });
  describe('mount render', () => {
    before(() => {
      container = mount(<About />);
    });
    it('contianers exprience and singlejob', () => {
      expect(
        container.containsAllMatchingElements([
          <Exprience key="6" />,
          <SingleJob key="Job#1" />,
        ])
      ).to.equal(true);
    });
    it('contains SingleJob', () => {
      expect(container.find(SingleJob)).to.have.lengthOf(1);
    });
    it('makes an axois call', () => {
      const [getRequest] = mockAxios.history.get;
      expect(getRequest).to.not.equal(undefined);
      expect(getRequest.url).to.equal('/api/work');
    });
  });
});
