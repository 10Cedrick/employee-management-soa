const express = require('express');
const employeeController = require('../controller/employee.controller');
const router = express.Router();

router.get('/:id', employeeController.findOne);
router.get('/', employeeController.findAll);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);
module.exports = router;