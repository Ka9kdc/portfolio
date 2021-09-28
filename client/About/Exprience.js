import React from 'react';
import workHistory from './JobData';

export const SingleJob = ({ job }) => {
  return (
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
};

const Exprience = () => {
  return (
    <article id="Experience">
      <h1 className="section_title">Experience</h1>
      <div className="grid">
        {workHistory.map((job) => {
          return <SingleJob job={job} key={`Job#${job.key}`} />;
        })}
      </div>
    </article>
  );
};

export default Exprience;
