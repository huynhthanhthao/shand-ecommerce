const { Op } = require("sequelize");
const db = require("../../models");
const getAllProduct = async (req, res, next) => {
    const { limit } = req.query;
    try {
        // const result = await db.Product.findAll({ limit: +limit });
        const availableProduct = await db.DetailProduct.findAll({
            where: {
                quantityAvailable: {
                    [Op.gt]: 0, // Tìm các sản phẩm có số lượng lớn hơn 0
                },
            },
            limit: +limit,
        });

        const result = await db.Product.findAll({
            where: {
                id: availableProduct.map((product) => product.id),
            },
        });

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm thành công!",
            productList: result,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAllProduct;
