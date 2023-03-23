const db = require("../../models");
const updateOrder = async (req, res, next) => {
    try {
        const { id, total, status } = req.body;

        await db.Order.update(
            {
                total,
                status,
            },
            {
                where: { id },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật hóa đơn thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateOrder;
