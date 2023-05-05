const db = require("../../models");
const deleteSalesFeeController = async (req, res, next) => {
    try {
        const { sellerId } = req.body;

        await db.SalesFee.destroy({
            where: { sellerId },
        });

        return res.status(200).json({
            status: true,
            message: "Thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteSalesFeeController;
