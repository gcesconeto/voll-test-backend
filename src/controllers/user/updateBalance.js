const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id, adjustment } = req.body;
    const { role } = req.user;
    const newBalance = await user.updateBalance({ id, adjustment }, role);

    res.status(OK).json(newBalance);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
