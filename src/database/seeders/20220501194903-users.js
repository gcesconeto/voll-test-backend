'use strict';

const users = [{
  name:'Albus Dumbledore',
  email: 'admin@email.com',
  password: 'e10adc3949ba59abbe56e057f20f883e',
  role: 'admin',
  balance: 0,
},
{
  name: 'Harry Potter',
  email: 'user@email.com',
  password: 'e10adc3949ba59abbe56e057f20f883e',
  role: 'user',
  balance: 1000,
}]

// module.exports = {
//   up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',users[0]),
//   down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
// };
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', users),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};