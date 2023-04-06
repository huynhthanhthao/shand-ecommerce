const db = require("../../models");
const getOrderList = async (req, res, next) => {
    try {
        const { status, buyerId } = req.query;

        const orders = await db.Order.findAll({
            where: { buyerId, status },
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

        const result = [];
        for (let j = 0; j < orders.length; j++) {
            const productsInformation = JSON.parse(orders[j].productsInformation);
            const productList = [];
            const productIds = productsInformation.map((item) => item.product.id);

            const products = [];

            for (let i = 0; i < productIds.length; i++) {
                const product = await db.Product.findOne({
                    where: { id: productIds[i] },
                });
                products.push(product.dataValues);
            }

            products.forEach((product) => {
                const productInfo = productsInformation.find((item) => item.product.id === product.id);
                productList.push({
                    ...product,
                    amount: productInfo.product.amount,
                });
            });
            result.push({
                ...orders[j].dataValues,
                productList: productList,
            });
        }

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin đơn hàng thành công!",
            orderList: result.reverse(),
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getOrderList;
