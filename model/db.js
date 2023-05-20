const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web')
    } catch (error) {
        console.log(error)
    }
}

connect()