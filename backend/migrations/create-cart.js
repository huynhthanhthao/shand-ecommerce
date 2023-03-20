"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Carts", {
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
                    key: "userName",
                },
            },
            productId: {
                type: Sequelize.STRING,
                references: {
                    model: "Products", // name of Target model
                    key: "id", // key in Target model that we're referencing
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            amount: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Carts");
    },
};
