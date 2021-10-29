import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContactLinks from '../About/Contact';

const ContactForm = (props) => {
  const [sender, setSender] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errSender, setErrSender] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      if (props.sender) {
        setSender(props.sender);
      }
      if (props.email) {
        setEmail(props.email);
      }
      if (props.message) {
        setMessage(props.message);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!sender) {
      setErrSender(true);
    } else {
      setErrSender(false);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
    }
    if (!message) {
      setErrMessage(true);
    } else {
      setErrMessage(false);
    }
    if (sender && message && email) {
      console.log(message);
      setSent(true);
      axios.post('/api/email', { sender, email, subject, message });
    }
  };

  if (sent) {
    return (
      <article>
        <h2 className="title">
          Thank you, {sender} for your message. I look forward to connecting
          with you.
        </h2>
        <section className="box white">
          <ContactLinks />
        </section>
      </article>
    );
  }

  return (
    <article>
      <h1 className="section_title">Send Kelsey Schroeder a Message</h1>
      <form onSubmit={handleSubmit} className="box white">
        <input
          className="form_input"
          type="text"
          placeholder="Name"
          id="name"
          value={sender}
          onChange={(event) => setSender(event.target.value)}
        />
        {errSender && <span>Please tell me your name.</span>}
        <input
          className="form_input"
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errEmail && <span>Please tell me how to reach you by email.</span>}
        <input
          className="form_input"
          type="text"
          placeholder="Subject"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        {errMessage && (
          <span>
            Please tell me why you are interested in speaking with me.
          </span>
        )}
        <textarea
          className="form_input"
          placeholder="Message"
          id="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit" className="find_out_more">
          Send Message
        </button>
      </form>{' '}
      <section className="box white">
        <ContactLinks />
      </section>
    </article>
  );
};

export default ContactForm;
