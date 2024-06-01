const PhotoModel = require('../../models/photo')
const WebPhotoService = {
    list:async() => {
        return await PhotoModel.find({}).sort({_id:-1})
    }
}
module.exports = WebPhotoService