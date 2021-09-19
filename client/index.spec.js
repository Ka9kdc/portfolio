import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';
// import jsdom from 'mocha-jsdom'
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

// global.document = jsdom({
//     url: "http://localhost:3000"
// })
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }),
      {}
    );
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);

export const fakeJob = {
  key: 1,
  companyLogo: 'images/using/LittleLogoTransparent.png',
  companyName: 'Wheaton Community Radio Amateurs',
  JobTitle: 'Hamfest Chairman',
  start: 'February 2016',
  end: 'January 2020',
  description: [
    'Organized a radio, computer and electronics expo with over 750 attendees',
    'Handled communication with vendors and six subcommittees',
    'Brought in $2000 each year for the club',
  ],
};

export const mockAxios = new MockAdaptor(axios);

export async function getExperience() {
  await mockAxios.onGet('/api/work').replyOnce(200, [fakeJob]);
}
