const express = require('express');
const {
  isValidUsername,
  isValidEmail,
  isValidPassword
} = require('./middlewares/dataValidations');

const router = express.Router();

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(201).json({ message: 'User created' }),
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({ token: "86567349784e" }),
);

module.exports = router;