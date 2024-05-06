const bcrypt = require("bcrypt"); //加密模块
const jwt = require("jsonwebtoken"); //JsonWebToken
const UserModel = require("../../models/user");

const UserService = {
    // 登录验证
  login: async (username, password) => {
    // 检查用户名是否被注册
    const hasUser = await UserService.findUser(username);
    if (!hasUser) {
      throw new Error("The user name is not registered");
    }
    // 和加密的密码进行比对
    const isPasswordValid = bcrypt.compareSync(password, hasUser.password);
    if (!isPasswordValid) throw new Error("password is incorrect");

    // token 生成
    const secretKey = "leafstar";
    //   token 有效期
    const expiresIn = "7d";
    //  传递的信息
    const playload = { userId: hasUser._id };
    const token = jwt.sign(playload, secretKey, { expiresIn });
    return { username: hasUser.username,token: token,code:200 }
  },
  // 查询用户是否存在
  findUser: async (username) => {
    return await UserModel.findOne({ username });
  },
  // 注册
  register: async (username, password) => {
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return await UserModel.create({ username, password: encryptedPassword });
  },
// 获取用户信息 
  userInfo: async (userId) => {
   if(userId) {
    return await UserModel.findById(userId);
   }else {
    throw new Error('Token invalidation!')
   }
  },
};
module.exports = UserService;
