import React from 'react';

const Contact = (props) => {
  return (
    <div className={props.showList === 'Contact' ? '' : 'hidden'}>
      <div className="contact_planes">
        <div className="cloud">
          <img
            src="images/using/Clouds/fumée-cartoon-png-2_no_innier_lines.png"
            alt="cartoon cloud"
          />
        </div>
        <div className="banner_plane">
          <img
            src="images/using/fatRedPlanePullingBanner.png"
            alt="Red plane pulling a banner that reads Kelsey Schroeder"
          />
          <h2 className="big_text">Kelsey Schroeder</h2>
        </div>
        <div className="cloud">
          <img
            src="images/using/Clouds/fumée-cartoon-png-2_no_innier_lines.png"
            alt="cartoon cloud"
          />
        </div>
      </div>
      <div id="contact_links">
        <a href="https://github.com/Ka9kdc">
          <img
            src="images/using/github-logo.png"
            alt="Github logo and link to my github"
          />
        </a>
        <a href="https://www.linkedin.com/in/kelsey-m-schroeder/">
          <img
            src="images/using/linkedin-logo.png"
            alt="linkedin logo and link to my linked in profile"
          />
        </a>
      </div>
      <div id="contact_links">
        <a href="https://calendly.com/kmschroeder91">
          Book a time to meet with me!
        </a>
      </div>
    </div>
  );
};

export default Contact;
