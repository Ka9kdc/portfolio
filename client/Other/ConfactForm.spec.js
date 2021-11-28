import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ContactForm from './ContactForm';
import ContactLinks from '../About/Contact';
import { mockAxios } from '../index.spec';
import { BrowserRouter } from 'react-router-dom';

describe('contact form', () => {
  describe('shallowRender', () => {
    const container = shallow(<ContactForm />);

    it('has a  h1 header', () => {
      expect(container.find('h1').text()).to.equal(
        'Send Kelsey Schroeder a Message'
      );
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
      const name = container.find('#name');
      expect(name).to.have.lengthOf(1);
      expect(name.props().id).to.equal('name');
      expect(name.props().placeholder).to.equal('Name');
      expect(name.props().value).to.equal('');
      expect(name.type()).to.equal('input');
      expect(name.props().type).to.equal('text');
    });

    it('has a email input field', () => {
      const email = container.find('#email');
      expect(email).to.have.lengthOf(1);
      expect(email.props().id).to.equal('email');
      expect(email.props().placeholder).to.equal('Email');
      expect(email.props().value).to.equal('');
      expect(email.type()).to.equal('input');
      expect(email.props().type).to.equal('email');
    });

    it('has a subject imput field', () => {
      const subject = container.find('#subject');
      expect(subject).to.have.lengthOf(1);
      expect(subject.props().id).to.equal('subject');
      expect(subject.props().placeholder).to.equal('Subject');
      expect(subject.props().value).to.equal('');
      expect(subject.props().type).to.equal('text');
      expect(subject.type()).to.equal('input');
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

  describe('submition empty form', () => {
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

    describe('span messages', () => {
      let testProps;

      it('can pass in test props', () => {
        testProps = {
          sender: 'kelsey',
          email: '123@123.com',
          message: 'message',
        };
        container = mount(
          <BrowserRouter initialEntries={['/ContactMe']}>
            <ContactForm {...testProps} />
          </BrowserRouter>
        );
        message = container.find('textarea');
        name = container.find('#name');
        email = container.find('#email');
        form = container.find('form');
        expect(name.prop('value')).to.equal('kelsey');
        expect(email.prop('value')).to.equal('123@123.com');
        expect(message.prop('value')).to.equal('message');
        expect(form.find('span')).to.have.lengthOf(0);
      });

      it('empty name', () => {
        testProps = { email: '123@123.com', message: 'message' };
        container = mount(
          <BrowserRouter initialEntries={['/ContactMe']}>
            <ContactForm {...testProps} />
          </BrowserRouter>
        );
        message = container.find('textarea');
        name = container.find('#name');
        email = container.find('#email');
        form = container.find('form');
        expect(name.prop('value')).to.equal('');
        expect(email.prop('value')).to.equal('123@123.com');
        expect(message.prop('value')).to.equal('message');
        expect(container.find('span')).to.have.lengthOf(0);
        form.simulate('submit', { preventDefault() {} });
        const span = container.find('span');
        expect(span).to.have.lengthOf(1);
        expect(span.text()).to.equal('Please tell me your name.');
      });

      it('empty email', () => {
        testProps = { sender: 'kelsey', message: 'message' };
        container = mount(
          <BrowserRouter initialEntries={['/ContactMe']}>
            <ContactForm {...testProps} />
          </BrowserRouter>
        );
        message = container.find('textarea');
        name = container.find('#name');
        email = container.find('#email');
        form = container.find('form');
        expect(name.prop('value')).to.equal('kelsey');
        expect(email.prop('value')).to.equal('');
        expect(message.prop('value')).to.equal('message');
        expect(container.find('span')).to.have.lengthOf(0);
        form.simulate('submit', { preventDefault() {} });
        const span = container.find('span');
        expect(span).to.have.lengthOf(1);
        expect(span.text()).to.equal(
          'Please tell me how to reach you by email.'
        );
      });

      it('empty message', () => {
        testProps = { sender: 'kelsey', email: '123@123.com' };
        container = mount(
          <BrowserRouter initialEntries={['/ContactMe']}>
            <ContactForm {...testProps} />
          </BrowserRouter>
        );
        message = container.find('textarea');
        name = container.find('#name');
        email = container.find('#email');
        form = container.find('form');
        expect(name.prop('value')).to.equal('kelsey');
        expect(email.prop('value')).to.equal('123@123.com');
        expect(message.prop('value')).to.equal('');
        expect(container.find('span')).to.have.lengthOf(0);
        form.simulate('submit', { preventDefault() {} });
        const span = container.find('span');
        expect(span).to.have.lengthOf(1);
        expect(span.text()).to.equal(
          'Please tell me why you are interested in speaking with me.'
        );
      });
    });
  });

  describe('submittion filled out', () => {
    let container;
    let message;
    let subject;
    let name;
    let email;
    let form;
    const testProps = {
      sender: 'kelsey',
      email: '123@123.com',
      message: 'message',
    };

    before(() => {
      container = mount(
        <BrowserRouter initialEntries={['/ContactMe']}>
          <ContactForm {...testProps} />
        </BrowserRouter>
      );
      message = container.find('textarea');
      subject = container.find('#subject');
      name = container.find('#name');
      email = container.find('#email');
      form = container.find('form');
    });

    it('can pass in test props', () => {
      expect(name.prop('value')).to.equal('kelsey');
      expect(email.prop('value')).to.equal('123@123.com');
      expect(message.prop('value')).to.equal('message');
      expect(subject.prop('value')).to.equal('');
      expect(form).to.have.lengthOf(1);
      expect(form.find('span')).to.have.lengthOf(0);
    });

    it('no spans appear on submit', () => {
      expect(form).to.have.lengthOf(1);
      expect(form.find('span')).to.have.lengthOf(0);
      form.simulate('submit', { preventDefault() {} });
      expect(container.find('form')).to.have.lengthOf(0);
      expect(container.find('form').find('span')).to.have.lengthOf(0);
    });

    it('makes an axois call', () => {
      const [postRequest] = mockAxios.history.post;
      expect(postRequest).to.not.equal(undefined);
      expect(postRequest.url).to.equal('/api/email');
    });

    it('a confermation message appears', () => {
      let confirmation = container.find('h2');
      expect(confirmation).to.have.lengthOf(1);
      expect(confirmation.text()).to.equal(
        `Thank you, ${testProps.sender} for your message. I look forward to connecting with you.`
      );
    });
    it('the contact links remain', () => {
      expect(container.containsMatchingElement(<ContactLinks />)).to.equal(
        true
      );
    });
  });
});
