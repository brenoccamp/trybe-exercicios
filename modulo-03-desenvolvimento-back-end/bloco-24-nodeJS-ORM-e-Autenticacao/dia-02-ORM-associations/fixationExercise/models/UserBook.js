const UserBook = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    bookId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'UserBooks'
  });

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookId',
      otherkey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId',
      otherkey: 'bookId',
    });
  };

  return UserBook;
}

module.exports = UserBook;