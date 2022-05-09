const { CREATED } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { totalPrice, products } = req.body;
    const userId = req.user.id;
    const newSaleId = await sale.create({ userId, totalPrice, products });
    res.status(CREATED).json({ newSaleId });
  } catch (err) {
    next(err);
  }
};