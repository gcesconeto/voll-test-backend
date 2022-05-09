'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'products',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(128),
          unique: true,
        },
        price: {
          allowNull: false,
          type: Sequelize.FLOAT,
        },
        description: {
          allowNull: false,
          type: Sequelize.STRING(512),
          defaultValue: '',
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
