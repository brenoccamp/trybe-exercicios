const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 3)
    return res.status(400).json({ message: 'Invalid data "username"' });
  
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  if (
    !email ||
    !email.includes('@') ||
    !email.includes('.com')
  )
    return res.status(400).json({ message: 'Invalid data "email"' });
  
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if (!password || password.length < 4 || password.length > 8 || !password.match(passwordRegex))
    return res.status(400).json({ message: 'Invalid data "password"' });

  next();
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword
}