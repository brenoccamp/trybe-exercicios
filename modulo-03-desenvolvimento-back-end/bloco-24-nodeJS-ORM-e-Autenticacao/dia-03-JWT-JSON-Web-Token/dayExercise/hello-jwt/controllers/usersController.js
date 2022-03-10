require('dotenv').config();
const jwt = require('jsonwebtoken');

const { secret } = process.env;

const login = (req, res, next) => {
  try {
    const { username } = req.body;

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { username, admin: false } }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};