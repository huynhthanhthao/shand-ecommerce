const db = require("../../models");
const argon2 = require("argon2");
const updateAccount = async (req, res, next) => {
    try {
        const { username, password, fullName, role, status } = req.body;

        // Missing data
        if (!username || !password || !fullName || !role) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        const hashedPassword = await argon2.hash(password);
        // All good
        await db.User.update(
            { password: hashedPassword, fullName, role, status },
            {
                where: {
                    username,
                },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật thông tin thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateAccount;
