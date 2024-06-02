const express = require('express') // 引入Express框架
const TagController = require('../../controller/admin/TagController')
const TagRouter = express.Router()


TagRouter.post('/adminapi/tag/addTag',TagController.addTag)
TagRouter.get('/adminapi/tag/list',TagController.getList)
TagRouter.delete('/adminapi/tag/list/:id',TagController.deleteTag)
module.exports = TagRouter;