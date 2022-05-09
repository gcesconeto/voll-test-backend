module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'products',
    timestamps: false,
  });

  return product;
};
