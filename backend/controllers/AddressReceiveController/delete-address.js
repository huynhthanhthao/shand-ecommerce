const db = require("../../models");
const deleteAddress = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.AddressReceive.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Xóa địa chỉ thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteAddress;
