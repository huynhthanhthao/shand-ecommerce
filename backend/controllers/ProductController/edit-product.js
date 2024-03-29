const db = require("../../models");
const editProduct = async (req, res, next) => {
    try {
        const {
            id,
            productId,
            categoryId,
            name,
            description,
            images,
            imagesSource,
            price,
            transport,
            quantityAvailable,
            status,
            trademark,
            size,
            ownId,
        } = req.body;

        if (!categoryId || !name || !description || !status || !quantityAvailable || !transport) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const product = await db.Product.findOne({
            where: { productId, ownId },
        });

        if (product)
            return res.status(200).json({
                status: false,
                message: "Mã sản phẩm bị trùng!",
            });
        // All good
        await db.Product.update(
            {
                productId,
                categoryId,
                name,
                description,
                images,
                imagesSource,
                price,
                transport,
                status,
            },
            {
                where: {
                    id,
                },
            }
        );

        await db.DetailProduct.update(
            {
                quantityAvailable,
                status,
                trademark,
                size,
            },
            {
                where: {
                    id,
                },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật sản phẩm thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = editProduct;
