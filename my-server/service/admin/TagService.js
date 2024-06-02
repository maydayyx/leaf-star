const { get } = require("mongoose");
const TagModel = require("../../models/tags");
const TagService = {
  findTag: async (name) => {
    return await TagModel.findOne({ name });
  },
  addTag: async (name) => {
    return await TagModel.create({ name });
  },
  getList:async() => {
    return await TagModel.find({});
  },
  deleteTag:async({id:_id}) => {
    return await TagModel.findByIdAndDelete(_id);
  }
};

module.exports = TagService;
