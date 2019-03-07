const express = require('express');
const router = express.Router();
const Trail = require('../models/trail');
const User = require('../models/user');

router.get('/', async (req, res, next) => {
    try {
        const allTrails = await Trail.find();
        console.log(allTrails);
        res.json({
            status: 200,
            data: allTrails
        });
    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

router.post('/', async (req, res, next) => {
    console.log(req.body, '~~~~ req.body')
    try {
        const createdTrail = await Trail.create(req.body);
        res.json({
            status: 200,
            data: createdTrail
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const shownTrail = await Trail.findById(req.params.id);
        res.json({
            status: 200,
            data: shownTrail
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedTrail = await Trail.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedTrail
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedTrail = await Trail.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            data: deletedTrail
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})



module.exports = router;