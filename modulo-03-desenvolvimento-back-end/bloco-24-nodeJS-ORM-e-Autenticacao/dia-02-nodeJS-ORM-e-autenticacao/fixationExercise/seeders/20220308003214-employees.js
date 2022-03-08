'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [
      {
        first_name: 'Marcos',
        last_name: 'Zuck',
        age: 49,
      },
      {
        first_name: 'Fred',
        last_name: 'Mercurio',
        age: 19,
      },
      {
        first_name: 'Ayrton',
        last_name: 'keno',
        age: 51,
      },
      {
        first_name: 'Robin',
        last_name: 'Mathias',
        age: 63,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  },
};
