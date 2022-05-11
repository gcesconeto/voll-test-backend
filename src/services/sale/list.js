const { sale } = require('../../database/models');

module.exports = async (id) => {
    const saleList = await sale.findAll(
        { 
            where: { userId: id },
        },
    );
    return saleList;
};