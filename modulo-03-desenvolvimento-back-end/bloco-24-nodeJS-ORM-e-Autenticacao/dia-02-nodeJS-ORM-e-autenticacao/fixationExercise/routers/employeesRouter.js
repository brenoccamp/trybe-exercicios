const express = require('express');
const employeesController = require('../controllers/employeesController');

const router = express.Router();

router.get('/', employeesController.listAllEmployees);
router.get('/:id', employeesController.getEmployeeId);

module.exports = router;