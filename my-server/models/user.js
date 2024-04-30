const mongoose = require('mongoose');

// 创建模型结构对象
const userSchema = new mongoose.Schema({
  username:String,
  password:String,
  email:String,
});

// 创建模型对象
const userModel = mongoose.model('user',userSchema);

// 导出模型
module.exports = userModel;

