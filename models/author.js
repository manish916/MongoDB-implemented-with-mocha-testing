const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create schema and Model
const BookSchema = new Schema({
    title: String,
    pages: Number
})

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
})

const Author = mongoose.model('authors', AuthorSchema)

module.exports = Author