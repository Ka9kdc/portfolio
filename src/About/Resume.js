import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => (
  <>
    <div className="video_wrapper">
      <iframe
        id="Resume"
        className="responsive-iframe"
        src="/Kelsey_Schroeder_Resume_September_2021.pdf"
      />
    </div>
    <Link
      to="Kelsey_Schroeder_Resume_September_2021.pdf"
      target="_blank"
      download
      className="find_out_more_container "
    >
      <button type="button" className="title find_out_more">
        Download My Resume
      </button>
    </Link>
  </>
);

export default Resume;
