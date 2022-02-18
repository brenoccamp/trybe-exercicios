// services/Authors.js

const Author = require('../models/Authors');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
  }

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

module.exports = {
  getAll,
  findById,
  isValid
}