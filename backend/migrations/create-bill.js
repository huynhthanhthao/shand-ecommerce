"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Bills", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            buyerId: {
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            sellerId: {
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            orderId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Orders",
                    },
                    key: "id",
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
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
        await queryInterface.dropTable("Bills");
    },
};
