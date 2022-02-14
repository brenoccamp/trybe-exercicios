const validateEmail = (email) => {
  if (!email.includes('@') || !email.includes('.com')) return false;
  return true;
}

module.exports = validateEmail;