import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Summary from './Summary';

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
