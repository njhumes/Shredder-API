const express = require('express');
const router = express.Router();
const Resort = require('../models/resort');
const Trail = require('../models/trail');

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
router.get('/:id', async (req, res, next) => {
    try {
        const shownResort = await Resort.findById(req.params.id);
        res.json({
            status: 200,
            data: shownResort
        })

    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedResort = await Resort.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: 200,
            data: updatedResort
        })

    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedResort = await Resort.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            data: deletedResort
        })

    } catch (err) {
        console.log(err);
        res.send(err);
    }
})
module.exports = router;