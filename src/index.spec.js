import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import axios from 'axios';
// import MockAdaptor from 'axios-mock-adapter';
import { fakeJob } from './About/Exprience';
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

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

export const mockAxios = new MockAdaptor(axios);

export async function getExperience() {
  await mockAxios.onGet('/api/work').replyOnce(200, [fakeJob]);
}

export async function mockSendEmail() {
  await mockAxios.onPost('/api/email').replyOnce(200);
}
