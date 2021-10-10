import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ContactForm from './ContactForm';
import ContactLinks from '../About/Contact';
import sinon from 'sinon';

describe.only('contact form', () => {
  describe('shallowRender', () => {
    const container = shallow(<ContactForm />);

    it('has a  h1 header', () => {
      console.log(ContactForm.prototype);
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
  describe('state changes', () => {
    const container = shallow(<ContactForm />);
    it('should call handle change for name', () => {
      const input = container.find('#name');
      expect(input.props().value).to.equal('');
      input.simulate('change', { target: { value: 'Kelsey' } });
      const nameField = container.find('#name');
      expect(nameField.props().value).to.equal('Kelsey');
    });
    it('should call handle change for email', () => {
      const input = container.find('#email');
      expect(input.props().value).to.equal('');
      input.simulate('change', { target: { value: 'Kelsey@123.com' } });
      const nameField = container.find('#email');
      expect(nameField.props().value).to.equal('Kelsey@123.com');
    });
    it('should call handle change for subject', () => {
      const input = container.find('#subject');
      expect(input.props().value).to.equal('');
      input.simulate('change', { target: { value: 'Kelsey' } });
      const nameField = container.find('#subject');
      expect(nameField.props().value).to.equal('Kelsey');
    });
    it('should call handle change for message', () => {
      const input = container.find('textarea');
      expect(input.props().value).to.equal('');
      input.simulate('change', { target: { value: 'Kelsey is great.' } });
      const nameField = container.find('textarea');
      expect(nameField.props().value).to.equal('Kelsey is great.');
    });
  });
  describe('submition', () => {
    let container;
    let message;
    let subject;
    let name;
    let email;
    let form;
    beforeEach(() => {
      container = shallow(<ContactForm />);
      message = container.find('textarea');
      subject = container.find('#subject');
      name = container.find('#name');
      email = container.find('#email');
      form = container.find('form');
    });
    it('before entering every thing should be empty', () => {
      expect(message.props().value).to.equal('');
      expect(subject.props().value).to.equal('');
      expect(name.props().value).to.equal('');
      expect(email.props().value).to.equal('');
      expect(container.find('span')).to.have.lengthOf(0);
    });
    it('submitsion should fail if everything is empty', () => {
      expect(message.props().value).to.equal('');
      expect(name.props().value).to.equal('');
      expect(email.props().value).to.equal('');
      form.simulate('submit', { preventDefault() {} });
      const formRemains = container.find('form');
      expect(formRemains).to.have.lengthOf(1);
    });
    it('empty fields should cause error messages to appear on submit', () => {
      expect(email.props().value).to.equal('');
      expect(container.find('span')).to.have.lengthOf(0);
      form.simulate('submit', { preventDefault() {} });
      const spans = container.find('span');
      expect(spans).to.have.length.greaterThan(0);
    });
    it('empty name should error span', () => {
      expect(name.props().value).to.equal('');
      email.simulate('change', { target: { value: 'Kelsey@123.com' } });
      message.simulate('change', { target: { value: 'Kelsey is great.' } });
      form.simulate('submit', { preventDefault() {} });
      const spans = container.find('span');
      // expect(spans).to.have.lengthOf(1)
      expect(spans.at(0).text()).to.equal('Please tell me your name.');
    });
    it('empty email should error span', () => {
      expect(email.props().value).to.equal('');
      name.simulate('change', { target: { value: 'Kelsey' } });
      message.simulate('change', { target: { value: 'Kelsey is great.' } });
      form.simulate('submit', { preventDefault() {} });
      const spans = container.find('span');
      // expect(spans).to.have.lengthOf(1)
      expect(spans.at(1).text()).to.equal(
        'Please tell me how to reach you by email.'
      );
    });
    it('empty message should error span', () => {
      expect(message.props().value).to.equal('');
      email.simulate('change', { target: { value: 'Kelsey@123.com' } });
      name.simulate('change', { target: { value: 'Kelsey' } });
       form.simulate('submit', { preventDefault() {} });
     
      const spans = container.find('span');
      // expect(spans).to.have.lengthOf(1)
      expect(spans.at(2).text()).to.equal(
        'Please tell me why you are interested in speaking with me.'
      );
    });
    // it("calls handle submit on click", () => {
    //     container.instance().handleSubmit = sinon.spy()
    //     const button = container.find("button")
    //     button.simulate("click")
    //     expect(container.handleSubmit.calledOnce).to.equal(true)
    // })
  });
});
