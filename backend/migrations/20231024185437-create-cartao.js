'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({schema: 'tarefas', tableName: 'Cartao'}, {
      id_cartao: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_raia: {
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT
      },
      checklist: {
        type: Sequelize.JSON
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_limite: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cartao');
  }
};