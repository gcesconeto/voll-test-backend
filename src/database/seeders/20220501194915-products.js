'use strict';

const products = [
  {
    name: 'Skol 350ml',
    price: 5,
    description: 'Cheap and ordinary',
  },
  {
    name: 'Nova Schin 350ml',
    price: 4,
    description: 'Diarrhea inducing',
  },
  {
    name: 'Heineken 350ml',
    price: 8,
    description: 'The good stuff',
  },
  {
    name: 'Guinness 473ml',
    price: 20,
    description: 'The better stuff',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products', products),
  // up: async (queryInterface, Sequelize) => products.forEach(async (product) => await queryInterface.bulkInsert('products', [product])),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('products', null, {}),
};

