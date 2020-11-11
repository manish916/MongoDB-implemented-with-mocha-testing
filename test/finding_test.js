const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariocart')
const { Mongoose } = require('mongoose')
//describe test
describe('Finding records', () => {
    //create test
    var char
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done()
        })
    })


    it('Find one record from database', (done) => {
        MarioChar.findOne({
            name: 'Mario'
        }).then((result) => {
            assert(result.name === 'Mario')
            done()
        })
    })
    it('Find one record by id from database', (done) => {
        MarioChar.findOne({
            _id: char._id
        }).then((result) => {
            assert(result._id.toString() === char._id.toString())
            done()
        })
    })

})