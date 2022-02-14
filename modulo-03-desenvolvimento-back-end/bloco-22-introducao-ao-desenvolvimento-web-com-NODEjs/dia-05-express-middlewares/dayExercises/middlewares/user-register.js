const isEmailValid = (email) => {
  if (!email.includes('@') || !email.includes('.com')) return false;
  return true;
}

const userRegister = (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    username.length <= 3
    || !isEmailValid(email)
    || password.toString().length < 4
    || password.toString().length > 8
  ) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  return res.status(201).json({ message: 'User Created!' });
}

module.exports = userRegister;