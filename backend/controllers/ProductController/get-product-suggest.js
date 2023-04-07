const db = require("../../models");
const getProductSuggest = async (req, res, next) => {
    try {
        const { studentId } = req.query;

        const response = await db.Product.findAll();

        if (studentId) {
            const userLove = await db.Love.findOne({
                where: { studentId },
                attributes: { exclude: ["createdAt", "updatedAt", "id"] },
            });

            const userPreferences = JSON.parse(userLove.dataValues.productsId);

            const otherUsers = await db.Love.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", "id"] },
            });

            // Tìm kiếm các người dùng khác có sở thích tương tự

            const similarUsers = [];
            for (let i = 0; i < otherUsers.length; i++) {
                let count = 0;
                for (let j = 0; j < userPreferences.length; j++) {
                    // console.log(JSON.parse(otherUsers[i].dataValues.productsId).includes(userPreferences[j]));
                    if (JSON.parse(otherUsers[i].dataValues.productsId).includes(userPreferences[j])) {
                        count++;
                    }
                }
                if (count > 0) {
                    similarUsers.push(otherUsers[i]);
                }
            }

            // Tạo danh sách sản phẩm ưa thích của các người dùng khác
            let recommendedProducts = [];
            for (let i = 0; i < similarUsers.length; i++) {
                for (let j = 0; j < JSON.parse(similarUsers[i].productsId).length; j++) {
                    let product = JSON.parse(similarUsers[i].productsId)[j];
                    if (!userPreferences.includes(product) && !recommendedProducts.includes(product)) {
                        recommendedProducts.push(product);
                    }
                }
            }
            return res.status(200).json({
                status: true,
                message: "Lấy sản phẩm thành công!",
                recommendedProducts,
            });
        } else {
            const otherUsers = await db.Love.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", "id"] },
            });

            let allFavorites = JSON.parse(otherUsers[0].productsId);
            for (let i = 1; i < otherUsers.length; i++) {
                allFavorites = allFavorites.filter((favorite) =>
                    JSON.parse(otherUsers[i].productsId).includes(favorite)
                );
            }

            return res.status(200).json({
                status: true,
                message: "Lấy sản phẩm thành công!",
                allFavorites,
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getProductSuggest;
