const express = require('express')
const FriendRouter = express.Router()
const FriendController = require('../../controller/admin/FriendController')
FriendRouter.post('/adminapi/friend/add',FriendController.add)
FriendRouter.get('/adminapi/friend/list',FriendController.list)
module.exports = FriendRouter