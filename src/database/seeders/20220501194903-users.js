'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        name:'Admin',
        email: 'adm@email.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'admin',
        balance: 0,
      },
      {
        id: 2,
        name: 'User',
        email: 'user@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'user',
        balance: 1000,
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
