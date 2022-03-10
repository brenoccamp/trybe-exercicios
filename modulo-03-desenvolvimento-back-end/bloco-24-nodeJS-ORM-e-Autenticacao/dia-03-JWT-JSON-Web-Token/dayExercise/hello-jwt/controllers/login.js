require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/User');

const { secret } = process.env;

const login = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(422).json({ message: 'Need token to log in' });

    const decoded = jwt.verify(token, secret);

    const { password, ...foundUserWithoutPass } = await findOne(decoded.username);

    return res.status(200).json({ message: 'Success Log in', data: foundUserWithoutPass });
  } catch (err) {
    next(err);
  }
};

module.exports = login;