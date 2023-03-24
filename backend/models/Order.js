"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, {
                foreignKey: "sellerId",
                as: "seller",
            });
            Order.belongsTo(models.User, {
                foreignKey: "buyerId",
                as: "owner",
            });
        }
    }
    Order.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            buyerId: DataTypes.STRING,
            sellerId: DataTypes.STRING,
            productsInformation: DataTypes.JSON,
            total: DataTypes.FLOAT,
            status: DataTypes.ENUM(
                "pending",
                "confirmed",
                "expired",
                "received",
                "refuse"
            ),
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
