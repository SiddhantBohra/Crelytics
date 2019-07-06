const mongoose = require('mongoose')
let RulesdbSchema = new mongoose.Schema({
    rule_id: {
        type: String,
        required: true
    },
    rule_name: {
        type: String,
        required: true
    },
    field_name: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("addRule",RulesdbSchema)