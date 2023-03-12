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
            idReportedStudent: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "userName",
                },
            },
            idStudent: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "userName",
                },
            },
            title: {
                type: Sequelize.STRING,
            },
            content: {
                type: Sequelize.STRING,
            },
            idProduct: {
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Products",
                    },
                    key: "idProduct",
                },
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
