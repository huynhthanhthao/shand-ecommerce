const sequelize = require("sequelize");
const db = require("../../models");
const searchSameProduct = async (req, res, next) => {
    try {
        const response = await db.Product.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm thành công!",
            productList: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = searchSameProduct;
