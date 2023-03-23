const Sequelize = require("sequelize");

const sequelize = new Sequelize("shand_data", "root", null, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established statusfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = connectionDatabase;
