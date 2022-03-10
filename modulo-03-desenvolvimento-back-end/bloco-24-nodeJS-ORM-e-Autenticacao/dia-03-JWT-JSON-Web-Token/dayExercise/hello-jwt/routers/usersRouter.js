const express = require('express');
const usersController = require('../controllers/usersController');
const middlewares = require('../middlewares')

const router = express.Router();

router.post('/', middlewares.loginValidation, usersController.login);

module.exports = router;