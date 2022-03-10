require('dotenv').config();
const jwt = require('jsonwebtoken');

const { secret } = process.env;

const auth = (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = auth;