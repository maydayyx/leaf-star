const photoModel = require('../../models/photo')
const PhotoService = {
    add:async({name,url}) => {
        return await photoModel.create({name,url})
    },
    list:async() => {
        return await photoModel.find({})
    }
}

module.exports = PhotoService;