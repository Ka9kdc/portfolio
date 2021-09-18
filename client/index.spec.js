import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter'
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node.js' };


export const mockAxios = new MockAdaptor(axios)

export function getExperience(){
    mockAxios.onGet('/api/work').replyOnce(200, [
        {
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
          }
    ])
}


