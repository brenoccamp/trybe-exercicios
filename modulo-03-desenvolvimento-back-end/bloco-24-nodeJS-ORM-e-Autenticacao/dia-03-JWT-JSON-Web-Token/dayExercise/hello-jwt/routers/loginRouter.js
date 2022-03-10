const express = require('express');
const controllers = require('../controllers');
// const middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  // middlewares.loginValidation,
  controllers.login,
);

module.exports = router;