const express = require('express');
const userBooksController = require('../controllers/userBooksController');

const router = express.Router();

router.get('/:id', userBooksController.listUserBooks);

module.exports = router;