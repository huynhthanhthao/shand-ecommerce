"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.User, {
                foreignKey: "ownId",
                as: "owner",
            });

            Product.belongsTo(models.Category, {
                foreignKey: "categoryId",
                as: "category",
            });
        }
    }
    Product.init(
        {
            id: { type: DataTypes.STRING, primaryKey: true },
            productId: { type: DataTypes.STRING },
            ownId: DataTypes.STRING,
            categoryId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            images: DataTypes.JSON,
            imagesSource: DataTypes.JSON,
            price: DataTypes.INTEGER,
            transport: DataTypes.ENUM("buyer", "seller"),
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
