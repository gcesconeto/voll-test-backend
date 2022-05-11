const { OK } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;
    const saleList = await sale.list(id);
    res.status(OK).json(saleList);
  } catch (err) {
    next(err);
  }
};