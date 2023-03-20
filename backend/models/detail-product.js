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
            DetailProduct.belongsTo(models.Product, {
                foreignKey: "id",
                as: "product",
            });
        }
    }
    DetailProduct.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            quantityAvailable: DataTypes.INTEGER,
            status: DataTypes.ENUM("1", "2", "3", "4", "5"),
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
