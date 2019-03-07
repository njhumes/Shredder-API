const mongoose = require('mongoose');
const Trails = require('./trail');

const ResortSchema = new mongoose.Schema({
    name: String,
    logo: String,
    pass: String,
    trails: [Trails.schema]
})

module.exports = mongoose.model('Resort', ResortSchema);