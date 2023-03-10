import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Projects from '.';
import ProjectDisplay from './ProjectDisplay';
import projectData from './hackathonProjectData';
import { BrowserRouter } from 'react-router-dom';
import MainTechStack from '../About/MainTechStack';
import TechUsed from './TechUsed';

describe('the main project component', () => {
  let container;

  describe('shallow render', () => {
    before(() => {
      container = shallow(<Projects />);
    });

    it('has an h1 for my projects', () => {
      expect(container.find('h1').text()).to.be.equal('My Projects');
    });

    it('renders the project desplay component', () => {
      expect(
        container.containsMatchingElement(<ProjectDisplay key="4" />)
      ).to.equal(true);
    });

    it('renders the project desplay component for all proejcts', () => {
      expect(container.find(ProjectDisplay)).to.have.lengthOf(
        projectData.length
      );
    });

    it('renders the main tech stack component', () => {
      expect(container.containsMatchingElement(<MainTechStack />)).to.equal(
        true
      );
    });
  });

  describe('mount render', () => {
    before(() => {
      container = mount(
        <BrowserRouter>
          <Projects />
        </BrowserRouter>
      );
    });

    it('renders the project desplay component for all proejcts', () => {
      expect(container.find(ProjectDisplay)).to.have.lengthOf(
        projectData.length
      );
    });

    it('should have a title for each project', () => {
      expect(container.find('h2')).to.have.lengthOf(projectData.length + 1);
      expect(container.find('h2').at(0).text()).to.equal(projectData[0].name);
    });

    it('it should have a list of tech for each project', () => {
      expect(container.find('ul')).to.have.lengthOf(projectData.length);
      expect(container.find('ul').at(0).props().children).to.have.lengthOf(
        projectData[0].techUsed.length
      );
      expect(
        container.find('ul').at(0).props().children[0].props.children
      ).to.equal(projectData[0].techUsed[0]);
    });

    it('renders the main tech stack component', () => {
      expect(container.containsMatchingElement(<MainTechStack />)).to.equal(
        true
      );
    });

    it('renders the tech used component', () => {
      expect(container.containsMatchingElement(<TechUsed />)).to.equal(true);
      expect(container.find(TechUsed)).to.have.lengthOf(5);
    });
  });
});
