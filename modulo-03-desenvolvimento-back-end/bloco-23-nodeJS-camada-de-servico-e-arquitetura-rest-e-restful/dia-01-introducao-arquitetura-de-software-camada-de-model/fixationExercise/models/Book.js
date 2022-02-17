const connection = require('./connection');

const serialize = (bookData) => {
  return {
    title: bookData.title,
    authorId: bookData.author_id
  }
};

const getAll = async () => {
  const [books] = await connection.execute('SELECT title, author_id FROM books');
  
  return books.map(serialize);
}

const getAuthorById = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id=?';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
}

module.exports = {
  getAll,
  getAuthorById,
}