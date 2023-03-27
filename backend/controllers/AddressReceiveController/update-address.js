const db = require("../../models");
const updateAddress = async (req, res, next) => {
    try {
        const { id, username, fullName, address, phoneNumber, isDefault } =
            req.body;
        // Missing data
        if (!fullName || !address || !phoneNumber) {
            return res.json({
                status: false,
                message: "Vui lòng nhập đầy đủ thông tin!",
            });
        }

        if (isDefault) {
            await db.AddressReceive.update(
                {
                    isDefault: false,
                },
                { where: { isDefault: true, username } }
            );

            await db.AddressReceive.update(
                {
                    isDefault,
                    fullName,
                    address,
                    phoneNumber,
                },
                { where: { id } }
            );
        } else
            await db.AddressReceive.update(
                {
                    isDefault,
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
