const WebPhotoService = require('../../service/web/WebPhotoService')
const PhotoController = {
    list:async(req,res) => {
        const result = await WebPhotoService.list();
        res.json({
            message:'Get img Successfully!',
            data:result
        })
    },
}
module.exports = PhotoController;