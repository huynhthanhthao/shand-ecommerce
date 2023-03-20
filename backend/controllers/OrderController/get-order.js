const db = require("../../models");
const getOrder = async (req, res, next) => {
    try {
        const { id } = req.query;

        const order = await db.Order.findOne({
            where: { id },
            include: [
                {
                    model: db.User,
                    as: "buyer",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role"],
                    },
                },
                {
                    model: db.User,
                    as: "seller",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role"],
                    },
                },
            ],
        });

        const productList = [];
        for (let i = 0; i < JSON.parse(order.productsInformation).length; i++) {
            const product = await db.Product.findOne({
                where: {
                    id: JSON.parse(order.productsInformation)[i].productId,
                },
            });
            productList.push({
                ...product.dataValues,
                amount: JSON.parse(order.productsInformation)[i].amount,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lấy thông tin đơn hàng thành công!",
            order: { ...order.dataValues, productList },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getOrder;
