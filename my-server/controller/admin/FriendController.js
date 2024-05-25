const FriendService = require('../../service/admin/FriendService')
const FriendController = {
    add:async(req,res) => {
        const {sitename,sitelink,sitedesc,siteavatar} = req.body
        const result = await FriendService.add({sitename,sitelink,sitedesc,siteavatar})
        res.status(200).json({message:'Add Friend Successfully!',data:result})
    },
    list:async(req,res) => {
        const result = await FriendService.list()
        res.status(200).json({message:'Get FriendList Successfully!',data:result})
    }
}

module.exports = FriendController