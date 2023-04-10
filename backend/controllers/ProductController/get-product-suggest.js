const db = require("../../models");
const getProductSuggest = async (req, res, next) => {
    try {
        const { studentId } = req.query;

        const product = await db.Love.findOne({
            where: {
                studentId: studentId ?? "",
            },
            attributes: { exclude: ["createdAt", "updatedAt", "id"] },
        });

        const productList = product?.dataValues.productsId ? JSON.parse(product?.dataValues.productsId) : [];

        if (studentId && productList.length > 0) {
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

            const getRecommendedProducts = async () => {
                const recommendedProductsDetails = [];

                for (const productId of recommendedProducts) {
                    const product = await db.Product.findOne({ where: { id: productId } });
                    recommendedProductsDetails.push(product);
                }

                return recommendedProductsDetails;
            };

            // gọi hàm để lấy danh sách chi tiết sản phẩm
            const recommendedProductsDetails = await getRecommendedProducts();
            return res.status(200).json({
                status: true,
                message: "Lấy sản phẩm thành công!",
                productList: recommendedProductsDetails,
            });
        } else {
            const otherUsers = await db.Love.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", "id"] },
            });

            // 1. Tạo đối tượng để lưu số lượng người dùng yêu thích của từng sản phẩm
            let productCounts = {};

            // 2. Duyệt qua danh sách các người dùng và sản phẩm yêu thích của họ
            for (let i = 0; i < otherUsers.length; i++) {
                let favoriteProducts = JSON.parse(otherUsers[i].productsId);
                for (let j = 0; j < favoriteProducts.length; j++) {
                    // 3. Chuyển đổi chuỗi JSON của danh sách sản phẩm yêu thích thành mảng các chuỗi sản phẩm
                    let productId = favoriteProducts[j];

                    // 4. Tăng số lượng người dùng yêu thích của sản phẩm
                    if (productId in productCounts) {
                        productCounts[productId]++;
                    } else {
                        productCounts[productId] = 1;
                    }
                }
            }

            // 5. Chuyển đổi đối tượng thành mảng các cặp giá trị (sản phẩm, số lượng người dùng yêu thích)
            let productCountsArray = Object.entries(productCounts);

            // 6. Sắp xếp mảng các cặp giá trị theo số lượng người dùng yêu thích giảm dần
            productCountsArray.sort((a, b) => b[1] - a[1]);

            // 7. Lấy ra các mã sản phẩm của 5 sản phẩm được yêu thích nhất và đưa ra đề xuất cho người dùng mới
            let top5Products = [];
            for (let i = 0; i < 5 && i < productCountsArray.length; i++) {
                top5Products.push(productCountsArray[i][0]);
            }

            const getRecommendedProducts = async () => {
                const recommendedProductsDetails = [];

                for (const productId of top5Products) {
                    const product = await db.Product.findOne({ where: { id: productId } });
                    recommendedProductsDetails.push(product);
                }

                return recommendedProductsDetails;
            };

            // gọi hàm để lấy danh sách chi tiết sản phẩm
            const recommendedProductsDetails = await getRecommendedProducts();

            return res.status(200).json({
                status: true,
                message: "Lấy sản phẩm thành công!",
                productList: recommendedProductsDetails,
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getProductSuggest;
