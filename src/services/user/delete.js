const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (email, role, emailForDeletion) => {
  const userFound = await user.findOne({ where: { email: emailForDeletion } });

  if (!userFound) throw err.NOT_FOUND;
  if (role !== 'admin' && email !== emailForDeletion) throw err.UNAUTHORIZED;

  await userFound.destroy();
};
