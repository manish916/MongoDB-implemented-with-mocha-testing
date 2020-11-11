const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariocart')
const { Mongoose } = require('mongoose')
//describe test
describe('Saving records', () => {
    //create test
    it('Saves a record to database', (done) => {
        var char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done()
        })

    })

})