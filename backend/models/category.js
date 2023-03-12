"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Category.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            nameCategory: DataTypes.STRING,
            parent: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Category",
        }
    );
    return Category;
};
