const connection = require('./connection');

const isValidName = (firstName, lastName) => {
  if (!firstName) return 'Field "first name" is mandatory';
  if (!lastName) return 'Field "last name" is mandatory';

  return false;
}

const isValidEmail = (email) => {
  if (!email || !email.includes('@') || !email.includes('.com')) return false;

  return true;
}

const isValidPassword = (password) => {
  if (!password || typeof password !== 'string') return false;

  return true;
}

const createUser = async (user) => {
  const query = "INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);"

  const [created] = await connection
    .execute(query, [user.first_name, user.last_name, user.email, user.password]);

  return {
    id: created.insertId,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email
  };
}

module.exports = {
  isValidName,
  isValidEmail,
  isValidPassword,
  createUser,
}