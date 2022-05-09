const Joi = require('joi');

module.exports = Joi.object(
  {
    userId: Joi.number().required(),
    totalPrice: Joi.number().required(),
    products: Joi.array().required(),
  },
);