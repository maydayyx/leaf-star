const { list } = require('../../controller/admin/FriendController')
const FriendModel = require('../../models/freind')
const FriendService = {
    add:async({sitename,sitelink,sitedesc,siteavatar}) => {
        return await FriendModel.create({sitename,sitelink,sitedesc,siteavatar})
    },
    list:async() => {
        return await FriendModel.find({})
    }
}

module.exports = FriendService