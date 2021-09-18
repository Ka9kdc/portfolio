const {expect} = require('chai')
const request = require('supertest')
const app = require('./index')
const {workHistory} = require('./data')


describe.only("express routes", () => {
    describe("api/work", () => {
        it("has an api/work route", async () => {
            await request(app).get('/api/work').expect(200)
        })
        it("get api/work returns an array of objects with the correct key types", async () => {
          const res =   await request(app).get('/api/work').expect(200)

          expect(res.body).to.be.an("array")
          expect(res.body[0].description).to.be.an("array")
          expect(res.body[0].key).to.be.an("number")
          expect(res.body[0].JobTitle).to.be.an("string")
        })
        it("get api/work returns an array of correct objects", async () => {
            const res =   await request(app).get('/api/work').expect(200)
  
            expect(res.body.length).to.equal(workHistory.length)
            expect(res.body[0].description.length).to.equal(workHistory[0].description.length)
            expect(res.body[0].key).to.be.equal(workHistory[0].key)
            expect(res.body[0].JobTitle).to.be.equal(workHistory[0].JobTitle)
          })
    })
})