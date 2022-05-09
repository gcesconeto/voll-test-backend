'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'products',
    [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.20,
        description: 'Cheap and ordinary',
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('products', null, {}),
};
