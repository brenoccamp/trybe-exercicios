const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/me', middlewares.auth, controllers.listUsers);

module.exports = router;