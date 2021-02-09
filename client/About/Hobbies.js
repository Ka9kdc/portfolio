import React, { useState } from 'react';

const myHobbies = [ "", "Reading", "", "Archery","", "Flying", "Amateur Radio", "Baking", "", "Watching Anime", "", "Photography"]

const Hobbies = (props) => {
  return (
    <div className={props.showList === 'Hobbies' ? '' : 'hidden'}>
      {/* added images */}
      <div className="hobby_planes">
        {myHobbies.map((hobby, idx) => {
          if(hobby === "") return (
            <div className="cloud" key={idx}>
        <img src="images/using/Clouds/fumée-cartoon-png-2_no_innier_lines.png" />
</div>
          )
          else return (
        <div className="banner_plane" key={idx}>
          <img src="images/using/fatRedPlanePullingBanner.png" alt={hobby} />
          <p>{hobby}</p>
        </div>

          )
        })}


      </div>
    </div>
  );
};

export default Hobbies;
