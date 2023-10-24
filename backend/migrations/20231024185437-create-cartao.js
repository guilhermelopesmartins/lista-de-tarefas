'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({schema: 'tarefas', tableName: 'Cartao'}, {
      id: {
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
      data_limite: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Cartao'}, { force: true });
  }
};