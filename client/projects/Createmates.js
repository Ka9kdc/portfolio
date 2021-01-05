import React from 'react';
import { Link } from 'react-router-dom';

const Createmates = () => {
  return (
    <div>
      {/* video, Header with mini project decription(sub header), discrition with tech stack - larger description - group members, Photo/mock up */}
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rTwLXFVN_I0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h2>Createmates</h2>
        <p>
          A Progressive Web Application for artists seeking to connect and
          collaborate. Artists can link up, chat, and enter a video conference
          room to reinvigorate a working practice and have access to community
          during a prolonged time of isolation.
        </p>
      </div>
      <div>
        <p>
          Using Node, Express, React, Redux, Postgres/Sequelize as well as
          Socket.io, we created a Progressive Web App with built-in video and
          chat features. We relied on Node.js’s WebRTC API and sockets to build
          a persistent connection between two users. For our front-end, we used
          Redux to manage state across many React components, Bootstrap for
          styling, and Digital Ocean to manage media storage. We learned the
          challenges of managing multi-form data, the various approaches to
          implement live video streaming and chat capabilities, and how to
          connect users in real-time.
        </p>
      </div>
      <div>
        <img
          src="./smartmockups_kjkhgdqm.png"
          alt="Mock up of the createmate's wep application"
        />
        <div>
          <p>
            | <Link to="htts://createmate.herokuapp.com">Deployment</Link> | |{' '}
            <Link to="https://github.com/createmates/createmates">Github</Link>{' '}
            |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Createmates;
