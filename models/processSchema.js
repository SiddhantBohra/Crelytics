const mongoose = require('mongoose')
let processDBSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    field_name: {
        type: String,
        required: false
    },
    operator: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    }
})

module.exports = Procs = mongoose.model("process",processDBSchema)