import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import '../index.spec';
import About from '.';
import Exprience, { SingleJob } from './Exprience';
import Education, { Institute } from './Education';
import Summary from './Summary';
import ContactLinks, { SingleLink } from './Contact';
import Hobbies, { myHobbies, SingleHobby } from './Hobbies';
import Resume from './Resume';
import { BrowserRouter } from 'react-router-dom';
import workHistory from './JobData';

describe('About Component', () => {
  let container;
  describe('shallow render', () => {
    before(() => {
      container = shallow(<About />);
    });
    it('contains a title', () => {
      expect(container.find('h1').text()).to.be.equal('Kelsey Schroeder');
    });
    it('has a link to 5 of the 6 sections', () => {
      let links = container.find('a').map((node) => node.props().href);
      expect(links).to.be.lengthOf(5);
      expect(links.indexOf('#Hobbies')).to.not.equal(-1);
      expect(links.indexOf('#Education')).to.not.equal(-1);
      expect(links.indexOf('#Contacts')).to.not.equal(-1);
      expect(links.indexOf('#Experience')).to.not.equal(-1);
      expect(links.indexOf('#Resume')).to.not.equal(-1);
      expect(links.indexOf('#Summary')).to.equal(-1);
    });
    it('contains Expriences', () => {
      expect(
        container.containsMatchingElement([<Exprience key="5" />])
      ).to.equal(true);
    });
    it('contains Expriences', () => {
      expect(container.find(Exprience)).to.have.lengthOf(1);
    });
    it('contains Education', () => {
      expect(
        container.containsMatchingElement([<Education key="8" />])
      ).to.equal(true);
    });
    it('contains Education', () => {
      expect(container.find(Education)).to.have.lengthOf(1);
    });
    it('contains Summary', () => {
      expect(container.containsMatchingElement([<Summary key="9" />])).to.equal(
        true
      );
    });
    it('contains Summary', () => {
      expect(container.find(Summary)).to.have.lengthOf(1);
    });
    it('contains ContactLinks', () => {
      expect(
        container.containsMatchingElement([<ContactLinks key="10" />])
      ).to.equal(true);
    });
    it('contains Hobbies', () => {
      expect(
        container.containsMatchingElement([<Hobbies key="10" />])
      ).to.equal(true);
    });
    it('contains Resume', () => {
      expect(container.containsMatchingElement([<Resume key="10" />])).to.equal(
        true
      );
    });
  });

  describe('mount render', () => {
    let articles;
    before(() => {
      container = mount(
        <BrowserRouter>
          <About />
        </BrowserRouter>
      );
      articles = container.find('article').map((node) => node.props().id);
    });
    it('contianers exprience and singlejob', () => {
      expect(
        container.containsAllMatchingElements([
          <Exprience key="6" />,
          <SingleJob key="Job#1" />,
        ])
      ).to.equal(true);
    });
    it('experience has an id of Experience', () => {
      expect(articles.indexOf('Experience')).to.not.equal(-1);
    });
    it('contains SingleJob', () => {
      expect(container.find(SingleJob)).to.have.lengthOf(workHistory.length);
    });
    it('contianers education and Institute', () => {
      expect(
        container.containsAllMatchingElements([
          <Education key="7" />,
          <Institute key="Grace Hopper Program at Fullstack Academy of Code" />,
        ])
      ).to.equal(true);
    });
    it('Education has an id of Education', () => {
      expect(articles.indexOf('Education')).to.not.equal(-1);
    });
    it('contains Institute', () => {
      expect(container.find(Institute)).to.have.lengthOf(2);
    });
    it('contains Summary', () => {
      expect(container.containsMatchingElement([<Summary key="9" />])).to.equal(
        true
      );
    });
    it('contains ContactLinks and Single link', () => {
      expect(
        container.containsAllMatchingElements([
          <ContactLinks key="10" />,
          <SingleLink key="11" />,
        ])
      ).to.equal(true);
    });
    it('ContantLinks has an id of Contacts', () => {
      expect(articles.indexOf('Contacts')).to.not.equal(-1);
    });
    it('contains singlecontact', () => {
      expect(container.find(SingleLink)).to.have.lengthOf(3);
    });
    it('contains hobbies and singleHobby', () => {
      expect(
        container.containsAllMatchingElements([
          <Hobbies key="10" />,
          <SingleHobby key="11" />,
        ])
      ).to.equal(true);
    });
    it('Hobbies has an id of Hobbies', () => {
      expect(articles.indexOf('Hobbies')).to.not.equal(-1);
    });
    it('contains SingleHobby', () => {
      expect(container.find(SingleHobby)).to.have.lengthOf(myHobbies.length);
    });
    it('contains Resume', () => {
      expect(container.containsMatchingElement([<Resume key="10" />])).to.equal(
        true
      );
    });
  });
});
