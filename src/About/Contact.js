import React from 'react';
// Import { Link } from 'react-router-dom';
// Import { useLocation } from 'react-router';

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

const ContactLinks = () => (
  // Const location = useLocation().pathname;
  <article className="flex_wrap_row multi_img" id="Contacts">
    <h1 className="title">Contact Links:</h1>
    {/* {location !== '/ContactMe' ? (
        <Link to="/ContactMe">
          <button type="button" className="title find_out_more">
            Contact Me Form
          </button>
        </Link>
      ) : null} */}
    {contactLinksArr.map((link) => (
      <SingleLink key={link.name} link={link} />
    ))}
  </article>
);
export const SingleLink = ({ link }) => (
  <a href={link.url}>
    <button type="button" className="title find_out_more">
      <img src={link.src} alt={link.alt} />
    </button>
  </a>
);

export default ContactLinks;
