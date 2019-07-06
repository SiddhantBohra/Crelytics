const express = require('express')
const router = express.Router()
const addRule = require('../models/rules')
let Post = require('../models/rules')

router.get('/', async (req, res) => {
    try
    {
        const posts = await Post.find({},{"rule_id" : true,"rule_name":true})
        res.json(posts)
    } catch
    {
        res.json(
            {
                message : "Error Occured"
            }
        )
    }
})

router.post('/add', (req, res) => {

    const post = new Post({
        "rule_id": req.body.rule_id,
        "rule_name": req.body.rule_name,
        "field_name" : req.body.field_name,
        "operator" : req.body.operator,
        "value" : req.body.value
    })
    
    post.save().then((data) => {
            res.json({
                success: true,
                data
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

module.exports = router