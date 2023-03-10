const db = require("../../models");
const createEvent = async (req, res, next) => {
    try {
        const { title, address, date, purpose, status } = req.body;

        // Missing data
        if (!title || !address || !date || !purpose || !status) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        // All good
        await db.Event.create({
            title,
            address,
            date,
            purpose,
            status,
        });

        return res.status(200).json({
            success: true,
            message: "Thêm sự kiện thành công!",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = createEvent;
