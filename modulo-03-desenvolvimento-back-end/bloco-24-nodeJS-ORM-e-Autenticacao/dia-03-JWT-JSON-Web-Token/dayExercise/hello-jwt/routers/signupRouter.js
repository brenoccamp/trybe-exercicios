const express = require('express');
const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middlewares.loginValidation,
  middlewares.checkExistsUsername,
);

module.exports = router;