import React from 'react';

const ProjectHeader = (props) => {
  const project = props.project;
  return (
      <div className="cloudTitles">
        <div className="cloudLink">
          <a href={project.deployURL}>Deployed</a>
        </div>
        <div className="cloudLink" style={{marginTop: "-25px"}}>
          <a href={project.submissionURL}>Submission</a>
        </div>
        <div className="cloudLink">
          <a href={project.githubURL}>Github</a>
        </div>
      </div>
  );
};

export default ProjectHeader;
