const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (userRole) => {
  if (userRole !== 'admin') throw err.UNAUTHORIZED;

  const users = await user.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};