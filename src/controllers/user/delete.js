const { NO_CONTENT } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const emailForDeletion = req.body.email;
    const { role, email } = req.user;
    await user.delete(email, role, emailForDeletion);

    res.status(NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};