const express = require('express')
const WebFriendRouter = express.Router()
const FriendController = require('../../controller/web/FriendController')
WebFriendRouter.get('/webapi/friend/list',FriendController.list)
module.exports = WebFriendRouter