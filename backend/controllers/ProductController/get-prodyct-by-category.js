const db = require("../../models");
const getProductByCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.query;

        const response = await db.Product.findAll({
            where: {
                categoryId: categoryId ?? 1,
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

module.exports = getProductByCategory;
