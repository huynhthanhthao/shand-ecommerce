"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Loves", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            studentId: {
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            productsId: {
                type: Sequelize.JSON(Sequelize.STRING),
                defaultValue: [],
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Loves");
    },
};
