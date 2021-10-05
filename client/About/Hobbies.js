import React from 'react';

export const myHobbies = [
  {
    activity: 'Coding',
    image:
      '67653088-professional-programmer-working-writing-code-at-his-big-desk-with-multiple-displays-and-laptop-compu.jpeg',
  },
  { activity: 'Reading', image: 'istockphoto-466854335-612x612.jpeg' },
  { activity: 'Archery', image: 'archeryGirl.jpeg' },
  { activity: 'Flying', image: 'girl-flying-airplane.png' },
  { activity: 'Hiking', image: 'istockphoto-1009952422-170667a.jpeg' },
  { activity: 'Camping', image: 'image_processing20200910-13093-1mbf9lz.png' },
  {
    activity: 'Amateur Radio',
    image: 'ham-radio-ham-radio-clip-art-220_218.jpeg',
  },
  {
    activity: 'Baking',
    image:
      '154-1546410_whisk-clipart-baking-accessory-baker-cartoon-png-transparent.png',
  },
  {
    activity: 'Watching Anime',
    image:
      '270-2702351_transparent-watching-tv-png-anime-girl-watching-anime.png',
  },
  {
    activity: 'Photography',
    image:
      '230-2308339_photographer-with-camera-silhouette-png-photography-clipart-transparent.png',
  },
  { activity: 'Sewing', image: 'TN_girl-hand-stitiching-a-garment.jpeg' },

  {
    activity: 'Writing',
    image:
      '90245332-illustration-of-a-kid-girl-thinking-and-writing-about-her-travel-list.jpeg',
  },
];

export const SingleHobby = ({ hobby }) => {
  return (
    <section>
      <img
        src={`images/Hobbies/${hobby.image}`}
        alt={`Photo of ${hobby.activity}`}
      />
      <p className="title">{hobby.activity}</p>
    </section>
  );
};

const Hobbies = () => {
  return (
    <article id="Hobbies">
      <h2 className="section_title">Hobbies</h2>
      <section className="image_flex_row box white">
        {myHobbies.map((hobby) => {
          return <SingleHobby hobby={hobby} key={hobby.activity} />;
        })}
      </section>
    </article>
  );
};

export default Hobbies;
