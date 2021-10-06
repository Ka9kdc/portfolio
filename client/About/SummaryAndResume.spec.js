import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Summary from './Summary';
import Resume from './Resume';

describe('Summary Component', () => {
  const container = shallow(<Summary />);
  it('renders a photo of me', () => {
    const images = container.find('img');
    expect(images).to.have.length.greaterThanOrEqual(1);
  });
  it('renders paragraphs about me', () => {
    const para = container.find('p');
    expect(para).to.have.length.greaterThanOrEqual(1);
  });
});

describe('Resume Componenet', () => {
  const container = shallow(<Resume />);
  it('renders an iframe', () => {
    expect(container.find('iframe')).to.have.lengthOf(1);
  });
  it('renders my resume pdf', () => {
    const fileSrc = container.find('iframe').props().src;
    expect(fileSrc.includes('Resume')).to.equal(true);
    expect(fileSrc.includes('Kelsey')).to.equal(true);
  });
  it('renders an link and a button', () => {
    const link = container.find('Link');
    expect(link).to.have.lengthOf(1);
    expect(link.props().children.type).to.equal('button');
    expect(link.find('button').text()).to.equal('Download My Resume');
  });
  it('renders a down load my resume pdf button', () => {
    const link = container.find('Link').props().to;
    expect(link.includes('Resume')).to.equal(true);
    expect(link.includes('Kelsey')).to.equal(true);
  });
});


