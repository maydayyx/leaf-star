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
            return await ArticleModel.findOne({_id}).populate('tags')
        }else {
            return await ArticleModel.find({}).sort({updateTime:-1}).populate('tags')
        }
    },
    publish:async ({_id,isPublish,editTime}) => {
        console.log(isPublish)
        return await ArticleModel.updateOne({_id},{isPublish,editTime})
    },
    update:async ({_id,title,content,tags,isPublish,editTime,cover}) => {
        return await ArticleModel.updateOne({_id},{title,content,tags,isPublish,editTime,cover})
    },
    deleteList:async ({id:_id}) => {
        return await ArticleModel.deleteOne({_id})
    }
}

module.exports = ArticleService