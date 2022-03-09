'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER, field: 'user_id' },
      firstName: { allowNull: false, type: Sequelize.STRING, field: 'first_name' },
      lastName: { allowNull: false, type: Sequelize.STRING, field: 'last_name' },
      age: { allowNull: false, type: Sequelize.INTEGER },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
