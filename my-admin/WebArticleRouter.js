const express = require('express') // 引入Express框架
const WebArticleRouter = express.Router() 

const ArticleController = require('../../controller/web/ArticleController')

WebArticleRouter.get('/webapi/articleList',ArticleController.getArticleList)
WebArticleRouter.get('/webapi/article/:id',ArticleController.getArticle)
WebArticleRouter.get('/webapi/articleListByTag/:id',ArticleController.getArticleListByTag)
WebArticleRouter.post('/webapi/article/search',ArticleController.searchArticle)
module.exports = WebArticleRouter