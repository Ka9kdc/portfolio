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

describe('resume Componenet', () => {
  const container = shallow(<Resume />);
  it('renders an iframe', () => {
    expect(container.find('iframe')).to.have.lengthOf(1);
  });
  it('renders my resume pdf', () => {
    const fileSrc = container.find('iframe').props().src;
    expect(fileSrc.includes('Resume')).to.equal(true);
    expect(fileSrc.includes('Kelsey')).to.equal(true);
  });
});
