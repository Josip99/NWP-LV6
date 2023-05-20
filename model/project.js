const mongoose = require('mongoose')

// Define a schema
const exampleSchema = new mongoose.Schema({
    naziv: String,
    opis: String,
    cijena: Number,
    obavljeniPoslovi: String,
    datumPocetka: Date,
    datumZavrsetka: Date,
    members: [{
        name: String
    }],
});

// Create a model
//const Example = mongoose.model('Project', exampleSchema);

module.exports = mongoose.model('Project', exampleSchema);