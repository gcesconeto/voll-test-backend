const { CREATED } = require('http-status-codes').StatusCodes;

const { product } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const { role } = req.user;
    const updatedProduct = await product.update({ name, price, description }, role);

    res.status(CREATED).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};
