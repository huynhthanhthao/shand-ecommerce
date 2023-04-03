const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const authToken = req.headers["authorization"];
    const token = authToken && authToken.split(" ")[1];
    if (!token) {
        return res.json({ status: false, message: "Vui lòng đăng nhập!" });
    }
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decode;
        next();
    } catch (error) {
        next(error);
    }
};
const adminRole = (req, res, next) => {
    if (req?.user.role !== "admin") {
        return res.json({ status: false, message: "Bạn không có quyền quản trị viên!" });
    }
    next();
};
module.exports = {
    verifyToken,
    adminRole,
};
