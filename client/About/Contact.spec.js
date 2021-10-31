import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ContactLinks, { contactLinksArr, SingleLink } from './Contact';
import { BrowserRouter } from 'react-router-dom';

describe('Contact Component', () => {
  let container;

  // xdescribe('contactlinks container shallow render', () => {
  //   before(() => {
  //     container = shallow(<ContactLinks />);
  //   });

  //   it('has a header', () => {
  //     expect(container.find('h1').text()).to.be.equal('Contact Links:');
  //   });

  //   it('renders link images', () => {
  //     expect(
  //       container.containsMatchingElement(
  //         <SingleLink key={contactLinksArr[0].name} />
  //       )
  //     ).to.equal(true);
  //   });
  // });

  describe('SingleLink render', () => {
    before(() => {
      container = shallow(<SingleLink link={contactLinksArr[0]} />);
    });

    it('renders a single link', () => {
      let link = container.find('a');
      expect(link).to.have.lengthOf(1);
      expect(link.props().href).to.be.equal(contactLinksArr[0].url);
    });

    it('renders a image instead of words', () => {
      let image = container.find('img');
      expect(image).to.have.lengthOf(1);
      expect(image.props().src).to.be.equal(contactLinksArr[0].src);
      expect(image.props().alt).to.be.equal(contactLinksArr[0].alt);
    });
  });

  describe('mount contact links', () => {
    before(() => {
      container = mount(<BrowserRouter initialEntries={["/About"]}><ContactLinks /></BrowserRouter>);

    });
    it('has a header', () => {
      expect(container.find('h1').text()).to.be.equal('Contact Links:');
    });

    it('renders link images', () => {
      expect(
        container.containsMatchingElement(
          <SingleLink key={contactLinksArr[0].name} />
        )
      ).to.equal(true);
    });

    it('renders all links', () => {
      let link = container.find('a');
      expect(link).to.have.lengthOf(contactLinksArr.length+1);
    });

    it('renders all images', () => {
      let image = container.find('img');
      expect(image).to.have.lengthOf(contactLinksArr.length);
    });
  });
});
