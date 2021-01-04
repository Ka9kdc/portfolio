import React from 'react'
import {expect} from 'chai'
import {mount} from 'enzyme'
import * as rrd from 'react-router-dom'

import Header from './Header'

describe('NavBar component', () => {
    let navbar;
    before(() => {
        const wrapper = mount( <rrd.MemoryRouter initialEntries={['/']}>
        <Header />
      </rrd.MemoryRouter>)
      navbar = wrapper.find('a').map(node => node.get(0).props)
    })
    it('renders a Home Link', () => {
        expect(navbar[0].children).to.be.equal('Home');
        expect(navbar[0].href).to.be.equal('/');
    });
    it('renders a Projects Link', () => {
        expect(navbar[1].children).to.be.equal('Projects');
        expect(navbar[1].href).to.be.equal('/Projects')
    })
    it('render a Skills Link', () => {
        expect(navbar[2].children).to.be.equal('Skills')
        expect(navbar[2].href).to.be.equal('/Skills')
    })
    it('renders a About Link', () => {
        expect(navbar[3].children).to.be.equal('About')
        expect(navbar[3].href).to.be.equal('/About')
    })
})