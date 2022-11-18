import React from 'react';
import { myHobbies } from './data';


export const SingleHobby = ({ hobby }) => (
  <section>
    <img
      src={`images/Hobbies/${hobby.image}`}
      alt={`Photo of ${hobby.activity}`}
    />
    <p className="title">{hobby.activity}</p>
  </section>
);

const Hobbies = () => (
  <article id="Hobbies">
    <h2 className="section_title">Hobbies</h2>
    <section className="image_flex_row box white">
      {myHobbies.map((hobby) => (
        <SingleHobby hobby={hobby} key={hobby.activity} />
      ))}
    </section>
  </article>
);

export default Hobbies;
