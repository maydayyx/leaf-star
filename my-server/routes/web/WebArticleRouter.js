const express = require('express') // 引入Express框架
const WebArticleRouter = express.Router() 

const ArticleController = require('../../controller/web/ArticleController')

WebArticleRouter.get('/webapi/articleList',ArticleController.getArticleList)
WebArticleRouter.get('/webapi/article/:id',ArticleController.getArticle)


module.exports = WebArticleRouter