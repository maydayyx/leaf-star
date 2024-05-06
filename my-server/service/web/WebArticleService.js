const ArticleModel = require("../../models/article");
const WebArticleServie = {
  getArticleList: async () => {
    return await ArticleModel.find({},{content:0,isPublish:0,editTime:0}).sort({ updateTime: -1 });
  },
  getArticle: async ({ _id }) => {
    return await ArticleModel.findOne({ _id });
  },
};

module.exports = WebArticleServie;
