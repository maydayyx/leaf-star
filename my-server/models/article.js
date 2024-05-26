const mongoose = require('mongoose');

// 创建模型结构对象
const articleSchema = new mongoose.Schema({
  title:String,  //文章标题
  content:String, // 文章内容
  cover:String, // 图片
  updateTime:String,  //创建时间
  tags:String, //文章标签
  isPublish:Number, //是否发布
  editTime:Date, //修改时间
  desc:String, //文章描述
  tags:[{type:mongoose.Schema.Types.ObjectId,ref:'tags'}],
  viewCount:{type:Number,default:0}
});

// 创建模型对象
const articleModel = mongoose.model('article',articleSchema);

// 导出模型
module.exports = articleModel;

