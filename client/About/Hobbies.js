import React, { useState } from 'react';

const Hobbies = (props) => {
  return (
    <div className={props.showList === 'Hobbies' ? '' : 'hidden'}>
      {/* added images */}
      <p>Reading</p>
      <p>Archery</p>
      <p>Flying</p>
      <p>Amateur Radio</p>
      <p>Baking</p>
      <p>Watching Anime</p>
    </div>
  );
};

export default Hobbies;
