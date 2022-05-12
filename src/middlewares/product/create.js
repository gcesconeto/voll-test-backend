const { product } = require('../../schemas');

module.exports = (req, res, next) => {
  const { name, price, description } = req.body;

  const { error } = product.create.validate({ name, price, description });

  if (error) return next(error);

  next();
};