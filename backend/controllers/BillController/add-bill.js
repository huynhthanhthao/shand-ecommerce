const db = require("../../models");
const addBill = async (req, res, next) => {
    try {
        const { buyerId, sellerId, orderId } = req.body;
        // Missing data
        if (!buyerId || !sellerId || !orderId) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const response = await db.Bill.create({
            buyerId,
            sellerId,
            orderId,
        });
        return res.json({
            status: true,
            message: "Đã thêm vào hóa đơn!",
            bill: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = addBill;
