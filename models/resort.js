const mongoose = require('mongoose');
const Trails = require('./trail');

const ResortSchema = new mongoose.Schema({
    name: String,
    logo: String,
    passName: String,
    passLogo: String,
    lat: String,
    long: String,
    fatmap: String,
    trails: [Trails.schema]
})

module.exports = mongoose.model('Resort', ResortSchema);