const ArticleModel = require('../../models/article')
const ArticleService = {
    add:async ({title,content,cover,updateTime,tags,isPublish,editTime,desc}) => {
        return await ArticleModel.create({
            title,
            content,
            cover,
            updateTime,
            tags,
            isPublish,
            editTime,
            desc
        })
    },
    getArticleList:async ({_id}) => {
        if(_id){
            return await ArticleModel.find({_id})
        }else {
            return await ArticleModel.find({}).sort({updateTime:-1})
        }
    }
}

module.exports = ArticleService