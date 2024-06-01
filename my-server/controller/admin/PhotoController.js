const PhotoService = require('../../service/admin/PhotoService')
const PhotoController = {
    add:async(req,res) => {
        const {name,url} = req.body
        await PhotoService.add({name,url})
        res.json({message:'Add photo Successfully!'})
    },
    list:async(req,res) => {
        const result = await PhotoService.list()
        res.json({message:'Get photo Successfully!',data:result})
    },
    deleteOne:async(req,res) => {
        await PhotoService.deleteOne(req.params)
        res.json({message:'Delete photo Successfully!'})
    }
}

module.exports = PhotoController