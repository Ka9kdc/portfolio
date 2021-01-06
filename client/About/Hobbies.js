import React, { useState } from 'react';

const Hobbies = () => {
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
      <h2 onClick={showOrHide}>Hobbies</h2>
      <ul className={showList}>
        <li>Reading</li>
        <li>Archery</li>
        <li>Flying</li>
        <li>Amateur Radio</li>
        <li>Baking</li>
        <li>Watching Anime</li>
      </ul>
    </div>
  );
};

export default Hobbies;
