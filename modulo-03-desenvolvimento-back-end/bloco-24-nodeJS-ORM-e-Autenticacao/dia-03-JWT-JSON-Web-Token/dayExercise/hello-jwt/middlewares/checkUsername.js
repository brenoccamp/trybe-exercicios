require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findOne, create } = require('../models/User');

const { secret } = process.env;

const checkExistsUsername = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const foundUser = await findOne(username);
  
    if (foundUser) return res.status(409).json({ error: { message: 'user already exists' } });

    const aleatoryNum = Math.floor(Math.random() * 100);

    const admin = aleatoryNum > 50;
    console.log(admin);
    await create(username, password, admin);
    const token = jwt.sign({ username, admin }, secret, { expiresIn: '1h', algorithm: 'HS256' });

    return res.status(200).json({ token });
    // next();
  } catch (err) {
    next(err);
  }
};

module.exports = checkExistsUsername;