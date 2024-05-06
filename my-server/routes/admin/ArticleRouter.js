const multer = require('multer')
const upload = multer({dest:'public/articleUploads'})

const express = require('express') // 引入Express框架
const ArticleRouter = express.Router()
const ArticleController = require('../../controller/admin/ArticleController')


ArticleRouter.post('/adminapi/article/addArticle',upload.single('file'),ArticleController.add)
ArticleRouter.get('/adminapi/article/getArticleList',ArticleController.getArticleList)
module.exports = ArticleRouter;