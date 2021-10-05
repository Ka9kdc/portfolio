import React, { useState } from 'react';
import ContactLinks from './About/Contact';

const ContactForm = () => {
  const [sender, setSender] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    console.log(message);
    setSent(true);
  };

  if (sent) {
    return (
      <div>
        <h2 className="title">
          Thank you {sender} for your message. I look forward to connecting with
          you.
        </h2>
        <ContactLinks />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form_input"
        type="text"
        placeholder="Name"
        id="name"
        value={sender}
        onChange={(event) => setSender(event.target.value)}
      />
      <input
        className="form_input"
        type="email"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="form_input"
        type="text"
        placeholder="Subject"
        id="subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        className="form_input"
        placeholder="Message"
        id="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
