const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Procs = require('../models/processSchema')
require('../app')

router.get('/', async(req,res) =>{
    Procs.find({},{process_id : true , process_name : true,"workflow_set.workflow_id":true,"workflow_set.workflow_name" : true,"workflow_set.rule_set.rule_name" : true,"workflow_set.rule_set.rule_id":true}).then(result =>{        
        res.json({
            success : true,
            result
        })   
    }).catch(err =>{
        res.json({
            message : err
        })
    })
})
router.post('/add', (req, res) => {
    if (mongoose.connection.readyState == 1) {
        console.log(mongoose.connection.readyState)
        mongoose.connection.db.collection("works", (err, collection) => {
            collection.find({ "workflow": { $eq: req.body.workflow_id} }).toArray((err, data) => {
                console.log(req.body.workflow)
                const procs = new Procs({
                    "process_id": req.body.process_id,
                    "process_name": req.body.process_name,
                    "originNode": req.body.originNode,
                    "destinationNode": req.body.destinationNode,
                    "workflow_set": data[0]
                })
                procs.save().then(result => {
                    let obj = {
                        "process_id": result.process_id,
                        "process_name": result.process_name
                    }
                    res.json({
                        success: "true",
                        obj
                    })
                }).catch(err => {
                    console.log(err)
                    res.json({
                        error: {
                            message: "Sorry! We are curently facing issues"
                        }
                    })
                })
            })
        })
    }
    else {
        res.json({
            error: {
                code: "520",
                message: "Connection Error"
            }
        })
    }
})

module.exports = router