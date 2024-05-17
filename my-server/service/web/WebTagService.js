const TagModel = require("../../models/tags");
const WebTagServie = {
  getTagList: async () => {
    return await TagModel.find({});
  },
};

module.exports = WebTagServie;
