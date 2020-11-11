const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//connect to mongodb
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true });

before((done) => {
    mongoose.connection.once('open', () => {
        console.log('db connected')
        done()
    }).on('error', (error) => {
        console.log('error', error)
    })
})

// drop the characters collections

beforeEach((done) => {
    //Drop collection
    mongoose.connection.collections.mariochars.drop(()=>{
        done()
    })

})