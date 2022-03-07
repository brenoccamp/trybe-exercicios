const error = (error, _req, res, _next) => {
  console.error(error.message);
  return res.status(500).json({ message: 'Internal server error' });
}

module.exports = error;