const express = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = express.Router();

router.post(
  '/',
  middlewares.loginValidation,
  middlewares.checkExistsUsername,
  controllers.createUser,
);

module.exports = router;