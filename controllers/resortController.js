const express = require('express');
const router = express.Router();
const Resort = require('../models/resort');

router.get('/', async (req, res) => {
    try {
        const allResorts = await Resort.find();
        console.log(allResorts);
        res.json({
            status: 200,
            data: allResorts
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const postResort = await Resort.create(req.body);
        res.json({
            status: 200,
            data: postResort
        })

    } catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router;