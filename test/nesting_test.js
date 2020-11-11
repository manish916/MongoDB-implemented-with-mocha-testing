const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

//describe test

describe('nesting record', () => {

    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => {
            done()
        })
    })

    it('create author with sub components', (done) => {
        var pat = new Author({
            name: 'patrick routhfuss',
            books: [{ title: 'Name of the wind', pages: 400 }]
        })

        pat.save().then(() => {
            Author.findOne({ name: 'patrick routhfuss' }).then((record) => {
                assert(record.books.length === 1)
                done()
            })
        })
    })


    it('addd new book to an author', (done) => {
        var pat = new Author({
            name: 'patrick routhfuss',
            books: [{ title: 'Name of the wind', pages: 400 }]
        })

        pat.save().then(() => {
            Author.findOne({ name: 'patrick routhfuss' }).then((record) => {
                record.books.push({ title: "vise man fear", pages: 500 })
                record.save().then(() => {
                    Author.findOne({ name: "patrick routhfuss" }).then((result) => {
                        assert(result.books.length === 2)
                        done()
                    })
                })
            })
        })
    })
})