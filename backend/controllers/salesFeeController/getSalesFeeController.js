const db = require("../../models");
const getSalesFeeController = async (req, res, next) => {
    try {
        const { sellerId } = req.query;

        const fee = await db.SalesFee.findOne({
            where: { sellerId },
            include: [
                {
                    model: db.User,
                    as: "seller",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role"],
                    },
                },
            ],
        });

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin phí bán hàng thành công!",
            fee,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getSalesFeeController;
