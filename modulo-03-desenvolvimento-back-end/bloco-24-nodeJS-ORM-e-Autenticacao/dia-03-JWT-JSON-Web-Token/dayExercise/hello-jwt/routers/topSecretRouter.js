const expres = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = expres.Router();

router.get('/', middlewares.auth, middlewares.isAdmin, controllers.topSecret);

module.exports = router;