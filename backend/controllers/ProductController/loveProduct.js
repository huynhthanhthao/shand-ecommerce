const db = require("../../models");

const loveProduct = async (req, res, next) => {
    try {
        const { studentId, productsId } = req.body;

        if (!studentId || !productsId) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const isHave = await db.Love.findOne({
            where: {
                studentId,
            },
        });

        if (isHave) {
            await db.Love.update(
                {
                    productsId: productsId,
                },
                {
                    where: { studentId },
                }
            );
        } else
            await db.Love.create({
                studentId,
                productsId: productsId,
            });
        return res.status(200).json({
            status: true,
            message: "Thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = loveProduct;
