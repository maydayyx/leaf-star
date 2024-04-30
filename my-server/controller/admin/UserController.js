const UserService = require("../../service/admin/UserService");
const UserController = {
  // 注册
  register: async (req, res) => {
    // 拿到用户输入的昵称和密码
    const { username, password } = req.body;
    try {
      const existingUser = await UserService.findUser(username);
      if (existingUser) {
        res.status(400).json({ message: "Username already exist" });
      } else {
        await UserService.register(username, password);
        res.status(200).json({ message: "User registered successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  },
  // 登录
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      // 登录成功
      let result = await UserService.login(username, password);
      //   携带token
      res.header("Authorization", result.token);
      //   响应
      res.status(200).json({ message: "Login successfully!", ...result });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  // 获取用户信息
  userInfo: async (req, res) => {
    const userId = req.decodeToken.userId
    try {
        const result = await UserService.userInfo(userId)
        res.status(200).json({message: '获取用户信息成功', username:result.username,code:200})
    } catch (error) {
        res.status(401).json({message: error.message,code:-1})
    }
  },
  // 退出登录
  logout: async (req, res) => {
    res.status(200).json({ message: "Logout successfully!",code:200 });
  },
};

module.exports = UserController;
