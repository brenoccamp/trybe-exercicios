const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');

const userLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ message: 'Email or password is incorrect!' });
  }


}

module.exports = userLogin;