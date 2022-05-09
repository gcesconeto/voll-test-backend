module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.sale,
      { foreignKey: 'userId', as: 'userSales' })
  };

  return user;
};
