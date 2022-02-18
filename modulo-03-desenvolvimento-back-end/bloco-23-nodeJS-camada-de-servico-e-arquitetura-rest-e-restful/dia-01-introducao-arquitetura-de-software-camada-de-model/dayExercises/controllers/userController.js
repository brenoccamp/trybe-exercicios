const express = require('express');

const app = express();
app.use(express.json());

const User = require('../models/User');

const userController = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const isValidName = User.isValidName(first_name, last_name);

    if (isValidName) return res.status(400).json({ message: isValidName });
    if (!User.isValidEmail(email)) return res.status(400).json({ message: 'Field "email" is mandatory' });
    if (!User.isValidPassword(password)) {
      return res.status(400).json({ message: 'Field "password" is mandatory and need to have six min characters' });
    }

    const created = await User.createUser({ first_name, last_name, email, password });

    return res.status(201).json(created);
  } catch (e) {
    next(e);
  }
}

module.exports = userController;