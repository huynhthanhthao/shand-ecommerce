const sequelize = require("sequelize");

const db = require("../../models");
const Op = sequelize.Op;

const getBillList = async (req, res, next) => {
    try {
        const { studentId } = req.query;
        // Missing data
        if (!studentId) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const billList = await db.Bill.findAll({
            where: {
                [Op.or]: [{ buyerId: studentId }, { sellerId: studentId }],
            },
            include: [
                {
                    model: db.Order,
                    as: "order",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                    include: [
                        {
                            model: db.User,
                            as: "buyer",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "password", "role"],
                            },
                        },
                        {
                            model: db.User,
                            as: "seller",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "password", "role"],
                            },
                        },
                    ],
                },
            ],
        });

        return res.json({
            status: true,
            message: "Lấy danh sách hóa đơn thành công!",
            billList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getBillList;
