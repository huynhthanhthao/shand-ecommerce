const db = require("../../models");
const updateOrder = async (req, res, next) => {
    try {
        const { id, status } = req.body;
        await db.Order.update(
            {
                status,
            },
            {
                where: { id },
            }
        );

        if (status === "confirmed") {
            const order = await db.Order.findOne({
                where: { id },
            });

            const productsInformation = JSON.parse(order.dataValues.productsInformation);
            productsInformation.forEach(async (product) => {
                await db.DetailProduct.update(
                    {
                        quantityAvailable: product.product.quantityAvailable - product.amount,
                    },
                    {
                        where: {
                            id: product.product.id,
                        },
                    }
                );
            });
        }

        if (status === "received") {
            const order = await db.Order.findOne({
                where: { id },
            });
            await db.Bill.create({
                buyerId: order.dataValues.buyerId,
                sellerId: order.dataValues.sellerId,
                orderId: order.dataValues.id,
            });
        }

        if (status === "cancel") {
            const order = await db.Order.findOne({
                where: { id },
            });

            const productsInformation = JSON.parse(order.dataValues.productsInformation);
            productsInformation.forEach(async (product) => {
                await db.DetailProduct.update(
                    {
                        quantityAvailable: product.product.quantityAvailable + product.amount,
                    },
                    {
                        where: {
                            id: product.product.id,
                        },
                    }
                );
            });
        }

        return res.status(200).json({
            status: true,
            message: "Cập nhật đơn hàng thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateOrder;
