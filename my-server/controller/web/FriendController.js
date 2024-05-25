const FriendService = require('../../service/web/WebFriendService')
const FriendController = {
    list:async(req,res) => {
        const result = await FriendService.list();
        res.status(200).json({message:'Get FriendList Successfully!',data:result})
    }   
}
module.exports = FriendController;