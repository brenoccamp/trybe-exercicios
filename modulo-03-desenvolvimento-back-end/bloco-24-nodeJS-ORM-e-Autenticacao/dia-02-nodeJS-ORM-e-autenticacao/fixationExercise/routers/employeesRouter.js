const express = require('express');
const employeesController = require('../controllers/employeesController');

const router = express.Router();

router.get('/', employeesController.listAllEmployees);

module.exports = router;