'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: "A erva do diabo",
        author: "Carlos Castaneda",
        page_quantity: 250
      },
      {
        title: "Histórias de Sherlock Holmes",
        author: "Conan Doyle",
        page_quantity: 200
      },
      {
        title: "Meditação Transcendental",
        author: "Robert Hollings",
        page_quantity: 170
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
