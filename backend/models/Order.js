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
        }
    }
    Order.init(
        {
            id: { type: DataTypes.STRING, primaryKey: true },
            studentId: DataTypes.STRING,
            products: DataTypes.ARRAY(DataTypes.STRING),
            total: DataTypes.FLOAT,
            orderDate: DataTypes.DATE,
            status: DataTypes.ENUM(
                "pending",
                "confirmed",
                "expired",
                "received"
            ),
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
