const Sequelize = require('sequelize');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

const { sale, salesProduct } = require('../../database/models');

module.exports = async ({ userId, totalPrice, products }) => {
    const t = await sequelize.transaction();
    console.log(userId, totalPrice, products);
    const newSale = await sale.create({ userId, totalPrice, products }, { transaction: t });
    const salesProducts = products.map((product) => ({ ...product, saleId: newSale.id }));
    await salesProduct.bulkCreate(salesProducts, { transaction: t });
    await t.commit();
    return newSale.id;
};