const PhotoService = require('../../service/admin/PhotoService')
const PhotoController = {
    add:async(req,res) => {
        const {name,url} = req.body
        await PhotoService.add({name,url})
        res.json({message:'Add img Successfully!'})
    },
    list:async(req,res) => {
        const result = await PhotoService.list()
        res.json({message:'Get img Successfully!',data:result})
    }
}

module.exports = PhotoController