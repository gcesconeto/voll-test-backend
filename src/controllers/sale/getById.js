const { OK } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { saleId } = req.params;
    const found = await sale.getById(saleId);
    res.status(OK).json(found);
  } catch (err) {
    next(err);
  }
};