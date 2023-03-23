const db = require("../../models");
const getOrderList = async (req, res, next) => {
    try {
        const { status, sellerId } = req.query;

        const orders = await db.Order.findAll({
            where: { sellerId, status },
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

        const promises = orders.map(async (order) => {
            const productsInformation = JSON.parse(order.productsInformation);
            const productList = [];

            const productIds = productsInformation.map(
                (item) => item.productId
            );
            const products = await db.Product.findAll({
                where: { id: productIds },
            });

            products.forEach((product) => {
                const productInfo = productsInformation.find(
                    (item) => item.productId === product.id
                );
                productList.push({
                    ...product.dataValues,
                    amount: productInfo.amount,
                });
            });

            return {
                ...order.dataValues,
                productList,
            };
        });

        const newOrders = await Promise.all(promises);

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin đơn hàng thành công!",
            orderList: newOrders,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getOrderList;
