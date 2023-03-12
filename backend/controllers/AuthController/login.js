const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../../models");
dotenv.config();
const loginController = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const user = await db.User.findOne({ where: { userName } });

        if (!user)
            return res.json({
                status: false,
                message: "Tài khoản hoặc mật khẩu không đúng!",
            });
        else {
            const passwordValid = await argon2.verify(
                user.dataValues.password,
                password
            );
            if (!passwordValid)
                return res.json({
                    status: false,
                    message: "Tài khoản hoặc mật khẩu không đúng!",
                });

            // All good
            // Create token
            const accessToken = jwt.sign(
                user.dataValues.userName,
                process.env.ACCESS_TOKEN_SECRET
            );

            return res.json({
                status: true,
                message: "Đăng nhập thàn công!",
                accessToken,
                user,
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = loginController;
