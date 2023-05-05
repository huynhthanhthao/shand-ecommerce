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

            // Tạo hóa đơn mới
            let bill = await db.Bill.create({
                buyerId: order.dataValues.buyerId,
                sellerId: order.dataValues.sellerId,
                orderId: order.dataValues.id,
            });

            // Lấy chi tiết hóa đơn
            bill = await db.Bill.findOne({
                where: { orderId: bill.dataValues.orderId },
                include: [
                    {
                        model: db.Order,
                        as: "order",
                        attributes: { exclude: ["createdAt", "updatedAt"] },
                    },
                ],
            });

            // Thêm vào phí bán hàng
            const fee = await db.SalesFee.findOne({
                where: {
                    sellerId: order.dataValues.sellerId,
                },
            });

            if (!fee) {
                var date = new Date();
                var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

                await db.SalesFee.create({
                    sellerId: order.dataValues.sellerId,
                    billList: [bill],
                    deadLine: lastDay,
                });
            } else {
                let newBillList = JSON.parse(fee.dataValues.billList);
                newBillList.push(bill.dataValues);
                await db.SalesFee.update(
                    { billList: newBillList },
                    {
                        where: { id: fee.dataValues.id },
                    }
                );
            }
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
