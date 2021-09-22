import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
    <iframe
      id="Resume"
      style={{ width: '100%', height: '20vh' }}
      src="Kelsey_Schroeder_Resume September_2021.pdf"
    />
    <Link to="Kelsey_Schroeder_Resume September_2021.pdf" target="_blank" download><button type="button" className="title">Download My Resume</button></Link>
    </>
  );
};

export default Resume;
