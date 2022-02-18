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

router.get(
  '/',
  userController.getAllUsers,
);

router.get(
  '/:id',
  userController.userById,
)

router.put(
  '/:id',
  userValidations.isValidName,
  userValidations.isValidEmail,
  userValidations.isValidPassword,
  userController.updateUser,
)

module.exports = router;