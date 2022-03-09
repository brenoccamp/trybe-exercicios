const error = (error, req, res, next) => {
  console.error(error.message);
  return res.status(500).json({ message: 'Internal server error' });
}

module.exports = error;