'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserBooks');
  }
};
