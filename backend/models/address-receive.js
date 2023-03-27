"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AddressReceive extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            AddressReceive.belongsTo(models.User, {
                foreignKey: "username",
            });
        }
    }
    AddressReceive.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            username: DataTypes.STRING,
            fullName: DataTypes.STRING,
            address: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            isDefault: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "AddressReceive",
        }
    );
    return AddressReceive;
};
