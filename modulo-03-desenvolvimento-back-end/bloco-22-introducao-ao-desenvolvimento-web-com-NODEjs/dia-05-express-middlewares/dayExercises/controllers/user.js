const express = require('express');
const userLogin = require('../middlewares/user-login');
const userRegister = require('../middlewares/user-register');

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

module.exports = router;