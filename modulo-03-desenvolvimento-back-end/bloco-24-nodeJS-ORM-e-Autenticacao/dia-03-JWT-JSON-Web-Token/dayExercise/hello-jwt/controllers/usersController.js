require('dotenv').config();
const jwt = require('jsonwebtoken');

const { secret } = process.env;

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { username, admin: false } }, secret, jwtConfig);

    return res.status(200).json(token);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};