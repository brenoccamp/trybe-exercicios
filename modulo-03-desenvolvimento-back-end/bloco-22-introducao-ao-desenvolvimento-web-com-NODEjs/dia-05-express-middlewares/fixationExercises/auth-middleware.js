const validUsers = [
  { username: 'meuUsuario1',   password: 'MinhaSenhaSegura1' },
  { username: 'meuUsuario2',   password: 'MinhaSenhaSegura2' },
  { username: 'meuUsuario3',   password: 'MinhaSenhaSegura3' },
  { username: 'meuUsuario4',   password: 'MinhaSenhaSegura4' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can\'t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (username !== foundUser.username || password !== foundUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
}

module.exports = authMiddleware;