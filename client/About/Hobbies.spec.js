import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Hobbies, { SingleHobby, myHobbies } from './Hobbies';

describe('Hobbies component', () => {
  let container;

  describe('shallow render', () => {
    before(() => {
      container = shallow(<Hobbies />);
    });

    it('has a header', () => {
      expect(container.find('h2').text()).to.be.equal('Hobbies');
    });

    it('renders link images', () => {
      expect(
        container.containsMatchingElement(
          <SingleHobby key={myHobbies[0].activity} />
        )
      ).to.equal(true);
    });

    it('contains SingleHobby', () => {
      expect(container.find(SingleHobby)).to.have.lengthOf(myHobbies.length);
    });
  });

  describe('shallow render of singleHobby', () => {
    before(() => {
      container = shallow(<SingleHobby hobby={myHobbies[0]} />);
    });

    it('has an image', () => {
      const image = container.find('img');
      expect(image).to.have.lengthOf(1);
      expect(image.props().src).to.be.equal(
        `images/Hobbies/${myHobbies[0].image}`
      );
      expect(image.props().alt).to.be.equal(
        `Photo of ${myHobbies[0].activity}`
      );
    });

    it('has a description', () => {
      expect(container.contains(myHobbies[0].activity)).to.equal(true);
    });
  });

  describe('mount of hobbies', () => {
    before(() => {
      container = mount(<Hobbies />);
    });

    it('renders link images', () => {
      expect(
        container.containsMatchingElement(
          <SingleHobby key={myHobbies[0].activity} />
        )
      ).to.equal(true);
    });

    it('contains SingleHobby', () => {
      expect(container.find(SingleHobby)).to.have.lengthOf(myHobbies.length);
    });

    it('has an image for every hobby', () => {
      const image = container.find('img');
      expect(image).to.have.lengthOf(myHobbies.length);
      expect(image.at(0).props().src).to.be.equal(
        `images/Hobbies/${myHobbies[0].image}`
      );
      expect(image.at(0).props().alt).to.be.equal(
        `Photo of ${myHobbies[0].activity}`
      );
    });
  });
});
