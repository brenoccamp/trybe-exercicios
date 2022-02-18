const express = require('express');

const app = express();
app.use(express.json());

const User = require('../models/User');

const createNewUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const created = await User.createUser({ first_name, last_name, email, password });

    return res.status(201).json(created);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  createNewUser,
};