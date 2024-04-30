const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ code: 401, message: "未提供token" });
  }

  const secretKey = "leafstar";

  try {
    const decoded = jwt.verify(token, secretKey);
    req.decodeToken = decoded;
    next();
  } catch (err) {
    res.json({  code: 403,message: "无效的 token",});
  }
};

module.exports = verifyToken;
