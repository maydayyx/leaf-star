const { log } = require("console");
const ArticleService = require('../../service/admin/ArticleService')
const ArticleController = {
  add: async (req, res) => {    
    const cover = req.file ? `/articleUploads/${req.file.filename}` : "";
    const { title, content, updateTime, tags, isPublish,desc } = req.body;
    const result = await ArticleService.add({
      title,
      content,
      cover,
      updateTime,
      tags:Number(tags),
      isPublish:Number(isPublish),
      editTime:new Date(),
      desc
    });
    res.status(200).json({message:'Release successfully',data:result})
  },
  getArticleList:async (req, res) => {
    const {_id} = req.query;
    const result = await ArticleService.getArticleList({_id});
    res.status(200).json({message:'Get ArticleList Successfully!',data:result})
  }
};

module.exports = ArticleController;
