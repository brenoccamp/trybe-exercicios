const res = require('express/lib/response');
const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
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

const bookById = async (bookId) => {
  const query = 'SELECT id, title, author_id FROM books WHERE id=?';

  const [bookData] = await connection.execute(query, [bookId]);

  if (bookData.length === 0) return null;

  const { id, title, authorId } = bookData.map(serialize)[0];

  return { id, title, authorId };
}

module.exports = {
  getAll,
  getAuthorById,
  bookById,
}