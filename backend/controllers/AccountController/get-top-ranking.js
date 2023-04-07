const db = require("../../models");
const getTopRanking = async (req, res, next) => {
    try {
        const productList = await db.Product.findAll();
        const result = [];
        const sellersWithZeroPriceProducts = productList
            .filter((product) => product.price === 0)
            .map((product) => product.ownId);

        const sellerCounts = sellersWithZeroPriceProducts.reduce(
            (counts, ownId) => ({
                ...counts,
                [ownId]: (counts[ownId] || 0) + 1,
            }),
            {}
        );

        const topSellers = Object.entries(sellerCounts)
            .sort(([, countA], [, countB]) => countB - countA)
            .slice(0, 3)
            .map(([ownId]) => ownId);

        for (let i = 0; i < topSellers.length; i++) {
            const account = await db.User.findOne({
                where: { username: topSellers[i] },
                attributes: { exclude: ["createdAt", "updatedAt", "password", "role"] },
            });
            result.push(account.dataValues);
        }

        return res.status(200).json({
            status: true,
            message: "Lấy bảng xếp hạng thành công!",
            studentList: result,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getTopRanking;
