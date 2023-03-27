const db = require("../../models");
const getTransaction = async (req, res, next) => {
    try {
        const { username } = req.query;

        const transaction = await db.Transaction.findOne({
            where: { username },
        });

        return res.json({
            status: true,
            message: "Lấy thông tin thành công!",
            transaction,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getTransaction;
