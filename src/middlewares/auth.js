const { auth } = require('../services');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const { id, name, email, role } = auth.verifyJwt(token);

    req.user = { id, name, email, role };

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};