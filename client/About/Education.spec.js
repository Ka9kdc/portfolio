import { expect } from "chai";
import React from "react";
import { mount, shallow } from "enzyme";
import Education, { EducationData, Institute } from "./Education";

describe("Education Component", () => {
    let container;
    describe("shallow render", () => {
        before(() => {
            container = shallow(<Education />)
        })
        after(() => {
            container = null
        })
        it('renders an h1 cotaining experience', () => {
            const h1 = container.find('h1');
            expect(h1.text()).to.equal('Education');
          });
          it('contains Institute component', () => {
            expect(
              container.containsMatchingElement([<Institute key={EducationData[0].place} />])
            ).to.equal(true);
          });
    })
    describe('institute component', () => {
        before(() => {
            container = shallow(<Institute ed={EducationData[0]} />)
        })
        it("should include two logos", () => {
            const logos = container.find("img")
            expect(logos).to.have.lengthOf(2)
            expect(logos.at(0).getElement().props.src).to.equal(EducationData[0].images[0].src)
            expect(logos.at(0).getElement().props.alt).to.equal(EducationData[0].images[0].alt)
            expect(logos.at(1).getElement().props.src).to.equal(EducationData[0].images[1].src)
            expect(logos.at(1).getElement().props.alt).to.equal(EducationData[0].images[1].alt)
        })
        it("should include the institutes name", () => {
            expect(container.contains(EducationData[0].place)).to.equal(true)
        })
        it("should show the year graduated", () => {
            expect(container.contains(EducationData[0].graduated)).to.equal(true)
            const year = container.find("h3")
            expect(year.text()).to.be.equal(`Graduated: ${EducationData[0].graduated}`)
        })
        it("should contain paragraphs about the institution", () => {
            const description = container.find("p")
            expect(description).to.be.lengthOf(EducationData[0].description.length)
            expect(description.at(0).text()).to.equal(EducationData[0].description[0])
        })
    })
    describe('mounted render', () => {
        before(() => {
            container = mount(<Education />)
        })
        it("renders all institutions", () => {
            const h2s = container.find("h2")
            expect(h2s.length).to.equal(EducationData.length);
            expect(h2s.at(0).text()).to.equal(EducationData[0].place);
            expect(h2s.at(1).text()).to.equal(EducationData[1].place);
        })
        it("renders all images", () => {
            const images = container.find("img")
            expect(images).to.have.lengthOf(EducationData.length * 2)
        })
    })
})
