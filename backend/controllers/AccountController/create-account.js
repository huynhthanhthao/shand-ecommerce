const db = require("../../models");
const argon2 = require("argon2");
const createAccount = async (req, res, next) => {
    try {
        const { userName, password, fullName, role } = req.body;

        // Missing data
        if (!userName || !password || !fullName || !role) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        // account existed
        const user = await db.User.findOne({ where: { userName } });

        if (user) {
            return res.json({
                status: false,
                message: "Tài khoản này đã tồn tại!",
            });
        }

        // All good
        const hashedPassword = await argon2.hash(password);
        await db.User.create({
            userName,
            password: hashedPassword,
            fullName,
            role,
        });

        res.status(200).json({
            success: true,
            message: "Tạo tài khoản thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createAccount;
