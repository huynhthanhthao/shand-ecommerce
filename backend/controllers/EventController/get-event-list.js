const db = require("../../models");
const getEventList = async (req, res, next) => {
    try {
        const eventList = await db.Event.findAll();

        return res.status(200).json({
            success: true,
            message: "Lấy tất cả sự kiện thành công!",
            eventList,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getEventList;
