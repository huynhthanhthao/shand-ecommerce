"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            username: {
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
                default:
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            },
            address: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.ENUM,
                values: ["student", "admin", "shop"],
            },
            status: {
                type: Sequelize.BOOLEAN,
                default: true,
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
