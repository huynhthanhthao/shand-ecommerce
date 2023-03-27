"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Transaction.belongsTo(models.User, {
                foreignKey: "username",
            });
        }
    }
    Transaction.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            username: DataTypes.STRING,
            fullName: DataTypes.STRING,
            bankName: DataTypes.STRING,
            bankCode: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
