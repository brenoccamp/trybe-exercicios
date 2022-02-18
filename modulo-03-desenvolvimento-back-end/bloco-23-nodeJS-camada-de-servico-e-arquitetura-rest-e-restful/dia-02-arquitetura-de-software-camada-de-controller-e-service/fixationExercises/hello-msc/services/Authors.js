// services/Authors.js

const Author = require('../models/Authors');

// Cria uma string com o nome completo da pessoa autora
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

// Busca todos os autores do banco.
const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
}

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  await Author.createAuthor(firstName, middleName, lastName);

  return true;
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}