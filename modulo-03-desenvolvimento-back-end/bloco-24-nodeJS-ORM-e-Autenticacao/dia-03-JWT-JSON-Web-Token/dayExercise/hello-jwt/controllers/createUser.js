require('dotenv').config();
const jwt = require('jsonwebtoken');
const { create } = require('../models/User');

const { secret } = process.env;

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const aleatoryNum = Math.floor(Math.random() * 100);
  
    const admin = aleatoryNum > 50;
    console.log(admin, aleatoryNum);
    await create(username, password, admin);

    const token = jwt.sign({ username, admin }, secret, { expiresIn: '1h', algorithm: 'HS256' });

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;