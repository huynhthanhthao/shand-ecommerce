const db = require("../../models");
const getDetailReport = async (req, res, next) => {
    try {
        const { id } = req.query;

        const reportList = await db.Report.findOne({
            where: { id },
            include: [
                {
                    model: db.User,
                    as: "student",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role"],
                    },
                },
                {
                    model: db.User,
                    as: "reportedStudent",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "password", "role"],
                    },
                },
                {
                    model: db.Product,
                    as: "product",
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["studentId", "reportedStudentId", "productId"],
            },
        });

        return res.status(200).json({
            status: true,
            message: "Lấy chi tiết đơn báo cáo thành công!",
            reportList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getDetailReport;
