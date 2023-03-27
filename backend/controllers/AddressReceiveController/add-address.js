const db = require("../../models");
const addAddress = async (req, res, next) => {
    try {
        const { username, fullName, phoneNumber, address, isDefault } =
            req.body;
        // Missing data
        if (!fullName || !phoneNumber || !address) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        if (isDefault) {
            await db.AddressReceive.update(
                {
                    isDefault: false,
                },
                { where: { isDefault: true } }
            );
        }

        const response = await db.AddressReceive.create({
            username,
            fullName,
            phoneNumber,
            address,
            isDefault,
        });
        return res.json({
            status: true,
            message: "Thêm địa chỉ nhận hàng thành công!",
            address: response,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = addAddress;
