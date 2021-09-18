import React, { useEffect, useState } from 'react';

const Exprience = (props) => {
  const [pastJobs, setPastJobs] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch('/api/work');
      const { data } = await res.json();
      setPastJobs(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      {pastJobs.map((job) => (
        <div className="about_experience_width" key={job.key}>
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
            {job.description.map((task, idx) => (
              <p key={idx}>{task}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Exprience;
