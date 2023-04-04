const sequelize = require("sequelize");

const db = require("../../models");
const Op = sequelize.Op;

const getProductByOwner = async (req, res, next) => {
    try {
        const { ownId } = req.query;

        const response = await db.Product.findAll({
            limit: 2,
            where: {
                ownId,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Lấy sản phẩm thành công!",
            productList: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getProductByOwner;
