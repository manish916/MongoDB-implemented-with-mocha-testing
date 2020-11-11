const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariocart')
const { Mongoose } = require('mongoose')
//describe test
describe('Deleting records', () => {
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


    it('Delete one record from database', (done) => {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
            MarioChar.findOne({ name: 'Mario' }).then((result) => {
                assert(result ===  null)
                done()
            })
        })
    })


})