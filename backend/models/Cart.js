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
        }
    }
    Product.init(
        {
            idProduct: DataTypes.STRING,
            idOwn: DataTypes.STRING,
            idCategory: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            images: DataTypes.ARRAY(DataTypes.STRING),
            imagesSource: DataTypes.ARRAY(DataTypes.STRING),
            price: DataTypes.INTEGER,
            quantityAvailable: DataTypes.INTEGER,
            status: DataTypes.INTEGER,
            trademark: DataTypes.STRING,
            size: DataTypes.STRING,
            transport: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
