const db = require("../../models");
const getCategory = async (req, res, next) => {
    try {
        const { id } = req.query;
        const category = await db.Category.findOne({ where: { id } });

        return res.status(200).json({
            success: true,
            message: "Lấy danh mục thành công!",
            category,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getCategory;
