"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("CreateOrders", {
            id: {
                allowNull: false,
                type: Sequelize.STRING,
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
            products: {
                type: Sequelize.JSON(Sequelize.STRING),
                defaultValue: [],
            },
            total: {
                type: Sequelize.FLOAT,
            },
            orderDate: {
                type: Sequelize.DATE,
            },
            status: {
                type: Sequelize.ENUM,
                values: ["pending", "confirmed", "expired", "received"],
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
        await queryInterface.dropTable("CreateOrders");
    },
};
