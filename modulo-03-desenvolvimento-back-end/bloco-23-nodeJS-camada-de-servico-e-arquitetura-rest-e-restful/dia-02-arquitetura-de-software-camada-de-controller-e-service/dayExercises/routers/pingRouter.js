const express = require('express');

const router = express.Router();

router.get('/', (_req, res, _next) => {
  return res.status(200).json({ message: 'pong' });
});

module.exports = router;