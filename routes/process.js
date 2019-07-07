const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Procs = require('../models/processSchema')
require('../app')


router.post('/add', (req, res) => {

    if (mongoose.connection.readyState == 1) {
        console.log(mongoose.connection.readyState)
        mongoose.connection.db.collection("works", (err, collection) =>{
            collection.find({},{"workflow_id" : "2"}).toArray((err, data) => {
                console.log(data); 
                
                // it will print your collection data
                // let obj = {
                //     "workflow_id": req.body.workflow_id,
                //     "workflow_name": req.body.workflow_name,
                //     "rule_set": req.body.rule_set,
                //     "opeworkflows_AND_or_OR_conditionrator": req.body.opeworkflows_AND_or_OR_conditionrator
                // }
                // let ruleArray = obj.rule_set
                // for (i = 0; i < ruleArray.length; i++) {
                //     let result = data.filter((x) => x.rule_name === ruleArray[i].trim());
                //     newArr.push(result[0])
                // }
                // const work = new Work({
                //     "workflow_id": req.body.workflow_id,
                //     "workflow_name": req.body.workflow_name,
                //     "rule_set": newArr,
                //     "opeworkflows_AND_or_OR_conditionrator": req.body.opeworkflows_AND_or_OR_conditionrator

                // })
                // work.save().then((result) => {
                //     res.json({
                //         success: true,
                //         result
                //     });
                // }).catch((error) => {
                //     console.log(error)
                //     res.json({
                //         error:
                //         {
                //             message: "We are facing some issues! Please try again later"
                //         }
                //     })
                // })

            })
        })
    }
})

module.exports = router