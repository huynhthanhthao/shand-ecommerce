"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bill.belongsTo(models.Order, {
                foreignKey: "orderId",
                as: "order",
            });
        }
    }
    Bill.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            buyerId: DataTypes.STRING,
            sellerId: DataTypes.STRING,
            orderId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Bill",
        }
    );
    return Bill;
};
