const db = require("../../models");
const updateSalesFeeController = async (req, res, next) => {
    try {
        const { sellerId } = req.query;

        const fee = await db.SalesFee.update(
            { billList: [] },
            {
                where: { sellerId },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật thông tin phí bán hàng thành công!",
            fee,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateSalesFeeController;
