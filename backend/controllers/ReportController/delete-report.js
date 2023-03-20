const db = require("../../models");
const deleteReport = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Report.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Xóa báo cáo thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteReport;
