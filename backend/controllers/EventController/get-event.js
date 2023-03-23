const db = require("../../models");
const getEvent = async (req, res, next) => {
    try {
        const { id } = req.query;

        const event = await db.Event.findOne({ where: { id } });

        return res.status(200).json({
            status: true,
            message: "Lấy sự kiện thành công!",
            event,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = getEvent;
