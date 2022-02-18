const express = require('express');
const userController = require('../controllers/userController');
const userValidations = require('../middlewares/newUserValidations');

const router = express.Router();

router.post(
  '/',
  userValidations.isValidName,
  userValidations.isValidEmail,
  userValidations.isValidPassword,
  userController.createNewUser,
);

// router.get(
//   '/',

//   userController,
// );

module.exports = router;