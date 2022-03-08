const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    numberPages: DataTypes.INTEGER,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Books'
  });

  return Book;
}

module.exports = Book;