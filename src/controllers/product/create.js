const { CREATED } = require('http-status-codes').StatusCodes;

const { product } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const { role } = req.user;
    const newProduct = await product.create({ name, price, description }, role);

    res.status(CREATED).json(newProduct);
  } catch (err) {
    next(err);
  }
};
