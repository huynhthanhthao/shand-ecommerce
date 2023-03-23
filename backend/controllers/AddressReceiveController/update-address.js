const db = require("../../models");
const updateAddress = async (req, res, next) => {
    try {
        const { id, fullName, address, phoneNumber } = req.body;
        // Missing data
        if (!fullName || !address || !phoneNumber) {
            return res.json({
                status: false,
                message: "Vui lòng nhập đầy đủ thông tin!",
            });
        }

        await db.AddressReceive.update(
            {
                fullName,
                address,
                phoneNumber,
            },
            { where: { id } }
        );
        return res.json({
            status: true,
            message: "Cập nhật thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateAddress;
