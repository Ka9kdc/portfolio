import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { contactLinksArr } from './data';


const ContactLinks = () => {
  const location = useLocation().pathname;
 return ( <article className="flex_wrap_row multi_img" id="Contacts">
    <h1 className="title">Contact Links:</h1>
    {location !== '/ContactMe' ? (
        <Link to="/portfolio/ContactMe">
          <button type="button" className="title find_out_more">
            Contact Me Form
          </button>
        </Link>
      ) : null}
      
    {contactLinksArr.map((link) => (
      <SingleLink key={link.name} link={link} />
    ))}
  </article>
)};

export const SingleLink = ({ link }) => (
  <a href={link.url}>
    <button type="button" className="title find_out_more">
      <img src={link.src} alt={link.alt} />
    </button>
  </a>
);

export default ContactLinks;
