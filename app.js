const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//Import Routes
const rulesAdd = require('./routes/rule')
const workflows = require('./routes/workflow')
app.use('/rule',rulesAdd)
app.use('/workflow',workflows)
//Connect To DB
mongoose.connect("mongodb+srv://assassin:chromium360@cluster0-fft3g.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => {
        console.log("Connected to DB");
    }).catch(() => {
        console.log("Error Connecting to Database")
    })
// Listen on port 3000
app.listen(3000)