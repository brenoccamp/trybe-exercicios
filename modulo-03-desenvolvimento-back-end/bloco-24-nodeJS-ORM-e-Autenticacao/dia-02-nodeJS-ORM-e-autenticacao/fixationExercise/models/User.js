const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    timestapms: false,
    tableName: 'Users',
    underscored: true,
  });

  return User;
}

module.exports = User;