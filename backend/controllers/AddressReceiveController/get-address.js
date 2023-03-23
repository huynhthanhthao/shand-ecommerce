const db = require("../../models");
const getAddress = async (req, res, next) => {
    try {
        const { id } = req.query;

        const addressReceive = await db.AddressReceive.find({
            where: { id },
        });

        return res.json({
            status: true,
            message: "Lấy địa chỉ thành công!",
            addressReceive,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAddress;
