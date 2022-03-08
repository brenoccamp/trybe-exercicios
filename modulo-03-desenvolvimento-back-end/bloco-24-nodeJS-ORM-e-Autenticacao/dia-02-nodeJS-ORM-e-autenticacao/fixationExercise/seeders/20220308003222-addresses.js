'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', [
      {
        city: 'Belo Horizonte',
        street: 'Rua Flórida',
        number: 1080,
        employee_id: 1,
      },
      {
        city: 'São Paulo',
        street: 'Avenida Paulista',
        number: 1980,
        employee_id: 2,
      },
      {
        city: 'Fortaleza',
        street: 'Rua das Enseadas',
        number: 95,
        employee_id: 3,
      },
      {
        city: 'Belo Horizonte',
        street: 'Rua Andaluzita',
        number: 131,
        employee_id: 4,
      },
      {
        city: 'Curitiba',
        street: 'Rua Fria',
        number: 101,
        employee_id: 4,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
