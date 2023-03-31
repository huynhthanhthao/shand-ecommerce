"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            productId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            ownId: {
                type: Sequelize.STRING,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "username",
                },
            },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Categories",
                    },
                    key: "id",
                },
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            images: {
                type: Sequelize.JSON(Sequelize.STRING),
                defaultValue: [],
            },
            imagesSource: {
                type: Sequelize.JSON(Sequelize.STRING),
                defaultValue: [],
            },
            price: {
                type: Sequelize.INTEGER,
            },

            transport: {
                type: Sequelize.ENUM,
                values: ["buyer", "seller"],
            },
            status: {
                type: Sequelize.ENUM,
                values: ["1", "2", "3", "4", "5"],
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
        await queryInterface.dropTable("Products");
    },
};
