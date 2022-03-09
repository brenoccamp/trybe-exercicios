const { employee, address } = require('../models');

// Ferramentas necesárias para utilizar Transações Unmanaged:
const Sequelize = require('sequelize');
const config = require('../config/config');

  // Essa linha abaixo será importante para que consigamos isolar nosso teste
  // utilizando a configuração `test` do seu `config.{js | json}`
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);
// As importações acima são necessárias para fazer requisições Atomicas (do tipo Unmanaged Transactions) (ACID), 
// onde ou todas as operações são feitas com sucesso, ou caso ocorra algum erro, nenhum operação é realizada.

const listAllEmployees = async (_req, res, next) => {
  try {
    const employees = await employee.findAll({
      // include: { model: address, as: 'addresses' },
      // Usando a propriedade attributes para excluir um dado do resultado da query (Eager Loading)
      include: [{ model: address, as: 'addresses' , attributes: { exclude: ['number'] } }],
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
      // include: [{ model: address, as: 'addresses' }],
      // Se não quisermos que algum dado esteja presente no resultado, podemos utilizar a propriedade attributes:
      // include: [{ model: address, as: 'addresses', attributes: { exclude: ['number'] } }],
    });

    if (!employeeById) return res.status(404).json({ message: 'Employee not found' });

    // Lazy Loading
    if (req.query.includeAddresses) {
      const addresses = await address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee: employeeById, addresses});
    }

    return res.status(200).json(employeeById);
  } catch (e) {
    next(e);
  }
};

// Exemplo de Unmanaged transactions
const createNewEmployee = async (req, res, next) => {
   // Primeiro iniciamos a transação
  const t = await sequelize.transaction();
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const createdEmployee = await employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await address.create(
      { city, street, number, employeeId: createdEmployee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({
      id: createdEmployee.id, // esse dado será nossa referência para validar a transação
      message: 'Cadastrado com sucesso Unmanaged Transaction'
    });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores
    // com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    next(e);
  }
};

// Abaixo tem um exemplo de Managed transactions:
const createManagedEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (t) => {
      const createdEmployee = await employee.create({
        firstName, lastName, age
      }, { transaction: t });

      await address.create({
        city, street, number, employeeId: createdEmployee.id
      }, { transaction: t });

      return res.status(201).json({
        id: createdEmployee.id, // esse dado será nossa referência para validar a transação
        message: 'Cadastrado com sucesso Managed Transaction'
      });
    });
    // Se chegou até aqui é porque as operações foram concluídas com sucesso,
    // não sendo necessário finalizar a transação manualmente.
    // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    next(e);
  }
};

module.exports = {
  listAllEmployees,
  getEmployeeId,
  createNewEmployee,
  createManagedEmployee,
}