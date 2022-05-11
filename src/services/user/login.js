const md5 = require('md5');
const { user } = require('../../database/models');
const err = require('../../errors/errors');

const auth = require('../auth');

module.exports = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email } });

  if (!userFound) throw err.NOT_FOUND;

  if (userFound.password !== md5(password)) throw err.INCORRECT_PASSWORD;

  const { name, role } = userFound;
  const token = auth.generateJwt({ id: userFound.id, name, email, role });

  return { token, role };
};