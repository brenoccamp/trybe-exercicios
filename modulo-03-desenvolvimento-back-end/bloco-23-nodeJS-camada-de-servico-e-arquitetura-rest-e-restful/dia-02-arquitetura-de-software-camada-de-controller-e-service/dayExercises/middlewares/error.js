const error = (err, _req, res, _next) => {
  return res.status(500).json({ error: true, message: 'Internal Server Error' });
}

module.exports = error;