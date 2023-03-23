const db = require("../../models");
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Category.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Xóa danh mục thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteCategory;
