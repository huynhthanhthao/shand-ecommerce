const db = require("../../models");
const getAllProduct = async (req, res, next) => {
    const { limit } = req.query;
    try {
        const response = await db.Product.findAll({ limit: +limit });

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

module.exports = getAllProduct;
