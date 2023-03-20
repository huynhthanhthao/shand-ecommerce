const db = require("../../models");

const createReport = async (req, res, next) => {
    try {
        const { reportedStudentId, studentId, title, content, productId } =
            req.body;

        if (!title || !content) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        // All good
        const report = await db.Report.create({
            reportedStudentId,
            studentId,
            title,
            content,
            productId,
        });

        return res.status(200).json({
            success: true,
            message: "Gửi báo cáo thành công!",
            report,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createReport;
