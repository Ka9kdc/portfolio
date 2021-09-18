import { expect } from 'chai';
import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import { mockAxios, getExperience, fakeJob } from '../index.spec';
import sinon from 'sinon';
import * as rrd from 'react-router-dom';
import {act} from "react-dom/test-utils"
import axios from 'axios';

import Exprience, { SingleJob } from './Exprience';
import About from '.';
import Main from '../Main';

describe.only('Experince Component', () => {
  let container;
    beforeEach(async () => {
        await getExperience();
    })
    afterEach(() => {
        mockAxios.restore()
    })

  describe('shallow render', () => {
    before(() => {
      container = shallow(<Exprience />);
    });
    after(() => {
      container = null;
    });
    it('renders an h1 cotaining experience', () => {
      const h1 = container.find('h1');
      expect(h1.text()).to.equal('Experience');
    });
    it("contains singlejob component", () => {
        expect(container.containsMatchingElement([<SingleJob />])).to.equal(true)
    })
  });
  describe("single Job", () => {
      before(() => {
          container = shallow(<SingleJob  job={fakeJob} />)
      })
     
      it("should contain a jobTitle", () => {
          const title = container.find("h2")
          expect(title.text()).to.equal(fakeJob.JobTitle)
      })
      it("should contain a list of descriptions", () => {
        const description = container.find("li")
        expect(description).to.be.length(fakeJob.description.length)
        expect(description.at(0).text()).to.equal(fakeJob.description[0])
    })

  })
  describe.skip('mounted render', () => {
//     const result = [3, 5, 9];
//     const promise = Promise.resolve(result);
   
//     before(() => {
//       sinon.stub(axios, 'get').withArgs('/api/work').returns(promise);
//     });
   
//     after(() => {
//       axios.get.restore();
//     });
// //       let newFakeJob = {}
// //       const setFakeJob = (job) => {
//         newFakeJob = job
//       }
//     before(async () => {
//     //   sinon.stub(rrd, 'BrowserRouter').callsFake(({childern}) => {
//     //       return <div>{childern}</div>
//     //   })
//     // sinon.stub(React, "useState").returns([fakeJob, setFakeJob])
//       console.log('container');
//       await getExperience();
//       console.log('ex');
// //       container = mount(
// // <Exprience />
// //       );
// // console.log("done")
//     // container = shallow(<Exprience />)
//     //   const h1 = container.find('h2').map((node) => node.get(0).props);
//     //   console.log(h1)
//     //   console.log();
//     //   console.log(container)
//     });
//     //       after(() => {
//     //         // rrd.BrowserRouter.restore()
//     //     mockAxios.restore()
//     // })
//     it('makes an axois call', () => {
//         const [getRequest] = mockAxios.history.get;
//         expect(getRequest).to.not.equal(undefined);
//     })
it('should render a proper table data', done => {
    
    mockAxios.onGet('/api/work').reply(200, [fakeJob]);
    const component = mount(<Exprience />);
    setImmediate(() => {
      component.update();
      console.log(component.debug());
      done();
    });
  });
xit('fetches async counters', () => {
    const wrapper = shallow(<Exprience />);
 console.log()
    expect(wrapper.state().asyncCounters).to.equal(null);
 
    promise.then(() => {
      expect(wrapper.state().asyncCounters).to.equal(result);
    });
  });
    xit('renders 5 jobs', () => {
        
            container = mount(<ReactWrapper>
                <Exprience />
            </ReactWrapper>
                  );
            
            console.log("done")
    //   const h1 = container.find('h1');
    //   expect(h1.text()).to.equal('Experience');
      // const h2s = container.find("h2")
      // expect(h2s.length).to.equal(5)
      expect(1).to.equal(1)
    });
  });
});
