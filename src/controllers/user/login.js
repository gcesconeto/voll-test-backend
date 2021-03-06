const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { token, role } = await user.login({ email, password });

    res.status(OK).json({ token, role });
  } catch (err) {
    next(err);
  }
};