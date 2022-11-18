// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { workHistory } from './data';

// export const fakeJob = {
//   key: 1,
//   companyLogo: 'images/LittleLogoTransparent.png',
//   companyName: 'Wheaton Community Radio Amateurs',
//   JobTitle: 'Hamfest Chairman',
//   start: 'February 2016',
//   end: 'January 2020',
//   description: [
//     'Organized a radio, computer and electronics expo with over 750 attendees',
//     'Handled communication with vendors and six subcommittees',
//     'Brought in $2000 each year for the club',
//   ],
// };

export const SingleJob = ({ job }) => (
  <section className="box white">
    <div className="flex_wrap_row">
      <img src={job.companyLogo} alt={`${job.companyName} Logo`} />
      <div>
        <h2>{job.JobTitle}</h2>
        <p>
          {job.start} - {job.end}
        </p>
        {job.link ? <a href={`http://${job.link}`}>{job.link}</a> : null}
      </div>
    </div>
    <ul>
      {job.description.map((task, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${job.key}:${idx}`}>{task}</li>
      ))}
    </ul>
  </section>
);

const Exprience = () => {
  // const [pastJobs, setPastJobs] = useState([fakeJob]);
  // useEffect(() => {
  //   axios
  //     .get('/api/work')
  //     .then(({ data }) => {
  //       setPastJobs(data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <article id="Experience">
      <h1 className="section_title">Experience</h1>
      <div className="grid">
        {workHistory.map((job) => (
          <SingleJob job={job} key={`Job#${job.key}`} />
        ))}
      </div>
    </article>
  );
};

export default Exprience;
