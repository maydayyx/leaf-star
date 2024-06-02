const ArticleService = require('../../service/admin/ArticleService')
const ArticleController = {
  upload:async(req,res) =>{
    const img = req.file ? `/articleUploads/${req.file.filename}` : "";
    res.json(`http://localhost:3000${img}`)
  },
  // 添加文章
  add: async (req, res) => {    
    const cover = req.file ? `/articleUploads/${req.file.filename}` : "";
    const { title, content, updateTime, tags, isPublish,desc } = req.body;
    const result = await ArticleService.add({
      title,
      content,
      cover,
      updateTime,
      tags,
      isPublish:Number(isPublish),
      editTime:new Date(),
      desc,
    });
    res.status(200).json({message:'Release successfully',data:result})
  },
  // 获取文章列表
  getArticleList:async (req, res) => {
    const {id:_id} = req.params;
    const result = await ArticleService.getArticleList({_id});
    res.status(200).json({message:'Get ArticleList Successfully!',data:result})
  },
  // 发布文章
  publish:async (req, res) => {
    const result = await ArticleService.publish({...req.body,editTime:new Date()});
    res.json({message:'publish successfully'})
  },
  // 修改文章
  update:async (req, res) => {
    console.log(req.file)
    const cover = req.file ? `/articleUploads/${req.file.filename}` : req.body.cover;
    const { _id,title, content, updateTime, tags, isPublish,desc,editTime} = req.body;
    console.log(desc)
    const result = await ArticleService.update({
      _id,
      title,
      content,
      cover:cover !==''?cover:undefined,
      updateTime,
      tags,
      isPublish:Number(isPublish),
      editTime,
      desc
    });
    res.status(200).json({message:'Release successfully',data:result})
  },
  // 删除文章
  deleteList:async (req, res) => {  
    await ArticleService.deleteList(req.params);
    res.status(200).json({message:'delete successfully'})
  }
};

module.exports = ArticleController;
