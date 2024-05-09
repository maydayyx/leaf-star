const mongoose = require('mongoose');

// 创建模型结构对象
const tagsSchema = new mongoose.Schema({
    name:String,
    count:Number
});

// 创建模型对象
const tagsModel = mongoose.model('tags',tagsSchema);

// 导出模型
module.exports = tagsModel;