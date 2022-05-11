'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        name:'Albus Dumbledore',
        email: 'admin@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        role: 'admin',
        balance: 0,
      },
      {
        id: 2,
        name: 'Harry Potter',
        email: 'user@email.com',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        role: 'user',
        balance: 1000,
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
