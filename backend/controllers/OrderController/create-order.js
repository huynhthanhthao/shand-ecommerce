const db = require("../../models");
const createOrder = async (req, res, next) => {
    try {
        const { productsInformation, sellerId, buyerId, total, status, paid } = req.body;
        let order = {};

        if (paid) {
            order = await db.Order.create({
                sellerId,
                buyerId,
                productsInformation: JSON.parse(productsInformation),
                total,
                paid,
                status: "confirmed",
            });

            const productsInformationCreated = JSON.parse(productsInformation);
            productsInformationCreated.forEach(async (product) => {
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
        } else
            order = await db.Order.create({
                sellerId,
                buyerId,
                productsInformation: JSON.parse(productsInformation),
                total,
                paid,
                status,
            });

        return res.status(200).json({
            status: true,
            message: "Đặt hàng thành công!",
            order,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createOrder;
