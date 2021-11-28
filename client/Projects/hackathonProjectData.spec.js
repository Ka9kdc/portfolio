import { expect } from 'chai';
import projectData from './hackathonProjectData';

describe('hackathon Project Data', () => {
  it('every project has an id', () => {
    projectData.forEach((project) => {
      expect(project.id).to.exist;
      expect(typeof project.id).to.equal('number');
    });
  });

  it('every project has an name', () => {
    projectData.forEach((project) => {
      expect(project.name).to.exist;
      expect(typeof project.name).to.equal('string');
      expect(project.name).to.have.length.greaterThan(0);
    });
  });

  it('every project has links', () => {
    projectData.forEach((project) => {
      expect(project.links).to.exist;
      expect(project.links).to.have.length.greaterThan(0);
      expect(project.links[0].name).to.have.length.greaterThan(0);
      expect(project.links[0].url).to.have.length.greaterThan(0);
    });
  });

  it('every project has an image, video or gif', () => {
    const filteredlist = projectData.map(
      (project) =>
        (project.video && project.video.src) ||
        (project.gif && project.gif.src) ||
        (project.images && project.images[0].src)
    );
    expect(filteredlist).to.have.lengthOf(projectData.length);
  });

  it('every project has text', () => {
    projectData.forEach((project) => {
      expect(project.text).to.exist;
      expect(project.text).to.have.length.greaterThan(0);
      expect(project.text[0]).to.have.length.greaterThan(0);
    });
  });

  it('every project has techused', () => {
    projectData.forEach((project) => {
      expect(project.techUsed).to.exist;
      expect(project.techUsed).to.have.length.greaterThan(0);
      expect(project.techUsed[0]).to.have.length.greaterThan(0);
    });
  });

  it('every project has an org', () => {
    projectData.forEach((project) => {
      expect(project.org).to.exist;
      expect(typeof project.org).to.equal('string');
      expect(project.org).to.have.length.greaterThan(0);
    });
  });

  it('every project has hackathon', () => {
    projectData.forEach((project) => {
      expect(project.solo).to.exist;
      expect(typeof project.solo).to.equal('boolean');
    });
  });

  it('every project has an date', () => {
    projectData.forEach((project) => {
      expect(project.date).to.exist;
      expect(typeof project.date).to.equal('string');
      expect(project.date).to.have.length.greaterThan(0);
    });
  });

  it('every project has solo', () => {
    projectData.forEach((project) => {
      expect(project.solo).to.exist;
      expect(typeof project.solo).to.equal('boolean');
    });
  });
});
