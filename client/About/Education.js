import React, {useState} from 'react';

const Education = () => {
  const [showList, setShowList] = useState('hidden')

  function showOrHide () {
      if(showList === 'hidden'){
          setShowList('')
      } else {
          setShowList('hidden')
      }
  }
  return (
    <div className="flexItem">
      <h2 onClick={showOrHide}>Education</h2>
      <div className={showList}>
        <div>
        <div>
          <img
            src="images/GraceHopperLongLogo.jpeg"
            alt="Grace Hopper Program Logo"
          />
          <img
            src="images/fullstack-academy-logo-color-on-white.png"
            alt="Fullstack Logo"
          />
        </div>
        <div>
          <h3>Grace Hopper Program at Fullstack Academy of Code</h3>
          <h4>August 2020 - October 2020</h4>
          <p>
            17-week Full Stack Immersive in JavaScript and basic Computer
            Science.
          </p>
        </div>
      </div>
      <div>
        <img
          src="images/SIUSportLogo.png"
          alt="Southern Illinios University Carbondale Logo"
        />
        <div>
          <h3>Southern Illinois University Carbondale</h3>
          <h4>August 2010 - March 2015</h4>
          <p>
            Bachelor of Science in Aviation Management, Associate of Applied
            Sciences in Aviation Flight, Minor in German, Magna Cum Laude
          </p>
        </div>
      </div>
    </div></div>
  );
};

export default Education;
