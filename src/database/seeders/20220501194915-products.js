'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'products',
    [
      {
        id: 1,
        name: 'Skol 350ml',
        price: 5,
        description: 'Cheap and ordinary',
      },
      {
        id: 2,
        name: 'Nova Schin 350ml',
        price: 4,
        description: 'Diarrhea inducing',
      },
      {
        id: 3,
        name: 'Heineken 350ml',
        price: 8,
        description: 'The good stuff',
      },
      {
        id: 4,
        name: 'Guinness 473ml',
        price: 20,
        description: 'The better stuff',
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('products', null, {}),
};
