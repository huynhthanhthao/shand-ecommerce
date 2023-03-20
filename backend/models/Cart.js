"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cart.belongsTo(models.Product, {
                foreignKey: "productId",
                as: "product",
            });
        }
    }
    Cart.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            studentId: DataTypes.STRING,
            productId: DataTypes.STRING,
            amount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Cart",
        }
    );
    return Cart;
};
