const error = require('./error');
const loginValidation = require('./loginValidation');
const auth = require('./auth');
const isAdmin = require('./admin');
const checkExistsUsername = require('./checkUsername');

module.exports = {
  error,
  loginValidation,
  auth,
  isAdmin,
  checkExistsUsername,
};
