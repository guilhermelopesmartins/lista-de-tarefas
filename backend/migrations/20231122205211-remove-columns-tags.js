'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn({schema: 'tarefas', tableName: 'Tags'}, 'createdAt');
    await queryInterface.removeColumn({schema: 'tarefas', tableName: 'Tags'}, 'updatedAt');
  },
  async down(queryInterface, Sequelize) {
    // Inserir novamente as tarefas
  },
};