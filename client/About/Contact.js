import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {

  return (
    <div className={props.showList === "contact" ? '' : 'hidden'}>

        | <Link to="github.com/Ka9kdc">Github: github.com/Ka9kdc</Link> | |{' '}
        <Link to="https://www.linkedin.com/in/kelsey-m-schroeder/">
          Linkedin: https://www.linkedin.com/in/kelsey-m-schroeder/
        </Link>{' '}
        |
      </div>

  );
};

export default Contact;
