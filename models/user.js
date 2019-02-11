const mongoose = require('mongoose');
const Trails = require('./trail');


const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    localMountain: String,
    favoriteTrails: [Trails.schema]
});

module.exports = mongoose.model('User', UserSchema);