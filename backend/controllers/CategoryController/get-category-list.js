const db = require("../../models");
const getCategoryList = async (req, res, next) => {
    try {
        let categoryList = await db.Category.findAll();
        for (let i = 0; i < categoryList.length; i++) {
            const parent = await db.Category.findOne({
                where: { id: categoryList[i].dataValues.parent },
            });

            categoryList[i] = { ...categoryList[i].dataValues, parent };
        }

        return res.status(200).json({
            status: true,
            message: "Lấy tất cả danh mục thành công!",
            categoryList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getCategoryList;
