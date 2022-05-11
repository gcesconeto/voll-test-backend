const { user } = require('../../database/models');

module.exports = async (userId) => {
  const foundUser = await user.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });

  return foundUser;
};