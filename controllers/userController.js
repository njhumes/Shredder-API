const express = require('express');
const router = express.Router();
const Trail = require('../models/trail');
const User = require('../models/user');


// Don't think I'll need a index page for users
router.get('/', async (req, res, next) => {
    try {
        const allUsers = await User.find();
        res.json({
            status: 200,
            data: allUsers
        })
    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

// Creating a new user
router.post('/', async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body);
        res.json({
            status: 200,
            data: createdUser
        })

    } catch(err) {
        console.log(err);
        res.send(err)
    }
})

// User Show 
router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

// User Update
router.put('/:id', async (req, res, next) => {
    try {
        const editUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: editUser
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

// Delete User
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            data: deletedUser
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})



module.exports = router;