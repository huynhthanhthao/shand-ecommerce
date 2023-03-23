const db = require("../../models");
const getMyProduct = async (req, res, next) => {
    try {
        const { ownId } = req.query;

        const response = await db.Product.findAll({
            where: {
                ownId,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm thành công!",
            product: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getMyProduct;
