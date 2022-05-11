const md5 = require('md5');

const auth = require('../auth');
const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, email, password, role }, token) => {
  if (await user.findOne({ where: { email } })) throw err.ALREADY_EXISTS;
  
  let newUserRole = role || 'user'; 

  if (!token || auth.verifyJwt(token).role !== 'admin') newUserRole = 'user';

  const newUser = await user.create({
    name,
    email,
    password: md5(password),
    role: newUserRole,
    balance: 0,
  });

  const newUserToken = auth.generateJwt({ id: newUser.id, name, email, role: newUserRole });

  return newUserToken;
};