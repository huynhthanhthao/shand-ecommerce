const db = require("../../models");
const getAccount = async (req, res, next) => {
    try {
        const { username } = req.query;

        const user = await db.User.findOne({ where: { username } });

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin tài khoản thành công!",
            user,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAccount;
