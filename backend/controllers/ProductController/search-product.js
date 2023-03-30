const sequelize = require("sequelize");
const db = require("../../models");
const searchProduct = async (req, res, next) => {
    try {
        const { name } = req.query;

        const response = await db.Product.findAll({
            where: {
                name: sequelize.where(
                    sequelize.fn("LOWER", sequelize.col("name")),
                    "LIKE",
                    "%" + name + "%"
                ),
            },
        });

        return res.status(200).json({
            status: true,
            message: "Tìm kiếm sản phẩm thành công!",
            productList: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = searchProduct;
