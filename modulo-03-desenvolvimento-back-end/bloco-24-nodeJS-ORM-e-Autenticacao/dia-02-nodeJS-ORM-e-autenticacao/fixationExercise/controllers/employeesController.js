const { employee, address } = require('../models');
const listAllEmployees = async (_req, res, next) => {
  try {
    const employees = await employee.findAll({
      include: { model: address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listAllEmployees,
}