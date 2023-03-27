const db = require("../../models");
const argon2 = require("argon2");
const createAccount = async (req, res, next) => {
    try {
        const { username, password, fullName, role, urlAvatar } = req.body;

        // console.log(username, password, fullName, role, urlAvatar);

        // Missing data
        if (!username || !password || !fullName || !role) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        // account existed
        const user = await db.User.findOne({ where: { username } });

        if (user) {
            return res.json({
                status: false,
                message: "Tài khoản này đã tồn tại!",
            });
        }

        // All good
        const hashedPassword = await argon2.hash(password);
        await db.User.create({
            username,
            password: hashedPassword,
            fullName,
            role,
            urlAvatar,
            status: true,
        });

        res.status(200).json({
            status: true,
            message: "Tạo tài khoản thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createAccount;
