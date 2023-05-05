const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    miniobio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)