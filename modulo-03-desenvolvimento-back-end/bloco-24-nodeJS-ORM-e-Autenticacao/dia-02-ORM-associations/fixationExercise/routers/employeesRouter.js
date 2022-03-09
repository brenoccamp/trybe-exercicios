const express = require('express');
const employeesController = require('../controllers/employeesController');

const router = express.Router();

router.get('/', employeesController.listAllEmployees);
router.get('/:id', employeesController.getEmployeeId);
router.post('/managed-transaction', employeesController.createManagedEmployee);
router.post('/', employeesController.createNewEmployee);

module.exports = router;