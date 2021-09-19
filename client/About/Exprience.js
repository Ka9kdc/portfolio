import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fakeJob } from '../index.spec';

export const SingleJob = ({ job }) => {
  return (
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
      <ul>
        {job.description.map((task, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${job.key}:${idx}`}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Exprience = () => {
  const [pastJobs, setPastJobs] = useState([fakeJob]);
  useEffect(() => {
    axios
      .get('/api/work')
      .then(({ data }) => {
        setPastJobs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Experience</h1>

      {pastJobs.map((job) => {
        return <SingleJob job={job} key={`Job#${job.key}`} />;
      })}
    </div>
  );
};

export default Exprience;
