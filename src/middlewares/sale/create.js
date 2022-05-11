const { sale } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { userId,
        totalPrice,
        products,
    } = req.body;
    const { error } = sale.create.validate({ 
        userId,
        totalPrice,
        products,
    });

    if (error) return next(error);

    next();
};