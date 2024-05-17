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
  }
};

module.exports = TagService;
