const express = require('express')
const WebPhotoRouter = express.Router()
const PhotoController = require('../../controller/web/PhotoController')
WebPhotoRouter.get('/webapi/photo/list',PhotoController.list)
module.exports = WebPhotoRouter