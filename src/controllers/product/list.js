const { OK } = require('http-status-codes').StatusCodes;

const { product } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const productList = await product.list();
    res.status(OK).json(productList);
  } catch (err) {
    next(err);
  }
};