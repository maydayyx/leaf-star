const { default: mongoose } = require("mongoose");
const ArticleModel = require("../../models/article");
const WebArticleServie = {
  getArticleList: async () => {
    return await ArticleModel.find({isPublish:1},{content:0,isPublish:0,editTime:0}).sort({ updateTime: -1 });
  },
  getArticle: async ({ _id }) => {
    return await ArticleModel.findOne({ _id }).populate("tags");
  },
  getArticleListByTag:async ({_id}) => {
   try {
    const tagObjectId = new mongoose.Types.ObjectId(_id)
    const articleWithTag = await ArticleModel.find({
      tags:tagObjectId,
      isPublish:1
    })
    return articleWithTag
   } catch (error) {
    throw error
   }
  }
};

module.exports = WebArticleServie;
