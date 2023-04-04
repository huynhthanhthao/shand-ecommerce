const db = require("../../models");
const getProductLove = async (req, res, next) => {
    try {
        const { studentId } = req.query;

        let productDetail = [];

        let response = await db.Love.findOne({
            where: {
                studentId,
            },
        });

        const productsId = JSON.parse(response.dataValues.productsId);

        for (let i = 0; i < productsId.length; i++) {
            const product = await db.Product.findOne({
                where: {
                    id: productsId[i],
                },
            });

            productDetail.push(product);
        }

        let result = { ...response.dataValues, productDetail: productDetail };
        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm yêu thích thành công!",
            productLove: result,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getProductLove;
