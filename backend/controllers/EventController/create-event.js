const db = require("../../models");
const createEvent = async (req, res, next) => {
    try {
        const { title, address, date, purpose, status, time } = req.body;

        // Missing data
        if (!title || !address || !date || !purpose || !time) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        // All good
        if (status) {
            await db.Event.update(
                { status: false },
                {
                    where: {
                        status: true,
                    },
                }
            );
        }

        await db.Event.create({
            title,
            address,
            date,
            purpose,
            status,
            time,
        });

        return res.status(200).json({
            status: true,
            message: "Thêm sự kiện thành công!",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = createEvent;
