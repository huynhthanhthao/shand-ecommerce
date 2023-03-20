const db = require("../../models");
const editCart = async (req, res, next) => {
    try {
        const { productId, studentId, amount } = req.body;
        // Missing data
        if (!amount) {
            return res.json({
                status: false,
                message: "Vui lòng nhập số lượng!",
            });
        }

        await db.Cart.update(
            {
                amount,
            },
            { where: { studentId } }
        );
        return res.json({
            status: true,
            message: "Cập nhật thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = editCart;
