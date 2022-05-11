const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ id, adjustment }, role) => {  
  if (role !== 'admin') throw err.UNAUTHORIZED;
  const userFound = await user.findByPk(id);
  if (!userFound) throw err.NOT_FOUND;

  const balance = userFound.balance + adjustment;
  await user.update(
    { balance }, 
    { where: { id: userFound.id },
  },
  );

  return balance;
};