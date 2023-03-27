const db = require("../../models");
const updateQuantity = async (req, res, next) => {
    try {
        const { id, quantityAvailable } = req.body;

        if (!quantityAvailable) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        // All good

        await db.DetailProduct.update(
            {
                quantityAvailable,
            },
            {
                where: {
                    id,
                },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật số lượng thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateQuantity;
