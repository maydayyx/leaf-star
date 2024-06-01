const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name:String,
    url:String
})

const photoModel = mongoose.model('photo', photoSchema);

module.exports = photoModel;