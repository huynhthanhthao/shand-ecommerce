const db = require("../../models");
const updateEvent = async (req, res, next) => {
    try {
        const { id, title, address, date, purpose, status } = req.body;

        // Missing data
        if (!title || !address || !date || !purpose || !status || !id) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        // All good
        await db.Event.update(
            { id, title, address, date, purpose, status },
            {
                where: {
                    id,
                },
            }
        );

        return res.status(200).json({
            success: true,
            message: "Cập nhật sự kiện thành công!",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = updateEvent;
