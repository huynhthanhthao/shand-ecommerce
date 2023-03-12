const db = require("../../models");
const getCategoryList = async (req, res, next) => {
    try {
        const categoryList = await db.Category.findAll();

        return res.status(200).json({
            success: true,
            message: "Lấy tất cả danh mục thành công!",
            categoryList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getCategoryList;
