import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ContactForm from './ContactForm';
import ContactLinks from '../About/Contact';

describe.only('contact form', () => {
  describe('shallowRender', () => {
    const container = shallow(<ContactForm />);
    it('has a  h1 header', () => {
      expect(container.find('h1').text()).to.equal('Send Kelsey A Message');
    });
    it('has a form', () => {
      expect(container.find('form')).to.have.lengthOf(1);
      expect(container.find('input')).to.have.lengthOf.greaterThan(0);
      expect(container.find('form').children().last().type()).to.equal(
        'button'
      );
      expect(container.find('form').props().onSubmit).to.exist;
    });
    it('has a name imput field', () => {
      const name = container
        .find('input')
        .map((node) => node.props())
        .filter((node) => node.id === 'name');

      expect(name).to.have.lengthOf(1);
      expect(name[0].id).to.equal('name');
      expect(name[0].placeholder).to.equal('Name');
      expect(name[0].value).to.equal('');
      expect(name[0].type).to.equal('text');
    });
    it('has a email input field', () => {
      const email = container
        .find('input')
        .map((node) => node.props())
        .filter((node) => node.id === 'email');
      expect(email).to.have.lengthOf(1);
      expect(email[0].id).to.equal('email');
      expect(email[0].placeholder).to.equal('Email');
      expect(email[0].value).to.equal('');
      expect(email[0].type).to.equal('email');
    });
    it('has a subject imput field', () => {
      const subject = container
        .find('input')
        .map((node) => node.props())
        .filter((node) => node.id === 'subject');
      expect(subject).to.have.lengthOf(1);
      expect(subject[0].id).to.equal('subject');
      expect(subject[0].placeholder).to.equal('Subject');
      expect(subject[0].value).to.equal('');
      expect(subject[0].type).to.equal('text');
    });
    it('has a textarea for message', () => {
      expect(container.find('textarea')).to.have.lengthOf(1);
      const message = container.find('textarea').props();
      expect(message.id).to.equal('Message');
      expect(message.placeholder).to.equal('Message');
      expect(message.value).to.equal('');
    });
    it('has a submit button', () => {
      const button = container.find('button');
      expect(button).to.have.lengthOf(1);
      expect(button.props().type).to.equal('submit');
      expect(button.text()).to.equal('Send Message');
    });
    it('renders contact links', () => {
      expect(container.containsMatchingElement(<ContactLinks />)).to.equal(
        true
      );
    });
  });
});
