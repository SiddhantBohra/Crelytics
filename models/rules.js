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

module.exports = mongoose.model("addRule",RulesdbSchema)