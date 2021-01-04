import React from 'react'
import {expect} from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import * as rrd from 'react-router-dom'

import Routes from './Routes';



describe('Routes', () => {
    beforeEach(() => {
        sinon.stub(rrd, 'BrowserRouter').callsFake(({ children }) => {
            return <div>{children}</div>
        })
    })
    afterEach(() => {
        rrd.BrowserRouter.restore();
    })
    it('render <Home /> at path /', () =>{
        const wrapper = mount(
            <rrd.MemoryRouter initialEntries={['/']}>
            <Routes />
          </rrd.MemoryRouter>
        )
        expect(wrapper.find(Home)).to.have.length(1)
        expect(wrapper.find(Projects)).to.have.length(0)
    })
    it('render <Projects /> at path /Projects', () => {
        const wrapper = mount(
            <rrd.MemoryRouter initialEntries={['/Projects']}>
            <Routes />
          </rrd.MemoryRouter>
        )
        expect(wrapper.find(Projects)).to.have.length(1)
        expect(wrapper.find(Home)).to.have.length(0)
    })
    it('render <Skills /> at path /Skills', () => {
        const wrapper = mount( <rrd.MemoryRouter initialEntries={['/Skills']}>
        <Routes />
      </rrd.MemoryRouter>)
      expect(wrapper.find(Skills)).to.have.length(1)
      expect(wrapper.find(Home)).to.have.length(0)
    })
    it('render <About /> at path /About', () => {
        const wrapper = mount( <rrd.MemoryRouter initialEntries={['/']}>
        <Routes />
      </rrd.MemoryRouter>)
      expect(wrapper.find(About)).to.have.length(1)
      expect(wrapper.find(Home)).to.have.length(0)
    })
})