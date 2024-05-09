const multer = require('multer')
const upload = multer({dest:'public/articleUploads'})

const express = require('express') // 引入Express框架
const ArticleRouter = express.Router()
const ArticleController = require('../../controller/admin/ArticleController')


ArticleRouter.post('/adminapi/article/addArticle',upload.single('file'),ArticleController.add)
ArticleRouter.get('/adminapi/article/ArticleList',ArticleController.getArticleList)
ArticleRouter.get('/adminapi/article/ArticleList/:id',ArticleController.getArticleList)
ArticleRouter.put('/adminapi/article/publish',ArticleController.publish)
ArticleRouter.delete('/adminapi/article/ArticleList/:id',ArticleController.deleteList)
module.exports = ArticleRouter;