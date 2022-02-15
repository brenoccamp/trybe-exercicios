const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const validToken = /^[a-zA-Z0-9]{12}$/;

  if (!token)
    return res.status(401).json({ message: 'Invalid token' });

  next();
};

module.exports = isValidToken;