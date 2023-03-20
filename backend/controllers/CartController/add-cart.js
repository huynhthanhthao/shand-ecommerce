const db = require("../../models");
const addCart = async (req, res, next) => {
    try {
        const { productId, studentId, amount } = req.body;
        // Missing data
        if (!productId || !studentId) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        //
        const product = await db.Cart.findOne({
            where: { studentId, productId },
        });

        if (!product) {
            const response = await db.Cart.create({
                studentId,
                productId,
                amount,
            });
            return res.json({
                status: true,
                message: "Thêm sản phẩm vào giỏ thành công!",
                product: response,
            });
        } else {
            return res.json({
                status: false,
                message: "Sản phẩm này đã có trong giỏ hàng!",
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = addCart;
