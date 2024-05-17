const TagService = require('../../service/web/WebTagService')
const TagController = {
    getTagList:async(req,res) =>{
       const result = await TagService.getTagList()
        res.status(200).json({message:'Get tag list successfully!',data:result})
    }
}

module.exports = TagController