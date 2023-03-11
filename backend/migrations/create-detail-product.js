"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("DetailProducts", {
            idProduct: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            quantityAvailable: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.INTEGER,
            },
            trademark: {
                type: Sequelize.STRING,
            },
            size: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("DetailProducts");
    },
};
