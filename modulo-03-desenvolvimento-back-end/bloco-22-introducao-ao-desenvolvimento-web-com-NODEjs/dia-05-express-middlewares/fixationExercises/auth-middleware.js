const validUser = {
  username: 'meuUsuario',
  password: 'MinhaSenhaSegura'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can\'t be blak!' });
  }

  if (username !== validUser.name || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
}

module.exports = authMiddleware;