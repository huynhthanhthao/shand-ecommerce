const db = require("../../models");
const createCategory = async (req, res, next) => {
    try {
        const { nameCategory, parent } = req.body;
        // missing data
        if (!nameCategory) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        // All good
        await db.Category.create({
            nameCategory,
            parent,
        });

        res.status(200).json({
            status: true,
            message: "Thêm danh mục thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createCategory;
