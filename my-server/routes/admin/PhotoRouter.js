const express = require('express')
const PhotoRouter = express.Router()
const PhotoController = require('../../controller/admin/PhotoController')
PhotoRouter.post('/adminapi/photo/add',PhotoController.add)
PhotoRouter.get('/adminapi/photo/list',PhotoController.list)
PhotoRouter.delete('/adminapi/photo/list/:id',PhotoController.deleteOne)
module.exports = PhotoRouter