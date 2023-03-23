const db = require("../../models");
const argon2 = require("argon2");
const updateDetailAccount = async (req, res, next) => {
    try {
        const { username, password, fullName, email, urlAvatar, phoneNumber } =
            req.body;
        // Missing data
        if (!fullName) {
            return res.json({
                status: false,
                message: "Vui lòng điền đầy đủ thông tin!",
            });
        }
        if (password) {
            const hashedPassword = await argon2.hash(password);
            // All good
            const user = await db.User.update(
                {
                    password: hashedPassword,
                    fullName,
                    email,
                    urlAvatar,
                    phoneNumber,
                },
                {
                    where: {
                        username,
                    },
                }
            );
            return res.status(200).json({
                status: true,
                message: "Cập nhật thông tin thành công!",
                user,
            });
        } else {
            // All good
            const user = await db.User.update(
                { fullName, email, urlAvatar, phoneNumber },
                {
                    where: {
                        username,
                    },
                }
            );
            return res.status(200).json({
                status: true,
                message: "Cập nhật thông tin thành công!",
                user,
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = updateDetailAccount;
