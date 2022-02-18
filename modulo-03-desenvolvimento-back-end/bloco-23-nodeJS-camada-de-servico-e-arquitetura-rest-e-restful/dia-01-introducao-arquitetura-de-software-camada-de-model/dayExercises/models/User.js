const connection = require('./connection');

const createUser = async (user) => {
  const query = `INSERT INTO users_crud.users (first_name, last_name, email, password)
    VALUES (?, ?, ?, ?);`

  const [created] = await connection
    .execute(query, [user.first_name, user.last_name, user.email, user.password]);

  return {
    id: created.insertId,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email
  };
}

const getAllUsers = async () => {
  const query = 'SELECT * FROM users_crud.users';

  const [users] = await connection.execute(query);

  return users;
}

const getUserById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';

  const [user] = await connection.execute(query, [id]);

  return user;
}

const updateUser = async ({ id, first_name, last_name, email, password}) => {
  const query = `UPDATE users_crud.users
    SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;`;

  await connection.execute(query, [first_name, last_name, email, password, id]);

  return {
    id,
    firstName: first_name,
    lastName: last_name,
    email,
    password,
  };
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
}