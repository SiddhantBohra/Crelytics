const mongoose = require('mongoose')
let processDBSchema = new mongoose.Schema({
    process_id: {
        type: String,
        required: true
    },
    process_name: {
        type: String,
        required: true
    },
    originNode: {
        type: String,
        required: true
    },
    destinationNode: {
        type: String,
        required: true
    },
    workflow_set: {
        type: Array,
    }
})

module.exports = Procs = mongoose.model("process",processDBSchema)