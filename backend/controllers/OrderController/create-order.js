const db = require("../../models");
const createOrder = async (req, res, next) => {
    try {
        const { productsInformation, sellerId, buyerId, total, status } =
            req.body;

        const order = await db.Order.create({
            sellerId,
            buyerId,
            productsInformation: JSON.parse(productsInformation),
            total,
            status,
        });

        return res.status(200).json({
            status: true,
            message: "Tạo hóa đơn thành công!",
            order,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createOrder;
