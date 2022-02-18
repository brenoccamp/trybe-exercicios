const isValidName = (req, res, next) => {
  const { first_name, last_name } = req.body;

  if (!first_name) return res.status(400).json({ message: 'Field "first name" is mandatory' });
  if (!last_name) return res.status(400).json({ message:'Field "last name" is mandatory' });

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: 'Field "email" is mandatory and need to be a valid email' });
  }

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'Field "password" is mandatory and need to have six min characters' });
  }

  next();
};

module.exports = {
  isValidName,
  isValidEmail,
  isValidPassword,
};