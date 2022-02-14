const express = require('express');
const userRegister = require('../middlewares/user-register');

const router = express.Router();

router.post('/register', userRegister);

module.exports = router;