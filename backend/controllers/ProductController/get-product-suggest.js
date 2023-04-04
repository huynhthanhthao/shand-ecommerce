const db = require("../../models");
// var recommender = require("recommender");
const getProductSuggest = async (req, res, next) => {
    try {
        const { id } = req.query;

        const response = await db.DetailProduct.findAll({});

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm thành công!",
            product: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getProductSuggest;
