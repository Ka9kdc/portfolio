import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ProjectDisplay from './ProjectDisplay';
import projectData from './hackathonProjectData';

describe('project display', () => {
  const container = shallow(<ProjectDisplay project={projectData[0]} />);

  it('should have a title for each project', () => {
    expect(container.find('h2')).to.have.lengthOf(1);
    expect(container.find('h2').at(0).text()).to.equal(projectData[0].name);
  });

  it('it should have a list of tech for each project', () => {
    const list = container.find('ul');
    expect(list).to.have.lengthOf(1);
    expect(list.props().children).to.have.lengthOf(
      projectData[0].techUsed.length
    );
    expect(list.props().children[0].props.children).to.equal(
      projectData[0].techUsed[0]
    );
  });

  it('renders an image', () => {
    const imageList = container.find('img');
    expect(imageList).to.have.lengthOf(1);
    expect(imageList.props().src).to.equal(projectData[0].images[0].src);
    expect(imageList.props().alt).to.equal(projectData[0].images[0].alt);
  });

  it('renders a find out more button', () => {
    expect(container.find('button').text()).to.be.equal('Find Out More');
  });
});
