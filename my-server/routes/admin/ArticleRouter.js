const multer = require('multer')
const upload = multer({dest:'public/articleUploads'})

const express = require('express') // 引入Express框架
const ArticleRouter = express.Router()
const ArticleController = require('../../controller/admin/ArticleController')


ArticleRouter.post('/adminapi/image/upload',upload.single('file'),ArticleController.upload)
ArticleRouter.post('/adminapi/article/addArticle',upload.single('file'),ArticleController.add) // 添加文章
ArticleRouter.get('/adminapi/article/ArticleList',ArticleController.getArticleList) // 获取文章列表
ArticleRouter.get('/adminapi/article/ArticleList/:id',ArticleController.getArticleList) // 获取文章
ArticleRouter.put('/adminapi/article/publish',ArticleController.publish)    // 发布文章
ArticleRouter.post('/adminapi/article/ArticleList',upload.single('file'),ArticleController.update) // 更新文章
ArticleRouter.delete('/adminapi/article/ArticleList/:id',ArticleController.deleteList) // 删除文章
module.exports = ArticleRouter;