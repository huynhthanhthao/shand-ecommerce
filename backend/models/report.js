"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Report extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Report.belongsTo(models.Product, {
                foreignKey: "productId",
                as: "product",
            });

            Report.belongsTo(models.User, {
                foreignKey: "reportedStudentId",
                as: "reportedStudent",
            });

            Report.belongsTo(models.User, {
                foreignKey: "studentId",
                as: "student",
            });
        }
    }
    Report.init(
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            studentId: DataTypes.STRING,
            reportedStudentId: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.STRING,
            productId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Report",
        }
    );
    return Report;
};
