'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Nota'}, 'id_tag', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Tags',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'SecaoNota'}, 'id_usuario', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Cartao'}, 'id_raia', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Raia',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Raia'}, 'id_quadro', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Quadro',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
    await queryInterface.changeColumn({schema: 'tarefas', tableName: 'Quadro'}, 'id_usuario', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Usuario',
            schema: 'tarefas'
          },
          key: 'id'
        },
        allowNull: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Nota'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'SecaoNota'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Usuario'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Tags'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Quadro'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Raia'}, { force: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({schema:'tarefas', tableName:'Cartao'}, { force: true });
  }
};