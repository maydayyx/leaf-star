const TagService = require("../../service/admin/TagService");
const TagController = {
  addTag: async (req, res) => {
    const { name } = req.body;
    try {
      const hasTag = await TagService.findTag(name);
      if (hasTag) {
        res.json({ message: "The tag is exist!",code:'-1'});
      } else {
        await TagService.addTag(name);
        res.status(200).json({message:'Add tag successfully!',code:200})
      }
    } catch (error) {
      console.log(error);
    }
  },
  getList:async(req,res) => {
    const result = await TagService.getList();
    res.json({data:result,code:200})
  }
};

module.exports = TagController;
