require('dotenv').config();
const jwt = require('jsonwebtoken');

const { secret } = process.env;

const userLogin = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (username === 'admin' && password !== 's3nh4S3gur4???') {
      const err = new Error('Invalid username or password');

      err.statusCode = 401;

      return next(err);
    }

    const admin = username === 'admin' && password === 's3nh4S3gur4???';
    console.log(admin);
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ username, admin }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userLogin,
};