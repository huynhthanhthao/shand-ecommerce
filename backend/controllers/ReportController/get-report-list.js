const db = require("../../models");
const getReportList = async (req, res, next) => {
    try {
        const reportList = await db.Report.findAll({
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
        });

        return res.status(200).json({
            status: true,
            message: "Lấy danh sách đơn báo cáo thành công!",
            reportList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getReportList;
