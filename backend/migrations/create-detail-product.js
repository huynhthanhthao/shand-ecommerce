"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("DetailProducts", {
            idProduct: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Products",
                    },
                    key: "idProduct",
                },
            },
            quantityAvailable: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.ENUM,
                values: ["1", "2", "3", "4", "5"],
            },
            trademark: {
                type: Sequelize.STRING,
            },
            size: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("DetailProducts");
    },
};
