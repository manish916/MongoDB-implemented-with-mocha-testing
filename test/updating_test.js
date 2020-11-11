const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariocart')
const { Mongoose } = require('mongoose')
//describe test
describe('Updating records', () => {
    //create test
    var char
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done()
        })
    })
    it('increment one record in database', (done) => {

        MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
            MarioChar.findOne({ name: 'Mario' }).then(result => {
                assert(result.weight === 51)
                done()
            })
        })
    })


    it('update one record in database', (done) => {

        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: "Ramesh" }).then(() => {
            MarioChar.findOne({ _id: char._id }).then(result => {
                assert(result.name === 'Ramesh')
                done()
            })
        })
    })

  

})