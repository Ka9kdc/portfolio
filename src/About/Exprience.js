import React from 'react';
import { workHistory } from './data';

export const SingleJob = ({ job }) => (
  <section className="box white">
    <div className="flex_wrap_row">
      <div>
      <img src={job.companyLogo} alt={`${job.companyName} Logo`} style={job.customLogoStyle}/>
        <h2>{job.JobTitle}</h2>
        <p>
          {job.start} - {job.end}
        </p>
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

const Exprience = () => (
  <article id="Experience">
    <h1 className="section_title">Experience</h1>
    <div className="grid">
      {workHistory.map((job) => (
        <SingleJob job={job} key={`Job#${job.key}`} />
      ))}
    </div>
  </article>
);

export default Exprience;
