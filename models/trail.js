const mongoose = require('mongoose');

const TrailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    resort: String,
    difficulty: String,
    category: String,
    notes: String
})

module.exports = mongoose.model('Trail', TrailSchema);