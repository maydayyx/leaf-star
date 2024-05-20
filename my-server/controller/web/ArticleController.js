
const WebArticleServie = require('../../service/web/WebArticleService')
const ArticleController = {
    getArticleList: async (req, res) => {
        const result = await WebArticleServie.getArticleList()
        res.status(200).json({message:"Get ArticleList Successfully!",data:result})
    },
    getArticle: async (req, res) => {
        const { id:_id } = req.params

        const result = await WebArticleServie.getArticle({ _id })
        res.status(200).json({message:"Get Article Successfully!",data:result})
    },
    getArticleListByTag:async(req,res) => {
        const {id:_id} = req.params
        const result = await WebArticleServie.getArticleListByTag({_id})
        res.status(200).json({message:"Get ArticleListByTag Successfully!",data:result})
    },
    searchArticle:async(req,res) => {
       const { keyword } = req.query
       const result = await WebArticleServie.searchArticle({keyword})
       res.json({message:'ok',data:result})
    }
}

module.exports = ArticleController;