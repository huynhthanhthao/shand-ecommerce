const db = require("../../models");
const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.body;

        await db.Event.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json({
            status: true,
            message: "Xóa sự kiện thành công!",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = deleteEvent;
