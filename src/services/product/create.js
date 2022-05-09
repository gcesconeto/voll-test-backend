const { product } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, price, description }, role) => {  
  if (role !== 'admin') throw err.UNAUTHORIZED;
  const productFound = await product.findOne({ where: { name } });

  if (productFound) throw err.ALREADY_EXISTS;
  const newProduct = await product.create({ name, price, description });

  return newProduct;
};