const db = require("../../models");
const createOrder = async (req, res, next) => {
    try {
        const { productsInformation, sellerId, buyerId, total, status, paid } =
            req.body;

        const order = await db.Order.create({
            sellerId,
            buyerId,
            productsInformation: JSON.parse(productsInformation),
            total,
            paid,
            status,
        });

        return res.status(200).json({
            status: true,
            message: "Đặt hàng thành công!",
            order,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createOrder;
