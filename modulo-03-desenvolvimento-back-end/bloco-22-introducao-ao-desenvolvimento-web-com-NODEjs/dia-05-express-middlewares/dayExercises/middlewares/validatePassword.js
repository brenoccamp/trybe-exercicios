const validatePassword = (password) => {
  if (password.toString().length < 4 || password.toString().length > 8) return false;
  return true;
}

module.exports = validatePassword;