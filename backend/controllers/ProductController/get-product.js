const db = require("../../models");
const getProduct = async (req, res, next) => {
    try {
        const { id } = req.query;

        const response = await db.DetailProduct.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: db.Product,
                    as: "product",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
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

module.exports = getProduct;
