const validatePassword = require('./validatePassword');
const validateEmail = require('./validateEmail');

const userRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    username.length <= 3
    || !validateEmail(email)
    || !validatePassword(password)
  ) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  return res.status(201).json({ message: 'User Created!' });
}

module.exports = userRegister;