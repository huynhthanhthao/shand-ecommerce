"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SalesFee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            SalesFee.belongsTo(models.User, {
                foreignKey: "sellerId",
                as: "seller",
            });
        }
    }
    SalesFee.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            sellerId: DataTypes.STRING,
            billList: DataTypes.JSON,
            deadLine: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "SalesFee",
        }
    );
    return SalesFee;
};
