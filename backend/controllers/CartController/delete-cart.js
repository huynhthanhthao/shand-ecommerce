const db = require("../../models");
const deleteCart = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Cart.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Xóa sản phẩm thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteCart;
