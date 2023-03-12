const db = require("../../models");
const getAccountList = async (req, res, next) => {
    try {
        const userList = await db.User.findAll();

        return res.status(200).json({
            success: true,
            message: "Lấy danh sách tài khoản thành công!",
            userList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAccountList;
