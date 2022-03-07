'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: "A erva do diabo",
        author: "Carlos Castaneda",
        page_quantity: 250,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Histórias de Sherlock Holmes",
        author: "Conan Doyle",
        page_quantity: 200,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: "Meditação Transcendental",
        author: "Robert Hollings",
        page_quantity: 170,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
