const FriendModel = require('../../models/freind')
const WebFriendService = {
    list:async() => {
        return await FriendModel.find({})
    }
}

module.exports = WebFriendService