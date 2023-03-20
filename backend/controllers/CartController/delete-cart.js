const db = require("../../models");
const deleteCart = async (req, res, next) => {
    try {
        const { productId, studentId } = req.body;

        await db.Cart.destroy({
            where: {
                productId,
                studentId,
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

module.exports = deleteCart;