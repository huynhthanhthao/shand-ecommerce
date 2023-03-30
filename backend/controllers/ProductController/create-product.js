const db = require("../../models");
const { v4: uuidv4 } = require("uuid");
const createProduct = async (req, res, next) => {
    try {
        const id = uuidv4();

        const {
            productId,
            ownId,
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
        } = req.body;

        if (
            !productId ||
            !categoryId ||
            !name ||
            !description ||
            !price ||
            !status ||
            !quantityAvailable ||
            !transport
        ) {
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
        await db.Product.create({
            id,
            productId,
            ownId,
            categoryId,
            name,
            description,
            images,
            imagesSource,
            price,
            transport,
        });

        await db.DetailProduct.create({
            id,
            quantityAvailable,
            status,
            trademark,
            size,
        });

        return res.status(200).json({
            status: true,
            message: "Thêm sản phẩm thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createProduct;
