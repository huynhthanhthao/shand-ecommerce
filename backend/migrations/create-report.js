"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Reports", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            reportedStudentId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            studentId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.STRING,
            },
            productId: {
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
        await queryInterface.dropTable("Reports");
    },
};
