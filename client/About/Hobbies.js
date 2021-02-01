import React, { useState } from 'react';

const Hobbies = (props) => {
  return (
    <div className={props.showList === 'Hobbies' ? '' : 'hidden'}>
      {/* added images */}
      <div className="hobby_planes">
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Reading</p></div>
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Archery</p></div>
        </div><div className="hobby_planes">
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Flying</p></div>
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Amateur Radio</p></div>
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Baking</p></div>
        </div><div className="hobby_planes">
       <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Watching Anime</p></div>
        <div className="banner_plane">
        <img src="images/Airplanes/fatRedPlanePullingBanner.png" alt="" />
        <p>Photography</p></div>
        </div>
    </div>
  );
};

export default Hobbies;
