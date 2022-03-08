const { employee, address } = require('../models');
const listAllEmployees = async (_req, res, next) => {
  try {
    const employees = await employee.findAll({
      include: [{ model: address, as: 'addresses' , attributes: { exclude: ['employeeId'] } }],
    });

    return res.status(200).json(employees);
  } catch (e) {
    next(e);
  }
};

const getEmployeeId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const employeeById = await employee.findOne({
      where: { id },
      include: [{ model: address, as: 'addresses' }],
      // Se não quisermos que algum dado esteja presente no resultado, podemos utilizar a propriedade attributes:
      // include: [{ model: address, as: 'addresses', attributes: { exclude: ['number'] } }],
    });

    if (!employeeById) return res.status(404).json({ message: 'Employee not found' });

    return res.status(200).json(employeeById);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  listAllEmployees,
  getEmployeeId,
}