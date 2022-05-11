const { product } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, price, description }, role) => {  
  if (role !== 'admin') throw err.UNAUTHORIZED;
  const productFound = await product.findOne({ where: { name } });

  if (!productFound) throw err.NOT_FOUND;
  const updatedProduct = await product.update(
    { name, price, description }, 
    { where: { id: productFound.id },
  },
  );

  return updatedProduct;
};