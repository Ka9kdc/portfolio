import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const SingleJob = ({job}) => {
  return (
    <div className="about_experience_width" >
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
        <li key={`${job.key}:${idx}`}>{task}</li>
      ))}
    </ul>
  </div>
  )
}

const Exprience = () => {
  const [pastJobs, setPastJobs] = useState([]);
useEffect(() => {
    axios.get('/api/work')
    .then(({data}) => {
      setPastJobs(data)})
    .catch((err) => console.log(err))
  }, []);
  // .then(res => res.json())
  // useEffect(async () => {
  //   // fetch('/api/work').then(res => res.json()).then((data) => {
  //   //   setPastJobs(data)})
  //   // .catch((err) => console.log(err))
  //   try {
  //     const res = await fetch('/api/work');
  //     const data  =  await res.json();
  //   console.log(data)
  //   //   setPastJobs(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);


  return (
    <div>
    <h1>Experience</h1>

      {pastJobs.map((job) => {
        return <SingleJob job={job} key={`Job#${job.key}`} />
      }
      
      )}
    </div>
  );
};

export default Exprience;
