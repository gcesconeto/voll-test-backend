const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ id, adjustment }, role) => {  
  if (role !== 'admin') throw err.UNAUTHORIZED;
  const userFound = await user.findByPk(id);
  if (!userFound) throw err.NOT_FOUND;

  let balance = userFound.balance + adjustment;
  if (balance < 0) balance = 0;
  await user.update(
    { balance }, 
    { where: { id: userFound.id },
  },
  );

  return Number(balance);
};