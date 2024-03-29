const db = require("../../models");
const updateCategory = async (req, res, next) => {
    try {
        const { id, nameCategory, parent } = req.body;

        // Missing data
        if (!nameCategory || !id) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        // All good
        await db.Category.update(
            { nameCategory, parent: parent ?? 0 },
            {
                where: {
                    id,
                },
            }
        );

        return res.status(200).json({
            status: true,
            message: "Cập nhật danh mục thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateCategory;
