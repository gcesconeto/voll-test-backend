const Sequelize = require('sequelize');
const config = require('../../database/config/config')[`${process.env.NODE_ENV}`];
const err = require('../../errors/errors');

const sequelize = new Sequelize(config);

const { sale, salesProduct, user } = require('../../database/models');

module.exports = async ({ userId, totalPrice, products }) => {
    const { balance } = await user.findByPk(userId);
    if (balance < totalPrice) throw err.UNAUTHORIZED;
    const newBalance = balance - totalPrice;
    await user.update(
        { balance: newBalance }, 
        { where: { id: userId },
      },
    );
    const t = await sequelize.transaction();
    const newSale = await sale.create({ userId, totalPrice, products }, { transaction: t });
    const salesProducts = products.map((product) => ({ ...product, saleId: newSale.id }));
    await salesProduct.bulkCreate(salesProducts, { transaction: t });
    await t.commit();
    return newSale.id;
};