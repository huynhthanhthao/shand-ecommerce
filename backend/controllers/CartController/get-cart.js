const db = require("../../models");
const getCart = async (req, res, next) => {
    try {
        const { studentId } = req.query;
        // Missing data
        if (!studentId) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const productList = await db.Cart.findAll({
            where: { studentId },
            include: [
                {
                    model: db.Product,
                    as: "product",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
        });

        return res.json({
            status: true,
            message: "Lấy danh sách sản phẩm trong giỏ thành công!",
            productList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getCart;
