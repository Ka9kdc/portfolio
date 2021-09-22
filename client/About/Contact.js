import React from 'react';

export const contactLinksArr = [
  {
    name: 'github',
    url: 'https://github.com/Ka9kdc',
    src: 'images/github-logo.png',
    alt: 'Github logo and link to my github',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/kelsey-m-schroeder/',
    src: 'images/linkedin-logo.png',
    alt: 'linkedin logo and link to my linked in profile',
  },
  {
    name: 'calendarly',
    url: 'https://calendly.com/kmschroeder91',
    src: 'images/calendly.png',
    alt: 'Link to am calendly appointment book',
  },
];

const ContactLinks = () => {
  return (
    <article className="flex_wrap_row multi_img" id="Contacts">
      <h1 className="title">Contact Links</h1>
      {contactLinksArr.map((link) => {
        return <SingleLink key={link.name} link={link} />;
      })}
    </article>
  );
};

export const SingleLink = ({ link }) => {
  return (
    <a href={link.url}>
      <img src={link.src} alt={link.alt} />
    </a>
  );
};

export default ContactLinks;
