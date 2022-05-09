'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
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
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(128),
          unique: true,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(32),
        },
        role: {
          allowNull: false,
          type: Sequelize.STRING(16),
        },
        balance: {
          allowNull: false,
          type: Sequelize.BIGINT
        }
      },
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
