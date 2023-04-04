const db = require("../../models");
const addTransaction = async (req, res, next) => {
    try {
        const { username, fullName, bankName, bankCode } = req.body;
        console.log(username, fullName, bankName, bankCode);
        // Missing data
        if (!fullName || !bankName || !bankCode) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const response = await db.Transaction.create({
            username,
            fullName,
            bankName,
            bankCode,
        });
        return res.json({
            status: true,
            message: "Thêm địa chỉ nhận hàng thành công!",
            transaction: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = addTransaction;
