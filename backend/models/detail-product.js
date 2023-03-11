"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class DetailProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DetailProduct.init(
        {
            idProduct: DataTypes.STRING,
            quantityAvailable: DataTypes.INTEGER,
            status: DataTypes.INTEGER,
            trademark: DataTypes.STRING,
            size: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "DetailProduct",
        }
    );
    return DetailProduct;
};
