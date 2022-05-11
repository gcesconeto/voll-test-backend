const { CREATED } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id, adjustment } = req.body;
    const { role } = req.user;
    const newBalance = await user.updateBalance({ id, adjustment }, role);

    res.status(CREATED).json(newBalance);
  } catch (err) {
    next(err);
  }
};
