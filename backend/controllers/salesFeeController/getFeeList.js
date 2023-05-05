const db = require("../../models");
const getFeeList = async (req, res, next) => {
    try {
        const feeList = await db.SalesFee.findAll({
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
            message: "Lấy danh sách phí bán hàng thành công!",
            feeList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getFeeList;
