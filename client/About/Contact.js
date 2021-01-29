import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [showList, setShowList] = useState('hidden');

  function showOrHide() {
    if (showList === 'hidden') {
      setShowList('');
    } else {
      setShowList('hidden');
    }
  }
  return (
    <div className="flexItem">
      <button type='button' onClick={showOrHide}><h2>Contact</h2></button>
      <div className={showList}>
        | <Link to="github.com/Ka9kdc">Github: github.com/Ka9kdc</Link> | |{' '}
        <Link to="https://www.linkedin.com/in/kelsey-m-schroeder/">
          Linkedin: https://www.linkedin.com/in/kelsey-m-schroeder/
        </Link>{' '}
        |
      </div>
    </div>
  );
};

export default Contact;
