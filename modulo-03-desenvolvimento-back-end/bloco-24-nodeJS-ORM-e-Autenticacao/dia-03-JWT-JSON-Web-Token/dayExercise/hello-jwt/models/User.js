const fs = require('fs/promises');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

const getAll = async () => fs.readFile(DATA_PATH, 'utf-8').then(JSON.parse);

const writeAll = async (content) => {
  await fs.writeFile(DATA_PATH, JSON.stringify(content));
};

const findOne = async (username) => {
  const users = await getAll();
  console.log(users);
  return users.find((user) => user.username === username);
};

const create = async (username, password, admin) => {
  const users = await getAll();

  users.push({ username, password, admin });

  await writeAll(users);
};

module.exports = {
  getAll,
  writeAll,
  findOne,
  create,
};