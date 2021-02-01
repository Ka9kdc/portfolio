import React, { useState } from 'react';

const workHistory = [
  {
    companyLogo: 'images/fullstack-academy-logo-color-on-white.png',
    companyName: 'Fullstack Academy',
    JobTitle: 'Software Engineering/Development Teaching Fellow',
    start: 'November 2020',
    end: 'February 2021',
    discription: [
      'Teaching assistant to a cohort of 40+ students covering: software engineering concepts, computer science fundamentals, debugging techniques, schema design',
      'Acted as project manager and technical mentor for teams of 4 students during 4 projects, employing the use of agile methodologies',
      'Conducted technical admissions interviews',
      'Ran weekly whiteboarding lectures',
    ],
  },
  {
    companyLogo: 'images/LittleLogo.png',
    companyName: 'Wheaton Community Radio Amateurs',
    JobTitle: 'Webmaster',
    start: 'November 2019',
    end: 'Present',
    link: 'w9ccu.org',
    discription: [
      'Integrate PayPal allowing membership dues, Hamfest tickets and vendor orders to be processed and paid online',
      'Update website monthly with meeting minutes and notices for club membership',
      'Enhanced online renewals form using Javascript, PHP, HTML and CSS allowing for emails are sent upon submission.',
    ],
  },
  {
    companyLogo: 'images/209-2092285_office-depot-office-max-png-logo.png',
    companyName: 'Office Depot',
    JobTitle: 'Print and Copy Supervisor',
    start: 'April 2015',
    end: 'February 2020',
    discription: [
      'Trained co-workers on new equipment and procedures',
      'Ensured supplies were in-stock to produce client orders',
      'Handled placing and producing orders for over 50 clients a week',
      'Achieved over department sales goals almost every quarter',
    ],
  },
  {
    companyLogo: 'images/LittleLogo.png',
    companyName: 'Wheaton Community Radio Amateurs',
    JobTitle: 'Hamfest Chairman',
    start: 'February 2016',
    end: 'January 2020',
    discription: [
      ' Organized a radio, computer and electronics expo with over 750 attendees',
      'Handled communication with vendors and six subcommittees',
      'Brought in $2000 each year for the club',
    ],
  },
];

const Exprience = (props) => {
  return (
    <div className={props.showList === 'Experience' ? 'about_row' : 'hidden'}>
      {workHistory.map((job) => (
        <div className="about_experience_width">
          <div className="about_row">
            <img src={job.companyLogo} alt={`${job.companyName} Logo`} />
            <div>
              <h2>{job.JobTitle}</h2>
              <p>
                {job.start} - {job.end}
              </p>
            </div>
            {job.link ? (
              <div className="cloudLink zero_top_margin">
                <a href={`http://${job.link}`}>{job.link}</a>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            {job.discription.map((task) => (
              <p>{task}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exprience;
