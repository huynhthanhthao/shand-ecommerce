"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            userName: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
            },
            phoneNumber: {
                type: Sequelize.STRING,
            },
            urlAvatar: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.ENUM,
                values: ["student", "admin", "shop"],
            },
            classId: {
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
        await queryInterface.dropTable("Users");
    },
};
