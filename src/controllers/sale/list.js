const { OK } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email } = req.user;
    const saleList = await sale.list(email);
    res.status(OK).json(saleList);
  } catch (err) {
    next(err);
  }
};