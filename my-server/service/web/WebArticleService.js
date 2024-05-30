const mongoose = require("mongoose");
const ArticleModel = require("../../models/article");
const WebArticleServie = {
  incrementViewCount: async function ({_id}) {
    try {
      const updateArticle = await ArticleModel.findOneAndUpdate(
        {_id},
        { $inc: { viewCount: 1 } },
        { new: true }
      );

      if (!updateArticle) {
        console.warn(`Failed to increment view count for article with ID ${_id}`);
      }
    } catch (error) {
      console.error("Error while incrementing view count:", error);
      throw error;
    }
  },
  getArticleList: async (order) => {
    return await ArticleModel.find(
      { isPublish: 1 },
      { content: 0, isPublish: 0, editTime: 0 }
    ).sort({ updateTime: Number(order) });
  },
  getArticle: async function ({ _id }) {
    const article = await ArticleModel.findOne({ _id }).populate("tags");
    if(!article) {
      throw new Error(`Article with ID ${_id} not found.`);
    }
    // 新增方法增加文章的访问量
  
    await this.incrementViewCount({_id})
    return article;
  },
  getArticleListByTag: async ({_id}) => {
    try {
      const tagObjectId = new mongoose.Types.ObjectId(_id);
      const articleWithTag = await ArticleModel.find({
        tags: tagObjectId,
        isPublish: 1,
      });
      return articleWithTag;
    } catch (error) {
      throw error;
    }
  },
  searchArticle: async ({ keyword }) => {
    try {
      if (keyword !== "") {
        const articleWithKeyword = await ArticleModel.find({
          title: { $regex: keyword, $options: "i" },
          isPublish: 1,
        });
        return articleWithKeyword;
      }
    } catch (error) {
      throw error;
    }
  },
  
};

module.exports = WebArticleServie;
