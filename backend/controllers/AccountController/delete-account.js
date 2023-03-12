const db = require("../../models");
const createAccount = async (req, res, next) => {
    try {
        const { userName } = req.body;

        await db.User.destroy({
            where: {
                userName,
            },
        });

        res.status(200).json({
            success: true,
            message: "Xóa tài khoản thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createAccount;
