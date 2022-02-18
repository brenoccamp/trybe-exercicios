const error = (_err, _req, res, _next) => {
  return res.status(500).json({ message: 'Internal server error' });
}

module.exports = error;