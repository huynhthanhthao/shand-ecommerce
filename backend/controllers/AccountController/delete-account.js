const db = require("../../models");
const createAccount = async (req, res, next) => {
    try {
        const { username } = req.body;

        await db.User.destroy({
            where: {
                username,
            },
        });

        res.status(200).json({
            status: true,
            message: "Xóa tài khoản thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createAccount;
