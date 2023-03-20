const db = require("../../models");
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Product.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Xóa sản phẩm thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteProduct;
