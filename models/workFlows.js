const mongoose = require('mongoose')
let workdbSchema = new mongoose.Schema({
    workflow_id: {
        type: String,
        required: true
    },
    workflow_name: {
        type: String,
        required: true
    },
    rule_set: {
        type: Array,
        required: true
    },
    workflows_AND_or_OR_condition: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("work", workdbSchema)