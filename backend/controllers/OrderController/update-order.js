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
            const product = await db.Order.findOne({
                where: { id },
            });

            const productsInformation = JSON.parse(
                product.dataValues.productsInformation
            );

            productsInformation.forEach(async (product) => {
                console.log(product.product.quantityAvailable, product.amount);
                await db.DetailProduct.update(
                    {
                        quantityAvailable:
                            product.product.quantityAvailable - product.amount,
                    },
                    {
                        where: {
                            id: product.productId,
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
