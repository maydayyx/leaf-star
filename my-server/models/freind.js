const mongoose = require('mongoose');

const freindSchema = new mongoose.Schema({
    sitename: {
        type: String,
        required: true
    },
    siteavatar: {
        type: String,
        required: false
    },
    sitedesc: {
        type: String,
        required: true
    },
    sitelink: {
        type: String,
        required: true
    }
})

const friedModel = mongoose.model('friend', freindSchema);

module.exports = friedModel;