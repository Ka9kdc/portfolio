import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import SingleProject from './SingleProject';
import projectData from './hackathonProjectData';
import { MemoryRouter, Route } from 'react-router-dom';
import TechUsed from './TechUsed';
import librariesUsed from '../LibrariesObject';
import ProjectImage from './ProjectImage';

describe('Single Project Component', () => {
  let container;
  const testProject = projectData[0];
  before(() => {
    container = mount(
      <MemoryRouter initialEntries={['/Project/0']}>
        <Route path="/Project/:id">
          <SingleProject />
        </Route>
      </MemoryRouter>
    );
  });

  it('has a header of project title', () => {
    expect(container.find('h1').text()).to.be.equal(testProject.name);
  });
  it('has links to the repo, deployment, submission, and medium', () => {
    const links = container.find(`[href="${testProject.links[0].url}"]`);
    expect(links).to.have.lengthOf(1);
    expect(links.text()).to.be.equal(testProject.links[0].name);
    expect(links.key()).to.be.equal(
      `${testProject.links[0].name}:${testProject.links[0].url}`
    );
    const link2 = container.find(`[href="${testProject.links[1].url}"]`);
    expect(link2).to.have.lengthOf(1);
    expect(link2.text()).to.be.equal(testProject.links[1].name);
    expect(link2.key()).to.be.equal(
      `${testProject.links[1].name}:${testProject.links[1].url}`
    );
  });
  it('has the month and year the project was deveoloped', () => {
    expect(container.find('h3').first().text()).to.be.equal(
      `Developed: ${testProject.date}`
    );
  });
  it('has a discription of the project', () => {
    expect(container.find('p').first().text()).to.equal(testProject.text[0]);
  });
  it("has an image or videp of the project", () => {
    expect(container.containsMatchingElement(<ProjectImage />)).to.equal(true)
  })
  it("has a list of tech used", () => {
    expect(container.containsMatchingElement(<TechUsed />)).to.equal(true)
    expect(container.find(TechUsed)).to.have.lengthOf(testProject.techUsed.length)
  })
  it("has an image for each tech used", () => {
    container.find(TechUsed).forEach((node, idx) => {
      const kid = node.children().props().children
      const tech = testProject.techUsed[idx].split(".")[0]
      expect(kid.type).to.equal('img')
      expect(kid.props.src).to.equal(`.././${librariesUsed[tech].logo}`)
      expect(kid.props.alt).to.equal(`${testProject.techUsed[idx]} logo`)
    })
  })
});
