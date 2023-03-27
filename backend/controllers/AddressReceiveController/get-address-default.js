const db = require("../../models");
const getAddressDefault = async (req, res, next) => {
    try {
        const { username } = req.query;
        const address = await db.AddressReceive.findAll({
            where: { username, isDefault: true },
        });
        return res.json({
            status: true,
            message: "Lấy địa chỉ thành công!",
            address: { ...address[0].dataValues },
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getAddressDefault;
