const express = require('express')
const router = express.Router()
const _ = require('lodash')
const Post = require('../models/workFlows').default
require('../app')
const mongoose = require('mongoose')

// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.find({}, { "rule_id": true, "rule_name": true })
//         res.json(posts)
//     } catch
//     {
//         res.json(
//             {
//                 message: "Error Occured"
//             }
//         )
//     }
// })

router.post('/add', (req, res) => {


    if (mongoose.connection.readyState == 1) {
        console.log(mongoose.connection.readyState)
        mongoose.connection.db.collection("addrules", function (err, collection) {
            collection.find({}).toArray(function (err, data) {
                console.log(data); // it will print your collection data

                const post = new Post({
                    "workflow_id": req.body.workflow_id,
                    "workflow_name": req.body.workflow_name,
                    "rule_set": req.body.rule_set,
                    "opeworkflows_AND_or_OR_conditionrator": req.body.opeworkflows_AND_or_OR_conditionrator
                })
                post.save().then((result) => {
                    res.json({
                        success: true,
                        result
                    });
                }).catch(() => {
                    res.json({
                        error:
                        {
                            message: "We are facing some issues! Please try again later"
                        }
                    })
                })

            })
        })

    }


})

module.exports = router