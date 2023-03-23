const db = require("../../models");
const getAllAddress = async (req, res, next) => {
    try {
        const { username } = req.query;
        const addressList = await db.AddressReceive.findAll({
            where: { username },
        });

        return res.json({
            status: true,
            message: "Lấy địa chỉ thành công!",
            addressList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAllAddress;
