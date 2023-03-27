const db = require("../../models");
const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Order.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Hủy đơn hàng thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteOrder;
