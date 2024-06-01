const photoModel = require('../../models/photo')
const PhotoService = {
    add:async({name,url}) => {
        return await photoModel.create({name,url})
    },
    list:async() => {
        return await photoModel.find({})
    },
    deleteOne:async({id:_id}) => {
        return await photoModel.deleteOne({_id})
    }
}

module.exports = PhotoService;