const db = require("../../models");
const getFreeProduct = async (req, res, next) => {
    const { limit } = req.query;
    try {
        const response = await db.Product.findAll({ where: { price: 0 }, limit: +limit });

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm miễn phí thành công!",
            productList: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getFreeProduct;
