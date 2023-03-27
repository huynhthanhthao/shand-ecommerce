const db = require("../../models");
const updateTransaction = async (req, res, next) => {
    try {
        const { username, fullName, bankName, bankCode } = req.body;
        // Missing data

        if (!fullName || !username || !bankName || !bankCode) {
            return res.json({
                status: false,
                message: "Vui lòng nhập đầy đủ thông tin!",
            });
        }

        await db.Transaction.update(
            {
                fullName,
                bankName,
                bankCode,
            },
            { where: { username } }
        );
        return res.json({
            status: true,
            message: "Cập nhật thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateTransaction;
