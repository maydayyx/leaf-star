const express = require('express') // 引入Express框架
const UserRouter = express.Router() // 创建一个针对用户操作的路由器实例
const UserController = require('../../controller/admin/UserController') // 引入用户控制器
const verifyToken = require('../../middleware/verifyToken') // 引入验证token的中间件
// login
UserRouter.post('/adminapi/user/login',UserController.login)
// register
UserRouter.post('/adminapi/user/register',UserController.register)
// userInfo
UserRouter.get('/adminapi/user/userInfo',verifyToken,UserController.userInfo)
// logout
UserRouter.post('/adminapi/user/logout',verifyToken,UserController.logout)
module.exports = UserRouter