"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Love extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Love.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            studentId: DataTypes.STRING,
            productsId: DataTypes.JSON,
        },
        {
            sequelize,
            modelName: "Love",
        }
    );
    return Love;
};
