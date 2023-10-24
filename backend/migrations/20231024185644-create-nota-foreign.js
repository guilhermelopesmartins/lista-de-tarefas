'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Nota'}, 'id_secao', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'SecaoNota',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Nota'}, { force: true });
  }
};