import React from 'react';

const ButtonRow = (props) => {
  return (
    <div id="button_row">
      <button
        type="button"
        onClick={() => props.setShowList('')}
        className={props.showList !== '' ? 'about_Section_Name' : 'hidden'}
      >
        {props.showList || 'placeholder for section title'}
      </button>
      <div
        className={
          props.showList !== ''
            ? 'about_Buttons smallHeader'
            : 'about_Buttons limit_padding'
        }
      >
        {props.showList !== 'Experience' ? (
          <button type="button" onClick={() => props.setShowList('Experience')}>
            <img
              src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
              alt="dark-cloud button for Experience"
            />
            <h2>Experience</h2>
          </button>
        ) : (
          ''
        )}
        {props.showList !== 'Education' ? (
          <button type="button" onClick={() => props.setShowList('Education')}>
            <img
              src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
              alt="dark-cloud button for Education"
            />
            <h2>Education</h2>
          </button>
        ) : (
          ''
        )}
        {props.showList !== 'Hobbies' ? (
          <button type="button" onClick={() => props.setShowList('Hobbies')}>
            <img
              src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
              alt="dark-cloud button for hobbies"
            />
            <h2>Hobbies</h2>
          </button>
        ) : (
          ''
        )}
        {props.showList !== 'Contact' ? (
          <button type="button" onClick={() => props.setShowList('Contact')}>
            <img
              src="images/using/Clouds/4-45408_dark-clouds-png-cloud-sprite-sheet-png.png"
              alt="dark-cloud button for Contact"
            />
            <h2>Contact</h2>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ButtonRow;
