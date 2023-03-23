const db = require("../../models");
const addAddress = async (req, res, next) => {
    try {
        const { username, fullName, phoneNumber, address } = req.body;
        // Missing data
        if (!fullName || !phoneNumber || !address) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }

        const response = await db.AddressReceive.create({
            username,
            fullName,
            phoneNumber,
            address,
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
