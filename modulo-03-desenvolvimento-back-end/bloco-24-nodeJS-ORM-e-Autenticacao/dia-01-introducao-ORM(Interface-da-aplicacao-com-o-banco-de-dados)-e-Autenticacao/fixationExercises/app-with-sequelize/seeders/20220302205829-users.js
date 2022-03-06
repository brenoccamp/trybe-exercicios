'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'Leonardo',
        email: 'leo@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual dos campos 'createdAt' e 'updatedAt'
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        full_name: 'Breno',
        email: 'breno@test.com',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual dos campos 'created_at' e 'updatedAt'
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
