const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;
    const foundUser = await user.get(id);

    res.status(OK).json(foundUser);
  } catch (err) {
    next(err);
  }
};