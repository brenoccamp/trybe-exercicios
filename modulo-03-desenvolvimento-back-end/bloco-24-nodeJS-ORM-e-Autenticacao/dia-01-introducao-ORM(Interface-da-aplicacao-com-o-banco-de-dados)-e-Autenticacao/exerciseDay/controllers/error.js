const error = (_error, _req, res, _next) => {
  return res.status(500).json({ message: 'Internal server error' });
}

module.exports = error;