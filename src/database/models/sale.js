module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'sales',
    timestamps: true,
    createdAt: 'saleDate',
    updatedAt: false,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user,
      { foreignKey: 'userId', as: 'user' })
  };

  return sale;
};
