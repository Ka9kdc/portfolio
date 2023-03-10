import React from 'react';
import Exprience from './Exprience';
import Education from './Education';
import Summary from './Summary';
import ContactLinks from './Contact';
import Hobbies from './Hobbies';
import Resume from './Resume';
import { Link } from 'react-router-dom';
import MainTechStack from './MainTechStack';

const About = () => (
  <>
    <h1 className="section_title">Kelsey Schroeder</h1>
    <div className="flex_wrap_row">
      <a href="#Experience">
        <button type="button" className="title find_out_more">
          Experience
        </button>
      </a>
      <a href="#Education">
        <button type="button" className="title find_out_more">
          Education
        </button>
      </a>
      <a href="#Contacts">
        <button type="button" className="title find_out_more">
          Contact
        </button>
      </a>
      <a href="#Hobbies">
        <button type="button" className="title find_out_more">
          Hobbies
        </button>
      </a>
      <a href="#Resume">
        <button type="button" className="title find_out_more">
          Resume
        </button>
      </a>
      <Link to="/portfolio/Projects">
        <button type="button" className="title find_out_more">
          Projects
        </button>
      </Link>
    </div>
    <Summary />
    <ContactLinks />
    <MainTechStack />
    <Resume />
    <Exprience />
    <Education />
    <Hobbies />
  </>
);

export default About;
